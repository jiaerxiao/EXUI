/*
 * @Author: 贾二小
 * @Date: 2022-08-05 23:23:51
 * @LastEditTime: 2022-08-17 16:26:53
 * @LastEditors: 贾二小
 * @FilePath: /EXUI/src/apis/menu.ts
 */
import { http } from '@/plugins/axios'

export function get(params: Record<any, any> = {}) {
  return http.request<MenuModel[], ResponsePageResult<MenuModel>>({ url: 'menu', params })
}

export function add(data: MenuModel) {
  return http.request({ url: 'menu', method: 'POST', data })
}

export function find(id: number) {
  return http.request<MenuModel>({ url: `menu/${id}` }).then((r) => r.data)
}

export function update(data: MenuModel) {
  return http.request({ url: `/menu/${data.id}`, method: 'PUT', data })
}

export function del(id: number) {
  return http.request({ url: `menu/${id}`, method: 'DELETE' })
}

export function menuTree() {
  return http.request<MenuModel[]>({ url: 'menu/tree' }).then((r) => r.data)
}

export function myMenu() {
  return http.request<MenuModel[]>({ url: 'menu/my' }).then((r) => r.data)
}
