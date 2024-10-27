<script setup>
import { watchEffect, ref, reactive, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import { getArticleDetailsService } from '@/api/articles.js'
import hljs from 'highlight.js'
import 'highlight.js/styles/github-dark.css'

const route = useRoute()
const aid = ref(Number(route.query.aid))

const articleCont = reactive({
  article_content: '',
  article_title: ''
})
const codeBlocks = ref([])

watchEffect(async () => {
  try {
    const res = await getArticleDetailsService(aid.value)
    Object.assign(articleCont, res.data.article)

    const parser = new DOMParser()
    const doc = parser.parseFromString(articleCont.article_content, 'text/html')
    const codeElements = doc.querySelectorAll('pre code')

    codeElements.forEach((codeElement, index) => {
      codeBlocks.value.push(codeElement.textContent || '')

      const placeholder = document.createElement('code-placeholder')
      placeholder.setAttribute('index', index)

      const preElement = codeElement.closest('pre')
      if (preElement) {
        preElement.replaceWith(placeholder)
      }
    })

    articleCont.article_content = doc.body.innerHTML
    await nextTick()
    replacePlaceholders()
  } catch (error) {
    console.error('Failed to fetch article details:', error)
  }
})

function replacePlaceholders() {
  const placeholders = document.querySelectorAll('code-placeholder')
  placeholders.forEach((placeholder) => {
    const index = parseInt(placeholder.getAttribute('index'))
    const codeContent = codeBlocks.value[index]

    const codeElement = document.createElement('pre')
    codeElement.classList.add('code-block')
    codeElement.innerHTML = `
    <div class="top">
      <span class="dots">
        <span class="dot red"></span>
        <span class="dot yellow"></span>
        <span class="dot green"></span>
      </span>
      <button class="copy-button">复制代码</button>
      </div>
      <code></code>
    `
    const codeInnerElement = codeElement.querySelector('code')
    codeInnerElement.textContent = codeContent
    hljs.highlightElement(codeInnerElement) // 自动格式化

    placeholder.replaceWith(codeElement)
  })
}
</script>

<template>
  <div class="header">
    <!--Content before waves-->
    <div class="inner-header flex justify-center items-center">
      <!--LOGO-->
      <svg
        version="1.1"
        class="logo"
        baseProfile="tiny"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 500 500"
        xml:space="preserve"
      >
        <path
          fill="#FFFFFF"
          stroke="#000000"
          stroke-width="10"
          stroke-miterlimit="10"
          d="M57,283"
        />
        <g>
          <path
            fill="#fff"
            d="M250.4,0.8C112.7,0.8,1,112.4,1,250.2c0,137.7,111.7,249.4,249.4,249.4c137.7,0,249.4-111.7,249.4-249.4
C499.8,112.4,388.1,0.8,250.4,0.8z M383.8,326.3c-62,0-101.4-14.1-117.6-46.3c-17.1-34.1-2.3-75.4,13.2-104.1
c-22.4,3-38.4,9.2-47.8,18.3c-11.2,10.9-13.6,26.7-16.3,45c-3.1,20.8-6.6,44.4-25.3,62.4c-19.8,19.1-51.6,26.9-100.2,24.6l1.8-39.7
c35.9,1.6,59.7-2.9,70.8-13.6c8.9-8.6,11.1-22.9,13.5-39.6c6.3-42,14.8-99.4,141.4-99.4h41L333,166c-12.6,16-45.4,68.2-31.2,96.2
c9.2,18.3,41.5,25.6,91.2,24.2l1.1,39.8C390.5,326.2,387.1,326.3,383.8,326.3z"
          />
        </g>
      </svg>
      <!-- 标题 -->
      <h1 class="xl:text-2xl text-xl">{{ articleCont.article_title }}</h1>
    </div>

    <!--波浪容器-->
    <div>
      <svg
        class="waves"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shape-rendering="auto"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g class="parallax">
          <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
          <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
          <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
          <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff" />
        </g>
      </svg>
    </div>
    <!--Waves end-->
  </div>
  <!--头部结束-->

  <!--内容开始-->
  <div class="cont-box rounded-3xl h-full flex py-4 m-auto max-w-6xl w-full lg:px-0">
    <!-- 使用 flex 布局 -->
    <!-- 内容展示 -->
    <div class="flex-1 p-2 rounded-xl">
      <!-- 使用 v-html 渲染 HTML 内容 -->
      <div v-highlight>
        <div v-html="articleCont.article_content" class="article-content rounded-md"></div>
      </div>
    </div>

    <!-- 菜单栏 -->
    <div class="menu w-64 md:mt-5 mt-2 ml-3 h-lvh lg:block hidden">
      <myMenuBar>
        <template #title><span class="iconfont icon-huatifuhao"></span>最新文章</template>
      </myMenuBar>
    </div>
  </div>

  <!--内容结束-->
</template>

<style lang="scss" scoped>
@import url(//fonts.googleapis.com/css?family=Lato:300:400);
.code-block {
  background: #2d2d2d;
  padding: 1em;
  border-radius: 8px;
  color: #fff;
  position: relative;
}

.dots {
  position: absolute;
  top: 0.5em;
  left: 0.5em;
}

.copy-button {
  position: absolute;
  top: 0.5em;
  right: 0.5em;
  background-color: transparent;
  color: #fff;
  border: none;
  cursor: pointer;
}

// 颜色变量
$primary-color: #4a4a4a;
$text-color: #333;
$code-bg: #2d2d2d;
$code-color: rgb(201, 209, 217);
$inline-code-bg: #f5f5f5;
$header-bg: linear-gradient(60deg, rgba(84, 58, 183, 1) 0%, rgba(0, 172, 193, 1) 100%);

// 基础样式
body {
  font-family: 'Lato', sans-serif;
}

.article-content {
  color: $text-color;
  line-height: 1.6;
  padding: 1rem;

  h1,
  h2,
  h3 {
    color: $primary-color;
    margin: 1.5rem 0 0.5rem; // 顶部和底部间距
  }

  p {
    margin: 0.5rem 0; // 段落间距
  }

  img {
    max-width: 100%; // 确保图片不超出容器
    height: auto; // 保持纵横比
    display: block; // 将图片作为块元素显示
    margin: 0.5rem 0; // 图片上下间距
  }

  pre {
    color: $code-color;
    padding: 1em; // 内边距
    background: #2d2d2d;
    overflow: auto; // 允许滚动
    margin: 1em 0; // 外边距
    code {
      border-radius: 10px; // 圆角
      background: $code-bg;
      background: $inline-code-bg; // 行内代码背景
      padding: 2px 4px; // 内边距
      border-radius: 4px; // 圆角
    }
  }
}

.header {
  position: relative;
  text-align: center;
  background: $header-bg;
  color: white;
  padding: 20px 0; // 顶部和底部内边距
}

.logo {
  width: 50px;
  fill: white;
  padding-right: 15px;
  display: inline-block;
  vertical-align: middle;
}

.inner-header {
  height: 65vh;
  width: 100%;
  margin: 0;
  padding: 0;
}

.waves {
  position: relative;
  width: 100%;
  height: 16vh;
  margin-bottom: -20px; /* Fix for Safari gap */
  min-height: 100px;
  max-height: 150px;
}

/* Animation */
.parallax > use {
  animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;

  &:nth-child(1) {
    animation-delay: -2s;
    animation-duration: 7s;
  }
  &:nth-child(2) {
    animation-delay: -3s;
    animation-duration: 10s;
  }
  &:nth-child(3) {
    animation-delay: -4s;
    animation-duration: 13s;
  }
  &:nth-child(4) {
    animation-delay: -5s;
    animation-duration: 20s;
  }
}

@keyframes move-forever {
  0% {
    transform: translate3d(-90px, 0, 0);
  }
  100% {
    transform: translate3d(85px, 0, 0);
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .inner-header {
    height: 40vh;
  }
  .waves {
    height: 40px;
    min-height: 40px;
  }
  .cont-box {
    height: 30vh;
  }
  h1 {
    font-size: 24px;
  }
}
</style>
