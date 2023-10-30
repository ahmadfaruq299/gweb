<template>
  <div class="flex-fill">
    <v-list>
      <v-list-item
        v-for="n in 2"
        :key="n"
        :title="`Entity ${ n }`"
        link
      ></v-list-item>
    </v-list>
  </div>
</template>

<script lang="ts" setup>
  import { onMounted } from 'vue'
  import axios from 'axios'

  onMounted(() => {
    // console.log('is: ', user)
  })
</script>
