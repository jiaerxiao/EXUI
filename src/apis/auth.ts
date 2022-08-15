/*
 * @Author: 贾二小
 * @Date: 2022-08-05 17:09:32
 * @LastEditTime: 2022-08-05 22:38:15
 * @LastEditors: 贾二小
 * @FilePath: /exui/src/apis/auth.ts
 */
import { http } from '@/plugins/axios'

type ResponseData = {
  user: UserModel
  token: string
}

export function login(data: { account: string; password: string }) {
  return http.request<ResponseData>({
    url: `login`,
    method: 'post',
    data,
  })
}

type RegisterFormData = {
  account: string
  password: string
  password_confirmation: string
  code: string
}

export function register(data: RegisterFormData) {
  return http.request<ResponseData>({
    url: `register`,
    method: 'post',
    data,
  })
}

export function forgetPassword(data: any) {
  return http.request<ResponseData>({
    url: 'account/forget-password',
    method: 'post',
    data,
  })
}
