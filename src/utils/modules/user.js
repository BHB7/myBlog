import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStort = defineStore('user', () => {
  const info = ref('测试')

  return {
    info
  }
})
