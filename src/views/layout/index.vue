<script setup>
import { ref } from 'vue'
import myNav from '@/components/myNav.vue'

defineOptions({
  name: 'LayoutIndex'
})

const backgroundImageUrl = ref(
  'https://blog-1312814407.cos.ap-nanjing.myqcloud.com/mmexport1727600601783.jpg'
)
</script>

<template>
  <div class="body-box" :style="{ backgroundImage: `url(${backgroundImageUrl})` }"></div>
  <myNav></myNav>
  <div class="lg:my-5 m-auto max-w-5xl w-full px-2 lg:px-0">
    <router-view />
  </div>
</template>

<style lang="scss" scoped>
.body-box {
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: -1; // 改为 -1 以确保它在内容后面
  top: 0;
  left: 0;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed; // 固定背景
}
</style>
