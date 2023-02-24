import { createApp } from 'vue'
import { router } from './providers'
import App from './index.vue'

import 'virtual:svg-icons-register'
import 'virtual:fonts.css'

import '@/app/styles/index.scss'

export const app = createApp(App).use(router)
