import type { ElementType } from 'react'
import type {
  ContainerStyle,
  Action,
  Map,
  Get,
  UiSchema,
  DataSchema,
} from '@jdfed/utils'
import type { ErrorsMap } from '@jdfed/hooks'
import type {
  FuncType,
  UiComponents,
  CustomComponents,
  OnValidate,
} from '../DripForm/type'
import { Dispatch } from 'react'

export type ContainerType = {
  object: ElementType
  array: ElementType
  default: ElementType
}

export type ContainerHoc = (
  FormItem: JSX.Element,
  formItemProps: {
    fieldKey: string
    error: string
    containerStyle: ContainerStyle
    type: string
    parentMode: string
    parentType: string
    // 是否是第一个表单
    isFirst: boolean
    uiProp: Record<string, any>
    theme: string
  }
) => JSX.Element

export type RenderFnProps = {
  // ajv是否已经设置了默认值
  hasDefault: boolean
  dataSchema: DataSchema
  uiSchema: UiSchema
  // 错误信息
  errors: ErrorsMap
  formData: Map
  onQuery?: FuncType
  onValidate?: OnValidate
  // 当前表单父级表单的fieldKey
  parentFormDataKey?: string
  // uiSchema父级表单的key
  parentUiSchemaKey?: Array<string>
  // dataSchema父级表单的key
  parentDataSchemaKey?: Array<string>
  // 不同type类型对应渲染的容器 ArrayContainer 和objectContainer特有
  containerMap?: ContainerType
  // 允许入参高阶组件，在Container进行包裹
  containerHoc?: ContainerHoc
  get: Get
  dispatch: Dispatch<Action>
  uiComponents: UiComponents
  getKey?: Map
  customComponents?: CustomComponents
  // Array类型表单当前渲染的数据是数组中第几个
  currentArrayKey?: number
  // 是否是第一层级
  isRoot?: boolean
  // 数组容器对应的react key映射
  arrayKey: Record<string, Array<string>>
}
