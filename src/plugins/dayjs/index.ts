/*
 * @Author: 贾二小
 * @Date: 2022-05-21 13:44:54
 * @LastEditTime: 2022-08-09 23:07:20
 * @LastEditors: 贾二小
 * @FilePath: /exui/src/plugins/dayjs/index.ts
 */
import * as dayjs from 'dayjs'
import 'dayjs/locale/zh-cn' // 导入本地化语言
export default () => {
  dayjs.locale('zh-cn') // 使用本地化语言
}
