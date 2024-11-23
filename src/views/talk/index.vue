<script setup>
import { nextTick, onBeforeUnmount, onMounted, reactive, ref } from 'vue';
import LineMdUploadOutlineLoop from '~icons/line-md/upload-outline-loop';

const staticTalkList = [
    {
        id: 1,
        user_id: 1,
        nick_name: '张三',
        content: '想起来，我这人好像还过得不是这么如意，过得乱七八糟的',
        imageList: ['http://img.mrzym.top/FswlMLf30bR2MeXCgorQSkUQ3ky1'],
    },
    {
        id: 2,
        user_id: 2,
        nick_name: '里斯',
        content: '今天天气晴',
        imageList: ['http://img.mrzym.top/FswlMLf30bR2MeXCgorQSkUQ3ky1', 'http://img.mrzym.top/FswlMLf30bR2MeXCgorQSkUQ3ky1'],
    },
    {
        id: 3,
        user_id: 3,
        nick_name: '好嗨哟',
        content: '振作起来',
        imageList: ['http://img.mrzym.top/FswlMLf30bR2MeXCgorQSkUQ3ky1', 'http://img.mrzym.top/FswlMLf30bR2MeXCgorQSkUQ3ky1'],
    },
    {
        id: 4,
        user_id: 4,
        nick_name: '我是鸡哥',
        content: '想起来，我这人好像还过得不是这么如意，过得乱七八糟的',
        imageList: ['http://img.mrzym.top/FswlMLf30bR2MeXCgorQSkUQ3ky1', 'http://img.mrzym.top/FswlMLf30bR2MeXCgorQSkUQ3ky1'],
    },
    {
        id: 5,
        user_id: 5,
        nick_name: '新城',
        content: '发福了',
        imageList: ['http://img.mrzym.top/FswlMLf30bR2MeXCgorQSkUQ3ky1', 'http://img.mrzym.top/FswlMLf30bR2MeXCgorQSkUQ3ky1'],
    },
    {
        id: 6,
        user_id: 6,
        nick_name: '7z',
        content: '还是一如既往的Man',
        imageList: ['http://img.mrzym.top/FswlMLf30bR2MeXCgorQSkUQ3ky1', 'http://img.mrzym.top/FswlMLf30bR2MeXCgorQSkUQ3ky1'],
    },
    {
        id: 7,
        user_id: 7,
        nick_name: '好好好',
        content: '牛逼',
        imageList: ['http://img.mrzym.top/FswlMLf30bR2MeXCgorQSkUQ3ky1', 'http://img.mrzym.top/FswlMLf30bR2MeXCgorQSkUQ3ky1'],
    },
    {
        id: 8,
        user_id: 8,
        nick_name: '6TY',
        content: '困~~',
        imageList: ['http://img.mrzym.top/FswlMLf30bR2MeXCgorQSkUQ3ky1', 'http://img.mrzym.top/FswlMLf30bR2MeXCgorQSkUQ3ky1'],
    },
]

const observeDom = ref(null)
let observe = null
const talkList = ref([])
const params = reactive({
    currenPage: 1,
    pageSize: 5
})
const loadMore = ref(true)

const getTalkList = () => {
    let current = (params.currenPage - 1) * params.pageSize
    let sliceList = staticTalkList.slice(current, current + params.pageSize)
    talkList.value = params.currenPage === 1 ? sliceList : [...talkList.value, ...sliceList]
    if (talkList.value.length === staticTalkList.length) loadMore.value = false
}

const observeTalk = () => {
    observe = new IntersectionObserver((entries) => {
        entries.forEach((t) => {
            if (t.isIntersecting) {
                params.currenPage++
                console.log(111);

                getTalkList()
            }
        })
    })
    // nextTick(() => {
    observe.observe(observeDom.value)
    // })
}
const initTalk = () => {
    getTalkList()
    nextTick(() => {
        observeTalk()
    })
}
onMounted(() => {
    initTalk()
})

onBeforeUnmount(() => {
    observe && observe.unobserve(observeDom.value)
})
</script>


<template>
    <!-- 单个说说 卡片 -->
    <el-card class="w-[100%] mb-2" v-for="talk in talkList" :key="talk.id">
        <div class="talk-box w-[100%] p-[1rem]">
            <div class="talk-item flex md:flex-row flex-col mb-2">
                <!-- 头像 -->
                <div class="left md:block flex items-center mr-2 mb-4">
                    <el-avatar fit="cover" :size="64">{{ talk.nick_name }}</el-avatar>
                    <div class="nick-name text-xl ml-4 md:hidden">{{ talk.nick_name }}</div>
                </div>
                <div class="right flex flex-col items-start">
                    <div class="nick-name text-xl mb-2 md:block hidden">{{ talk.nick_name }}</div>
                    <div class="content mb-2">{{ talk.content }}</div>
                    <!-- 多张网格 -->
                    <div v-if="talk.imageList.length > 1" class="image grid grid-cols-3 gap-1">
                        <div v-for="img in talk.imageList" :key="img"
                            class="image-item overflow-hidden w-[6.3rem] h-[6.3rem]">
                            <el-image class="w-[100%] h-[100%]" fit="cover" :src="img"></el-image>
                        </div>
                    </div>
                    <!-- 单张大图 -->
                    <div v-else class="image">
                        <div class="image-item overflow-hidden w-[19.3rem] h-[19.3rem]">
                            <el-image class="w-[100%] h-[100%]" fit="cover" :src="talk.imageList[0]"></el-image>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </el-card>
    <!-- 尾部标记 用于判断动态加载数据 -->
    <div ref="observeDom" class="end-observer text-center flex items-center w-[100%] justify-center">
        <LineMdUploadOutlineLoop v-if="loadMore" class="mr-1" />
        {{ loadMore ? '上拉加载更多...' : '呜呜呜~ 已经到底啦' }}
    </div>
</template>


<style lang="scss" scoped></style>