/*
 * @Author: 贾二小
 * @Date: 2022-04-21 21:11:50
 * @LastEditTime: 2022-07-12 00:13:31
 * @LastEditors: 贾二小
 * @FilePath: /exui/vite/util.ts
 */
import _ from 'lodash'
export function parseEnv(env: Record<string, any>): ImportMetaEnv {
  const envs: any = _.cloneDeep(env)

  Object.entries(env).forEach(([key, value]) => {
    if (value == 'true' || value == 'false') envs[key] = value == 'true' ? true : false
    else if (/^\d+$/.test(value)) envs[key] = Number(value)
    else if (value == 'null') envs[key] = null
    else if (value == 'undefined') envs[key] = undefined
  })
  return envs
}
