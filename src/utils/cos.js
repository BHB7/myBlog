import COS from 'cos-js-sdk-v5'

// 上传文件，file 为选择的文件
// export const upload = (file) => {
//   // stsUrl 临时密钥服务
//   const stsUrl = `https://blogs.vocucc.cn/api/getKeyAndCredentials?filename=${file.name}`

//   return new Promise((resolve, reject) => {
//     fetch(stsUrl)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('获取上传路径和临时密钥失败: ' + response.statusText)
//         }
//         return response.json()
//       })
//       .then((data) => {
//         console.log('getKeyAndCredentials:', data)
//         const {
//           TmpSecretId,
//           TmpSecretKey,
//           SessionToken,
//           StartTime,
//           ExpiredTime,
//           Bucket,
//           Region,
//           Key
//         } = data.data

//         // 创建 JS SDK 实例，传入临时密钥参数
//         const cos = new COS({
//           SecretId: TmpSecretId,
//           SecretKey: TmpSecretKey,
//           SecurityToken: SessionToken,
//           StartTime,
//           ExpiredTime
//         })

//         // 上传文件
//         cos.uploadFile(
//           {
//             Bucket,
//             Region,
//             Key,
//             Body: file, // 要上传的文件对象
//             onProgress: (progressData) => {
//               console.log('上传进度：', progressData)
//             }
//           },
//           (err, data) => {
//             if (err) {
//               console.error('上传失败:', err)
//               reject(err)
//             } else {
//               console.log('上传结束', data)
//               resolve({ data }) // 返回上传结果和 URL
//             }
//           }
//         )
//       })
//       .catch((error) => {
//         console.error('错误:', error)
//         reject(error)
//       })
//   })
// }

import request from './request'

// 上传文件，file 为选择的文件
export const upload = (file) => {
  const formData = new FormData()
  formData.append('file', file)

  return new Promise((resolve, reject) => {
    request
      .post('/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then((response) => {
        console.log('上传成功:', response.data)
        resolve(response.data)
      })
      .catch((error) => {
        console.error('上传失败:', error)
        reject(error)
      })
  })
}
