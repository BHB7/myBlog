import { createRouter, createWebHistory } from 'vue-router';
import LineMdSunnyLoop from '~icons/line-md/sunny-loop';
import LineMdChatRoundDots from '~icons/line-md/chat-round-dots';
const routes = [
  {
    path: '/test',
    name: 'test',
    component: () => import('@/views/test/index.vue')
  },
  {
    path: '/',
    name: 'Layout',
    component: () => import('@/components/layout/index.vue'),
    redirect: '/home', // 放在这里
    children: [ // 注意这里是 children 而不是 childrens
      {
        name: 'home',
        path: 'home',
        component: () => import('@/views/home/index.vue')
      },
      {
        name: '时间轴',
        path: 'archive',
        meta:{
          icon: LineMdSunnyLoop
        },
        component: () => import('@/views/archive/index.vue')
      },
      {
        name: '说说',
        path: 'talk',
        meta: {
          icon: LineMdChatRoundDots
        },
        component: () => import('@/views/talk/index.vue')
      },
      {
        name: 'article',
        path: 'article',
        component: () => import('@/views/article/index.vue')
      },
      {
        name: 'more',
        path: 'more',
        children: [
          {
            name: 'about',
            path: 'about',
            component: () => import('@/views/about/index.vue')
          }
        ]
      },
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;