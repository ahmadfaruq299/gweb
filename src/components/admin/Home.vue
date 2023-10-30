<template>
  <div class="flex-fill">

     <v-card rounded="0" color="default">
        <v-card-title class="text-h6 text-md-h5 text-lg-h4">Home</v-card-title>
        <v-card-subtitle>Dashboard</v-card-subtitle>
        <v-card-text class="px-3">

          <div v-if="myProjects?.data?.projects?.length > 0">
            <v-data-table
              v-model:items-per-page="itemsPerPage"
              :headers="headers"
              :items="desserts"
              item-value="name"
              class="elevation-0"
            ></v-data-table>
          </div>

          <div v-else>
            <v-row>
              <v-col cols="12">
                <h1>{{ dialog }}</h1>
                <h1>You don't have any projects</h1>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-btn
                  @click="dialog = true"
                  size="large"
                  class="px-10"
                  variant="elevated"
                  color="primary">
                  Create One
                </v-btn>
              </v-col>
            </v-row>



          </div>
        </v-card-text>

        <v-card-actions class="justify-end">
          <v-btn
            @click="acc"
            size="large"
            class="px-10"
            variant="elevated"
            color="primary">
            Button
          </v-btn>

          <v-btn
            @click="getEmployee"
            size="large"
            class="px-10"
            variant="elevated"
            color="primary">
            Em
          </v-btn>
        </v-card-actions>
     </v-card>

     <div>
     <v-dialog
      v-model="dialog"
      width="auto"
    >
      <v-card>
        <v-card-title class="text-h5">
          Use Google's location service?
        </v-card-title>
        <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green-darken-1"
            variant="text"
            @click="dialog = false"
          >
            Disagree
          </v-btn>
          <v-btn
            color="green-darken-1"
            variant="text"
            @click="closeDialogCreateProject"
          >
            Agree
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { useAuth0 } from '@auth0/auth0-vue';
  import { onMounted, ref } from 'vue'
  import axios from 'axios'

  let myProjects: any
  let dialog = ref(false)

  const { isLoading, loginWithRedirect, user, isAuthenticated, getAccessTokenSilently } = useAuth0()

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

  const openDialogCreateProject = () => {
    dialog.value = true
  }
  const closeDialogCreateProject = () => {
    dialog.value = false
  }

  const getEmployee = async () => {
    const employees = await axios.get('/api/zulvani/simple-project/guest-book-apps/employee')
    console.log(employees)

  }

  const acc = async () => {
    // const employees = await axios.get('/api/zulvani/simple-project/guest-book-apps/employee')
    // console.log(employees)

    // console.log('is: ', user.value?.name)
    // let data = {
    //   accountName: user.value?.nickname,
    //   fullName: user.value?.name,
    //   emailVerified: user.value?.email_verified,
    //   email: user.value?.email,
    //   avatar: user.value?.picture,
    //   keyIdentity: user.value?.sub,
    // }
    // const account = await axios.post('/platform/account', data)
    // console.log(account)
  }

  onMounted(async () => {
    const response = await axios.get('/my/project')
    myProjects = response.data
    console.log(myProjects)
  })
</script>
