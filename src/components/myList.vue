<template>
  <ul>
    <li v-for="(item, index) in 3" :key="index" class="flex w-full h-20 items-center my-5">
      <!-- 封面 -->
      <div class="h-full xl:w-40 md:w-28 w-20 rounded-md overflow-hidden mx-2">
        <img
          class="w-full h-full object-cover transition delay-100 hover:scale-110"
          src="@/assets/test.png"
          alt=""
        />
      </div>
      <!-- 描述 -->
      <article class="text-pretty">
        <p class="w-full h-10 text-ellipsis overflow-hidden text-sm font-light">
          专访腾讯姚建华腾讯 AI Lab 为何瞄准单细胞蛋白质组学
        </p>
      </article>
    </li>
  </ul>
</template>
