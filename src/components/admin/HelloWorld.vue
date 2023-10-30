<template>
  <v-container class="fill-height" v-if="!isLoading">
    <v-responsive class="align-start fill-height">

      <div v-if="isAuthenticated">
        <h1>User Profile</h1>
        <pre>
            <code>{{ user }}</code>
        </pre>
        <div><v-btn color="primary" variant="flat" @click="getToken">Get Token</v-btn></div>
        <div><v-btn color="primary" variant="flat" @click="getEmployee">Get Employee</v-btn></div>
      </div>

      <div v-else>
        <v-btn color="primary" variant="flat" @click="handleLogin">Log in</v-btn>
      </div>

      <v-img height="300" src="@/assets/logo.svg" />

      <div class="text-body-2 font-weight-light mb-n1">Welcome to</div>

      <h1 class="text-h2 font-weight-bold">Vuetify</h1>

      <div class="py-14" />

      <v-row class="d-flex align-center justify-center">
        <v-col cols="auto">
          <v-btn
            href="https://vuetifyjs.com/components/all/"
            min-width="164"
            rel="noopener noreferrer"
            target="_blank"
            variant="text"
          >
            <v-icon
              icon="mdi-view-dashboard"
              size="large"
              start
            />

            Components
          </v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn
            color="primary"
            href="https://vuetifyjs.com/introduction/why-vuetify/#feature-guides"
            min-width="228"
            rel="noopener noreferrer"
            size="x-large"
            target="_blank"
            variant="flat"
          >
            <v-icon
              icon="mdi-speedometer"
              size="large"
              start
            />

            Get Started
          </v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn
            href="https://community.vuetifyjs.com/"
            min-width="164"
            rel="noopener noreferrer"
            target="_blank"
            variant="text"
          >
            <v-icon
              icon="mdi-account-group"
              size="large"
              start
            />

            Community
          </v-btn>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script lang="ts" setup>
  import { useAuth0 } from '@auth0/auth0-vue';
  import { onMounted } from 'vue'
  import axios from 'axios'

  const { isLoading, loginWithRedirect, user, isAuthenticated, getAccessTokenSilently } = useAuth0();

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
