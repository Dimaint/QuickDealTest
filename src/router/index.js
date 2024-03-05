// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default.vue'),
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('@/pages/index.vue'),
      },
      {
        path: '/task-list',
        name: 'TaskList',
        component: () => import('@/pages/TaskList.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router