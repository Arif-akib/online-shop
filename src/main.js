import { createApp } from 'vue'
import axios from 'axios'

import './style.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

window.axios = axios;
const pinia = createPinia()
const app=createApp(App)
app.use(router)
app.use(pinia)
app.mount('#app')
