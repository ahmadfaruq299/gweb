<template>
  <div class="flex-fill">
     <v-card rounded="0" color="default">
        <v-card-title class="text-h6 text-md-h5 text-lg-h4">Customer</v-card-title>
        <v-card-text class="px-3">
          <v-row>
            <v-col cols="12">
              <v-data-table
                v-model:items-per-page="itemsPerPage"
                :items-length="totalItems"
                :items="items"
                :headers="headers"
                item-value="name"
                class="elevation-1"
                @update:options="loadData"
              ></v-data-table>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions class="justify-end">

        </v-card-actions>
     </v-card>
  </div>
</template>

<script lang="ts" setup>
  import { onMounted } from 'vue'
  import axios from 'axios'
  import {
    VDataTable,
    VDataTableServer,
    VDataTableVirtual,
  } from "vuetify/labs/VDataTable"
  import { ref } from 'vue'

  let items = ref([])
  let totalItems = ref(0)

  let itemsPerPage: number = 5
  let headers: any = [
      { title: 'NIK', align: 'start', sortable: false, key: 'nik',},
      { title: 'Nama Lengkap',  align: 'start',  key: 'full_name',},
      { title: 'No Undian',  align: 'start',  key: 'undian',},
      { title: 'Email',  align: 'start',  key: 'email',},
      { title: 'WA / No HP',  align: 'start',  key: 'phone_number',},
      { title: 'Alamat',  align: 'start',  key: 'main_address',},
      { title: 'Provinsi',  align: 'start',  key: 'province_name',},
      { title: 'Kota',  align: 'start',  key: 'city_name',},
      { title: 'Kabupaten',  align: 'start',  key: 'district_name',},
      { title: 'Foto Undian',  align: 'start', },
  ]

  const loadData = async () => {
    let res  = await axios.get('/customers')
    items.value = res.data.data
  }

  onMounted(() => {
    // console.log('is: ', user)
  })
</script>
