<script setup>
import LineMdMoonAltToSunnyOutlineLoopTransition from '~icons/line-md/moon-alt-to-sunny-outline-loop-transition';
import LineMdMoonTwotoneAltLoop from '~icons/line-md/moon-twotone-alt-loop';
import LineMdMenu from '~icons/line-md/menu';
import { defineAsyncComponent, ref } from 'vue';
import { useRouter } from 'vue-router'
import { useThemeStore } from '@/stores'
import { storeToRefs } from 'pinia';
const router = useRouter()
// 侧边栏
const drawer = ref(false)
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

const handelDrawer = (flag) => {
    drawer.value = !drawer.value
}
</script>


<template>
    <div class="header-container">
        <div class="left flex md:w-[20%] w-[100%] md:justify-center justify-between items-center">
            <svg-icon name="logo" class="logo md:block hidden w-[2.5rem] h-[2.5rem]"></svg-icon>
            <LineMdMenu class="md:hidden block w-[1.5rem] h-[1.5rem]" @click="handelDrawer"></LineMdMenu>
           <h2 class="md:hidden block">7z</h2>
           <div class="md:hidden block">
               <el-switch v-model="isDark" size="large"  @change="onChange" >
                   <template #active-action>
                       <LineMdMoonTwotoneAltLoop></LineMdMoonTwotoneAltLoop>
                   </template>
                   <template #inactive-action>
                       <LineMdMoonAltToSunnyOutlineLoopTransition></LineMdMoonAltToSunnyOutlineLoopTransition>
                   </template>
               </el-switch>
           </div>
        </div>
        <div class="right md:flex flex-1 md:justify-end justify-center items-center hidden">
            <el-menu :ellipsis="false" class="el-menu-popper-demo " mode="horizontal" @select="handelSelect">
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
            <el-switch v-model="isDark" size="large" class="ml-[1rem]"  @change="onChange" >
                <template #active-action>
                    <LineMdMoonTwotoneAltLoop></LineMdMoonTwotoneAltLoop>
                </template>
                <template #inactive-action>
                    <LineMdMoonAltToSunnyOutlineLoopTransition></LineMdMoonAltToSunnyOutlineLoopTransition>
                </template>
            </el-switch>
        </div>
    </div>
    <!-- 侧边栏 -->
  <el-drawer size="80%" v-model="drawer" direction="ltr"   modal>
    <span>功能暂未完善</span>
  </el-drawer>

</template>


<style lang="scss" scoped>
.header-container {
    display: flex;
    // justify-content: space-between;
    align-content: center;





    .icon {
        margin-right: 0.2rem;
        width: 1rem;
        height: 1rem;
    }
}
</style>