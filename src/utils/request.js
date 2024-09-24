// 用户信息
import { useUserStore } from '@/stores/index'
// 请求的统一配置
import axios from 'axios'
import router from '@/router'
const userStore = useUserStore()
console.log(userStore)
// import { ElLoading, ElMessage } from 'element-plus'
// 创建axios实例
const request = axios.create({
  baseURL: 'https://blogs.vocucc.cn/api', // 基础URL
  timeout: 5000, // 请求超时时间
  headers: {
    'Content-Type': 'application/json', // 设置默认请求头
    Authorization: 'Bearer token', // 设置 Authorization 请求头
    'X-Requested-With': 'XMLHttpRequest' // 设置 X-Requested-With 请求头
  }
})

// 添加请求拦截器
request.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    // 判断用户是否已登录，若已登录则携带token
    if (userStore.userInfo) {
      // 如果用户信息存在，则继续判断是否存在 token
      if (userStore.userInfo.token) {
        // 在请求头中添加Authorization字段，并携带token
        config.headers.Authorization = `Bearer ${userStore.userInfo.token}`
      }
    } else {
      // 如果用户信息不存在，则执行相应的操作
    }

    return config
  },
  function (error) {
    // 对请求错误做些什么
    // ElMessage.error('请求失败') // 请求错误时显示警告信息
    return Promise.reject(error)
  }
)

// 添加响应拦截器
request.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么 默认axios会包装一层data
    const res = response.data
    if (res.code === 1) {
      return res
    } else if (res.code === 0) {
      // 抛出异常
      return Promise.reject(res.err)
    }
    if (error.response.status === 401) {
      window.scrollTo(0, 0)
      // ElMessageBox.confirm('请先登录后，评论', 'Blog', {
      //   confirmButtonText: '去登录',
      //   cancelButtonText: '在逛逛',
      //   type: 'warning'
      // })
      //   .then(() => {
      //     // 跳转登录
      //     // 跳转登录，并携带原始路由参数
      //     const aid = router.currentRoute.value.query.aid
      //     router.replace({
      //       path: '/login',
      //       query: {
      //         s: 1,
      //         aid: aid
      //       }
      //     })
      //   })
      //   .catch(() => {})
    }
    if (response.status !== 200) {
      // 如果响应状态码不是200或者返回的code不为0，表示请求失败
      // NProgress.done()
      // ElMessage.error(res.msg) // 显示错误消息
      return Promise.reject(res.err) // 返回一个错误的promise
    } else {
      return response.data // 返回响应数据
    }
  },
  function (error) {
    // 超出2xx范围的状态码都会触发该函数。
    // 对响应错误做点什么
    console.log(error)
    if (error.request.status === 0) {
      // ElMessage.error('网络异常')
    }
    NProgress.done()
    return Promise.reject(error) // 返回一个错误的promise
  }
)

// 导出
export default request
