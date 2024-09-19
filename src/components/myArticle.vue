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
  <section class="w-full relative flex h-40 rounded-md overflow-hidden">
    <div class="cover w-2/4 object-cover h-full">
      <slot name="cover"></slot>
    </div>
    <div class="flex-1 overflow-hidden backdrop-blur-md pl-3">
      <!-- 描述 -->
      <article class="py-5">
        <h3 class="truncate-multiline-h my-1 font-semibold text-xl text-white">
          <slot name="title"></slot>
        </h3>
        <p class="truncate-multiline font-light text-white">
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
</style>
