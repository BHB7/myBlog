<script setup>
import myIconBtn from '@/components/myIconBtn.vue'
import { ref } from 'vue'
const flag = ref(false)
const check = () => {
  flag.value = !flag.value
  if (flag) {
    window.document.documentElement.setAttribute('data-theme', 'dark')
  } else {
    window.document.documentElement.setAttribute('data-theme', 'light')
  }
}
</script>
<template>
  <myIconBtn @click="check"></myIconBtn>
</template>

<style></style>
