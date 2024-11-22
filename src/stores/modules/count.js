import { defineStore } from 'pinia'

export const useCountStore = defineStore('count',{
    state: () => {
        return {
            count: 0
        }
    },
    getters: {
        getCount(){
            return this.count
        }
    },
    actions: {
        setCount(){
            this.count++
        }
    },
    persist: {
        enabled: true, // 开启数据持久化
        strategies:[
            {
                key: 'c', // 保存的key
                storage: localStorage
            }
        ]
    }
})