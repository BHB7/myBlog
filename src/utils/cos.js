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
