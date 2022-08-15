/*
 * @Author: 贾二小
 * @Date: 2022-04-21 21:37:13
 * @LastEditTime: 2022-08-14 18:38:05
 * @LastEditors: 贾二小
 * @FilePath: /exui/src/apis/user.ts
 */
import { http } from '@/plugins/axios'

export function getUserList(params: Record<any, any> = {}) {
  return http.request<UserModel[], ResponsePageResult<UserModel>>({
    url: 'user',
    params,
  })
}

export function currentUserInfo() {
  return http
    .request<UserModel>({
      url: `current_user_info`,
    })
    .then((r) => r.data)
}

export function getUser(id: number) {
  return http
    .request<UserModel>({
      url: `user/${id}`,
    })
    .then((r) => r.data)
}
