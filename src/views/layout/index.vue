<script setup>
import myNav from '@/components/myNav.vue'

defineOptions({
  name: 'LayoutIndex'
})
</script>
<template>
  <div class="body-box"></div>
  <myNav></myNav>
  <div class="lg:my-5 w m-auto max-w-5xl w-full px-2 lg:px-0">
    <router-view />
  </div>
</template>

<style lang="scss" scoped>
.body-box {
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: -100;
  top: 0;
  left: 0;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(https://blog-1312814407.cos.ap-nanjing.myqcloud.com/mmexport1727600601783.jpg);
}
</style>
