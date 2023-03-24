import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'public',
      component: () => import('@/views/pubilc.vue')
    },
    {
      path: '/babylon',
      name: 'babylon',
      component: () => import('@/views/babylonIndex.vue')
    },
  ]
})

export default router
