import { createPinia } from 'pinia'
import persist from 'pinia-plugin-persistedstate'
// 创建pinia实例
const pinia = createPinia()
// 使用插件
pinia.use(persist)
export * from './counter'
// 导出pinia实例，在main使用
export default pinia
