/*
 * @Author: 贾二小 jiaerxiao@outlook.com
 * @Date: 2022-07-01 22:26:59
 * @LastEditors: 贾二小
 * @LastEditTime: 2022-08-16 00:24:45
 * @FilePath: /EXUI/types/model.d.ts
 */

interface MenuModel {
  id?: number
  pid?: number
  name: string
  path?: string
  redirect?: string
  meta?: {
    title?: string
    icon?: any
    type?: string
    affix?: boolean
    auth?: boolean
    isClick?: boolean
    route?: string
    hidden?: boolean
  }
  children?: MenuModel[]
}
//用户模型
type UserModel = {
  avatar: string
  permissions: string[]
  id: number
  name: string
  sex: number
  email: string
  real_name?: any
  home?: any
  wechat?: any
  email_verified_at: string
  mobile_verified_at?: any
  created_at: string
  updated_at: string
  lock?: any
  favour_count: number
  favorite_count: number
  is_super_admin: boolean
  roles: RoleModel[]
}
//角色模型
type RoleModel = {
  id: number
  name: string
  site_id: number
  guard_name: string
  created_at: string
  updated_at: string
  permissions: PermissionModel[]
}
//权限模型
type PermissionModel = {
  id: number
  title: string
  name: string
  module: string
  guard_name: string
  created_at: string
  updated_at: string
}
interface IUserModel {
  user?: UserModel
  menu?: MenuModel[]
  permissions?: string[]
}

interface RoleModel {
  id: number
  created_at: string
  guard_name: string
  name: string
  site_id: number
  title: string
  updated_at: string
  permissions: {
    title: string
    name: string
  }[]
}
