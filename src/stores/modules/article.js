import { defineStore } from 'pinia'

export const useArticleStore = defineStore('article',{
    state: () => {
        return {
            articel:  {
                id: '1',
                title: '博客开发记录......持续更新',
                desc: '描述博客的优化史，以及需要优化的事项',
                cover: 'http://img.mrzym.top/FswlMLf30bR2MeXCgorQSkUQ3ky1',
                createTime: '2024-11-13 19:47:44',
                updateTime: '2024-11-13 20:58:55',
                views: '1w',
                likes: '1w',
                tags: ['开心', '小心情', '话痨'],
                cartegory: '日常'
            }
        }
    },
    getters:{
        getArticle(){
           return this.articel
        }
    },
    actions: {
        setArticle(article){
            Object.assign(this.articel, article)
         }
    }
})