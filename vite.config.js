import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools()],
  publicPath: './', //打包后的位置(如果不设置这个静态资源会报404)
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  base: '/',
  // 生产环境移除console.log的配置
  build: {
    // 默认是esbuild,但这里需要改成terser，并且想使用terser的话，需提前安装，命令为npm add -D
    //terser
    minify: 'terser',
    terserOptions: {
      compress: {
        //生产环境时移除console
        drop_console: true,
        drop_debugger: true
      }
    }
  },
  server: {
    proxy: {
      '/blog': {
        target: 'https://blogs.vocucc.cn/api',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/blog/, '')
      },
      '/scHot': {
        target: 'https://kuwo.cn/openapi/v1/www/search',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/scHot/, '')
      }
    }
  },
  css: {
    // css预处理器
    preprocessorOptions: {
      scss: {
        // 引入 handle.scss 这样就可以在全局中使用 handle.scss中预定义的变量了
        // 给导入的路径最后加上 ;
        additionalData: '@import "@/style/theme/handle.scss";'
      }
    }
  }
})
