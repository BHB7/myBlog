<script setup>
import { onUnmounted, ref } from 'vue'

const props = defineProps({
  imgs: {
    type: Array,
    default: [
      {
        url: ''
      }
    ]
  },
  time: {
    type: Number,
    default: 6000
  }
})

const playIndex = ref(0)
const timer = ref(null)
const flag = ref(true)
// 立即执行函数
;(function () {
  timer.value = setInterval(() => {
    console.log(props.imgs.length)
    // 切换动画标志
    flag.value = !flag.value
    if (props.imgs.length === 0) {
      console.log('00')
      clearInterval(timer.value)
      return
    }
    playIndex.value++
    if (playIndex.value >= props.imgs.length) {
      playIndex.value = 0
    }
    console.log(props.imgs.length)
  }, props.time)
})()

onUnmounted(() => {
  clearInterval(timer.value)
})
</script>

<template>
  <div
    class="cont overflow-hidden relative flex w-full bg-cover bg-center bg-origin-content h-full items-end rounded-2xl"
    :style="{ backgroundImage: 'url(' + props.imgs[playIndex].url + ')' }"
    :class="{ op: flag, nop: !flag }"
  >
    <img
      :src="props.imgs[playIndex].url"
      alt=""
      class="transition delay-50 hover:scale-105 object-cover absolute top-0 left-0 w-full h-full"
    />

    <div
      class="relative flex justify-evenly px-1 items-center bottom-5 rounded-md backdrop-blur-lg h-5 left-1/2"
      style="transform: translateX(-50%)"
    >
      <!-- 小圆点 -->
      <button
        v-for="(item, index) in props.imgs.length"
        :key="item"
        :class="{ 'bg-white h-3 w-3': playIndex === index }"
        class="w-2 h-2 border-solid border-2 border-zinc-100 rounded-full mx-1"
      ></button>
    </div>
    <div
      v-if="props.imgs[playIndex].desc"
      class="desc text-white mb-10 ml-10 font-extrabold rounded-md px-2 backdrop-blur-xl"
    >
      {{ props.imgs[playIndex].desc }}
    </div>
  </div>
  <div
    v-if="props.imgs.length < 0"
    class="err bg-slate-400 w-full h-full flex justify-center items-center text-2xl font-extrabold"
  >
    没有内容
  </div>
</template>

<style>
.op {
  animation: mnop 0.1s forwards ease-in;
}
.nop {
  animation: mop 0.2s forwards ease-out;
}
@keyframes mop {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes mnop {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
