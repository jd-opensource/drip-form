import { Map, UnitedSchema } from '@jdfed/utils'

export type UnitedSchemaAtom = {
  type: string | string[]
  title: string
  ui: {
    type: string
  } & Map
} & Map

/**
 * 表单组件配置信息
 */
export type FieldConfigType = {
  // 左侧列表对应的icon
  icon: string
  // 渲染所需的基础属性，用于拖拽到中间区域的渲染
  unitedSchema: UnitedSchemaAtom
  // 右侧配置面板中，该field可配置的的非通用属性
  styleSchema: UnitedSchema['schema']
  // 校验关键字
  keywords?: {
    // 通用校验关键字
    common?: Array<string>
    // 业务校验关键字
    business?: Array<string>
  }
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
export type FieldItemMap = Record<string, FieldConfigType>
