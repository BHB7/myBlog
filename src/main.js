import './assets/main.css'
import '@/assets/font/iconfont.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import pinia from '@/utils/index'
const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')
