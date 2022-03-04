import type { UnitedSchema } from '@jdfed/utils'
import type { UiComponents } from '@jdfed/drip-form'
import type { Field } from '@generator/fields/types'
import type {
  HeaderConfig,
  ComponentsData,
  ViewportConfig,
  Options,
} from '@generator/store'

export type GeneratorType = {
  // 由外部导入的联合schema，用于初始化
  schema?: UnitedSchema
  //添加的额外主题
  theme?: UiComponents
  // 左侧拖拽区域展示控制（若配置了components,该选项无效）
  customComponents?: Array<Field>
  // 组件自定义（自定义左侧组件区域、viewport区域、编辑区域（属性配置、校验配置））
  components?: ComponentsData
  options?: Options
  /**
   * v1 废弃API，请使用options代替
   */
  // 即将废弃 头部配置 （推荐用options）
  headerConfig?: HeaderConfig
  // 即将废弃 可视区配置 （推荐用options）
  viewportConfig?: ViewportConfig
  // 即将废弃 导出的文案 (推荐使用options)
  exportText?: string
  // 即将废弃 是否渲染Header (推荐使用options)
  renderLeftHeader?: () => JSX.Element
  // 即将废弃 自定义导出JSON事件 (推荐使用options)
  customExport?: (innerHandle: () => void) => void
}

export type GeneratorRef = {
  schema: UnitedSchema
}
