import type { Map } from '../common/type'

/**
 * 在联合Schema中，某个节点的类型
 */
export type FieldAtomType = {
  fieldKey?: string | number
} & Map

export type ContainerStyle = Partial<{
  // 表单宽度
  width: number | string
  // 容器margin-top
  marginTop: number | string
  // 容器margin-right
  marginRight: number | string
  // 容器margin-bottom
  marginBottom: number | string
  // 容器margin-left
  marginLeft: number | string
  // 容器margin
  margin: string
}> | null
export type Description = {
  type: 'icon' | 'text'
  title: string
} | null
export type TitlePlacement = 'left' | 'right' | 'bottom' | 'top'
export type Theme = 'antd' | 'babel-ui' | 'drip-design' | string
export type TitleUi = Partial<{
  // 标题宽度
  width: number | string
  // 标题margin-top
  marginTop: number | string
  // 标题margin-right
  marginRight: number | string
  // 标题margin-bottom
  marginBottom: number | string
  // 标题margin-left
  marginLeft: number | string
  // 标题margin
  margin: string
  // 标题垂直对齐方式
  verticalAlign: 'center' | 'top' | 'bottom'
  // 标题水平对齐方式
  textAlign: 'left' | 'right' | 'center'
  // 是否展示必填*号
  requiredIcon: boolean
  placement: TitlePlacement
}> | null

type Properties = {
  [propName: string]: {
    type: string
    title?: TitleUi
    showTitle?: boolean
    containerStyle?: ContainerStyle
    theme?: Theme
    description?: Description
    [propName: string]: unknown
  }
}

/**
 * UiSchema的最小原子
 */
export type UiSchema = {
  formMode?: 'edit' | 'view' | 'generator'
  mode: 'add' | 'normal' | 'collapse' | 'tuple' | 'fixed'
  theme: Theme
  type: string
  containerStyle?: ContainerStyle
  properties: Properties
  order: Array<string | number>
  title?: TitleUi
  [propName: string]: unknown
}

/**
 * DataSchema的最小原子
 */
export type DataSchema = {
  type: string
  validateTime: 'submit' | 'change'
  requiredMode: 'default' | 'empty'
  properties?: Map
  items?: Array<Map> | Map
  required?: Array<string | number>
  errorMessage?: {
    required: Map
    properties?: Map
    items?: Map
    [propName: string]: unknown
  }
} & Map

/**
 * 联合Schema格式
 */
export type UnitedSchema = {
  theme?: 'antd' | 'babel-ui' | 'drip-design' | string
  validateTime?: 'submit' | 'change'
  requiredMode?: 'default' | 'empty'
  title?: string
  ui?: Map
  schema?: Array<Map>
  items?: Array<Map> | Map
} & Map
