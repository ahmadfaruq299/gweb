<template>
    <v-navigation-drawer
      expand-on-hover
      rail
    >
      <v-list density="compact" nav>
        <v-list-item prepend-icon="mdi-view-dashboard-outline" title="Dashboard" value="home" :to="'/dashboard'"></v-list-item>
        <v-list-item prepend-icon="mdi-chart-line" title="Laporan" value="report" :to="'/report'"></v-list-item>
        <v-list-item prepend-icon="mdi-shape-plus" title="Manajemen Undian" value="design" :to="'/design'"></v-list-item>
        <v-list-item prepend-icon="mdi-database-settings-outline" title="Customer" value="resources" :to="'/resources'"></v-list-item>
        <v-list-item prepend-icon="mdi-cog-outline" title="Settings" value="settings" :to="'/settings'"></v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list>
        <v-list-item prepend-icon="mdi-logout" title="Logout" value="logout" @click="handleLogout"></v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>

<script lang="ts" setup>
import { useAuth0 } from '@auth0/auth0-vue'
import { useRoute, useRouter } from 'vue-router'
import { watch, ref, onMounted } from 'vue'

const { logout } = useAuth0();
const route = useRoute()
const router = useRouter()
let pageName: string | undefined
let a: number = 0


watch(route, (to, from) => {
  a++
  pageName = to.name?.toString()
}, {immediate: true})

const handleLogout = () => {
  logout({ logoutParams: { returnTo: window.location.origin } });
}

onMounted(async () => {
  a = await a + 1
});
</script>
