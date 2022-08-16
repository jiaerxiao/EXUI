/*
 * @Author: 贾二小
 * @Date: 2022-04-21 21:48:19
 * @LastEditTime: 2022-08-15 23:48:49
 * @LastEditors: 贾二小
 * @FilePath: /EXUI/types/viteEnv.d.ts
 */
/// <reference types="vite/client" />
/// <reference types="vue/macros-global" />

interface ImportMetaEnv {
  VITE_APP_NAME: string
  VITE_APP_VERSION: string
  VITE_APP_LOGO: string
  VITE_API_URL: string
  VITE_MOCK_ENABLE: boolean
  VITE_BASE_HOME: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
