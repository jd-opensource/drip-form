import type { Map, UnitedSchema } from '@jdfed/utils'

export type UnitedSchemaAtom = {
  type: string | string[]
  title: string
  ui: {
    type: string
  } & Map
} & Map

// 属性配置
type PropertyConfig = {
  // 样式配置自定义(若定义了schema，当前设置无效)
  styleSchema?: UnitedSchema['schema']
  // 整个属性配置面板自定义
  schema?: UnitedSchema['schema']
}

// 校验配置
type CheckConfig = {
  // 通用校验关键字
  common?: Array<string>
  // 业务校验关键字
  business?: Array<string>
}

/**
 * 表单组件配置信息
 */
export type Field = {
  // 左侧列表对应的icon
  icon: string
  // 表单对应的title（不填，默认使用unitedSchema.title）
  title?: string
  // 渲染所需的基础属性，用于拖拽到中间区域的渲染
  unitedSchema: UnitedSchemaAtom
  propertyConfig?: PropertyConfig
  checkConfig?: CheckConfig
  /**
   * 以下不推荐使用
   */
  // 同propertyConfig.styleSchema
  styleSchema?: UnitedSchema['schema']
}

/**
 * 支持的表单类型
 */
export type FieldItemKeys =
  | 'cascader'
  | 'checkbox'
  | 'colorPicker'
  | 'datePicker'
  | 'input'
  | 'number'
  | 'radio'
  | 'select'
  | 'slider'
  | 'switch'
  | 'timePicker'
  | 'treeSelect'
  | 'uploader'
  | 'text'

/**
 * 表单类型及其配置表
 */
export type FieldItemMap = Record<string, Field>
