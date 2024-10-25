<script setup>
import myMenuBar from '@/components/myMenuBar.vue'
import { watchEffect, ref, reactive, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getArticleDetailsService } from '@/api/articles.js'
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import 'highlight.js/styles/stackoverflow-light.css'
import { nextTick } from 'vue'
import xml from 'highlight.js/lib/languages/xml' // 使用 xml 以支持 HTML

// 注册 xml 作为 html 语言
hljs.registerLanguage('html', xml)

// 导入需要的语言
hljs.registerLanguage('javascript', javascript)

const route = useRoute()
const aid = ref(Number(route.query.aid))
hljs.highlightAll()
// 使用 reactive 创建响应式对象
const articleCont = reactive({
  article_content: '',
  article_title: ''
})

// 封装高亮代码的方法
const applyHighlight = async () => {
  await nextTick() // 等待 DOM 更新完成
  document.querySelectorAll('pre code').forEach((block) => {
    hljs.highlightElement(block)
  })
}
// 监听 aid 的变化，并在变化时获取文章详情
watchEffect(async () => {
  try {
    const res = await getArticleDetailsService(aid.value)
    console.log(res.data)
    // 更新响应式对象
    Object.assign(articleCont, res.data.article)
    console.log(articleCont)
    // 应用代码高亮
    applyHighlight()
  } catch (error) {
    console.error('Failed to fetch article details:', error)
  }
})
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
      <h1>{{ articleCont.article_title }}</h1>
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
  <div class="cont-box h-lvh flex lg:my-2 py-4 m-auto max-w-5xl w-full px-2 lg:px-0">
    <!-- 使用 flex 布局 -->
    <!-- 内容展示 -->
    <div class="flex-1">
      <!-- 使用 v-html 渲染 HTML 内容 -->
      <div v-html="articleCont.article_content"></div>
    </div>
    <!-- 菜单栏 -->
    <div class="menu w-64 ml-3 h-lvh lg:block hidden">
      <myMenuBar>
        <template #title><span class="iconfont icon-huatifuhao"></span>最新文章</template>
      </myMenuBar>
    </div>
  </div>

  <!--内容结束-->
</template>

<style scss scoped>
@import url(//fonts.googleapis.com/css?family=Lato:300:400);

h1 {
  font-family: 'Lato', sans-serif;
  font-weight: 300;
  letter-spacing: 2px;
  font-size: 48px;
}

p {
  font-family: 'Lato', sans-serif;
  letter-spacing: 1px;
  font-size: 14px;
  color: #333333;
}

.header {
  position: relative;
  text-align: center;
  background: linear-gradient(60deg, rgba(84, 58, 183, 1) 0%, rgba(0, 172, 193, 1) 100%);
  color: white;
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
  height: 15vh;
  margin-bottom: -7px; /*Fix for safari gap*/
  min-height: 100px;
  max-height: 150px;
}

/* Animation */

.parallax > use {
  animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
}
.parallax > use:nth-child(1) {
  animation-delay: -2s;
  animation-duration: 7s;
}
.parallax > use:nth-child(2) {
  animation-delay: -3s;
  animation-duration: 10s;
}
.parallax > use:nth-child(3) {
  animation-delay: -4s;
  animation-duration: 13s;
}
.parallax > use:nth-child(4) {
  animation-delay: -5s;
  animation-duration: 20s;
}
@keyframes move-forever {
  0% {
    transform: translate3d(-90px, 0, 0);
  }
  100% {
    transform: translate3d(85px, 0, 0);
  }
}
/*Shrinking for mobile*/
@media (max-width: 768px) {
  .waves {
    height: 40px;
    min-height: 40px;
  }
  .content {
    height: 30vh;
  }
  h1 {
    font-size: 24px;
  }
}
</style>
