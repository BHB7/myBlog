<script setup>
import { ref, defineEmits } from 'vue'
import axios from 'axios'
import CryptoJS from 'crypto-js'
import { upload } from '../utils/cos'

const BUCKET = import.meta.env.VITE_BUCKET // 存储桶
const PATH = import.meta.env.VITE_PATH // 文件路径
const USERNAME = import.meta.env.VITE_USERNAME // UPYUN 用户名
const PASSWORD = import.meta.env.VITE_PASSWORD // UPYUN 密码
const img_base_url = import.meta.env.VITE_URL // 图片基础 URL

const imgLocalUrl = ref(null)
const emit = defineEmits(['setImgUrl'])

const setImgUrl = () => {
  emit('setImgUrl', imgLocalUrl.value)
}

const uploadImg = async (e) => {
  const file = e.target.files[0]
  if (!file) return
  const res = await upload(file)
  console.log('上传成功:', res)
  imgLocalUrl.value = res.url // 上传成功后显示图片
  setImgUrl() // 传递图片URL给父组件
}
</script>

<template>
  <label class="custum-file-upload" for="file">
    <img v-if="imgLocalUrl" :src="imgLocalUrl" alt="上传的图片" />
    <div v-else class="box">
      <div class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 24 24">
          <!-- SVG 内容 -->
        </svg>
      </div>
      <div class="text">
        <span>上传图片</span>
      </div>
      <input type="file" id="file" accept="image/*" @change="uploadImg" />
    </div>
  </label>
</template>

<style scoped>
.custum-file-upload img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.custum-file-upload {
  height: 200px;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px dashed #cacaca;
  background-color: rgba(255, 255, 255, 1);
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0px 48px 35px -48px rgba(0, 0, 0, 0.1);
}
.custum-file-upload .icon {
  display: flex;
  align-items: center;
  justify-content: center;
}
.custum-file-upload .icon svg {
  height: 80px;
  fill: rgba(75, 85, 99, 1);
}
.custum-file-upload .text {
  display: flex;
  align-items: center;
  justify-content: center;
}
.custum-file-upload .text span {
  font-weight: 400;
  color: rgba(75, 85, 99, 1);
}
.custum-file-upload input {
  display: none;
}
</style>
