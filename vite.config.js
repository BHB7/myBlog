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
  resolve:{
    alias:{
      "@": resolve(__dirname, "./src"),
    }
  }
  ,
  server:{
    open: true
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
  css:{
    postcss:{
      plugins: [
        tailwindcss,
        autoprefixer
      ]
    }
  }
})