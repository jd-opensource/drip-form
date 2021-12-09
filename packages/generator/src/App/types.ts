import type { UnitedSchema } from '@jdfed/utils'
import type { UiComponents } from '@jdfed/drip-form'
import type { FieldConfigType } from '@generator/fields/types'

export type GeneratorType = {
  // 由外部导入的联合schema，用于初始化
  schema?: UnitedSchema
  // 自定义导出JSON事件
  customExport: (innerHandle: () => void) => void
  // 导出的文案
  exportText?: string
  // 是否渲染Header
  renderLeftHeader?: () => JSX.Element
  //添加的额外主题
  theme?: UiComponents
  // 左侧拖拽区域展示控制
  customComponents?: Array<FieldConfigType>
}

export type GeneratorRef = {
  schema: UnitedSchema
}
