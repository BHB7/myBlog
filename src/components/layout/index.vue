<script setup>
import Header from './header/index.vue'
import Main from './main/index.vue'
import Footer from './footer/index.vue'
</script>


<template>
    <Header></Header>
    <Main>
        <router-view></router-view>
    </Main>
    <Footer></Footer>
</template>


<style lang="scss" scoped></style>