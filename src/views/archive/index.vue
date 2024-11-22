<script setup>
// 发布于
import LetsIconsDateRangeDuotone from '~icons/lets-icons/date-range-duotone';

const articleList = [
  {
    id: 'Custom icon',
    createTime: '2018-04-12 20:46',
    title: '博客部署',
    cover: 'http://img.mrzym.top/FswlMLf30bR2MeXCgorQSkUQ3ky1'
  },
  {
    id: 'Custom icon',
    createTime: '2018-04-12 20:46',
    title: '博客部署',
    cover: 'http://img.mrzym.top/FswlMLf30bR2MeXCgorQSkUQ3ky1'
  },
  {
    id: 'Custom icon',
    createTime: '2018-04-12 20:46',
    title: '博客部署',
    cover: 'http://img.mrzym.top/FswlMLf30bR2MeXCgorQSkUQ3ky1'
  },
]
</script>


<template>
  <el-card>

    <div class="p-[2rem]">
      <el-timeline style="max-width: 600px">
        <el-timeline-item center placement="top" v-for="(article) in articleList" :key="article.id" :icon="'article.icon'">
          <div class="item flex items-center">
            <div class="cover w-[6rem] h-[6rem] rounded-md overflow-hidden ">
              <el-image class="w-[100%] h-[100%] duration-300 hover:scale-110" fit="cover" :src="article.cover"></el-image>
            </div>
            <div class="info mx-2">
              <div class="create-time flex mb-1">
                <LetsIconsDateRangeDuotone />
                <span>{{ article.createTime }}</span>
              </div>
              <div class="title font-bold text-xl">{{ article.title }}</div>
            </div>
          </div>
        </el-timeline-item>
      </el-timeline>
    </div>
  </el-card>
</template>


<style lang="scss" scoped></style>