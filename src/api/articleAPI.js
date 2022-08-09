// 文章相关内容的API接口，都封装在这个模块中
import request from '@/utils/request'

// 按需导出一个API接口
export const getArticleListAPI = function (_page, _limit) {
  return request.get('/articles', {
    params: {
      _page,
      _limit
    }
  })
}
