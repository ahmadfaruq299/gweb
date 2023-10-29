<template>
  <v-container>
    <v-responsive>
      <v-form style="margin-top: 20px;">
      <v-row class="d-flex align-center justify-center">
        <v-col cols="12" md="4">
          <v-text-field
            :counter="10"
            label="Nomor Undian"
            hide-details
            variant="underlined"
            v-model="noUndian"
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="nik"
            label="No. KTP"
            hide-details
            variant="underlined"
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="fullName"
            label="Nama Lengkap"
            hide-details
            variant="underlined"
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            hide-details
            variant="underlined"
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="phoneNumber"
            label="No. WhatsApp"
            hide-details
            variant="underlined"
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="address"
            label="Alamat Lengkap (Sesuai KTP)"
            hide-details
            variant="underlined"
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-select
            v-model="provinceCode"
            label="Provinsi"
            :items="provinces"
            hide-details
            variant="underlined"
            @update:modelValue="onProvinceSelected"
          ></v-select>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-select
            :loading="cityLoading"
            v-model="cityCode"
            label="Kabupaten/Kota"
            :items="cities"
            hide-details
            variant="underlined"
            @update:modelValue="onCitySelected"
          ></v-select>
        </v-col>

        <v-col cols="12" md="4">
          <v-select
            :loading="districtLoading"
            v-model="districtCode"
            label="Kecamatan"
            :items="districs"
            hide-details
            variant="underlined"
            @update:modelValue="onDistrictSelected"
          ></v-select>
        </v-col>

        <v-col cols="12" md="4">
          <v-file-input label="Foto Nomor Undian" variant="underlined"></v-file-input>
        </v-col>

        <v-col cols="12" md="4"><v-btn color="primary" style="width: 100%;" @click="save">Kirim</v-btn></v-col>

        <v-col
          cols="12"
          md="4"
          style="text-align: center; font-size: 13px; margin-top: -10px;"
        >Copyright &copy; 2023 Wincheez Indonesia
        </v-col>
      </v-row>
    </v-form>
    </v-responsive>
  </v-container>
</template>

<script setup lang="ts">

import axios from 'axios'
import { ref } from 'vue'
import { onMounted } from 'vue'

const fullName = ref('')
const nik = ref('')
const districtCode  = ref('')
const districtName = ref('')
const cityCode = ref('')
const cityName = ref('')
const provinceCode = ref('')
const provinceName = ref('')
const email = ref('')
const phoneNumber = ref('')
const address = ref('')
const noUndian = ref('')
let districs = ref([])
let cities = ref([])
let provinces = ref ([])
let cityLoading = ref(false)
let districtLoading = ref(false)

let nameRules: any = [
      // {
      //   value: () => {
      //     if (value) return true

      //     return 'Name is required.'
      //   },
      // },
      // {
      //   value => {
      //     if (value?.length <= 10) return true

      //     return 'Name must be less than 10 characters.'
      //   },
      // }
]

let  emailRules: any [
        // value => {
        //   if (value) return true

        //   return 'E-mail is requred.'
        // },
        // value => {
        //   if (/.+@.+\..+/.test(value)) return true

        //   return 'E-mail must be valid.'
        // },
]

let initProvince: any = {
  text: "Pilih Provinsi",
  value: "00"
}

const save = async () => {
  let data = {
    "nik": nik.value,
    "full_name": fullName.value,
    "undian": noUndian.value,
    "email": email.value,
    "phone_number": phoneNumber.value,
    "main_address": address.value,
    "district_name": districtName.value,
    "district_code": districtCode.value,
    "city_name": cityName.value,
    "city_code": cityCode.value,
    "province_name": provinceName.value,
    "province_code": provinceCode.value
  }
  console.log('customer: ', data)
  // const res = await axios.post('/customers', data)
  // console.log('res', res)
}

const onProvinceSelected = async (code: string) => {
  cities.value = []
  districs.value = []
  cityCode.value = ''
  districtCode.value = ''
  provinceName.value = provinces.value.find((el) => {
    if (el.value == code) { return el }
  }).title
  cityLoading.value=true
  await loadCities(code)
  cityLoading.value=false
}
const onCitySelected = async (code: string) => {
  districs.value = []
  districtCode.value = ''
  districtLoading.value = true
  cityName.value = cities.value.find((el) => {
    if (el.value == code) { return el }
  }).title
  await loadDistrict(code)
  districtLoading.value = false
}
const onDistrictSelected = async (code: string) => {
  districtName.value = districs.value.find((el) => {
    if (el.value == code) { return el }
  }).title
}

const loadProvinces = async () => {
  let response = await axios.get('/area/provinces')
  provinces.value = []
  if (response.data) {
    response.data.forEach(function(v : any) {
      provinces.value.push({
        title: v.name,
        value: v.area_code
      })
    })
  }
}

const loadCities = async (provinceCode : string) => {
  let response = await axios.get(`/area/cities/${provinceCode}`)
  cities.value = []
  if (response.data) {
    response.data.forEach(function(v : any) {
      cities.value.push({
        title: v.name,
        value: v.area_code
      })
    })
  }
}

const loadDistrict = async (cityCode : string) => {
  let response = await axios.get(`/area/districts/${cityCode}`)
  districs.value = []
  if (response.data) {
    response.data.forEach(function(v : any) {
      districs.value.push({
        title: v.name,
        value: v.area_code
      })
    })
  }
}

onMounted(async () => {
  loadProvinces()
})
</script>
