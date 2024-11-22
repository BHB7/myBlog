<script setup>
import PageHeader from '@/components/page-header/index.vue'
import { useRoute } from 'vue-router';

const route = useRoute()

const wideList = ['/home', '/article']
</script>


<template>
    <div class="main-container">
        <PageHeader></PageHeader>
        <div :class="[wideList.includes(route.path) ? 'max-w-[1280px]' : 'max-w-[880px]', 'mx-auto', 'md:px-[40px]', 'md:py-[60px]','px-[10px]', 'py-[60px]']">
            <slot></slot>
        </div>
    </div>
    
</template>


<style lang="scss" scoped></style>