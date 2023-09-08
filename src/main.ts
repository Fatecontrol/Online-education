// 引入公共样式
import './styles/main.scss'
// 引入vant样式
import 'vant/lib/index.css'

import { createApp } from 'vue'

import pinia from './stores'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')
