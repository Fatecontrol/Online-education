import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useUserStore = defineStore('ed-user', () => {
  // 用户信息
  const user = ref<any>({})
  // 设置用户 登陆后使用
  const setUser = (user: any) => {
    user.value = user
  }
  // 清空用户
  const delUser = () => {
    user.value = undefined
  }
  return {
    user,
    setUser,
    delUser
  }
})
