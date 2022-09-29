/*
 * drip form全局配置
 * @Author: jiangxiaowei
 * @Date: 2022-09-21 16:41:46
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: 2022-09-22 13:38:06
 */

import { createContext, useContext } from 'react'

export type UndefinedComponentFn = (param: {
  theme?: string
  type?: string
  fieldKey: string
}) => string

export type GlobalOptions = Partial<{
  // （一般情况无需设置）true： formData、unitedSchema变化会触发reducer的reload false：formData和unitedSchema变化不会触发重新渲染
  reload: boolean
  // 使用未定义的组件（主题中查找不到该组件） tip：提示无法找到主题xxx中的xx组件，请确认是否倒入 hidden:直接隐藏该组件，控制台提示
  undefinedComponent:
    | {
        type: 'tips'
        value: string | UndefinedComponentFn
        showTitle: boolean
      }
    | {
        type: 'console'
        consoleType: 'log' | 'warn' | 'error'
        value: string | UndefinedComponentFn
        showTitle: boolean
      }
}>

// 默认全局配置
export const defaultGlobalOptions: GlobalOptions = {
  reload: true,
  undefinedComponent: {
    type: 'tips',
    showTitle: true,
    value: ({ theme, type, fieldKey }) => {
      if (theme && type) {
        return `无法找到主题${theme}中的${type}组件，请确认是否导入`
      } else {
        return `无法找到自定义组件${fieldKey}，请确认是否导入`
      }
    },
  },
}

export const globalOptionsContext =
  createContext<GlobalOptions>(defaultGlobalOptions)

// 返回上一次的value值
const useGlobalOptions = (): GlobalOptions => useContext(globalOptionsContext)

export default useGlobalOptions