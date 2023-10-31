// Composables
import { createRouter, createWebHistory } from 'vue-router'
import { authGuard } from "@auth0/auth0-vue";

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      {
        path: 'lottery',
        name: 'Lottery',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Lottery.vue'),
      },
    ],
  },
  {
    path: '/under',
    component: () => import('@/layouts/under/Default.vue'),
    children: [
      {
        path: '',
        name: 'Under',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Under.vue'),
      },
    ],
  },
  {
    path: '/admin',
    component: () => import('@/layouts/admin/Default.vue'),
    children: [
      {
        path: '',
        name: 'Callback',
        component: () => import(/* webpackChunkName: "home" */ '@/views/admin/AuthenticationCallback.vue'),
        beforeEnter: authGuard,
      },
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import(/* webpackChunkName: "home" */ '@/views/admin/Home.vue'),
        beforeEnter: authGuard,
      },
      {
        path: '/design',
        name: 'Design',
        component: () => import('@/views/admin/Design.vue'),
        beforeEnter: authGuard,
      },
      {
        path: '/resources',
        name: 'Resources',
        component: () => import('@/views/admin/Resources.vue'),
        beforeEnter: authGuard,
      },
      {
        path: '/settings',
        name: 'Settings',
        component: () => import('@/views/admin/Settings.vue'),
        beforeEnter: authGuard,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
