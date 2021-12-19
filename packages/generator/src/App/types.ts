import type { UnitedSchema } from '@jdfed/utils'
import type { UiComponents } from '@jdfed/drip-form'
import type { Field } from '@generator/fields/types'
import type { HeaderConfig, ComponentsData } from '@generator/store'

export type GeneratorType = {
  // 由外部导入的联合schema，用于初始化
  schema?: UnitedSchema
  //添加的额外主题
  theme?: UiComponents
  // 左侧拖拽区域展示控制（若配置了components,该选项无效）
  customComponents?: Array<Field>
  // 组件自定义（自定义左侧组件区域、viewport区域、属性配置、校验配置）
  components?: ComponentsData
  headerConfig?: HeaderConfig
  /**
   * 不推荐，后续版本会合并以下api；推荐使用headerConfig代替
   */
  // 导出的文案 (推荐使用headerConfig.exportText)
  exportText?: string
  // 是否渲染Header (推荐使用headerConfig.renderLeftHeader)
  renderLeftHeader?: () => JSX.Element
  // 自定义导出JSON事件 (推荐使用headerConfig.customExport)
  customExport?: (innerHandle: () => void) => void
}

export type GeneratorRef = {
  schema: UnitedSchema
}
