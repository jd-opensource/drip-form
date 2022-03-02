/*
 * 全局配置
 * @Author: jiangxiaowei
 * @Date: 2021-12-17 11:22:05
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: 2022-03-02 13:05:11
 */
import { atom, selector } from 'recoil'
import { curTypeAtom, selectedAtom } from '../unclassified'
// form-generator支持的配置
export type HeaderConfig = {
  // 是否展示header区域
  showHeader?: boolean
  // 是否展示logo组件
  showLogo?: boolean
  // 是否展示 导入JSON 按钮
  showUploadJSON?: boolean
  // 是否展示 JSON编辑 按钮
  showEditJSON?: boolean
  // 是否展示 表单预览 按钮
  showPreviewForm?: boolean
  // 是否展示 导出JSON 按钮
  showExportJSON?: boolean
  // 导出json自定义文案
  exportText?: string
  // 自定义exportjson函数
  customExport?: (exportJsonFn: () => void) => void
  // 自定义左侧logo组件
  renderLeftHeader?: () => JSX.Element
}

export type ViewportConfigItem =
  | boolean
  | ((param: { type: string; selectedFieldKey: string | null }) => boolean)

type ViewportConfigKey = 'showActionBar' | 'showDeleteIcon'

export type ViewportConfig = Partial<
  Record<ViewportConfigKey, ViewportConfigItem>
>

// 头部自定义配置
export const headerConfigAtom = atom<HeaderConfig>({
  key: 'headerOptions',
  default: {
    showHeader: true,
    showLogo: true,
    showUploadJSON: true,
    showEditJSON: true,
    showPreviewForm: true,
    showExportJSON: true,
    exportText: '导出JSON',
  },
})

// vieport区域配置（可能为函数或布尔值）
export const viewportConfigAtom = atom<ViewportConfig>({
  key: 'viewportOptions',
  default: {
    // 是否展示操作栏 默认true
    showActionBar: true,
    // 是否展示删除 默认true
    showDeleteIcon: true,
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
    const viewportConfig = get(viewportConfigAtom)
    const viewportConfigValue: Record<string, boolean> = {}
    const getBoolean = (param: ViewportConfigItem): boolean => {
      if (typeof param === 'function') {
        return param({ selectedFieldKey, type })
      }
      return param
    }
    Object.entries(viewportConfig).map(([key, value]) => {
      viewportConfigValue[key] = getBoolean(value)
    })
    return viewportConfigValue
  },
})
