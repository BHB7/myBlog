<script setup>
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  desc: {
    type: String,
    default: ''
  },
  img: {
    type: String,
    default: ''
  }
})
</script>
<template>
  <section
    class="shadow-xl w-full relative flex lg:flex-row h-52 flex-col rounded-md overflow-hidden"
  >
    <div class="cover lg:w-2/4 w-full object-cover h-full">
      <slot name="cover"></slot>
    </div>
    <!-- 移动端标签 -->
    <div
      class="font-light backdrop-blur-sm text-xs p-1 text-white items-center lg:hidden absolute top-0"
    >
      <div class="flex p-1">
        <span class="iconfont icon-shijian mr-1"></span>
        <span>发布于：<slot name="time">1984-9-9</slot></span>
        <!-- 标签 -->
        <div class="flex mx-2">
          <slot name="tag">
            <div class="px-2 bg-red-400 rounded-sm">暂无</div>
          </slot>
        </div>
      </div>
    </div>
    <!-- 描述容器 -->
    <div
      class="flex-1 w-full overflow-hidden backdrop-blur-md lg:p-6 p-2 lg:static lg:h-full absolute bottom-0 h-2/4"
    >
      <div class="font-light text-xs text-white items-center lg:flex hidden">
        <span class="iconfont icon-shijian mr-1"></span>
        <span>发布于：<slot name="time">1984-9-9</slot></span>
        <!-- 标签 -->
        <div class="flex mx-2">
          <slot name="tag">
            <div class="px-2 bg-red-400 rounded-sm">暂无</div>
          </slot>
        </div>
      </div>

      <!-- 描述 -->
      <article class="lg:py-5 h-1/3">
        <h3 class="truncate-multiline-h my-1 font-semibold text-xl text-white">
          <slot name="title"></slot>
        </h3>
        <p class="truncate-multiline-b font-light text-white">
          <slot name="desc"></slot>
        </p>
      </article>
    </div>
    <!-- 模糊背景 -->
    <div class="absolute bg-blur top-0 left-0 bg-zinc-900 w-full h-full">
      <slot name="cover"></slot>
    </div>
  </section>
</template>

<style scoped>
.bg-blur {
  z-index: -1;
}
.covera {
  clip-path: polygon(0 0, 100% 0, 94% 100%, 0 100%);
}
.truncate-multiline-h {
  display: -webkit-box;
  -webkit-line-clamp: 1; /* 需要的行数 */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.truncate-multiline {
  font-size: 0.9rem;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* 需要的行数 */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.truncate-multiline-b {
  font-size: 0.9rem;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* 需要的行数 */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
