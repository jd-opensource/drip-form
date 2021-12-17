/*
 * 全局配置
 * @Author: jiangxiaowei
 * @Date: 2021-12-17 11:22:05
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: 2021-12-17 17:29:35
 */
import { atom } from 'recoil'

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
