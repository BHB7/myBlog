<script setup>
import myArticle from '@/components/myArticle.vue'
import myCarousel from '@/components/myCarousel.vue'
import mymMenuBar from '@/components/mymMenuBar.vue'
import { ref } from 'vue'
const imgs = [
  {
    url: 'https://meteor.demo.cxory.com/wp-content/uploads/2024/05/619d9b70bb088.jpeg',
    desc: '测试'
  },
  {
    url: 'https://meteor.demo.cxory.com/wp-content/uploads/2024/05/IMG_202405292291-1024x907.webp'
  }
]
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
      <mymMenuBar></mymMenuBar>
    </div>
  </div>
  <!-- 内容 -->
  <div class="cont-box h-lvh flex">
    <!-- 使用 flex 布局 -->
    <!-- 内容展示 -->
    <div class="cont py-2 md:mt-5 mt-2 flex-1">
      <myArticle
        class=""
        :img="'https://meteor.demo.cxory.com/wp-content/uploads/2024/05/619d9b70bb088.jpeg'"
      >
        <template #title>测试</template>
        <template #desc>
          专访腾讯姚建华腾讯 AI Lab 为何瞄准单细胞蛋白质组学 专访腾讯姚建华腾讯 AI Lab
          为何瞄准单细胞蛋白质组学 专访腾讯姚建华腾讯 AI Lab 为何瞄准单细胞蛋白质组学
          专访腾讯姚建华腾讯 AI Lab 为何瞄准单细胞蛋白质组学 专访腾讯姚建华腾讯 AI Lab
          为何瞄准单细胞蛋白质组学 专访腾讯姚建华腾讯 AI Lab 为何瞄准单细胞蛋白质组学</template
        >
        <template #cover>
          <img class="h-full w-full" src="@/assets/test.png" alt="" />
        </template>
      </myArticle>
    </div>
    <!-- 菜单栏 -->
    <div class="menu w-64 md:mt-5 mt-2 ml-3 bg-slate-500 h-lvh lg:block hidden"></div>
  </div>
</template>

<style>
.a {
  display: block;
}
</style>
