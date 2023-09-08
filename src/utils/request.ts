import axios from 'axios'
import type { InternalAxiosRequestConfig, AxiosResponse, Method } from 'axios'
import { showToast } from 'vant'
import { useRouter } from 'vue-router'
const router = useRouter()
import { useUserStore } from '@/stores/user'
const instance = axios.create({
  baseURL: '/dev-api',
  timeout: 5000
})
instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const store = useUserStore()
    if (store.user?.token) {
      config.headers.Authorization = 'Bearer ' + store.user.token
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
instance.interceptors.response.use(
  (res: AxiosResponse) => {
    if (res.data.code !== 10000) {
      showToast(res.data?.message || '响应失败')
      return Promise.reject(res.data)
    }
    return res.data
  },
  (error) => {
    // token 过期处理
    if (error.response.status === 401) {
      // 清空本地用户信息
      const store = useUserStore()
      store.delUser()
      // 回到登录页
      router.push('/login')
    }
    return Promise.reject(error)
  }
)

const request = <T>(url: string, method: Method = 'get', submitData?: object) => {
  return instance<T, AxiosResponse<T>>({
    url,
    method,
    [method.toLowerCase() === 'get' ? 'params' : 'data']: submitData
  })
}

export default request
