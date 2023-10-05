<template>
  <v-container>
    <v-responsive>
      <v-img height="250" src="@/assets/umrah.png" style="margin-bottom: 15px; margin-top: 20px;;"/>
      <v-form v-model="valid">
      <v-row class="d-flex align-center justify-center">
        <v-col
          cols="12"
          md="4"
        >
         
          <v-text-field
            :rules="nameRules"
            :counter="10"
            label="Nomor Undian"
            hide-details
            variant="underlined"
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
         
          <v-text-field
            label="No. KTP"
            hide-details
            variant="underlined"
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="lastname"
            label="Nama Lengkap"
            hide-details
            variant="underlined"
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            hide-details
            variant="underlined"
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            label="No. WhatsApp"
            hide-details
            variant="underlined"
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-file-input label="Foto Nomor Undian" variant="underlined"></v-file-input>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
        <v-btn color="primary" style="width: 100%;">
  Kirim
</v-btn>
        </v-col>

        <v-col
          cols="12"
          md="4"
          style="text-align: center; font-size: 13px; margin-top: -10px;"
        >
        Copyright &copy; 2023 Wincheez Indonesia

        </v-col>

      </v-row>
    </v-form>
    </v-responsive>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      valid: false,
      firstname: '',
      lastname: '',
      nameRules: [
        value => {
          if (value) return true

          return 'Name is required.'
        },
        value => {
          if (value?.length <= 10) return true

          return 'Name must be less than 10 characters.'
        },
      ],
      email: '',
      emailRules: [
        value => {
          if (value) return true

          return 'E-mail is requred.'
        },
        value => {
          if (/.+@.+\..+/.test(value)) return true

          return 'E-mail must be valid.'
        },
      ],
    }),
  }
</script>
