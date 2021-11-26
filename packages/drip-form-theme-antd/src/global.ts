import { CSSProperties } from 'react'
import type { GetKey } from '@jdfed/hooks'
export declare type Dispatch = (arg0: {
  key?: string
  type: string
  [propName: string]: any
}) => void

export declare type CommonProps = Partial<{
  // 是否禁用表单
  disabled?: boolean
  placeholder?: string
  style?: CSSProperties
  onChange?: string
  queryFunc?: (...args: any[]) => any
  requestCache?: boolean
}> & {
  fieldKey: string
  dispatch: Dispatch
  fieldData: any
  [propName: string]: any
  getKey: GetKey
}
