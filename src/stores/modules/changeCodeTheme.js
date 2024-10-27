import { defineStore } from 'pinia'
import { ref } from 'vue'
export const changeCodeThemeStore = defineStore(
  'changeCodeTheme',
  () => {
    //变更代码主题
    const changeCodeTheme = (val) => {
      document.getElementsByTagName('html')[0].dataset.codeTheme = val
    }
    return {
      changeCodeTheme
    }
  },
  {
    persist: true
  }
)
