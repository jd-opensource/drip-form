import type {
  ElementType,
  Dispatch as DispatchR,
  MutableRefObject,
} from 'react'
import type {
  UnitedSchema,
  Action,
  Map,
  Get,
  Theme,
  FetchApi,
} from '@jdfed/utils'
import type {
  Set,
  Merge,
  DeleteField,
  GetKey,
  AddField,
  GlobalOptions,
} from '@jdfed/hooks'
import type { ContainerHoc } from '../render/type'
import type { Plugin, Options } from 'ajv/dist/2019'
import type Ajv from 'ajv/dist/2019'

export type Dispatch = DispatchR<Action>

export type UiComponentType = {
  [propName: string]: any
} & {
  theme: string
}

// 支持混合模式
export type UiComponents = Partial<Record<Theme, UiComponentType>>

export type FieldData =
  | string
  | Record<string, unknown>
  | boolean
  | number
  | Array<unknown>

export type AsyncValidate = {
  type: 'change' | 'click' | 'submit'
  fn: (fieldData: FieldData) => any
}

export type OnValidate = Record<string, AsyncValidate>

export type FuncType = {
  [propName: string]: () => any
}

export type ControlFuc = ({
  formData,
  uiSchema,
  dataSchema,
  dispatch,
  changeKey,
  checking,
  get,
  set,
  deleteField,
  errors,
}: {
  uiSchema: Map
  dataSchema: Map
  formData: Map
  dispatch: Dispatch
  changeKey: string
  checking: boolean
  get: Get
  set: Set
  merge: Merge
  deleteField: DeleteField
  errors: Map
}) => void

export type CustomFunc = (
  val: any,
  dispatch: Dispatch,
  fieldKey: string,
  prevFieldData?: any
) => void

export type ParseFunc = (formData: Map | undefined) => Map
export type TransformFunc = (formData: Map | undefined) => void | Map

export type CustomComponents = Record<string, ElementType>

type FooterBtnFuncType = ({
  formData,
  errors,
  checking,
}: {
  formData: Map
  errors: Map
  checking: boolean
}) => void

export type DripFormEventType = {
  type: string
  payload: any
}

export type DripFormEventFuncType = (event: DripFormEventType) => any

/**
 * 供DripForm/index.tsx使用的组件入参
 */
export type DripFormRenderProps = {
  ajv: Ajv
} & DripFormProps

export type SubmitReturn = {
  formData: Record<string, any>
  errors: Map
  checking: boolean
}

/**
 * DripForm对外的ref的类型
 */
export type DripFormRefType = {
  reset: () => void
  submit: () => Promise<SubmitReturn>
  // 获取任意FieldKey对应的schema，根路径key为''
  get: Get
  // 设置任意FieldKey对应的schema，根路径key为''
  set: Set
  // 合并任意FieldKey对应的schema，根路径key为''
  merge: Merge
  // 获取fieldKey相对uiSchema、dataSchema、typeMap路径
  getKey: GetKey
  // 错误信息
  errors: Map
  // 是否在校验态
  checking: boolean
  // 【已废弃，请使用set】修改函数
  dispatch: Dispatch
  // 表单数据
  formData: Map
  // 仅适用于生成器的对象
  __generator__: {
    // 删除表单项并清除对应的schema
    deleteField: DeleteField
    // 添加表单项
    addField: AddField
  }
}

/**
 * 供DripFormContainer和DripForm使用的通用Props
 */
export type DripFormProps = {
  // 自定义Ajv插件
  plugins?: Array<Plugin<Options>> | Plugin<Options>
  unitedSchema: UnitedSchema
  // 表单数据
  formData?: Map
  uiComponents: UiComponents
  customComponents?: CustomComponents
  customFunc?: Record<string, CustomFunc | JSX.Element>
  control?: ControlFuc
  onQuery?: FuncType
  // 同 option.reload
  reload?: boolean
  onValidate?: OnValidate
  // 首轮外渲染时都会触发对formData的解析
  parse?: ParseFunc
  // 每次渲染完成时都会触发对formData的转化，转化在校验后执行
  transform?: TransformFunc
  // 允许入参高阶组件，针对renderCoreFn中的Container进行包裹，便于执行拖拽等操作
  containerHoc?: ContainerHoc
  onSubmit?: FooterBtnFuncType
  onMount?: (ref: MutableRefObject<DripFormRefType>) => void
  onCancel?: FooterBtnFuncType
  ajvOptions?: Options
  options?: GlobalOptions
  // 公共事件回调机制
  onEvent?: DripFormEventFuncType
  // 透传到每个组件的全局数据
  globalData?: Record<string, unknown>
  // 内部接口请求api
  fetchApi?: FetchApi
}
