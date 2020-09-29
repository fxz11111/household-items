import { serve } from '@/utils/request'

// 获取商品列表
export function getGoodInfo(data) {
  return serve({
    url: '/all_product',
    method: 'get',
    params: data
  })
}