/* eslint-disable @typescript-eslint/no-unused-vars */
/*
 * generator 删除表单
 * @Author: jiangxiaowei
 * @Date: 2021-10-26 19:25:56
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: 2022-04-27 17:17:48
 */
import { produce, current } from 'immer'
import {
  deleteDeepProp,
  setDeepProp,
  parseUnitedSchema,
  combine,
} from '@jdfed/utils'
import type { State } from '@jdfed/utils'

const deleteField = ({
  action,
  state,
}: {
  action: Record<string, any>
  state: State
}): void => {
  // 删除表单项
  const { fieldKey, get, getKey, getTypeKey } = action
  const keyPath = fieldKey.split('.')
  // overField 父级节点的FieldKey
  const deleteParentPath = keyPath.slice(0, keyPath.length - 1).join('.')

  // 待删除的父级路径 元祖 deleteParentKey 对象
  // const deleteParentPath = deleteParentKey
  // 待删除的父级表单
  const { dataSchema: deleteParentDataSchema, uiSchema: deleteParentUiSchema } =
    get(deleteParentPath)
  // 待删除表单 父级元素类型 默认对象类型
  let deleteParentType = 'object'
  if (deleteParentUiSchema.type === 'array') {
    if (['normal', 'tuple'].includes(deleteParentUiSchema.mode)) {
      // 元祖
      deleteParentType = 'tuple'
    } else {
      // 自增数组
      deleteParentType = 'array'
    }
  }
  const deleteUiSchemaPath = getKey(fieldKey, 'uiSchema').split('.')
  const deleteDataSchemaPath = getKey(fieldKey, 'dataSchema').split('.')
  const deleteParentUiPath = deleteParentPath
    ? getKey(deleteParentPath, 'uiSchema').split('.')
    : []
  const orderPath =
    deleteParentPath === ''
      ? ['order']
      : getKey(deleteParentPath, 'uiSchema').split('.').concat('order')
  switch (deleteParentType) {
    case 'array': {
      const order: Array<string> = deleteParentUiSchema.order || []
      const index = 0
      // 删除order
      deleteDeepProp(orderPath.concat(index), state.uiSchema)
      // 删除uiSchema
      deleteDeepProp(deleteUiSchemaPath, state.uiSchema)
      // 删除dataSchema
      deleteDeepProp(deleteDataSchemaPath, state.dataSchema)
      // TODO 删除formData
      // TODO 删除dataSchema的其它等字段
      break
    }
    case 'object': {
      const order: Array<string> = deleteParentUiSchema.order || []
      const index = order.findIndex((item) => item == fieldKey.split('.').pop())
      // 删除order
      if (index != -1) {
        deleteDeepProp(orderPath.concat(index), state.uiSchema)
      }
      // 删除uiSchema
      deleteDeepProp(deleteUiSchemaPath, state.uiSchema)
      // 删除dataSchema
      deleteDeepProp(deleteDataSchemaPath, state.dataSchema)
      // TODO 删除formData
      // TODO 删除dataSchema的其它等字段
      break
    }
    case 'tuple': {
      const order: Array<string> = deleteParentUiSchema.order || []
      const newOrder = order.slice(0, order.length - 1)
      // 设置order
      setDeepProp(orderPath, state.uiSchema, newOrder)
      // 删除dataSchema
      if (order.length === 1) {
        // 元祖中删除最后一个元素时，需要同步删除父级的items，否则jsonSchema会报错
        deleteDeepProp(
          deleteDataSchemaPath.slice(0, deleteDataSchemaPath.length - 1),
          state.dataSchema
        )
      } else {
        deleteDeepProp(deleteDataSchemaPath, state.dataSchema)
      }
      const oldProperties: Record<string, any> = deleteParentUiSchema.properties
      const newProperties = produce(oldProperties, (draft) => {
        const index = order.findIndex(
          (item) => item == fieldKey.split('.').pop()
        )
        if (index != -1) {
          delete draft[index]
          draft[index] = draft[index + 1]
          delete draft[Object.keys(draft).length - 1]
        }
        const arr = order.filter((key) => +key > index).sort((a, b) => +a - +b)
        arr.map((key, index) => {
          // 设置typePath
          const parentTypePathArr = getTypeKey(fieldKey).split('.')
          const parentTypePath = parentTypePathArr
            .slice(0, parentTypePathArr.length - 1)
            .join('.')
        })
      })
      // 设置uiSchema
      setDeepProp(
        deleteParentUiPath.concat('properties'),
        state.uiSchema,
        newProperties
      )
      // TODO 删除formData
      // TODO 删除dataSchema的其它等字段
      break
    }
    default:
      break
  }
  state.typePath = parseUnitedSchema(
    combine(current(state.dataSchema), current(state.uiSchema))
  ).typePath
}

export default deleteField
