<script setup></script>
<template>
  <section class="w-full bg-gray-200 p-2 rounded-md">
    <header class="w-full h-10 flex items-center hr">
      <slot name="title">
        <!-- 标题 -->
        <div class="w-full h-full flex items-center">
          <span class="text-red-700 font-extraboldW font">今日</span>
          <h3 class="font text-slate-700">推荐</h3>
        </div>
      </slot>
      <!--  -->
    </header>

    <slot> </slot>
  </section>
</template>

<style lang="scss" scoped>
.hr {
  border-bottom: 1px solid #ccc;
}
</style>
