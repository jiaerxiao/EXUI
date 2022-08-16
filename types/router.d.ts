/*
 * @Author: 贾二小
 * @Date: 2022-08-15 14:48:47
 * @LastEditTime: 2022-08-16 18:56:40
 * @LastEditors: 贾二小
 * @FilePath: /EXUI/types/router.d.ts
 */
import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    title?: string
    auth?: boolean
    menu?: MenuModel
    enterClass?: string
    leaveClass?: string
    permission?: string
    type?: 'menu' | 'iframe' | 'link' | 'button'
    icon?: string
    affix?: boolean
  }
}
