/*
 * @Author: 贾二小
 * @Date: 2022-08-09 00:41:17
 * @LastEditTime: 2022-08-17 21:08:47
 * @LastEditors: 贾二小
 * @FilePath: /exui/src/utils/helper.ts
 */
import { CacheEnum } from '@/enum/cacheEnum'
import router from '@/router/register'
import useStore from '@/store/userStore'
import store from './store'

//是否是超级管理员
export function isSuperAdmin() {
  const storeUser = useStore()
  return Boolean(storeUser.info?.is_super_admin)
}

//是否登录
export function isLogin(): boolean {
  return !!store.get(CacheEnum.TOKEN_NAME)
}

//退出登录
export async function logout() {
  store.remove(CacheEnum.TOKEN_NAME)
  location.href = '/'
}

/**
 * 登录与注册后记录token
 * @param token
 */
export async function loginCallback(token: string) {
  store.set(CacheEnum.TOKEN_NAME, token)
  location.href = store.get(CacheEnum.REDIRECT_ROUTE_NAME)
}

/**
 * 限制点击频繁请求
 * @param fn 回调函数
 * @returns
 */
export function request(fn: (args: any) => Promise<any>) {
  let isSubmit = false
  return (args: any) => {
    if (isSubmit) return
    isSubmit = true
    return fn(args).finally(() => (isSubmit = false))
  }
}

/**
 * 权限判断
 * @param name 权限标识
 * @param site 站点
 * @returns
 */
export function access(name: string): boolean {
  const storeUser = useStore()

  if (isSuperAdmin()) return true

  return Boolean(storeUser.permissions.find((permission) => permission.name == name))
}

//根据URL生成样式类名
export function className() {
  return router.currentRoute.value.fullPath.replace(/\//g, '-').replace(/^\-|\-$/g, '')
}

/**
 * 数组数据转树形结构数据
 * @param data 数据列表
 * @param pid 父级ID
 * @returns
 */
export function arrayToTree(data: any[], pid: number = 0): any[] {
  return data.filter((item) => item.pid == pid).map((item) => ({ ...item, children: arrayToTree(data, item.id) }))
}

/**
 * 获取prop的值
 * @param prop
 * @param row
 * @returns
 */
export function getPropVal(prop: string[], row: any): string {
  return prop && prop.length > 0 ? getPropVal(prop, row[prop.shift()!]) : row
}
