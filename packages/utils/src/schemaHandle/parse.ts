/**
 * 联合Schema解析函数
 */
import { typeCheck, setDeepProp } from '../common'
import { UiSchema, UnitedSchema, DataSchema, TypePath } from './types'
import _ from 'lodash'
import type { Map } from '../common/type'

/**
 * 递归解析
 */
function initParse({
  unitedSchema,
  parentType,
  idx,
  // 父级uiSchema
  parentUiSchema,
  // 父级dataSchema
  parentDataSchema,
  customProps,
  typePath,
  parentTypePath = '',
  index,
}: {
  unitedSchema: UnitedSchema
  parentType?: 'array' | 'tuple' | 'object'
  idx?: string
  parentUiSchema: UiSchema
  parentDataSchema: DataSchema
  customProps: string[]
  typePath: Map
  parentTypePath?: string
  index?: string | number
}) {
  // 当前uiSchema
  let curUiSchema = parentUiSchema
  // 当前dataSchema
  let curDataSchema = parentDataSchema
  // 当前的typePath的key
  let curTypePath = parentTypePath
  // 非第一次调用initParse
  if (idx) {
    // 设置typePath
    curTypePath = parentTypePath ? `${parentTypePath}.${idx}` : idx
    typePath[curTypePath] = {
      fatherKey: parentTypePath,
      title: unitedSchema.title || '',
      type: unitedSchema.type,
      unitedSchemaKey: `${
        typePath[parentTypePath]?.unitedSchemaKey
          ? `${typePath[parentTypePath]?.unitedSchemaKey}.`
          : ''
      }${parentType == 'object' ? 'schema' : 'items'}${
        index !== '$container' ? `.${index}` : ''
      }`,
    }
  } else {
    // 设置根元素的typePath
    if (unitedSchema.fieldKey) {
      typePath[unitedSchema.fieldKey] = {
        type: unitedSchema.type,
        unitedSchemaKey: '',
        fatherKey: '',
      }
    }
    // 根元素type默认为object
    curDataSchema.type = 'object'
  }
  // ui:开头的
  const uiReg = /^ui:/
  // 是否是uiSchema中的属性
  const isUiProp = (key: string): boolean => {
    // 需要丢到uiSchema中的属性
    const uiSchemaKeys = ['footer', 'theme', 'containerStyle', 'formMode', 'ui']
    return uiSchemaKeys.includes(key) || uiReg.test(key)
  }
  Object.entries(unitedSchema).map(([key, value]) => {
    // 设置uiSchema
    if (isUiProp(key)) {
      // 非第一次调用initParse
      if (idx) {
        const path = ['properties', idx]
        setDeepProp(path, parentUiSchema, {})
        curUiSchema = parentUiSchema.properties[idx] as UiSchema
        // 设置order
        const order = _.get(parentUiSchema, 'order', [] as string[])
        // 避免重复fieldKey
        if (!order.includes(idx)) {
          order.push(idx)
        }
        parentUiSchema.order = order
      }
      // 设置ui:开头的ui属性，ui:{}优先级更高
      if (uiReg.test(key)) {
        curUiSchema[key.slice(3)] =
          ((unitedSchema?.ui || {}) as Map)[key.slice(3)] || value
      } else if (key === 'ui') {
        // 设置ui:{}中的属性
        Object.entries(value).map(([key, value]) => {
          curUiSchema[key] = value
        })
      } else {
        curUiSchema[key] = value
      }
    } else {
      // 设置dataSchema
      // 非第一次调用initParse
      if (idx) {
        switch (parentType) {
          case 'object': {
            const path = ['properties', idx]
            setDeepProp(
              path,
              parentDataSchema,
              _.get(parentDataSchema, path, {})
            )
            curDataSchema = (
              parentDataSchema.properties as Record<string, DataSchema>
            )[idx]
            break
          }
          case 'array': {
            const path = ['items']
            setDeepProp(
              ['items'],
              parentDataSchema,
              _.get(parentDataSchema, path, {})
            )
            curDataSchema = parentDataSchema.items as DataSchema
            break
          }
          case 'tuple': {
            const path = ['items', idx]
            setDeepProp(
              path,
              parentDataSchema,
              _.get(parentDataSchema, path, {}),
              { items: { type: 'array' } }
            )
            curDataSchema = (parentDataSchema.items as DataSchema[])[
              Number(idx)
            ]
            break
          }
          default:
            break
        }
      }
      switch (key) {
        case 'requiredMsg':
          // 设置父级，只有对象才有
          if (parentType === 'object' && idx) {
            // 设置order
            const required = _.get(parentDataSchema, 'required', [] as string[])
            // 避免重复fieldKey
            if (!required.includes(idx)) {
              required.push(idx)
            }
            parentDataSchema.required = required
            setDeepProp(
              ['errorMessage', 'required', idx],
              parentDataSchema,
              value
            )
          }
          break
        // 错误信息配置
        case 'errMsg':
          curDataSchema.errorMessage = value
          break
        // 以下字段 items、 schema、fieldKey 不设置到dataSchema中
        case 'items':
        case 'schema':
        case 'fieldKey':
          break
        default:
          // 设置customProps
          if (/^\$:/.test(key)) {
            customProps.push(key)
          }
          curDataSchema[key] = value
          break
      }
    }
  })

  // 当前表单嵌套类型  'schema'为object|'items'为array
  let type = 'object'
  if (unitedSchema.items) {
    type = 'array'
  }
  switch (type) {
    case 'object': {
      // 处理通用逻辑
      // 对schema处理（子表单处理，递归）
      unitedSchema.schema?.map((childUnitedSchema, i) => {
        initParse({
          unitedSchema: childUnitedSchema,
          idx: childUnitedSchema.fieldKey,
          parentType: 'object',
          parentUiSchema: curUiSchema,
          parentDataSchema: curDataSchema,
          parentTypePath: curTypePath,
          customProps,
          typePath,
          index: i,
        })
      })
      break
    }
    case 'array': {
      // 处理通用逻辑
      // 对items处理（子表单处理，递归）
      const item = unitedSchema.items
      const type = typeCheck(item)
      // 普通数组
      if (type === 'Object') {
        initParse({
          unitedSchema: item as UnitedSchema,
          idx: '$container',
          parentType: 'array',
          parentUiSchema: curUiSchema,
          parentDataSchema: curDataSchema,
          customProps,
          typePath,
          parentTypePath: curTypePath,
          index: '$container',
        })
      } else if (type === 'Array') {
        // 元祖
        item?.map((childUnitedSchema: UnitedSchema, i: number) => {
          initParse({
            unitedSchema: childUnitedSchema,
            idx: String(i),
            parentType: 'tuple',
            parentUiSchema: curUiSchema,
            parentDataSchema: curDataSchema,
            customProps,
            typePath,
            parentTypePath: curTypePath,
            index: i,
          })
        })
      }
      break
    }
    default:
      break
  }
}

/**
 * 解析联合Schema
 * @param unitedSchema
 */
const parseUnitedSchema = (
  unitedSchema: UnitedSchema
): {
  uiSchema: UiSchema
  dataSchema: DataSchema
  typePath: TypePath
  customProps: string[]
} => {
  const dataSchema = {} as DataSchema
  const uiSchema = {} as UiSchema
  // 用来存储每个表单项对应的type值，如果是嵌套格式，则解析为 { a: 'object', 'a.b': 'object', 'a.b.c': 'array' }
  const typePath = {}
  // $:的自定义属性，仅统计dataSchema的
  const customProps: string[] = []

  initParse({
    unitedSchema,
    parentUiSchema: uiSchema,
    parentDataSchema: dataSchema,
    customProps,
    typePath,
  })

  return {
    dataSchema,
    uiSchema,
    typePath,
    customProps: [...new Set(customProps)],
  }
}

export { parseUnitedSchema }
