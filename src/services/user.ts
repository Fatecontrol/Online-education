import request from '@/utils/request'
import type { user } from '@/types/user'
// 登录
export const loginApi = (user: user) => {
  return request('mobile/login', 'POST', user)
}
