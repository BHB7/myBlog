import './assets/main.css'
import '@/assets/font/iconfont.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Bmob from 'hydrogen-js-sdk'
import pinia from './stores'
// 初始化 SDK (版本 2.0.0 以下保留之前的初始化方法)
Bmob.initialize('abccda521461eb31', '7zop0010921')

// 创建 Vue 实例
const app = createApp(App)

// 挂载 Bmob 到全局使用 (Vue 3 中使用 config.globalProperties)
app.config.globalProperties.$Bmob = Bmob

app.use(pinia)
app.use(router)

// 挂载到 #app 元素
app.mount('#app')
