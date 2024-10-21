<script setup>
const props = defineProps({
  // trend 为 'end' 时颠倒子元素的显示顺序，默认为 'start'
  trend: {
    type: String,
    default: 'start'
  }
})
</script>

<template>
  <section
    :class="[
      'shadow-xl w-full relative flex h-40 p-2 border-solid rounded-lg overflow-hidden transition-transform duration-300',
      trend === 'end' ? 'lg:flex-row-reverse flex-col-reverse' : 'lg:flex-row flex-col'
    ]"
  >
    <!-- 封面图 -->
    <div class="lg:w-2/4 w-full object-cover h-full cover-box overflow-hidden rounded-lg">
      <slot name="cover"></slot>
    </div>

    <!-- 移动端标签 -->
    <div
      class="font-light backdrop-blur-sm text-xs p-2 text-white items-center lg:hidden absolute top-0 left-0 bg-opacity-40 bg-zinc-900 rounded-br-lg"
    >
      <div class="flex items-center p-1">
        <span class="iconfont icon-shijian mr-1"></span>
        <span>更新于：<slot name="time">1984-9-9</slot></span>
        <!-- 标签 -->
        <div class="flex mx-2">
          <slot name="tag">
            <div class="px-2 py-1 bg-red-500 rounded-md">暂无</div>
          </slot>
        </div>
      </div>
    </div>

    <!-- 描述容器 -->
    <div
      class="flex-1 w-full overflow-hidden lg:pl-6 pl-4 lg:static lg:h-full absolute bottom-0 h-2/4 bg-gradient-to-b to-transparent"
    >
      <!-- 描述 -->
      <article class="">
        <h3 class="truncate-multiline-h my-1 font-semibold text-2xl text-white">
          <slot name="title"></slot>
        </h3>
        <p class="truncate-multiline-b font-light text-slate-100 text-sm leading-relaxed">
          <slot name="desc"></slot>
        </p>
      </article>
      <div class="font-light text-xs text-white items-center lg:flex hidden">
        <span class="iconfont icon-shijian mr-1"></span>
        <span>发布于：<slot name="time">1984-9-9</slot></span>
        <!-- 标签 -->
        <div class="flex mx-2">
          <slot name="tag">
            <div class="px-2 py-1 bg-red-500 rounded-md">暂无</div>
          </slot>
        </div>
      </div>
    </div>

    <!-- 模糊背景 -->
    <div
      class="absolute bg-blur blur-md overflow-hidden scale-125 top-0 left-0 bg-zinc-900 w-full h-full"
    >
      <slot name="cover"></slot>
    </div>
  </section>
</template>

<style scoped>
.cover-box {
  /* -webkit-clip-path: polygon(0 1%, 100% 0, 80% 100%, 0 100%);
  clip-path: polygon(0 1%, 100% 0, 80% 100%, 0 100%); */
  /* padding: 10; */
}
.bg-blur {
  z-index: -1;
}
.truncate-multiline-h {
  display: -webkit-box;
  -webkit-line-clamp: 1; /* 显示的行数 */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.truncate-multiline-b {
  font-size: 0.9rem;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* 显示的行数 */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
