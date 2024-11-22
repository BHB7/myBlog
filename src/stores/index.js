import { createPinia } from 'pinia'
// 持久化插件
import piniaPluginPersist from 'pinia-plugin-persist'


const pinain = createPinia().use(piniaPluginPersist)

export default pinain


export * from './modules/count'
export * from './modules/article'
export * from './modules/theme'