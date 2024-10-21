import request from '@/utils/request'
/**
 * 获取全部文章
 * @param {String} manner 类型 new 最新 hot 最热
 * @returns List[]
 */
export const getArticleListService = () => {
  console.log('请求')
  //  // 配置基础地址 http://localhost:7777/article/articleList?pageNum=1&pageSize=10&categoryId=1
  return request.get(`/article`)
}
/**
 * 获取分类
 *
 * @returns
 */
export const getCategoryService = () => {
  return request.get('article/category/articles')
}

/**
 * 通过aid 获取文章详情
 * get /articles/aid
 */
export const getArticleDetailsService = (aid) => {
  // console.log(aid)
  return request.get(`/article/${aid}`) // 添加 return 关键字
}
