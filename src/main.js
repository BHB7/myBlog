import { createApp } from 'vue'
import App from './App.vue'
import './style/base.scss'
import 'element-plus/dist/index.css'
import router from './router'
import pinia from './stores'
import 'element-plus/theme-chalk/dark/css-vars.css'
// svg
import "virtual:svg-icons-register";
const app = createApp(App)
app.use(router)
app.use(pinia)
app.mount('#app')
