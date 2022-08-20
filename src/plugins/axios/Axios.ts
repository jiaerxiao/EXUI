import { isLogin } from '@/utils/helper'
/*
 * @Author: 贾二小
 * @Date: 2022-04-21 21:39:09
 * @LastEditTime: 2022-08-20 13:42:08
 * @LastEditors: 贾二小
 * @FilePath: /EXUI/src/plugins/axios/Axios.ts
 */
import { RouteEnum } from '@/enum/routeEnum'
import { CacheEnum } from '@/enum/cacheEnum'
import store from '@/utils/store'
import router from '@/router/register'
import axios, { AxiosRequestConfig } from 'axios'
import errorStore from '@/store/errorStore'

export default class Axios {
  private instance
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors()
  }

  public async request<T, D = ResponseResult<T>>(config: AxiosRequestConfig) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await this.instance.request<D>(config)
        resolve(response.data)
      } catch (error) {
        reject(error)
      }
    }) as Promise<D>
  }

  private interceptors() {
    this.interceptorsRequest()
    this.interceptorsResponse()
  }

  private interceptorsRequest() {
    this.instance.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        errorStore().resetError()
        config.headers = {
          Accept: 'application/json',
          Authorization: `Bearer ${store.get(CacheEnum.TOKEN_NAME)}`,
        }
        return config
      },
      (error) => {
        return Promise.reject(error)
      },
    )
  }
  private interceptorsResponse() {
    this.instance.interceptors.response.use(
      (response) => {
        const {
          data: { message },
        } = response
        if (message) ElMessage.success(message)
        return response
      },
      (error) => {
        const {
          response: { status, data },
        } = error
        switch (status) {
          case 401:
            store.remove(CacheEnum.TOKEN_NAME)
            router.push({ name: 'login' })
            break
          case 422:
            errorStore().setErrors(data.errors)
            break
          case 403:
            ElMessage.error('你没有操作权限')
            break
          default:
            if (data.message) ElMessage.error(data.message)
        }
        return Promise.reject(error)
      },
    )
  }
}
