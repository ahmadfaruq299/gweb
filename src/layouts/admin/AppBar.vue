<template>
  <v-app-bar
    :elevation="2"
  >
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
    <v-toolbar-title>
      <v-img src="@/assets/wincheez.png" width="80" style="margin-left: 0px"/>
    </v-toolbar-title>

<!--    <v-responsive max-width="300">-->
<!--      <v-select-->
<!--        placeholder="Project"-->
<!--        :items="['Point of Sales', 'CRM']"-->
<!--        density="compact"-->
<!--        variant="underlined"-->
<!--        style="margin-right: 20px;"-->
<!--      ></v-select>-->
<!--    </v-responsive>-->

<!--    <v-responsive max-width="300">-->
<!--      <v-select-->
<!--        placeholder="Application"-->
<!--        :items="['Point of Sales', 'CRM']"-->
<!--        density="compact"-->
<!--        variant="underlined"-->
<!--        style="margin-right: 20px;"-->
<!--      ></v-select>-->
<!--    </v-responsive>-->

<!--    <v-responsive max-width="300">-->
<!--      <v-btn-->
<!--        prepend-icon="mdi-plus"-->
<!--        class="px-5"-->
<!--        variant="elevated"-->
<!--        color="primary">-->
<!--        Create-->
<!--      </v-btn>-->
<!--    </v-responsive>-->


    <!-- <v-responsive max-width="400">
        <v-text-field
          density="compact"
          flat
          hide-details
          rounded="pill"
          variant="solo-filled"
        ></v-text-field>
    </v-responsive> -->
  <v-spacer></v-spacer>

  <template v-slot:append>
    <!-- <v-btn icon="mdi-heart"></v-btn> -->
    <!-- <v-btn icon="mdi-magnify"></v-btn> -->
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn icon="mdi-dots-vertical" v-bind="props">
          <v-avatar>
            <v-img
              src="https://randomuser.me/api/portraits/women/85.jpg"
            >

            </v-img>
          </v-avatar>
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
        >
            <template v-slot:append>
              <v-btn variant="plain" :prepend-icon="item.icon"  @click="item.action">
                {{ item.title }}
              </v-btn>
            </template>
        </v-list-item>
      </v-list>
    </v-menu>
  </template>

  </v-app-bar>
</template>

<script lang="ts" setup>
import { useAuth0 } from '@auth0/auth0-vue'

const { logout, } = useAuth0();
const handleLogout = () => {
  logout({ logoutParams: { returnTo: window.location.origin } });
}

let items: any = [
        { title: 'Profile', 'icon': 'mdi-account', 'action': handleLogout },
        { title: 'Logout', 'icon': 'mdi-logout', 'action': handleLogout },
      ]
</script>
