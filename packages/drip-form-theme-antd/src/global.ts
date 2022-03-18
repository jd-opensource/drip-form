import { CSSProperties, Dispatch as DispatchR } from 'react'
import type { GetKey } from '@jdfed/hooks'
import type { Action } from '@jdfed/utils'
export declare type Dispatch = DispatchR<Action>

export declare type CommonProps = Partial<{
  // 是否禁用表单
  disabled: boolean
  style: CSSProperties
  onChange: string
  queryFunc: (...args: any[]) => any
  requestCache: boolean
  formMode: 'edit' | 'generator' | 'view'
}> & {
  fieldKey: string
  dispatch: Dispatch
  fieldData: any
  [propName: string]: any
  getKey: GetKey
}
