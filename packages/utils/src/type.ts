import { Map, ClosestEdge } from './common/type'
import { UnitedSchema, UiSchema, DataSchema } from './schemaHandle/types'
export type Get = (fieldKey?: string) => {
  data: Map | undefined
  dataSchema: DataSchema
  uiSchema: UiSchema
}

export type GetKey = (
  fieldKey: string,
  type: 'uiSchema' | 'dataSchema' | 'data'
) => string

export type GetTypeKey = (fieldKey: string) => string | never

export type State = {
  typePath: Map
  uiSchema: UiSchema
  dataSchema: DataSchema
  // 表单数据
  formData: Record<string, any>
  // 错误信息
  errors: Record<string, string>
  // 是否正在校验
  checking: boolean
  // ajv是否已经将dataSchema中的默认值添加到formData中
  hasDefault: boolean
  // 当前可见的表单
  visibleFieldKey: Array<string>
  // 当前正在变动的表单
  changeKey: string
  // 数组容器对应的react key映射
  arrayKey: Record<string, Array<string>>
}

type ReloadAction = {
  type: 'reload'
} & State

type SetDataSchemaAction = {
  type: 'setDataSchema'
  dataSchema?: DataSchema
  isDelete?: boolean
} & Map

type SetUiSchemaAction = {
  type: 'setUiSchema'
  uiSchema?: UiSchema
} & Map

type SetFormDataAction = {
  type: 'setFormData'
  formData?: Map
} & Map

type DeleteFormDataAction = {
  type: 'deleteFormData'
  key: string
}

type DeleteFieldAction = {
  type: 'deleteField'
  fieldKey: string
  get: Get
  getKey: GetKey
  getTypeKey: GetTypeKey
}

type AddFieldAction = {
  type: 'addField'
  fieldKey: string
  closestEdge: ClosestEdge
  unitedSchema: UnitedSchema
  overFieldKey: string
  get: Get
  getKey: GetKey
  getTypeKey: GetTypeKey
  shouldDelete: boolean
}

type SetErrorAction =
  | ({
      type: 'setError'
    } & Record<string, string>)
  | {
      type: 'setError'
      ignore?: Array<string>
      errors?: Record<string, string>
    }

type DeleteErrorAction = {
  type: 'deleteError'
  key: string
}

type SetCheckingAction = {
  type: 'setChecking'
  checking: boolean
}

type SetVisibleFieldKeyAction = {
  type: 'setVisibleFieldKey'
  key: string
}

type DeleteVisibleFieldKeyAction = {
  type: 'deleteVisibleFieldKey'
  key: string
}

type SetDefaultSuccessAction = {
  type: 'setDefaultSuccess'
  hasDefault: boolean
}

type DeleteUiSchemaAction = {
  type: 'deleteUiSchema'
  key: string
}

// 数组容器设置映射的组件唯一key（避免删除导致的组件渲染问题）
type SetArrayKey = {
  type: 'setArrayKey'
  action: {
    // 添加或删除的位置
    order: number
    // 数组父级fieldKey
    fieldKey: string
    // 是否删除 默认添加
    isDelete?: boolean
  }
}

export type Action =
  | ReloadAction
  | SetDataSchemaAction
  | SetUiSchemaAction
  | SetFormDataAction
  | DeleteFormDataAction
  | DeleteFieldAction
  | AddFieldAction
  | SetErrorAction
  | DeleteErrorAction
  | SetCheckingAction
  | SetVisibleFieldKeyAction
  | DeleteVisibleFieldKeyAction
  | SetDefaultSuccessAction
  | DeleteUiSchemaAction
  | SetArrayKey
