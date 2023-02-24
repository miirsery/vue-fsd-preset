import Routing from './index.vue'
import type { RouteRecordRaw } from 'vue-router'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'BaseLayout',
    component: () => import('@/app/components/layouts/BaseLayout/BaseLayout.vue'),
    children: [
      {
        path: '',
        name: 'HomePage',
        component: () => import('@/pages/HomePage/HomePage.vue'),
      },
    ],
  },
]

export { Routing }
