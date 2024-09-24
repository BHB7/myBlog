import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useUserStore = defineStore(
  'user',
  () => {
    // 定义数据
    const userInfo = ref()

    // 定义修改的方法
    const setUserInfo = (obj) => {
      userInfo.value = obj
    }
    return {
      userInfo,
      setUserInfo
    }
  },
  {
    persist: true
  }
)
