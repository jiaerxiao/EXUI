/*
 * @Author: 贾二小
 * @Date: 2022-08-13 16:02:58
 * @LastEditTime: 2022-08-17 16:13:22
 * @LastEditors: 贾二小
 * @FilePath: /EXUI/types/api.d.ts
 */
//请求响应结构
interface ResponseResult<T> {
  code: number
  message: string
  status: 'success' | 'error'
  data: T
}

//分页请求响应结构
interface ResponsePageResult<T> {
  data: T[]
  links: { url?: string; label: string; active: boolean }
  meta: {
    current_page: number
    from: number
    last_page: number
    links: { first: string; last: string; prev?: any; next?: any }[]
    path: string
    per_page: number
    to: number
    total: number
  }
}
