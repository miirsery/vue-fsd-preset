import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

import 'virtual:svg-icons-register'
import 'virtual:fonts.css'

import '@/styles/index.scss'

const app = createApp(App)

app.use(router)

app.mount('#app')
