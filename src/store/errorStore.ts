/*
 * @Author: 贾二小
 * @Date: 2022-07-01 22:31:11
 * @LastEditTime: 2022-08-09 00:48:52
 * @LastEditors: 贾二小
 * @FilePath: /exui/src/store/errorStore.ts
 */
import { defineStore } from 'pinia'

export default defineStore('errorStore', {
  state: () => {
    return {
      errors: {} as Record<string, any>,
    }
  },
  getters: {
    getError(state) {
      return (name: string) => state.errors[name]
    },
    hasError(state) {
      return Object.keys(state.errors).length > 0
    },
  },
  actions: {
    resetError() {
      this.errors = {}
    },
    setErrors(errors: Record<string, string[]>) {
      Object.entries(errors).forEach(([key, value]) => {
        this.errors[key] = value[0]
      })
    },
    clearError(name: string) {
      if (this.errors[name]) {
        delete this.errors[name]
      }
    },
  },
})
