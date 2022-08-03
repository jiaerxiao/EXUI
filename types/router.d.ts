import { IconType } from '@icon-park/vue-next/es/all'
import 'vue-router'
import { IMenu } from '#/menu'
import { IconType } from '@icon-park/vue-next/es/all'

declare module 'vue-router' {
  interface RouteMeta {
    title?: string
    auth?: boolean
    menu?: IMenu
    enterClass?: string
    leaveClass?: string
    permission?: string
    type?: 'menu' | 'iframe' | 'link' | 'button'
    icon?: IconType
    affix?: boolean
  }
}
