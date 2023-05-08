import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Home,
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(),
})

export default router
