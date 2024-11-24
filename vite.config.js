import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { resolve } from 'path'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
// 自动导入icons导入插件
import Icons from 'unplugin-icons/vite';
import { createSvgIconsPlugin } from "vite-plugin-svg-icons"
// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://api.vocucc.cn',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        secure: false, // 如果使用 HTTPS，确保设置为 true
      },
      '/kwd': {
        target: 'https://search.kuwo.cn',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        secure: false, // 如果使用 HTTPS，确保设置为 true
      },
      '/scHot': {
        target: 'https://kuwo.cn/openapi/v1/www/search',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/scHot/, ''),
        secure: false, // 如果使用 HTTPS，确保设置为 true
      }
    },
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    // svg
    createSvgIconsPlugin({
      iconDirs: [resolve(process.cwd(), "src/icons/svg")]
    }),
    // icon自动导入
    Icons({
      autoInstall: true
    })
  ],
  css: {
    postcss: {
      plugins: [
        tailwindcss,
        autoprefixer
      ]
    }
  },

  // 打包输出
  build: {
    sourcemap: false,
    // 消除打包大小超过500kb警告
    chunkSizeWarningLimit: 4000,
    rollupOptions: {
      input: {
        index: resolve("index.html"),
      },
      // 静态资源分类打包
      output: {
        chunkFileNames: "static/js/[name]-[hash].js",
        entryFileNames: "static/js/[name]-[hash].js",
        assetFileNames: "static/[ext]/[name]-[hash].[ext]",
      },
    },
  },
})