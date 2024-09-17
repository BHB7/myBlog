import { createPinia } from 'pinia'
import piniaPlugin from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPlugin)
export default pinia
// import { useUserStore } from './modules/user'
// import { useCounterStore } from './modules/counter'
// export {
//     useUserStore,
//     useCounterStore

// }

// 将模块下的所有子模块全部导入导出
export * from './modules/user'
