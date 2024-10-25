<script setup>
import { ref } from 'vue'
import myNav from '@/components/myNav.vue'

defineOptions({
  name: 'LayoutIndex'
})

const backgroundImageUrl = ref(
  'https://cn-sy1.rains3.com/testasd/1728201507813-wallhaven-3le8j3.jpg'
)
</script>

<template>
  <div class="w-20 h-lvh rounded-sm backdrop-blur-xl fixed"></div>
  <div class="body-box" :style="{ backgroundImage: `url(${backgroundImageUrl})` }"></div>
  <!-- 版心图 -->
  <!-- <div class="cont flex h-96 bg-black"></div> -->
  <!-- <myNav></myNav> -->
  <div class="lg:my-2 py-20 m-auto max-w-5xl w-full px-2 lg:px-0">
    <router-view />
  </div>
</template>

<style lang="scss" scoped>
@import '../../style/theme/handle.scss';
body {
  @include background_color('bg-color');
  @include font_color('font-color');
}
.body-box {
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: -1; // 改为 -1 以确保它在内容后面
  top: 0;
  left: 0;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  // background-attachment: fixed; // 固定背景
}
</style>
