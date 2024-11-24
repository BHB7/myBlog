<script setup>
import { onMounted, ref, nextTick, watch } from 'vue';
import { useRoute } from 'vue-router'
import { useArticleStore } from '@/stores'
import MynauiChevronDownSolid from '~icons/mynaui/chevron-down-solid';
import { storeToRefs } from 'pinia';
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
const route = useRoute()

const { getArticle } = storeToRefs(useArticleStore())
const showScrollToBottom = ref(true)

const homeRef = ref(null)
const scrollToBottom = () => {

    document.body.scrollTo({
        top: homeRef.value.clientHeight,
        behavior: 'smooth'
    })
}

const ob = new IntersectionObserver(([{ isIntersecting }]) => {
    if (isIntersecting) {
        showScrollToBottom.value = true
        console.log('离开home');

    } else {
        console.log('进入home');

        showScrollToBottom.value = false
    }
}, {
    threshold: 0.8
})
// 解决离开当前路由时 再次回来失效的问题
watch(route, (to, from) => {
    if (to.path === '/home') {
        nextTick(() => {
            if (homeRef.value) {
                ob.observe(homeRef.value);
            }
        });
    } else {
        // 如果离开 /home 路径，取消观察
        if (homeRef.value) {
            ob.unobserve(homeRef.value);
        }
    }
});
onMounted(() => {
    nextTick(() => {
        if (homeRef.value) {
            ob.observe(homeRef.value);
        }
    });
})
</script>


<template>
    <div class="page-header">

        <!-- 首页 -->
        <div v-if="route.path === '/home'" ref="homeRef" class="home">
            <el-image src="https://cn-sy1.rains3.com/testasd/bg1.png" fit="cover"
                class="banner"></el-image>

            <div class="content">
                <div class="title">Blog</div>
                <div class="saying">明天将会更好.</div>
            </div>
            <div class="mask"></div>
            <div class="scroll-bottom" v-if="showScrollToBottom" @click="scrollToBottom">
                <MynauiChevronDownSolid class=" w-[2rem] h-[2rem] text-white scroll-icon" />
            </div>
        </div>
        <!-- 文章详情 -->
        <div v-else-if="route.path === '/article'" class="article">
            <el-image src="https://cn-sy1.rains3.com/testasd/1729018179565-ChatGPT-OpenAI-logo.webp-scaled.jpg"
                fit="cover" class="banner"></el-image>
            <div class="content text-white">
                <div class="title mb-[0.4rem]">{{ getArticle.title }}</div>
                <!-- info -->
                <div class="info text-md mb-3 flex flex-wrap justify-center items-center max-w-[60vw]:">
                    <div class="item mr-[0.3rem] flex items-center">
                        <LetsIconsDateRangeDuotone class="w-[1rem] h-[1rem]" />
                        <span>发表于{{ getArticle.createTime }}</span>
                    </div>
                    <div class="item mr-[0.3rem] flex items-center">
                        <MaterialSymbolsLightUpdate class="w-[1rem] h-[1rem]" />
                        <span>更新于{{ getArticle.updateTime }}</span>
                    </div>
                    <!-- 分类 -->
                    <div class="item mr-[0.3rem] flex items-center">
                        <PepiconsPrintLineY />
                        <RiLayoutGrid2Fill class="w-[1rem] h-[1rem]" />
                        <span>{{ getArticle.cartegory }}</span>

                    </div>
                    <div class="item mr-[0.3rem] flex items-center">
                        <PepiconsPrintLineY />
                        <MageTag2 class="w-[1rem] h-[1rem]" />
                        <span>{{ getArticle.tags.join(', ') }}</span>
                        <PepiconsPrintLineY />
                    </div>
                    <!-- 浏览量 -->
                    <div class="item mr-[0.3rem] flex items-center">
                        <IconoirThumbsUp class="w-[1rem] h-[1rem]" />
                        <span>浏览次数{{ getArticle.views }}</span>
                        <PepiconsPrintLineY />
                        <LetsIconsViewLight />
                        <span>点赞量{{ getArticle.likes }}</span>
                    </div>
                </div>
            </div>
            <div class="mask"></div>
        </div>
        <!-- other -->
        <div v-else class="other">
            <el-image src="https://cn-sy1.rains3.com/testasd/1729018179565-ChatGPT-OpenAI-logo.webp-scaled.jpg"
                fit="cover" class="banner"></el-image>
            <div class="content">
                <div class="title flex items-center">
                    <component :is="route.meta.icon" class="mr-1"></component>
                    {{ route.name }}
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.page-header {
    width: 100%;

    .banner {
        width: 100%;
        height: 100%;
    }

    .content {
        z-index: 2;
        position: absolute;
        top: 50%;
        left: 50%;
        max-width: 60%;
        text-align: center;
        transform: translate(-50%, -50%);

        .title {
            font-size: 2.2rem;
            font-weight: bold;
            color: #fff;
        }

        .saying {
            font-size: 1.4rem;
            color: #fff;
        }
    }

    .home {
        position: relative;
        width: 100%;
        height: 100vh;

        .scroll-bottom {
            cursor: pointer;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            bottom: 10px;
            z-index: 2;

            .scroll-icon {
                animation: bounce 1.5s infinite;
            }
        }
    }

    .article {
        position: relative;
        width: 100%;
        height: 25rem;
        overflow: hidden;
    }

    .other {
        position: relative;
        width: 100%;
        height: 25rem;
        overflow: hidden;
    }

    .mask {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 1;
        background: rgba(0, 0, 0, .4);
    }



    @keyframes bounce {

        0%,
        100% {
            opacity: 1;
            transform: translateY(-25%);
            animation-timing-function: cubic-bezier(0.2, 0.29, 0.1, 0.46);
        }

        50% {
            opacity: 0.5;
            transform: translateY(0);
            animation-timing-function: cubic-bezier(0.53, 0.07, 0.46, 0.47);
        }
    }
}
</style>