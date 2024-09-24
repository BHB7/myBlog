<script setup>
import myIconBtn from '@/components/myIconBtn.vue'
import myRowTab from '@/components/myRowTab.vue'
import { addArticleU } from '@/api/articles'

addArticleU({
  uid: 'root',
  title: '测试',
  tag: '测试',
  imgUrl: 'https://koxiuqiu.cn/img/favicon.png'
})
</script>
<template>
  <div class="w-full pt-48 bg-black flex justify-center">
    <div class="relative w-1/2 h-32 bg-red-500 rounded-t-md flex justify-center">
      <div
        class="w-28 h-28 mb-5 object-cover absolute -top-12 left-1/2 bg-white rounded-full border-2 border-white overflow-hidden"
        style="transform: translateX(-50%)"
      >
        <img class="w-full h-full" src="../../assets/test.png" alt="" />
      </div>
      <myRowTab class="mt-10"></myRowTab>
    </div>
  </div>

  <div class="absolute bottom-10 left-1/2 -translate-x-1/2 p-2 px-4 shadow-2xl rounded-xl flex">
    <myIconBtn class="ml-2" :icon="'icon-fabu1'" :size="18"></myIconBtn>
    <myIconBtn class="ml-2" :icon="'search'" :size="18"></myIconBtn>
  </div>
</template>

<style scoped>
.a {
  transform: translateX(-50%);
}
</style>
