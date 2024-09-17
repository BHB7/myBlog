<script setup>
import myIconBtn from '@/components/myIconBtn.vue'
</script>
<template>
  <nav class="flex lg:my-5 h-16 justify-center items-center">
    <div class="cont max-w-5xl w-full h-full flex justify-between items-center">
      <div class="logo font-black flex flex-2 text-3xl justify-center items-center h-full w-24">
        <span class="">7</span>
        <span class="text-orange-600">z</span>
      </div>
      <ul class="flex items-center">
        <!-- 链接 -->
        <div class="lg:flex justify-between hidden lg">
          <li class="ml-5">
            <router-link class="px-4 py-1" to="/home">首页</router-link>
          </li>
          <li class="ml-5 mr-20">
            <router-link class="px-4 py-1" to="/test">回顾...</router-link>
          </li>
        </div>
        <!--  -->
        <div class="user flex mr-5">
          <li class="ml-5">
            <myIconBtn :icon="'search'" :size="18"></myIconBtn>
          </li>
          <li class="ml-5 lg:hidden">
            <myIconBtn :icon="'menu'" :size="18"></myIconBtn>
          </li>
          <li class="ml-5">
            <myIconBtn :icon="'user'" :size="18"></myIconBtn>
          </li>
        </div>
      </ul>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
ul {
  li {
    transition: all 0.2s ease-in-out;
    &:hover {
      color: #f3351c !important;
    }
  }
}
.router-link-exact-active {
  font-weight: 800;
  color: #fff;
  border-radius: 12px;
  backdrop-filter: blur(20px);
  background: linear-gradient(35deg, #e3eb4c, #f3351c);
}
</style>
