/*
 * @Author: 贾二小
 * @Date: 2022-08-05 23:23:51
 * @LastEditTime: 2022-08-13 19:27:56
 * @LastEditors: 贾二小
 * @FilePath: /exui/src/apis/menu.ts
 */
import { http } from '@/plugins/axios'

export function getMenuList(page = 1, params: Record<any, any> = {}) {
  return http.request<MenuModel[], ResponsePageResult<MenuModel>>({
    url:
      `menu?page=${page}&` +
      Object.entries(params)
        .map(([k, v]) => `${k}=${v}`)
        .join('&'),
  })
}

export function menuTree() {
  return http
    .request<MenuModel[]>({
      url: 'menu/tree',
    })
    .then((r) => r.data)
}

export function myMenu() {
  return http
    .request<MenuModel[]>({
      url: 'menu/my',
    })
    .then((r) => r.data)
}
