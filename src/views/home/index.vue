<script setup>
// 认证
import MageVerifiedCheck from '~icons/mage/verified-check';
// 置顶
import NotoV1TopArrow from '~icons/noto-v1/top-arrow';
// 发布于
import LetsIconsDateRangeDuotone from '~icons/lets-icons/date-range-duotone';
// 更新
import MaterialSymbolsLightUpdate from '~icons/material-symbols-light/update';
// 标签
import MageTagFill from '~icons/mage/tag-fill';
import MageTag2 from '~icons/mage/tag-2';
// 点赞
import IconoirThumbsUp from '~icons/iconoir/thumbs-up';
// 浏览
import LetsIconsViewLight from '~icons/lets-icons/view-light';
// line
import PepiconsPrintLineY from '~icons/pepicons-print/line-y';
// 分类
import RiLayoutGrid2Fill from '~icons/ri/layout-grid-2-fill';
// QQ
import MingcuteQqFill from '~icons/mingcute/qq-fill';
// github
import MdiGithub from '~icons/mdi/github';
// bilibili
import RiBilibiliFill from '~icons/ri/bilibili-fill';
// 
import StashReadingTimeDuotone from '~icons/stash/reading-time-duotone';
import LetsIconsPointersFill from '~icons/lets-icons/pointers-fill';
import { onMounted, reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import { homeGetArticleList } from '@/api/article.js'

const router = useRouter()
const articleList = ref([])
const params = reactive({

    currentPage: 0,
    pageSize: 5
})
const staticArticleList = [
    {
        id: '1',
        title: '博客开发记录......持续更新',
        desc: '描述博客的优化史，以及需要优化的事项',
        cover: 'http://img.mrzym.top/FswlMLf30bR2MeXCgorQSkUQ3ky1',
        createTime: '2024-11-13 19:47:44',
        updateTime: '2024-11-13 20:58:55',
        views: '1w',
        likes: '1w',
        tags: ['开心', '小心情', '话痨'],
        cartegory: '日常'
    },
]
// 标签
const tagList = ref([
    { name: 'Vue', id: 1, checked: true, type: 'primary'}, 
    { name: 'Java', id: 2, checked: true, type: 'info' }, 
    { name: 'CV工程师', id: 3, checked: true, type: 'success' }, 
    {name:'Node', id: 4, checked: true, type: 'warning'}
])

const gotoArticle = (id) => {
    if(!id) return
    router.push({path: '/article', query: {id: id}}) 
}
onMounted(() => {
    homeGetArticleList(params.currentPage, params.pageSize).then(res => {
        console.log(res);
        
    })
})

</script>


<template>
    <el-row :gutter="20">
        <el-col :sm="18" :xs="24">
            <el-card class="mb-[1.2rem]" v-for="(article) in articleList" :key="article.id" shadow="always">
                <div class="article-item w-[100%] md:h-[18rem] h-[24rem] md:flex-row flex-col flex">
                    <div class="article-cover md:w-[45%] md:h-[100%] w-[100%] h-[50%] overflow-hidden">
                        <el-image @click="gotoArticle(article.id)" class="w-[100%] h-[100%] duration-300 hover:scale-110" :src="article.cover"
                            fit="cover"></el-image>
                    </div>

                    <div class="article-content md:w-[55%] md:h-[100%] w-[100%] h-[50%] flex  p-[1.2rem] flex-col justify-center">
                        <div @click="gotoArticle(article.id)" class="title text-2xl mb-2">{{ article.title }}</div>
                        <!-- info -->
                        <div class="info text-md mb-3 flex flex-wrap items-center">
                            <div class="item mr-[0.3rem] flex items-center">
                                <LetsIconsDateRangeDuotone class="w-[1rem] h-[1rem]" />
                                <span>发表于{{ article.createTime }}</span>
                            </div>
                            <div class="item mr-[0.3rem] flex items-center">
                                <MaterialSymbolsLightUpdate class="w-[1rem] h-[1rem]" />
                                <span>更新于{{ article.updateTime }}</span>
                            </div>
                            <!-- 分类 -->
                            <div class="item mr-[0.3rem] flex items-center">
                                <PepiconsPrintLineY />
                                <RiLayoutGrid2Fill class="w-[1rem] h-[1rem]" />
                                <span>{{ article.cartegory }}</span>

                            </div>
                            <div class="item mr-[0.3rem] flex items-center">
                                <PepiconsPrintLineY />
                                <MageTag2 class="w-[1rem] h-[1rem]" />
                                <span>{{ article.tags.join(', ') }}</span>
                                <PepiconsPrintLineY />
                            </div>
                            <!-- 浏览量 -->
                            <div class="item mr-[0.3rem] flex items-center">
                                <IconoirThumbsUp class="w-[1rem] h-[1rem]" />
                                <span>{{ article.views }}</span>
                                <PepiconsPrintLineY />
                                <LetsIconsViewLight />
                                <span>{{ article.likes }}</span>
                            </div>
                        </div>
                        <div class="desc text-lg mb-2 w-[100%] text-ellipsis overflow-hidden whitespace-nowrap">
                            {{ article.desc }}</div>
                    </div>
                </div>
            </el-card>
        </el-col>
        <!-- 右侧 -->
        <el-col :sm="6" :xs="24">
            <!-- 个人 -->
            <el-card class="mb-[1.2rem]">
                <div class="banner w-[100%] h-[8rem]">
                    <el-image class="w-[100%] h-[100%]" fit="cover"
                        src="http://img.mrzym.top/FswlMLf30bR2MeXCgorQSkUQ3ky1"></el-image>
                </div>
                <div class="user-info flex items-center p-[0.6rem] mb-[0.1rem]">
                    <el-avatar :size="50" class="mr-[0.8rem]">n</el-avatar>
                    <div>好安逸~</div>
                </div>
                <div class="saying p-[0.4rem] text-sm">有关更多详细信息，请参阅 Unplugin Icons 文档。</div>
                <!-- -->
                <div class="flex items-center text-center justify-around p-[0.8rem]">
                    <div class="item">
                        <div class="title ">文章</div>
                        <div class="value w-[1.2rem] font-bold h-[1.2rem] ">10</div>
                    </div>
                    <div class="item">
                        <div class="title ">分类</div>
                        <div class="value w-[1.2rem] font-bold h-[1.2rem] ">1</div>
                    </div>
                    <div class="item">
                        <div class="title ">说说</div>
                        <div class="value w-[1.2rem] font-bold h-[1.2rem] ">10</div>
                    </div>
                </div>
                <!-- 联系 -->
                <div class="flex items-center justify-around px-[2rem] p-[1rem]">
                    <MingcuteQqFill class="w-[1.8rem] h-[1.8rem]" />
                    <MdiGithub class="w-[1.8rem] h-[1.8rem]" />
                    <RiBilibiliFill class="w-[1.8rem] h-[1.8rem]" />
                </div>
            </el-card>
            <!-- 公告 -->
            <el-card class="mb-[1.2rem]">
                <template #header>
                    <div class="text-xl flex font-bold">
                        <LetsIconsPointersFill class="w-[]" />
                        公告
                    </div>
                </template>
                <div class="p-[0.8rem]">源码gitee地址：https://gitee.com/mrzym/stable-version-of-blog
                    博客开发教程
                    bilibili：https://www.bilibili.com/video/BV1Xi421e7At/?spm_id_from=333.999.0.0
                </div>
            </el-card>
            <el-affix style="width: inherit;" :offset="60">
                <!-- 标签 -->
                <el-card class="mb-[1.2rem]">
                    <template #header>
                        <div class="text-xl flex font-bold">
                            <MageTag2 class="w-[]" />
                            标签
                        </div>
                    </template>
                    <div class="p-[0.8rem] flex items-center flex-wrap">
                        <el-check-tag class="m-[0.2rem]" v-for="tag in tagList" :key="tag.id" :checked="tag.checked" @change="tag.checked = !tag.checked" :type="tag.type">{{ tag.name
                            }}</el-check-tag>
                    </div>
                </el-card>

                <!-- 网站咨询 -->
                <el-card class="mb-[1.2rem]">
                    <template #header>
                        <div class="text-xl flex font-bold">
                            <StashReadingTimeDuotone class="w-[]" />
                            网站咨询
                        </div>
                    </template>
                    <div class="p-[0.8rem] flex justify-center items-center flex-wrap">
                        <div class="item flex text-sm justify-between items-center w-[100%]">
                            <span>文章篇目</span>
                            <span>20</span>
                        </div>
                        <div class="item flex text-sm justify-between items-center w-[100%]">
                            <span>运行时间</span>
                            <span>20</span>
                        </div>
                        <div class="item flex text-sm justify-between items-center w-[100%]">
                            <span>博客访问次数</span>
                            <span>20</span>
                        </div>
                    </div>
                </el-card>
            </el-affix>
        </el-col>
    </el-row>
    <div class="w-[100%] flex justify-center">
        <el-pagination v-model:current-page="params.currentPage" :page-size="params.pageSize" @change="getArticleList"
            layout="prev, pager, next" :total="articleList.length" />
    </div>
</template>


<style lang="scss" scoped></style>