/*
 * @Author: 贾二小
 * @Date: 2022-08-17 15:07:57
 * @LastEditTime: 2022-08-17 16:08:45
 * @LastEditors: 贾二小
 * @FilePath: /EXUI/src/apis/role.ts
 */
import { http } from '@/plugins/axios'

export function get(params: Record<any, any> = {}) {
  return http.request<RoleModel[], ResponsePageResult<RoleModel>>({ url: 'role', params })
}

export function add(data: RoleModel) {
  return http.request({ url: 'role', method: 'POST', data })
}

export function find(id: number) {
  return http.request<RoleModel>({ url: `role/${id}` }).then((r) => r.data)
}

export function update(data: RoleModel) {
  return http.request({ url: `/role/${data.id}`, method: 'PUT', data })
}

export function del(id: number) {
  return http.request({ url: `role/${id}`, method: 'DELETE' })
}
