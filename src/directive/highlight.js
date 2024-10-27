import { nextTick } from 'vue'
import hljs from 'highlight.js'
import 'highlight.js/styles/xcode.css'

import '@/style/mac-style-code.scss' // 引入自定义的代码块样式
const highlightDirective = {
  mounted(el, binding) {
    console.log('Highlight directive mounted')
    nextTick(() => {
      highlightCodeBlocks(el)
    })
  },
  updated(el, binding) {
    console.log('Highlight directive updated')
    nextTick(() => {
      highlightCodeBlocks(el)
    })
  }
}

// 将 highlightCodeBlocks 方法定义为普通函数
function highlightCodeBlocks(el) {
  let targets = el.querySelectorAll('code')
  if (targets.length === 0) {
    console.warn('No <code> elements found in the target element.')
  } else {
    targets.forEach((target) => {
      try {
        hljs.highlightBlock(target)
        console.log('highlightBlock called on:', target)
      } catch (error) {
        console.error('Error in highlightBlock:', error)
      }
    })
  }
}

export default {
  install: (app) => {
    app.directive('highlight', highlightDirective)
  }
}
