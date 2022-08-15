/*
 * @Author: 贾二小
 * @Date: 2022-04-21 21:39:09
 * @LastEditTime: 2022-08-09 23:07:55
 * @LastEditors: 贾二小
 * @FilePath: /exui/src/plugins/axios/index.ts
 */
import Axios from './Axios'
const http = new Axios({
  baseURL: '/api',
  timeout: 10000,
})
export default () => {}
export { http }
