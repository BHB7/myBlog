import '@/style/main.css'
import '@/assets/font/iconfont.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import pinia from './stores'
// highlight.js代码高亮插件
// 引入 highlight.js 样式

// import 'highlight.js/styles/xcode.css'

import Highlight from '@/directive/highlight' // 这里是你项目highlight.js所在路径
const app = createApp(App)

app.use(Highlight) // 使用代码高亮插件
app.use(pinia) // 使用 Pinia 状态管理
app.use(router) // 使用 Vue Router

// 将应用挂载到 DOM 中的 #app 元素上
app.mount('#app')
