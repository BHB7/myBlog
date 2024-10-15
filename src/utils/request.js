import axios from 'axios'
import { useUserStore } from '@/stores'
// import { ElNotification } from 'element-plus'
import router from '@/router' // 假设你使用了 Vue Router
import config from '@/utils/constant' // 导入你提供的配置文件

// 创建实例
const service = axios.create({
  baseURL: 'http://127.0.0.1:8758', // 请求地址
  timeout: 5000 // 超时
})

// 添加请求拦截器
service.interceptors.request.use(
  function (requestConfig) {
    // 在发送请求之前做些什么
    const userStore = useUserStore()
    if (userStore.token) {
      requestConfig.headers.Authorization = `${userStore.token}` // 确保token格式正确
    }
    return requestConfig
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
service.interceptors.response.use(
  function (response) {
    // 对响应数据做些什么
    const data = response.data

    if (response.status === 200 && data.code === config.CODE_SUCCESS) {
      return Promise.resolve(data)
    } else {
      ElNotification({
        title: 'Error',
        message: '请求失败',
        type: 'error'
      })
      return Promise.reject(data)
    }
  },
  function (error) {
    // 对响应错误做些什么
    const errorResponse = error.response
    if (errorResponse) {
      const { status, data } = errorResponse
      if (status === config.CODE_TOKEN_EXPIRED) {
        ElNotification({
          title: 'Error',
          message: 'token失效，请重新登录',
          type: 'error'
        })
        // 重定向到登录页面
        setTimeout(() => {
          router.replace('/login') // 使用replace避免返回历史中的问题
        }, 1000)
      } else {
        ElNotification({
          title: 'Error',
          message: data.msg || '请求错误',
          type: 'error'
        })
      }
    } else {
      ElNotification({
        title: 'Error',
        message: '网络错误，请稍后再试',
        type: 'error'
      })
    }

    return Promise.reject(error)
  }
)

// 暴露service
export default service
