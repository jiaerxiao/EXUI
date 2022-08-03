/*
 * @Author: 贾二小 jiaerxiao@outlook.com
 * @Date: 2022-04-21 21:37:25
 * @LastEditors: 贾二小 jiaerxiao@outlook.com
 * @LastEditTime: 2022-07-07 20:00:00
 * @FilePath: /exui/src/apis/types/user.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export interface IUser {
  user: {
    id: number
    name: string
    sex: number
    email: string
    real_name?: any
    home?: any
    avatar?: any
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
    avatar_url: string
    permissions: string[]
  }
  menu: MenuModel[]
  permissions?: string[]
}

export interface ILogin {
  token: string
}

export interface ILoginForm {
  account: string
  password: string
}
