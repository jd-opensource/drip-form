/* eslint-disable @typescript-eslint/no-unused-vars */
/*
 * generator 删除表单
 * @Author: jiangxiaowei
 * @Date: 2021-10-26 19:25:56
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: 2022-01-26 17:16:23
 */
import { produce, original } from 'immer'
import { deleteDeepProp, parseUnitedSchema, setDeepProp } from '@jdfed/utils'
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
      // 删除typePath
      Object.keys(state.typePath).map((item) => {
        if (item.startsWith(getTypeKey(fieldKey))) {
          delete state.typePath[item]
        }
      })
      // TODO 删除formData
      // TODO 删除dataSchema的其它等字段
      break
    }
    case 'object': {
      const order: Array<string> = deleteParentUiSchema.order || []
      // 祖父容器类型
      let grandUiType = 'object'
      // 祖父容器路径
      let grandParentPath = ''
      const deleteParenPathArr = deleteParentPath.split('.')
      if (deleteParenPathArr.length > 1) {
        grandParentPath = deleteParenPathArr
          .slice(0, deleteParenPathArr.length - 1)
          .join('.')
        // 待添加的组父级表单
        const { uiSchema: addGrandParentUiSchema } = get(grandParentPath)
        // 待添加表单 祖父级元素类型 默认对象类型
        if (addGrandParentUiSchema.type === 'array') {
          if (['normal', 'tuple'].includes(addGrandParentUiSchema.mode)) {
            grandUiType = 'tuple'
            // 元祖
          } else {
            // 自增数组
            grandUiType = 'array'
          }
        }
      }
      // 祖父是数组容器时，删除对象容器最后一个属性，需要同时删除对象容器
      if (grandUiType === 'array' && order.length === 1) {
        const deleteUiSchemaPath = getKey(
          `${grandParentPath}.0`,
          'uiSchema'
        ).split('.')
        const deleteDataSchemaPath = getKey(
          `${grandParentPath}.0`,
          'dataSchema'
        ).split('.')
        // 删除order
        deleteDeepProp(
          getKey(grandParentPath, 'uiSchema').split('.').concat('order'),
          state.uiSchema
        )
        // 删除uiSchema
        deleteDeepProp(deleteUiSchemaPath, state.uiSchema)
        // 删除dataSchema
        deleteDeepProp(deleteDataSchemaPath, state.dataSchema)
        // 删除typePath
        Object.keys(state.typePath).map((item) => {
          if (item.startsWith(getTypeKey(`${grandParentPath}.0`))) {
            delete state.typePath[item]
          }
        })
      } else {
        const index = order.findIndex(
          (item) => item == fieldKey.split('.').pop()
        )
        // 删除order
        if (index != -1) {
          deleteDeepProp(orderPath.concat(index), state.uiSchema)
        }
        // 删除uiSchema
        deleteDeepProp(deleteUiSchemaPath, state.uiSchema)
        // 删除dataSchema
        deleteDeepProp(deleteDataSchemaPath, state.dataSchema)
        // 删除typePath
        Object.keys(state.typePath).map((item) => {
          if (item.startsWith(getTypeKey(fieldKey))) {
            delete state.typePath[item]
          }
        })
      }
      // TODO 删除formData
      // TODO 删除dataSchema的其它等字段
      break
    }
    case 'tuple': {
      const order: Array<string> = deleteParentUiSchema.order || []
      const newOrder = order.slice(0, order.length - 1)
      // 设置order
      setDeepProp(orderPath, state.uiSchema, newOrder)
      // 删除typePath
      Object.keys(state.typePath).map((item) => {
        if (item.startsWith(getTypeKey(fieldKey))) {
          delete state.typePath[item]
        }
      })
      // 删除dataSchema
      deleteDeepProp(deleteDataSchemaPath, state.dataSchema)
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
          state.typePath[`${parentTypePath}.${+key - 1}`] =
            state.typePath[`${parentTypePath}.${+key}`]
          if (index === arr.length - 1) {
            delete state.typePath[`${parentTypePath}.${+key}`]
          }
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
}

export default deleteField
