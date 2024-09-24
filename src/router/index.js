import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: () => import('@/views/layout/index.vue'),
      redirect: '/home',
      children: [
        {
          path: 'test',
          component: () => import('@/views/test/index.vue')
        },
        {
          path: 'home',
          component: () => import('@/views/home/index.vue')
        }
      ]
    },
    {
      path: '/root',
      name: 'root',
      component: () => import('@/views/root/root.vue')
    }
  ]
})

export default router
