import { Flow } from './../flowHandle/type'
import type { Map } from '../common/type'
import { GetKey, Action } from '../type'
import type { Dispatch } from 'react'
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
  // 容器padding
  padding: string
  paddingTop: number | string
  paddingBottom: number | string
  paddingRigth: number | string
  paddingLeft: number | string
}> | null

type DescriptionItem =
  | {
      type: 'icon'
      title: string
      trigger?: 'click' | 'hover'
    }
  | {
      type: 'text'
      title: string
    }
  | null
export type Description = DescriptionItem | Array<DescriptionItem>
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
  color: string
  fontSize: number | string
  showColon?: boolean
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
 * @param {string} fieldKey 必填 表单change触发，更改formData的key值
 * @param {function} onChange 可选 表单触发change事件后的回调
 * @param {object} options 可选 表单字段特殊处理配置。注意：options中只能有一个字段的值是true。否则不会对特殊数据进行格式化
 * @param {func} dispatch 操作context
 */
export type OnChange =
  | (({
      val,
      dispatch,
      fieldKey,
      getKey,
      prevFieldData,
      // 注意目前只有select表单支持这个字段（看后续是否有场景其它表单也需要）
      fieldData,
    }: {
      val: any
      dispatch: Dispatch<Action>
      getKey: GetKey
      fieldKey: string
      prevFieldData: any
      // 注意目前只有select表单支持这个字段（看后续是否有场景其它表单也需要）
      fieldData: any
    }) => void)
  | string

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
  onChange?: OnChange
  flow?: Flow
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
  validateTime?: string
  requiredMode?: 'default' | 'empty'
  title?: string
  ui?: Map
  schema?: Array<Map>
  items?: Array<Map> | Map
} & Map

export type TypePathItem = {
  type: string
  fatherKey: string
  title: string
  unitedSchemaKey: string
}

export type TypePath = Record<string, TypePathItem>
