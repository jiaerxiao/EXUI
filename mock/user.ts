/*
 * @Author: 贾二小
 * @Date: 2022-04-21 21:19:46
 * @LastEditTime: 2022-07-12 00:22:40
 * @LastEditors: 贾二小
 * @Description:
 * @FilePath: /exui/mock/user.ts
 */
import { Random } from 'mockjs'
import { MockMethod } from 'vite-plugin-mock'

export default [
  {
    url: '/api/user/info',
    method: 'post',
    response: () => {
      let data = {
        user: {
          id: 1,
          name: '向军大叔',
          sex: 1,
          email: '2300071698@qq.com',
          real_name: null,
          home: null,
          avatar: '/img/avatar.jpeg',
          wakatime: null,
          email_verified_at: '2022-04-09T13:35:43.000000Z',
          mobile_verified_at: null,
          created_at: '2022-04-09T13:35:45.000000Z',
          updated_at: '2022-04-09T13:35:45.000000Z',
          lock: null,
        },
        menu: [
          {
            name: 'home',
            path: '/',
            meta: { title: '首页', icon: 'Avatar' },
            children: [
              {
                name: 'home',
                path: '/home',
                meta: { title: '控制台', icon: 'Chicken' },
              },
              {
                name: 'home1',
                path: '/home1',
                meta: { title: '控制台1', icon: 'Chicken' },
              },
              {
                name: 'home2',
                path: '/home2',
                meta: { title: '控制台2', icon: 'Chicken' },
              },
            ],
          },
          {
            name: 'abort',
            path: '/abort',
            meta: { title: '关于', icon: 'DataAnalysis' },
          },
        ],
      } as IUserModel

      return {
        code: 200,
        status: 'success',
        data,
      }
    },
  },
  {
    url: '/api/login',
    method: 'post',
    response: () => {
      return {
        code: 200,
        message: '登录成功',
        status: 'success',
        data: {
          token: Random.string(32),
        },
      }
    },
  },
] as MockMethod[]
