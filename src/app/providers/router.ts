import { createRouter, createWebHistory } from 'vue-router'
import { routes } from '@/pages/index'

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
