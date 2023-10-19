<template>
  <v-container  style="margin-top: 30px; ">
    <v-responsive>
          <v-row style="margin-top: 50px;">
            <v-col cols="12" style="text-align: center;">
              <span style="font-weight: bold;">Pemenang Nomor Undian:</span>
            </v-col>
          </v-row>
          <v-row style="">
            <v-col cols="2"></v-col>
            <v-col v-for="n in selecteds" cols="1" style=" text-align: center;">
              <div style="padding: 5px; margin: -7px;; border: 1px solid #ccc; height: 250px;">
                <span style="font-size: 170px; font-weight: bold; color: #f2cc2a;">{{ n }}</span>
              </div>
            </v-col>
            <v-col cols="2"></v-col>
          </v-row>

          <v-row style="margin-top: 10px;">
            <v-col cols="12" style="text-align: center;">
              <v-btn color="primary" size="x-large" rounded="xl">
                Putar
              </v-btn>
            </v-col>
          </v-row>

          <v-row style="margin-top: 10px;">
            <v-col cols="12" style="text-align: center;">
              <h1>HADIAH: UMRAH BERSAMA WINCheez</h1>
            </v-col>
          </v-row>

          <v-img height="500" src="@/assets/umrah.png" style="margin-bottom: 15px; margin-top: 20px;;"/>

          <v-row style="margin-top: 20px;">
            <v-col
          cols="12"
          style="text-align: center; font-size: 13px; margin-top: -10px;"
        >
        <!-- Copyright &copy; 2023 Wincheez Indonesia -->

        </v-col>
          </v-row>


    </v-responsive>
  </v-container>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  let selecteds =  ref(["Y", "A", "1", "2", "3", "3", "1", "Z"])
</script>