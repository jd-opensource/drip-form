/*
 * @Author: jiangxiaowei
 * @Date: 2020-05-30 13:34:38
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: 2022-09-21 17:34:06
 */
import type { Set, Merge, SetType, DeleteField, AddField } from './useSchema'
import type { Get, GetKey } from '@jdfed/utils'
import type { Validate, ErrorsMap } from './useValidate'
import type { MarginType, TitleWidth } from './useTitle'
import type { GlobalOptions, UndefinedComponentFn } from './useGlobalOption'
export { default as useModal } from './useModal'
export { default as useRefProp } from './useRefProp'
export { default as usePrevious } from './usePrevious'
export { default as useEventCallback } from './useEventCallback'
export { default as useClickOne } from './useClickOne'
export { default as useValidate } from './useValidate'
export { default as useField } from './useField'
export { default as useQuery } from './useQuery'
export { default as useArray } from './useArray'
export { default as useContainer } from './useContainer'
export { default as useSchema } from './useSchema'
export { default as useGetKey } from './useGetKey'
export { default as useTitle } from './useTitle'
export {
  default as useRequiredModeContext,
  RequiredModeContext,
} from './useRequiredModeContext'
export {
  default as useGlobalOptions,
  globalOptionsContext,
  defaultGlobalOptions,
} from './useGlobalOption'
export type {
  Get,
  Set,
  Merge,
  DeleteField,
  AddField,
  GetKey,
  SetType,
  Validate,
  ErrorsMap,
  MarginType,
  TitleWidth,
  GlobalOptions,
  UndefinedComponentFn,
}
