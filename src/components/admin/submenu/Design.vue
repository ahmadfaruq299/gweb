<template>
  <div class="flex-fill">
    <v-list>
      <v-list-item
        v-for="n in 10"
        :key="n"
        :title="`Component ${ n }`"
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
