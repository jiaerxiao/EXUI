/// <reference types="vite/client" />
/// <reference types="vue/macros-global" />

interface ImportMetaEnv {
  VITE_APP_NAME: string
  VITE_APP_VERSION: string
  VITE_APP_LOGO: string
  VITE_API_URL: string
  VITE_MOCK_ENABLE: boolean
  VITE_ROUTER_AUTOLOAD: boolean
  VITE_MENU_UNIQUE_OPENED: boolean
  VITE_ICON_SIZE: number
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
