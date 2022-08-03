/*
 * @Author: 贾二小
 * @Date: 2022-04-21 21:37:13
 * @LastEditTime: 2022-07-12 00:01:49
 * @LastEditors: 贾二小
 * @FilePath: /exui/src/apis/userApi.ts
 */
import { http } from '@/plugins/axios'

export function info() {
  return http.request<IUserModel>({
    url: 'user/info',
    method: 'post',
  })
}

export function login(data: { account: string; password: string }) {
  return http.request<{ token: string }>({
    url: 'login',
    method: 'post',
    data,
  })
}
