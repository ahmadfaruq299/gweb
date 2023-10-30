<template>
  <LeftNavigation/>
  <v-main>
    <v-container fluid>
      <v-responsive>
        <router-view />
      </v-responsive>
    </v-container>
  </v-main>
  <!-- <RightNavigation/> -->
  <Footer/>
</template>

<script lang="ts" setup>
  import LeftNavigation from './LeftNavigation.vue'
  // import RightNavigation from './RightNavigation.vue'
  import Footer from './Footer.vue'

  //
</script>
