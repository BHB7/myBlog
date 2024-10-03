import request from '@/utils/request'
/**
 * 获取全部文章
 * @param {String} manner 类型 new 最新 hot 最热
 * @returns List[]
 */
export const getArticleList = () => {
  //  // 配置基础地址 http://localhost:7777/article/articleList?pageNum=1&pageSize=10&categoryId=1
  return request.get(`/articles`)
}

/**
 * 通过aid 获取文章详情
 * get /articles/aid
 */
export const getArticleDetails = (aid) => {
  // console.log(aid)
  return request.get(`/articles/${aid}`) // 添加 return 关键字
}

/**
 * 通过aid 获取文章的评论列表
 */
export const getCommentList = (aid) => {
  return request.get(`/comments/articles/new/${aid}`)
}

/**
 *
 * 提交评论
 */
export const addComment = (aid, content) => {
  return request.post('/comments', {
    article_id: aid,
    content
  })
}

/**
 * 评论点赞
 */
export const addLike = (cid) => {
  return request.post('/comments/likes', {
    cid
  })
}

/**
 * 发布文章
 * @param { String } uid 用户id
 * @param { String } title 文章的标题
 * @param { String } tag 文章的分类
 * @param { String } content 文章的内容
 * @param { String } imgUrl 文章的封面
 * @return { Array } 响应体
 */
export const addArticleU = (obj) => {
  const { uid, title, content, tag, imgUrl } = obj
  return request.post('/articles', {
    uid,
    title,
    tag,
    content,
    imgUrl
  })
}
