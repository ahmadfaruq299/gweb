/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'
import axios from 'axios'
import { createAuth0 } from '@auth0/auth0-vue'

const app = createApp(App)

axios.defaults.baseURL = 'http://localhost:8081'
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')
axios.defaults.headers.common['Content-Type'] = 'application/json'
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'

registerPlugins(app)
app.use(
  createAuth0({
    domain: import.meta.env.VITE_AUTH0_DOMAIN,
    clientId: import.meta.env.VITE_AUTH0_CLIENT_ID,
    authorizationParams: {
      redirect_uri: import.meta.env.VITE_AUTH0_CALLBACK_URL,
      audience: import.meta.env.VITE_AUTH0_API_IDENTIFIER
    }
  })
);
app.mount('#app')
