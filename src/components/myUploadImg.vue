<script setup>
import { ref, defineEmits } from 'vue'
import axios from 'axios'
import CryptoJS from 'crypto-js' // 使用 crypto-js 进行加密
import { upload } from '../utils/cos'
// 获取 Vercel 注入的环境变量 (确保在 Vercel 设置了相关环境变量)
const BUCKET = import.meta.env.VITE_BUCKET // 存储桶
const PATH = import.meta.env.VITE_PATH // 文件路径
const USERNAME = import.meta.env.VITE_USERNAME // UPYUN 用户名
const PASSWORD = import.meta.env.VITE_PASSWORD // UPYUN 密码
const img_base_url = import.meta.env.VITE_URL // UPYUN 密码

const imgLocalUrl = ref()

const emit = defineEmits(['setImgUrl'])
// 传递给父组件
const setImgUrl = () => {
  emit('setImgUrl', imgLocalUrl.value)
}

// 文章封面图片上传
const uploadImg = async (e) => {
  const file = e.target.files[0]
  console.log(file)
  imgLocalUrl.value = await upload(file)
  // imgLocalUrl.value = URL.createObjectURL(file)

  // /* 创建FormData */
  // const uploadData = new FormData()
  // uploadData.append('file', file)

  // const url = `https://v0.api.upyun.com/${BUCKET}`

  // /* 计算policy */
  // const policyObj = {
  //   bucket: BUCKET,
  //   'save-key': `${PATH}/{filename}{.suffix}`,
  //   expiration: Math.floor(new Date().getTime() / 1000) + 600 // 过期时间为当前时间 + 600秒
  // }
  // const policy = btoa(JSON.stringify(policyObj))
  // uploadData.append('policy', policy)

  // /* 计算 Authorization */
  // const passwordMd5 = CryptoJS.MD5(PASSWORD).toString(CryptoJS.enc.Hex)
  // const arr = ['POST', `/${BUCKET}`, policy]
  // const hmacSha1 = CryptoJS.HmacSHA1(arr.join('&'), passwordMd5).toString(CryptoJS.enc.Base64)

  // const authorization = `UPYUN ${USERNAME}:${hmacSha1}`
  // uploadData.append('authorization', authorization)

  // console.log(uploadData)

  // axios({ method: 'POST', url, data: uploadData })
  //   .then((res) => {
  //     console.log('上传成功:', res.data)
  //     imgLocalUrl.value = img_base_url + res.data.url // 上传成功后显示图片
  //     console.log(imgLocalUrl.value)
  //     setImgUrl() // 传递图片URL给父组件
  //   })
  //   .catch((e) => {
  //     console.error('上传失败', e)
  //     alert('上传失败')
  //   })
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
  align-items: space-between;
  gap: 20px;
  cursor: pointer;
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
