<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  icon: {
    type: String
  },
  size: {
    type: Number,
    default: '20'
  },
  shade: {
    type: Boolean,
    default: true
  }
})
const isSearchClick = ref(false)
const getIcon = computed(() => {
  switch (props.icon) {
    case 'user':
      return 'iconfont icon-yonghu'
    case 'search':
      return 'iconfont icon-icon-test5'
    case 'menu':
      return 'iconfont icon-caidan'
  }
  return 'iconfont icon-icon-test14'
})

const onSubmit = () => {
  if (props.icon === 'search') {
    isSearchClick.value = !isSearchClick.value
  }
}
</script>

<template>
  <button
    @click="onSubmit"
    type="button"
    :style="{
      width: props.size * 2 + 'px',
      height: props.size * 2 + 'px'
    }"
    :class="{ shade: props.shade }"
  >
    <i
      :class="isSearchClick ? 'iconfont icon-X' : getIcon"
      :style="{ fontSize: props.size + 'px' }"
    ></i>
  </button>
</template>

<style lang="scss" scoped>
button {
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 50%;
  transition: all 0.5s ease;
  --bgX: 90deg;
  background: linear-gradient(var(--bgX), #e2ce92, #f63030);
  cursor: pointer;
}

button:hover {
  animation: move 0.5s forwards; /* 在悬停时触发动画 */
}

@keyframes move {
  0% {
    transform: scale(1);
    background: linear-gradient(90deg, #e2ce92, #f63030);
  }
  100% {
    transform: scale(1.1); /* 最终放大 */
    background: linear-gradient(270deg, #e2ce92, #f63030); /* 最终改变角度 */
  }
}
.shade {
  box-shadow:
    1px 2px 8px #ccc,
    1px 3px 4px #bbb;
}
</style>
