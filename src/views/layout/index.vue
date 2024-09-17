<script setup>
import myNav from '@/components/myNav.vue'
defineOptions({
  name: 'LayoutIndex'
})
</script>
<template>
  <myNav></myNav>
  <div class="lg:my-5 w m-auto max-w-5xl w-full px-2 lg:px-0">
    <router-view />
  </div>
</template>

<style lang="scss" scoped></style>
