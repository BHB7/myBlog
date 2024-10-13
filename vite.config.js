import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
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
  }
})
