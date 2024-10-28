<script setup>
import { onMounted } from 'vue'
import myNav from '@/components/myNav.vue'
onMounted(() => {
  const theme = document.documentElement.getAttribute('data-code-theme')
  if (theme === 'a11y-dark') {
    import('highlight.js/styles/a11y-dark.css')
  } else if (theme === 'a11y-light') {
    import('highlight.js/styles/a11y-light.css')
  }
})
</script>

<template>
  <myNav></myNav>
  <router-view></router-view>
  <div class="w-full fixed h-8 bottom-0 left-0">
    <div class="footer w-full h-full px-4">
      <p>By.7z | 2024</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// html[data-code-theme='a11y-dark'] {
//   @include meta.load-css('highlight.js/styles/a11y-dark.css');
// }
// html[data-code-theme='a11y-light'] {
//   @include meta.load-css('highlight.js/styles/a11y-light.css');
// }
</style>
