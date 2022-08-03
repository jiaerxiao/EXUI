/*
 * @Author: 贾二小 jiaerxiao@outlook.com
 * @Date: 2022-07-01 22:26:59
 * @LastEditors: 贾二小
 * @LastEditTime: 2022-07-07 22:51:43
 * @FilePath: /exui/types/model.d.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

interface MenuModel {
  name: string
  path?: string
  meta?: {
    title?: string
    icon?: IconType
    type?: string
    affix?: boolean
    auth?: boolean
    isClick?: boolean
    route?: string
    hidden?: boolean
  }
  children?: MenuModel[]
}

interface UserModel {
  id: number
  name: string
  sex: number
  email: string
  real_name?: any
  home?: any
  weibo?: any
  wechat?: any
  github?: any
  qq?: any
  wakatime?: any
  email_verified_at: string
  mobile_verified_at?: any
  created_at: string
  updated_at: string
  lock?: any
  credit1?: any
  credit2?: any
  credit3?: any
  credit4?: any
  credit5?: any
  credit6?: any
  favour_count: number
  favorite_count: number
  avatar: string
  permissions: string[]
  is_super_admin: boolean
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
