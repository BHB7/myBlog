<script setup>
import myArticle from '@/components/myArticle.vue'
import myCarousel from '@/components/myCarousel.vue'
import myMenuBar from '@/components/myMenuBar.vue'
import myList from '@/components/myList.vue'
import { onMounted, ref } from 'vue'
import { getArticleList } from '@/api/articles'

const articles = ref([])
onMounted(() => {
  console.log(articles.value)
  getArticleList()
    .then((result) => {
      console.log('完成')
      articles.value = result.data
      console.log(articles.value)
    })
    .catch((err) => {})
})
const imgs = ref([])
</script>
<template>
  <!-- 版心 -->
  <div class="cont flex xl:flex-row xl:mb-4 flex-col h-96 md:mb-80 mb-64">
    <div class="l xl:basis-3/4 lg:basis-3/4 basis-full bg-white">
      <!-- 轮播图组件 -->
      <myCarousel :imgs="imgs" :time="6500"></myCarousel>
    </div>
    <!-- 右边菜单栏 -->
    <!-- 移动设备居下，xl时并列显示 -->
    <div class="r xl:basis-1/4 lg:basis-1/3 basis-full xl:mt-0 xl:ml-4 mt-5">
      <!-- 菜单栏组件 -->
      <myMenuBar>
        <myList></myList>
      </myMenuBar>
    </div>
  </div>
  <!-- 内容 -->
  <div class="cont-box h-lvh flex">
    <!-- 使用 flex 布局 -->
    <!-- 内容展示 -->
    <div class="cont py-2 md:mt-5 mt-2 flex-1">
      <myArticle v-for="(item, index) in articles" :key="index" class="mb-4" :img="item.cover">
        <template #time>2024-9-20</template>
        <template #tag> <div class="px-2 rounded-sm bg-green-500">测试</div> </template>
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
        哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
      </myMenuBar>
    </div>
  </div>
</template>

<style>
.a {
  display: block;
}
</style>
