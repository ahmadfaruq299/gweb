<template>
  <div class="flex-fill">
     <v-card rounded="0" color="default">
        <v-card-title class="text-h6 text-md-h5 text-lg-h4">Home</v-card-title>
        <v-card-subtitle>Dashboard</v-card-subtitle>
        <v-card-text class="px-3">
          <v-data-table
            v-model:items-per-page="itemsPerPage"
            :headers="headers"
            :items="desserts"
            item-value="name"
            class="elevation-0"
          ></v-data-table>
        </v-card-text>
        <v-card-actions class="justify-end">
          <v-btn
            size="large"
            class="px-10"
            variant="elevated"
            color="primary">
            Button
          </v-btn>
        </v-card-actions>
     </v-card>
  </div>
</template>

<script lang="ts" setup>
  import { useAuth0 } from '@auth0/auth0-vue';
  import { onMounted } from 'vue'
  import axios from 'axios'

  const { isLoading, loginWithRedirect, user, isAuthenticated, getAccessTokenSilently } = useAuth0();

  let itemsPerPage: number = 5
  let headers: any = [
          {
            title: 'Dessert (100g serving)',
            align: 'start',
            sortable: false,
            key: 'name',
          },
          { title: 'Calories', align: 'end', key: 'calories' },
          { title: 'Fat (g)', align: 'end', key: 'fat' },
          { title: 'Carbs (g)', align: 'end', key: 'carbs' },
          { title: 'Protein (g)', align: 'end', key: 'protein' },
          { title: 'Iron (%)', align: 'end', key: 'iron' },
        ]
  let desserts: any = [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1',
          }
        ]

  const handleLogin = () => {
    loginWithRedirect();
  }

  const getToken = async () => {
    const token = await getAccessTokenSilently()
    console.log(token)
    localStorage.setItem('token', token)
  }

  const getEmployee = async () => {
    const employees = await axios.get('/api/zulvani/simple-project/guest-book-apps/employee')
    console.log(employees)
  }

  onMounted(() => {
    // console.log('is: ', user)
  })
</script>
