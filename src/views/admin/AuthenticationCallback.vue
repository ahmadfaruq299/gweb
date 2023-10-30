<template>
  <div class="flex-fill">
     <h1>Welcome to super apps !!!</h1>
  </div>
</template>

<script lang="ts" setup>
  import { useAuth0 } from '@auth0/auth0-vue';
  import { onMounted } from 'vue'
  import axios from 'axios'
  import { useRouter } from 'vue-router'

  const { user, getAccessTokenSilently } = useAuth0();
  const router = useRouter()

  const saveTokenToLocalStorage = async () => {
    const token = await getAccessTokenSilently()
    console.log(token)
    localStorage.setItem('token', token)
  }

  onMounted(async () => {
    // saveTokenToLocalStorage()
    // let data = {
    //   accountName: user.value?.nickname,
    //   fullName: user.value?.name,
    //   emailVerified: user.value?.email_verified,
    //   email: user.value?.email,
    //   avatar: user.value?.picture,
    //   keyIdentity: user.value?.sub,
    // }
    // const account = await axios.post('/my/account', data)
    // console.log(account)
    router.push('/dashboard')
  })
</script>
