import { Map, ClosestEdge } from './common/type'
import { UnitedSchema, UiSchema, DataSchema } from './schemaHandle/types'
export type Get = {
  (fieldKey?: string): {
    data: Map | undefined
    dataSchema: DataSchema
    uiSchema: UiSchema
  }
  (fieldKey: string, option: { isPrev: boolean }): {
    data: Map | undefined
    dataSchema: DataSchema | undefined
    uiSchema: UiSchema | undefined
  }
}

export type GetKey = (
  fieldKey: string,
  type: 'uiSchema' | 'dataSchema' | 'data' | 'unitedSchema'
) => string

export type GetTypeKey = (fieldKey: string) => string | never

export type State = {
  typePath: Record<
    string,
    {
      type: string
      unitedSchemaKey: string
      fatherKey: string
    }
  >
  uiSchema: UiSchema
  dataSchema: DataSchema
  // 表单数据
  formData: Record<string, any>
  errors: Record<string, string>
  // ajv校验错误信息
  ajvErrors: Record<string, string>
  // 用户自定义错误信息
  customErrors: Record<string, string>
  // 是否正在校验
  checking: boolean
  // 当前可见的表单
  visibleFieldKey: Array<string>
  // 当前正在变动的表单
  changeKey: string
  // 数组容器对应的react key映射
  arrayKey: Record<string, Array<string>>
  // 异步校验需要保留的错误key（用于防止异步校验的错误信息被ajv覆盖）
  ignoreErrKey: Array<string>
}

// 即将废弃,请改用 ResetAction
type ReloadAction = {
  type: 'reload'
} & Omit<State, 'visibleFieldKey'>

type ResetAction = {
  type: 'reset'
  action: {
    state: Omit<State, 'visibleFieldKey'>
  }
}

// 即将废弃,请改用 SetValidate
type SetDataSchemaAction = {
  type: 'setDataSchema'
  dataSchema?: DataSchema
  isDelete?: boolean
} & Map

type SetValidate = {
  type: 'setValidate'
  action: {
    deleteKeys?: Array<string> | string
    dataSchema?: DataSchema
    set?: Map
  }
}

// 即将废弃,请改用 SetUiAction
type SetUiSchemaAction = {
  type: 'setUiSchema'
  uiSchema?: UiSchema
} & Map
// 即将废弃,请改用 SetUiAction
type DeleteUiSchemaAction = {
  type: 'deleteUiSchema'
  key: string
}

type SetUiAction = {
  type: 'setUi'
  action: {
    deleteKeys?: Array<string> | string
    uiSchema?: UiSchema
    set?: Map
  }
}

// 即将废弃,请改用 SetDataAction
type SetFormDataAction = {
  type: 'setFormData'
  formData?: Map
} & Map
// 即将废弃 改用 SetDataAction
type DeleteFormDataAction = {
  type: 'deleteFormData'
  key: string
}

type SetDataAction = {
  type: 'setData'
  action: {
    deleteKeys?: string | Array<string>
    formData?: Map
    set?: Map
  }
}

type DeleteFieldAction = {
  type: 'deleteField'
  action: {
    fieldKey: string
    get: Get
    getKey: GetKey
    getTypeKey: GetTypeKey
  }
}

type AddFieldAction = {
  type: 'addField'
  action: {
    fieldKey: string
    closestEdge: ClosestEdge
    unitedSchema: UnitedSchema
    overFieldKey: string
    get: Get
    getKey: GetKey
    getTypeKey: GetTypeKey
    shouldDelete: boolean
  }
}

// 即将废弃
export type SetErrType = {
  type: 'setError'
  action?: {
    ignore?: Array<string>
  }
} & Record<string, string>
// 即将废弃
export type SetErrsType = {
  type: 'setError'
  ignore?: Array<string>
  errors?: Record<string, string>
}
// 即将废弃 请改用 SetErrAction
type SetErrorAction = SetErrType | SetErrsType
// 即将废弃 请改用 SetErrAction
type DeleteErrorAction = {
  type: 'deleteError'
  key: Array<string> | string
}

// 设置自定义错误信息
type SetErrAction = {
  type: 'setErr'
  action: {
    deleteKeys?: Array<string> | string
    errors?: Record<string, string>
    set?: Record<string, string>
  }
}

// 设置ajv错误
type SetAjvErrorAction = {
  type: 'setAjvErr'
  action: {
    deleteKeys?: Array<string> | string
    errors?: Record<string, string>
    set?: Record<string, string>
  }
}

// 即将废弃
type OldSetCheckingAction = {
  type: 'setChecking'
  checking: boolean
}
type NewSetCheckingAction = {
  type: 'setChecking'
  action: {
    checking: boolean
  }
}
type SetCheckingAction = OldSetCheckingAction | NewSetCheckingAction

type SetVisibleKeyAction = {
  type: 'setVisibleKey'
  action: {
    deleteKeys?: Array<string> | string
    fieldKey?: Array<string> | string
  }
}

// 数组容器设置映射的组件唯一key（避免删除导致的组件渲染问题）
type SetArrayKey = {
  type: 'setArrayKey'
  action: {
    // 数组父级fieldKey
    fieldKey: string
    // 添加或删除的位置 （order为undefiedn，则全量设置当前fieldKey的key）
    order?: number
    // 是否删除 默认添加
    isDelete?: boolean
    // 切换数组的顺序
    move?: [number, number]
  }
}

export type Action =
  | ReloadAction
  | ResetAction
  | SetDataSchemaAction
  | SetValidate
  | SetUiSchemaAction
  | DeleteUiSchemaAction
  | SetUiAction
  | SetFormDataAction
  | DeleteFormDataAction
  | SetDataAction
  | DeleteFieldAction
  | AddFieldAction
  | SetErrorAction
  | SetErrAction
  | SetAjvErrorAction
  | DeleteErrorAction
  | SetCheckingAction
  | SetVisibleKeyAction
  | SetArrayKey
