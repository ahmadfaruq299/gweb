<template>
  <v-container>
    <v-responsive>
      <div v-if="saved" style="margin-top: 200px">
        REGISTER BERHASIL
      </div>
      <div v-else>
        <v-row>
          <v-col cols="12" style="text-align: center">
            <h3 style="color: #cf2e2e">PESERTA UNDIAN Wincheez</h3>
          </v-col>
        </v-row>
        <v-form v-model="form" style="margin-top: 0px;" @submit.prevent="onSubmit">
          <v-row class="d-flex align-center justify-center">
            <v-col cols="12" md="4">
              <v-text-field
                  class="text-field"
                :counter="8"
                :rules="[noUndianRules]"
                label="Nomor Undian"
                hide-details
                variant="outlined"
                v-model="noUndian"
                placeholder="Isi 8 Digit No Undian"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                v-model="nik"
                :rules="[nikRules]"
                label="No. KTP"
                hide-details
                variant="outlined"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                v-model="fullName"
                :rules="[nameRules]"
                label="Nama Lengkap"
                hide-details
                variant="outlined"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                v-model="email"
                :rules="[emailRules]"
                label="E-mail"
                hide-details
                variant="outlined"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                v-model="phoneNumber"
                :rules="[phoneRules]"
                label="No. WhatsApp"
                hide-details
                variant="outlined"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                v-model="address"
                :rules="[addressRules]"
                label="Alamat Lengkap (Sesuai KTP)"
                hide-details
                variant="outlined"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-select
                v-model="provinceCode"
                :rules="[required]"
                label="Provinsi"
                :items="provinces"
                hide-details
                variant="outlined"
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
                :rules="[required]"
                label="Kabupaten/Kota"
                :items="cities"
                hide-details
                variant="outlined"
                @update:modelValue="onCitySelected"
              ></v-select>
            </v-col>

            <v-col cols="12" md="4">
              <v-select
                :loading="districtLoading"
                v-model="districtCode"
                :rules="[required]"
                label="Kecamatan"
                :items="districs"
                hide-details
                variant="outlined"
                @update:modelValue="onDistrictSelected"
              ></v-select>
            </v-col>

            <v-col cols="12" md="4">
              <v-file-input label="Foto Nomor Undian" variant="underlined"></v-file-input>
            </v-col>

            <v-col cols="12" md="4"><v-btn color="primary" style="width: 100%;" size="large" type="submit" @click="save">DAFTAR!</v-btn></v-col>

            <v-col
              cols="12"
              md="4"
              style="text-align: center; font-size: 13px; margin-top: -10px;"
            >Copyright &copy; 2023 Wincheez Indonesia
            </v-col>

            <v-col cols="12">
            </v-col>
          </v-row>
        </v-form>
      </div>

      <v-snackbar
        v-model="snackbar"
        multi-line
        :color="messageColor"
        position="sticky"
        location="top"
        variant="flat"
      >
        {{ message }}

        <template v-slot:actions>
          <v-btn
            color="white"
            variant="text"
            @click="snackbar = false"
          >
            Tutup
          </v-btn>
        </template>
      </v-snackbar>
    </v-responsive>
  </v-container>
</template>

<style scoped>
  .label {
    color: #0d47a1;
  }

  input {
    color: #0d47a1;
    border: 3px #ccc solid;
  }

</style>

<script setup lang="ts">

import axios from 'axios'
import { ref } from 'vue'
import { onMounted } from 'vue'

const fullName = ref('')
const nik = ref('')
const districtCode  = ref()
const districtName = ref('')
const cityCode = ref()
const cityName = ref('')
const provinceCode = ref()
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
let saved = ref(false)
let snackbar = ref(false)
let message = ref('')
let messageColor = ref('info')
let form = ref(false)

//@ts-ignore
const required = (value) => {
  if (!value) return false
  return true
}
//@ts-ignore
const noUndianRules = (value) => {
  if (!value || (value && value.length != 8)) return 'No Undian 8 digit'
  return true
}
//@ts-ignore
const nikRules = (value) => {
  if (!value || (value && value.length != 16)) return 'Isi 16 digit No KTP'
  return true
}

//@ts-ignore
const nameRules = (value) => {
  if (!value || (value && value.length < 2)) return 'Isi Nama lengkap'
  return true
}

//@ts-ignore
const emailRules = (value) => {
  if (!value || !(/.+@.+\..+/.test(value))) return 'Email tidak valid'
  return true
}

//@ts-ignore
const phoneRules = (value) => {
  if (!value || (value.length < 8)) return 'No WA tidak valid'
  return true
}
//@ts-ignore
const addressRules = (value) => {
  if (!value || (value.length < 10)) return 'No WA tidak valid'
  return true
}

const onSubmit = () => {
  if (!form.value) return
}

const save = async () => {
  if (!form.value) {
    return
  }

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
  // console.log('customer: ', form.value)
  const res = await axios.post('/customers', data)
  if (res.status == 200) {
    saved.value = true
    reset()
    // snackbar.value = true
    // message.value = 'Data undian berhasil disimpan. Nantikan informasi selanjutnya!'
  } else  {
    snackbar.value = true
    messageColor.value = 'error'
    message.value = 'Mohon maaf telah terjadi kesalahan!'
  }
}

const reset = () => {
  noUndian.value = ''
  nik.value = ''
  fullName.value = ''
  email.value = ''
  phoneNumber.value = ''
  address.value = ''
  districtName.value = ''
  districtCode.value = ''
  cityName.value = ''
  cityCode.value = ''
  provinceName.value = ''
  provinceCode.value = ''
  cities.value = []
  districs.value = []
}

//@ts-ignore
const onProvinceSelected = async (code) => {
  cities.value = []
  districs.value = []
  cityCode.value = ''
  districtCode.value = ''
  //@ts-ignore
  provinceName.value = provinces.value.find((el) => {
    //@ts-ignore
    if (el.value == code) { return el }
  }).title
  cityLoading.value=true
  await loadCities(code)
  cityLoading.value=false
}
//@ts-ignore
const onCitySelected = async (code) => {
  districs.value = []
  districtCode.value = ''
  districtLoading.value = true
  //@ts-ignore
  cityName.value = cities.value.find((el) => {
    //@ts-ignore
    if (el.value == code) { return el }
  }).title
  await loadDistrict(code)
  districtLoading.value = false
}
//@ts-ignore
const onDistrictSelected = async (code) => {
  //@ts-ignore
  districtName.value = districs.value.find((el) => {
    //@ts-ignore
    if (el.value == code) { return el }
  }).title
}

const loadProvinces = async () => {
  let response = await axios.get('/area/provinces')
  provinces.value = []
  if (response.data) {
    response.data.forEach(function(v : any) {
      //@ts-ignore
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
      //@ts-ignore
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
      //@ts-ignore
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
