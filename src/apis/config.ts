/*
 * @Author: 贾二小
 * @Date: 2022-08-17 16:09:10
 * @LastEditTime: 2022-08-17 17:37:12
 * @LastEditors: 贾二小
 * @FilePath: /EXUI/src/apis/config.ts
 */
import { http } from '@/plugins/axios'

export function get(params: Record<any, any> = {}) {
  return http.request<ConfigModel[], ResponsePageResult<ConfigModel>>({ url: 'config', params })
}

export function add(data: ConfigModel) {
  return http.request({ url: 'config', method: 'POST', data })
}

export function find(id: number) {
  return http.request<ConfigModel>({ url: `config/${id}` }).then((r) => r.data)
}

export function update(data: ConfigModel) {
  return http.request({ url: `config/${data.id}`, method: 'PUT', data })
}

export function del(id: number) {
  return http.request({ url: `config/${id}`, method: 'DELETE' })
}
