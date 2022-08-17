/*
 * @Author: 贾二小 jiaerxiao@outlook.com
 * @Date: 2022-07-01 22:26:59
 * @LastEditors: 贾二小
 * @LastEditTime: 2022-08-17 17:30:24
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
  id?: number
  name: string
  sex: number
  email: string
  real_name?: any
  home?: any
  wechat?: any
  email_verified_at: string
  mobile_verified_at?: any
  created_at?: string
  updated_at?: string
  lock?: any
  favour_count: number
  favorite_count: number
  is_super_admin: boolean
  roles: RoleModel[]
}
//角色模型
interface RoleModel {
  id?: number
  guard_name: string
  name: string
  title: string
  updated_at?: string
  created_at?: string
  permissions?: PermissionModel[]
}

//权限模型
type PermissionModel = {
  id?: number
  title: string
  name: string
  module: string
  guard_name: string
  created_at?: string
  updated_at?: string
}
interface IUserModel {
  user: UserModel
  menu: MenuModel[]
  permissions?: string[]
}

interface ConfigModel {
  id?: number
  key: string
  value: string
  title: string
  category: string
  updated_at?: string
  created_at?: string
}
