import { serve } from '@/utils/request'

// 获取用户列表信息
export function getUserInfo(data) {
  return serve({
    url: '/system/user_list',
    method: 'get',
    params: data
  })
}