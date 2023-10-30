<template>
  <div class="flex-fill">
     <v-card rounded="0" color="default">
        <v-card-title class="text-h6 text-md-h5 text-lg-h4">Settings</v-card-title>
        <v-card-text class="px-3">

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
  import { onMounted } from 'vue'
  import axios from 'axios'



  onMounted(() => {
    // console.log('is: ', user)
  })
</script>
