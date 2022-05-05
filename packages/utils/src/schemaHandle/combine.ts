import { UiSchema, DataSchema, UnitedSchema } from './types'
import { deepClone, isEmpty } from '../common'
import type { Map } from '../common/type'

type Options = Partial<{
  // 是否开启$fieldKey值转换为fieldKey（默认不开启，generator中viewport区域需要开启）
  $fieldKey: boolean
}>

const needToHandledKeywords = [
  'required',
  'errorMessage',
  'items',
  'schema',
  'properties',
  'order',
]

const needToSetToRootUi = ['theme']

/**
 * 值拷贝
 * @param targetObj
 * @param rawObj
 * @param dataType
 */
function valueClone({
  targetObj,
  rawObj,
  dataType,
  fromRoot,
}: {
  targetObj: Map
  rawObj: Map
  dataType?: string
  fromRoot?: boolean
}): void {
  for (const key in rawObj) {
    if (rawObj[key] === null || typeof rawObj[key] !== 'object') {
      if (fromRoot && key === 'theme') {
        //
      } else {
        targetObj[key] = rawObj[key]
      }
    } else if (
      !needToHandledKeywords.includes(key) &&
      !needToSetToRootUi.includes(key)
    ) {
      // 非特殊字段可使用深拷贝，比如title, containerStyle
      targetObj[key] = deepClone(rawObj[key])
    }
  }

  if (dataType && Object.hasOwnProperty.call(rawObj, 'errorMessage')) {
    targetObj.errMsg = deepClone(rawObj.errorMessage)
    if (targetObj.errMsg.required) {
      delete targetObj.errMsg.required
      if (Object.keys(targetObj.errMsg).length === 0) {
        delete targetObj.errMsg
      }
    }
  }
}

/**
 * 递归合并
 * @param dataSchema
 * @param uiSchema
 * @param schema
 * @param fromRoot
 */
function recursionCombine({
  dataSchema,
  uiSchema,
  schema,
  fromRoot,
  options,
}: {
  dataSchema: DataSchema
  uiSchema: UiSchema
  schema: Map
  fromRoot?: boolean
  options?: Options
}) {
  // 先拷贝ui和data的值类型属性或非特殊对象类型属性，比如title, containerStyle
  valueClone({
    targetObj: schema,
    rawObj: dataSchema,
    dataType: dataSchema.type,
  })
  // uiSchema非空时进行拷贝
  if (!isEmpty(uiSchema)) {
    // 填充ui属性，用于存放uiSchema
    if (!Object.hasOwnProperty.call(schema, 'ui')) {
      schema.ui = {}
    }

    // 如果是根路径的，需要处理特殊字段
    if (fromRoot) {
      needToSetToRootUi.forEach((key) => {
        if (Object.hasOwnProperty.call(uiSchema, key)) {
          schema[key] = uiSchema[key]
        }
      })
    }

    valueClone({ targetObj: schema.ui, rawObj: uiSchema, fromRoot })

    if (isEmpty(schema.ui)) {
      delete schema.ui
    }
  }

  // 如果有order，则根据order填充联合schema
  if (Object.hasOwnProperty.call(uiSchema, 'order')) {
    // 子项需要填充到联合schema的哪个prop下
    // 当父节点类型为array时应为items，否则为schema
    const toSchemaProp = dataSchema.type === 'array' ? 'items' : 'schema'

    // 因为子项的错误信息在dataSchema中，此处需要进行处理
    const required = dataSchema.required,
      errorMessage = dataSchema.errorMessage,
      msgMap = {} as Map

    if (typeof errorMessage === 'object') {
      const requireMsg = errorMessage.required
      const errMsg =
        errorMessage[toSchemaProp === 'items' ? 'items' : 'properties']

      // 收集必填的错误提示
      if (required) {
        for (const fk of required) {
          if (!msgMap[fk]) msgMap[fk] = {}

          msgMap[fk] = {
            requiredMsg: requireMsg[fk],
          }
        }
      }

      // 收集校验的错误提示
      if (errMsg) {
        for (const fk in errMsg) {
          if (Object.hasOwnProperty.call(errMsg, fk)) {
            if (!msgMap[fk]) msgMap[fk] = {}

            msgMap[fk] = {
              // 注意errMsg[fk]可能为string或对象，因此需要深拷贝
              errMsg: deepClone(errMsg[fk]),
            }
          }
        }
      }
    }

    // 遍历order的fieldKey
    for (let fieldKey of uiSchema.order) {
      // 根据fieldKey获取子项的schema
      const subUiSchema = uiSchema.properties[fieldKey]
      // 初始化子项的dataSchema
      let subDataSchema: Array<Map> | Map = dataSchema

      // 根据dataSchema(父节点)中的type字段判断在联合schema中，子项以什么形式存在
      // array需读取dataSchema的items，object需读取properties
      if (fieldKey === '$container') {
        subDataSchema = subDataSchema.items
      } else if (dataSchema.type === 'array') {
        subDataSchema = subDataSchema.items[fieldKey]
      } else {
        subDataSchema = subDataSchema.properties[fieldKey]
      }

      // 初始化待填充的表单项
      const fieldItem = {} as Map
      // 开始递归
      recursionCombine({
        dataSchema: subDataSchema as DataSchema,
        uiSchema: subUiSchema as UiSchema,
        schema: fieldItem,
        options,
      })

      if (msgMap[fieldKey]) {
        Object.assign(fieldItem, msgMap[fieldKey])
      }

      // 将递归完成的fieldItem填充到父组件的prop中
      if (toSchemaProp === 'items' && !Array.isArray(dataSchema?.items)) {
        // 对于元组类型，items应为 {}
        if (!Object.hasOwnProperty.call(schema, toSchemaProp)) {
          schema[toSchemaProp] = {}
        }

        schema[toSchemaProp] = fieldItem
      } else {
        // 其余类型应为数组
        if (!Object.hasOwnProperty.call(schema, toSchemaProp)) {
          schema[toSchemaProp] = []
        }

        if (toSchemaProp === 'schema') {
          // 对于容器类型的子项，需要填充fieldKey
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          if (
            Object.prototype.hasOwnProperty.call(subDataSchema, '$fieldKey') &&
            options &&
            options['$fieldKey']
          ) {
            fieldKey = (subDataSchema as Map)['$fieldKey']
            delete fieldItem['$fieldKey']
          }
          fieldItem.fieldKey = fieldKey
        }

        schema[toSchemaProp].push(fieldItem)
      }
    }
  } else {
    // 如果没有order，但数据类型为array且dataSchema中有配置items的，将items拷贝至联合schema
    // fix: 时间选择器combine后属性丢失的问题
    if (dataSchema.type === 'array' && !isEmpty(dataSchema.items)) {
      schema.items = dataSchema.items
    }
  }
}

/**
 * 融合dataSchema和uiSchema为联合Schema
 */
function combine(
  dataSchema: DataSchema,
  uiSchema: UiSchema,
  options?: Options
): UnitedSchema {
  const unitedSchema = {}

  recursionCombine({
    dataSchema,
    uiSchema,
    schema: unitedSchema,
    fromRoot: true,
    options,
  })

  return unitedSchema
}

export { combine }
