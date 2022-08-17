/*
 * @Author: 贾二小
 * @Date: 2022-04-21 21:37:13
 * @LastEditTime: 2022-08-17 17:44:57
 * @LastEditors: 贾二小
 * @FilePath: /EXUI/src/apis/user.ts
 */
import { http } from '@/plugins/axios'

export function get(params: Record<any, any> = {}) {
  return http.request<UserModel[], ResponsePageResult<UserModel>>({ url: 'user', params })
}

export function add(data: UserModel) {
  return http.request({ url: 'user', method: 'POST', data })
}

export function find(id: number) {
  return http.request<UserModel>({ url: `user/${id}` }).then((r) => r.data)
}

export function update(data: UserModel) {
  return http.request({ url: `user/${data.id}`, method: 'PUT', data })
}

export function del(id: number) {
  return http.request({ url: `user/${id}`, method: 'DELETE' })
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
