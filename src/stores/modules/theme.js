import { defineStore } from 'pinia'
import { useDark, useToggle } from '@vueuse/core'
const isDark = useDark()
const toggleDark = useToggle(isDark)

export const useThemeStore = defineStore('theme', {
    state:() => {
        return {
            isDark: isDark.value
        }
    },
    getters:{
        getIsDark(){
            return this.isDark
        }
    },
    actions:{
        setToggleDark(){
            toggleDark()
        }
    },
    persist:{
        enabled: true,
        satisfies:[
            {
                key: 'theme',
                storage: localStorage
            }
        ]
    }

})