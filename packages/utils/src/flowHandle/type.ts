// nubmer 类型支持的操作符
type NumberOperator = '>=' | '<=' | '<' | '>' | '===' | '!=='

// string 类型支持的操作符
type StringOperator = '===' | '!==' | 'includes' | '-includes'

// boolean 类型支持的操作符
type BooleanOperator = 'true' | 'false'

// object 类型支持的操作符
type ObjectOperator = 'in' | '-in'

// array 类型支持的操作符
type ArrayOperator = 'includes' | '-includes'

export type Operator =
  | NumberOperator
  | StringOperator
  | BooleanOperator
  | ObjectOperator
  | ArrayOperator
  // 数据变化时
  | 'change'
  | ''

// 条件逻辑配置字段
export type Condintion = {
  /**
   * 格式："fieldKey setType property" "fieldKey setType"
   * fieldkey： 需要获取的表单的fieldkey
   * setType： data|uiSchema|dataSchema
   * property: 可选 获取属性
   */
  fieldKey1: string
  // 空字符用来初始化逻辑，新增条件时，value1未选择，操作符不应该展示
  operator: Operator
  // "fieldKey setType property" "fieldKey setType"
  fieldKey2?: string
  value2?: unknown
  logicOperator?: '&&' | '||'
}

export type SetEffect = {
  type: 'set' | 'merge'
  /**
   * 格式："fieldKey setType property" "fieldKey setType"
   * fieldkey： 需要获取的表单的fieldkey
   * setType： data|uiSchema|dataSchema
   * property: 可选 获取属性
   */
  fieldKey: string
  // 如果fieldkey 格式为fieldKey uiSchema vcontrol，则value为boolean类型
  value: unknown
}

type SubAction = {
  type: 'subAction'
  actions: Array<Action>
}

type Effect = Array<SetEffect | SubAction>

// if else 逻辑
export type ControlFlowAction = {
  type: 'controlFlow'
  condintion: Array<Condintion>
  effect: Effect
}

//
type Action = ControlFlowAction

export type Flow = {
  // 版本号 一期默认为0.1.0
  version: string
  trigger: {
    event: 'globalChange'
  }
  actions: Array<Action>
}
