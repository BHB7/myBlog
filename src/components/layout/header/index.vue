<script setup>
import LineMdMoonAltToSunnyOutlineLoopTransition from '~icons/line-md/moon-alt-to-sunny-outline-loop-transition';
import LineMdMoonTwotoneAltLoop from '~icons/line-md/moon-twotone-alt-loop';
import { defineAsyncComponent, ref } from 'vue';
import { useRouter } from 'vue-router'
import { useThemeStore } from '@/stores'
import { storeToRefs } from 'pinia';
const router = useRouter()

const { getIsDark } = storeToRefs(useThemeStore())

const isDark = ref(getIsDark.value)
const onChange = () => {
    useThemeStore().setToggleDark()
}

const menuList = [
    {
        title: "首页",
        icon: defineAsyncComponent(() => import('~icons/majesticons/home')),
        path: '/',
        children: []
    },
    {
        title: "时间轴",
        icon: defineAsyncComponent(() => import('~icons/lets-icons/time-duotone')),
        path: '/archive',
        children: []
    },
    {

        title: "说说",
        icon: defineAsyncComponent(() => import('~icons/basil/chat-outline')),
        path: '/talk',
        children: []
    },
    {
        title: "更多",
        icon: defineAsyncComponent(() => import('~icons/icon-park-outline/more-app')),
        path: '/more',
        children: [
            {
                title: '关于',
                path: '/more/about',
                icon: defineAsyncComponent(() => import('~icons/bitcoin-icons/info-filled')),
            }
        ]
    },
]


const handelSelect = (path) => {
    console.log(path)
    if (!path) return
    router.push(path)
}
</script>


<template>
    <div class="header-container">
        <div class="left">
            <svg-icon name="logo" class="logo"></svg-icon>
        </div>
        <div class="right">
            <el-menu :ellipsis="false" class="el-menu-popper-demo" mode="horizontal" @select="handelSelect">
                <div v-for="(item) in menuList" :key="item.path">
                    <el-sub-menu v-if="item.children.length" :index="item.path">
                        <template #title>
                            <component :is="item.icon" class="icon text-white"></component>
                            <span class=" text-white">{{ item.title }}</span>
                        </template>
                        <el-menu-item v-for="(subMenu) in item.children" :key="subMenu.path" :index="subMenu.path">
                            <component :is="subMenu.icon" class="icon text-black"></component>
                            <span class=" text-black">{{ subMenu.title }}</span>
                        </el-menu-item>
                    </el-sub-menu>

                    <el-menu-item v-else :key="item.path" :index="item.path">
                        <component :is="item.icon" class="icon"></component>
                        {{ item.title }}
                    </el-menu-item>
                </div>

            </el-menu>
            <el-avatar>m</el-avatar>
            <!-- <GgDarkMode></GgDarkMode> -->
            <el-switch v-model="isDark" size="large" class=" mx-[1rem]"  @change="onChange" >
                <template #active-action>
                    <LineMdMoonTwotoneAltLoop></LineMdMoonTwotoneAltLoop>
                </template>
                <template #inactive-action>
                    <LineMdMoonAltToSunnyOutlineLoopTransition></LineMdMoonAltToSunnyOutlineLoopTransition>
                </template>
            </el-switch>
         
        </div>
    </div>
</template>


<style lang="scss" scoped>
.header-container {
    display: flex;
    // justify-content: space-between;
    align-content: center;

    .left {
        width: 20%;

        .logo {
            transition: all .5s;
            width: 3rem;
            height: 3rem;

            &:hover {
                transform: rotate(180deg);
            }
        }
    }

    .right {
        flex: 1;
        display: flex;
        justify-content: end;
        align-items: center;

        .icon {
            margin-right: 0.2rem;
            width: 1rem;
            height: 1rem;
        }
    }

    .icon {
        margin-right: 0.2rem;
        width: 1rem;
        height: 1rem;
    }
}
</style>