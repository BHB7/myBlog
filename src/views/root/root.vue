<script setup>
import myIconBtn from '@/components/myIconBtn.vue'
import myRowTab from '@/components/myRowTab.vue'
import { addArticleU } from '@/api/articles'
import myUploadImg from '@/components/myUploadImg.vue'
import { ref } from 'vue'
// addArticleU({
//   uid: 'root',
//   title: '测试',
//   tag: '测试',
//   imgUrl: 'https://koxiuqiu.cn/img/favicon.png'
// })
const backgroundImageUrl = ref(
  'https://blog-1312814407.cos.ap-nanjing.myqcloud.com/mmexport1727600601783.jpg'
)
</script>
<template>
  <div
    class="w-full body-box pt-48 bg-black flex justify-center"
    :style="{ backgroundImage: `url(${backgroundImageUrl})` }"
  >
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
  <myUploadImg></myUploadImg>
</template>

<style scoped>
.body-box {
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
}
</style>
