/*
 * 全局配置
 * @Author: jiangxiaowei
 * @Date: 2021-12-17 11:22:05
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: 2022-05-23 11:12:03
 */
import { atom, selector } from 'recoil'
import { curTypeAtom, selectedAtom } from '../unclassified'
import { nanoid } from 'nanoid'
import type { UnitedSchemaAtom } from '@generator/fields/types'
import type { ControlFuc } from '@jdfed/drip-form'
// form-generator支持的配置
export type HeaderConfig = Partial<{
  // 是否展示header区域
  showHeader: boolean
  // 是否展示logo组件
  showLogo: boolean
  // 是否展示 导入JSON 按钮
  showUploadJSON: boolean
  // 是否展示 JSON编辑 按钮
  showEditJSON: boolean
  // 是否展示 表单预览 按钮
  showPreviewForm: boolean
  // 是否展示 导出JSON 按钮
  showExportJSON: boolean
  // 导出json自定义文案
  exportText: string
  // 自定义exportjson函数
  customExport: (exportJsonFn: () => void) => void
  // 自定义左侧logo组件
  renderLeftHeader: () => JSX.Element
}>

export type ViewportConfigItem =
  | boolean
  | ((param: { type: string; selectedFieldKey: string | null }) => boolean)

type ViewportConfigKey = 'showActionBar' | 'showDeleteIcon'

export type ViewportConfig = Partial<
  Record<ViewportConfigKey, ViewportConfigItem> & {
    pointerEvents: 'none' | 'auto'
  }
>

export type Options = {
  // 头部相关配置
  headerConfig: HeaderConfig
  // viewport相关配置
  viewportConfig: ViewportConfig
  // 新增表单 fieldKey 生成函数
  fieldKeyFn: (unitedSchema: UnitedSchemaAtom) => string
  // 未选中表单时，点击左侧组件，新增表单的位置
  addFieldLocation: 'top' | 'bottom'
  // 属性配置
  propertyConfig: Partial<{
    // 属性配置联动
    control: ControlFuc
  }>
}

export const optionsAtom = atom<Options>({
  key: 'globalOptions',
  default: {
    headerConfig: {
      showHeader: true,
      showLogo: true,
      showUploadJSON: true,
      showEditJSON: true,
      showPreviewForm: true,
      showExportJSON: true,
      exportText: '导出JSON',
    },
    viewportConfig: {
      showActionBar: true,
      showDeleteIcon: true,
      pointerEvents: 'none',
    },
    propertyConfig: {},
    fieldKeyFn: (unitedSchema) => `${unitedSchema.ui.type}_${nanoid(6)}`,
    addFieldLocation: 'bottom',
  },
})

// vieport区域配置（布尔值）
export const viewportConfigSelector = selector<
  Partial<Record<ViewportConfigKey, boolean>>
>({
  key: 'viewporConfigValue',
  get: ({ get }) => {
    const type = get(curTypeAtom)
    const selectedFieldKey = get(selectedAtom)
    const viewportConfig = get(optionsAtom).viewportConfig
    const viewportConfigValue: Record<string, boolean> = {}
    const getBoolean = (param: ViewportConfigItem): boolean => {
      if (typeof param === 'function') {
        return param({ selectedFieldKey, type })
      }
      return param
    }
    Object.entries(viewportConfig).map(([key, value]) => {
      if (['showActionBar', 'showDeleteIcon'].includes(key)) {
        viewportConfigValue[key] = getBoolean(value as ViewportConfigItem)
      }
    })
    return viewportConfigValue
  },
})

// propertyConfig配置
export const propertyConfigSelector = selector({
  key: 'propertyConfigSelector',
  get: ({ get }) => {
    const propertyConfig = get(optionsAtom).propertyConfig
    return propertyConfig
  },
})
