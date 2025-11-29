import { createRouter, createWebHistory } from 'vue-router'
import ColorView from '../views/ColorView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ColorView,
    },
  ],
})

export default router
