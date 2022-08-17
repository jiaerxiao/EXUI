/*
 * @Author: 贾二小
 * @Date: 2022-04-21 21:48:19
 * @LastEditTime: 2022-08-17 18:15:22
 * @LastEditors: 贾二小
 * @FilePath: /EXUI/types/typings.d.ts
 */
interface FormFieldType {
  title: string
  name: string
  error_name?: string
  type?: 'input' | 'textarea' | 'image' | 'preview' | 'radio' | 'wangeditor' | 'markdown'
  options?: Record<keyof any, any>
  readonly?: boolean
  disabled?: boolean
  placeholder?: string
  value?: any
}

interface TableColumnsType {
  hide?: boolean
  sortable?: boolean
  prop: string
  label: string
  width?: number
  align?: 'left' | 'center' | 'right'
  type?: 'image' | 'date' | 'input' | 'radio' | 'tag'
  options: any
  search?: boolean
  fixed?: boolean
  tag_field?: string
  field?: string
  filters?: { text: string; value: string }[]
  showOverflowTooltip?: boolean
}

interface TableButton {
  title: string
  type?: 'primary' | 'success' | 'info' | 'warning' | 'danger'
  permission?: string
  action?: (model: any) => void
  component?: any
}
