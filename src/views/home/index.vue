<script setup>
import myArticle from '@/components/myArticle.vue'
import myCarousel from '@/components/myCarousel.vue'
import myMenuBar from '@/components/myMenuBar.vue'
import myList from '@/components/myList.vue'
import { onMounted, ref } from 'vue'
import { getArticleListService, getCategoryService } from '@/api/articles'
import dayjs from 'dayjs' // 引入 dayjs 用于日期格式化
const articles = ref([])
onMounted(() => {
  console.log(articles.value)

  getArticleListService()
    .then((result) => {
      console.log('完成')

      // 获取分类数据
      return getCategoryService().then((result2) => {
        // 使用 map 方法创建一个新的 articles 数组
        articles.value = result.data.articles.map((item) => {
          // 找到对应的分类名称
          const category = result2.data.find((item2) => item2.category_id === item.category_id)
          return {
            ...item, // 保留文章的其他属性
            category_name: category ? category.category_name : null // 如果找不到对应的分类，设置为 null
          }
        })
      })
    })
    .then(() => {
      console.log(articles.value) // 这里确保在 articles.value 更新后打印
    })
    .catch((err) => {
      console.error(err) // 捕获并打印错误
    })
})
// 格式化日期
const formatDate = (date) => {
  return dayjs(date).format('YYYY-MM-DD HH:mm')
}
const imgs = ref([])
</script>
<template>
  <!-- 内容 -->
  <div class="cont-box h-lvh flex">
    <!-- 使用 flex 布局 -->
    <!-- 内容展示 -->
    <div class="cont py-2 md:mt-5 mt-2 flex-1">
      <myArticle
        @click="$router.push(`/articleDetail?aid=${item.article_id}`)"
        v-for="(item, index) in articles"
        :key="index"
        class="mb-4"
        :img="item.cover"
      >
        <template #time>{{ formatDate(item.last_update_time) }}</template>
        <template #tag>
          <div class="px-2 rounded-sm bg-green-500">{{ item.category_name }}</div>
        </template>
        <template #title>{{ item.title }}</template>
        <template #desc> {{ item.desc }}</template>
        <template #cover>
          <img class="h-full w-full" :src="item.cover" alt="" />
        </template>
      </myArticle>
    </div>
    <!-- 菜单栏 -->
    <div class="menu w-64 md:mt-5 mt-2 ml-3 h-lvh lg:block hidden">
      <myMenuBar>
        <template #title><span class="iconfont icon-huatifuhao"></span>最新文章</template>
      </myMenuBar>
    </div>
  </div>
</template>

<style>
.a {
  display: block;
}
</style>
