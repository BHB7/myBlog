<script setup>
const tabs = defineProps({
  list:{
    type: Array,
    default: () => [{label: '文章', value:0},{label: '标签', value:0},{label: '分类', value:0}]
  }
})

</script>
<template>
  <div class="flex pt-4 text-center text-white">
    <div class="flex flex-col m-4" v-for="(item, index) in list" :key="index">
      <span class="mb-2 font-light">{{item.label}}</span>
      <span class="font-extrabold">{{item.value}}</span>
    </div>
  </div>
</template>
