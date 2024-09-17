<script setup>
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
  <div class="cont flex xl:flex-row flex-col h-96">
    <div class="l lg:basis-3/4 basis-full bg-white">
      <!-- 轮播图组件 -->
      <myCarousel :imgs="imgs" :time="6500"></myCarousel>
    </div>
    <!-- 右边菜单栏 -->
    <!-- 移动设备　居下 -->
    <div class="r lg: basis-1/3 xl:mt-0 mt-5">
      <!-- 菜单栏组件 -->
      <mymMenuBar></mymMenuBar>
    </div>
  </div>
</template>
