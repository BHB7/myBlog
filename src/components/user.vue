<script setup>
import myMenuBar from '@/components/myMenuBar.vue'
import myRowTab from './myRowTab.vue'
</script>
<template>
  <myMenuBar>
    <div class="p-4 flex flex-col items-center">
      <img src="../assets/test.png" class="object-cover rounded-full w-28 h-28" alt="" />
      <p class="font-bold w-full text-center my-2">昵称</p>
      <myRowTab></myRowTab>
    </div>
  </myMenuBar>
</template>

<style></style>
