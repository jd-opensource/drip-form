/*
 * generator 添加表单
 * @Author: jiangxiaowei
 * @Date: 2021-10-26 15:29:06
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: 2021-11-04 17:36:58
 */
import { produce } from 'immer'
import { setDeepProp, parseUnitedSchema } from '@jdfed/utils'
import type { State } from '@jdfed/utils'

const addField = ({
  args,
  state,
}: {
  args: Record<string, any>
  state: State
}): void => {
  // 添加一个新的表单项
  const {
    fieldKey,
    closestEdge,
    unitedSchema,
    overFieldKey,
    get,
    getKey,
    getTypeKey,
    shouldDelete,
  } = args

  const keyPath = overFieldKey.split('.')
  // overField 父级节点的FieldKey
  const overParentKey = keyPath.slice(0, keyPath.length - 1).join('.')

  // 待添加的父级路径 元祖 overParentKey 对象
  const addParentPath: string =
    closestEdge === 'over' ? overFieldKey : overParentKey

  /** 确定typePath父级的路径 start */
  let addParenTypePath = addParentPath
  const addParenTypePathArr = addParenTypePath.split('.')
  if (addParenTypePathArr.length > 1) {
    const grandParentPath = addParenTypePathArr
      .slice(0, addParenTypePathArr.length - 1)
      .join('.')
    // 待添加的组父级表单
    const { uiSchema: addGrandParentUiSchema } = get(grandParentPath)
    // 待添加表单 祖父级元素类型 默认对象类型
    if (addGrandParentUiSchema.type === 'array') {
      if (addGrandParentUiSchema.mode === 'normal') {
        // 元祖
      } else {
        // 自增数组
        const pathArr = addParentPath.split('.')
        pathArr.pop()
        pathArr.push('$container')
        addParenTypePath = pathArr.join('.')
      }
    }
  }
  addParenTypePath = addParenTypePath !== '' ? getTypeKey(addParenTypePath) : ''
  /** 确定typePath父级的路径 end */
  // //  待添加的父级表单uiSchema、dataSchema的Path
  const addParentSchemaPath = {
    data: (addParentPath ? getKey(addParentPath, 'dataSchema') : '')
      .split('.')
      .filter((item: string) => item),
    ui: (addParentPath ? getKey(addParentPath, 'uiSchema') : '')
      .split('.')
      .filter((item: string) => item),
  }
  // 待添加的父级表单
  const { dataSchema: addParentDataSchema, uiSchema: addParentUiSchema } =
    get(addParentPath)
  // 待添加表单的dataSchema、uiSchema
  const { dataSchema, uiSchema } = parseUnitedSchema(unitedSchema)
  // 待添加表单 父级元素类型 默认对象类型
  let addParentType = 'object'
  if (addParentUiSchema.type === 'array') {
    if (addParentUiSchema.mode === 'normal') {
      // 元祖
      addParentType = 'tuple'
    } else {
      // 自增数组
      addParentType = 'array'
    }
  }
  const curKey =
    keyPath.slice(keyPath.length - 1).join() === ''
      ? overFieldKey
      : keyPath.slice(keyPath.length - 1).join()
  const order: Array<string> = addParentUiSchema.order || []
  switch (addParentType) {
    case 'object': {
      // 排序模式
      const isSortMode = !shouldDelete && fieldKey
      // 在当前元素上下左右 over添加元素
      const curKey =
        closestEdge === 'over' || keyPath.length <= 1
          ? overFieldKey
          : keyPath.slice(keyPath.length - 1).join()
      const index = order.findIndex((item) => item === curKey)
      const newOrder =
        closestEdge === 'over'
          ? [fieldKey]
          : produce(order, (draft) => {
              let oldIndex = -1
              if (isSortMode) {
                oldIndex = draft.findIndex((item) => item === fieldKey)
              }
              // 插入位置
              const insertIndex = ['left', 'top'].includes(closestEdge)
                ? index
                : index + 1
              draft.splice(insertIndex, 0, fieldKey)
              // 删除老的
              if (oldIndex != -1) {
                draft.splice(
                  insertIndex <= oldIndex ? oldIndex + 1 : oldIndex,
                  1
                )
              }
            })
      // 设置order
      setDeepProp(
        addParentSchemaPath.ui.concat(['order']),
        state.uiSchema,
        newOrder
      )
      if (isSortMode) {
        break
      }
      // 设置typePath
      state.typePath[
        addParenTypePath ? `${addParenTypePath}.${fieldKey}` : fieldKey
      ] = {
        type: dataSchema.type,
        parentKey: addParenTypePath,
      }
      // 设置uiSchema
      setDeepProp(
        addParentSchemaPath.ui.concat(['properties', fieldKey]),
        state.uiSchema,
        uiSchema
      )
      // 设置dataSchema
      setDeepProp(
        addParentSchemaPath.data.concat(['properties', fieldKey]),
        state.dataSchema,
        dataSchema
      )
      break
    }
    case 'array': {
      // '$container0'
      let items: Record<string, any> = addParentDataSchema.items || dataSchema
      let container: Record<string, any> =
        addParentUiSchema?.properties?.$container || uiSchema
      if (closestEdge !== 'over') {
        const oldFieldKey = items.fieldKey || '0'
        items = produce(items, (draft) => {
          return {
            type: 'object',
            title: '',
            properties: {
              [oldFieldKey]: draft,
              [fieldKey]: dataSchema,
            },
          }
        })
        container = produce(container, (draft) => {
          state.typePath[`${addParenTypePath}.$container.${oldFieldKey}`] = {
            type: draft.type,
            parentKey: `${addParenTypePath}.$container`,
          }
          // 嵌套数组+嵌套数组 特殊逻辑
          delete state.typePath[`${addParenTypePath}.$container.$container`]
          return {
            type: 'object',
            order: ['left', 'top'].includes(closestEdge)
              ? [fieldKey, oldFieldKey]
              : [oldFieldKey, fieldKey],
            properties: {
              [oldFieldKey]: draft,
              [fieldKey]: uiSchema,
            },
          }
        })
        state.typePath[`${addParenTypePath}.$container`] = {
          type: 'object',
          parentKey: addParenTypePath,
        }
        state.typePath[`${addParenTypePath}.$container.${fieldKey}`] = {
          type: dataSchema.type,
          parentKey: `${addParenTypePath}.$container`,
        }
      } else {
        state.typePath[
          `${addParenTypePath ? addParenTypePath : overFieldKey}.$container`
        ] = {
          type: dataSchema.type,
          parentKey: addParenTypePath,
        }
      }
      // 设置order
      setDeepProp(addParentSchemaPath.ui.concat(['order']), state.uiSchema, [
        '$container',
      ])
      // 设置uiSchema
      setDeepProp(
        addParentSchemaPath.ui.concat(['properties', '$container']),
        state.uiSchema,
        container
      )
      // 设置dataSchema
      setDeepProp(
        addParentSchemaPath.data.concat(['items']),
        state.dataSchema,
        items
      )
      break
    }
    case 'tuple': {
      // 当前插入位置
      const index =
        closestEdge === 'over'
          ? 0
          : ['left', 'top'].includes(closestEdge)
          ? +curKey
          : +curKey + 1
      const items: Record<string, any> = addParentDataSchema.items || []
      const newItems =
        closestEdge === 'over'
          ? [dataSchema]
          : produce(items, (draft) => {
              draft.splice(index, 0, dataSchema)
            })
      const newOrder = closestEdge === 'over' ? ['0'] : [...order, order.length]
      const properties: Record<string, any> = addParentUiSchema.properties || {}
      const newProperties =
        closestEdge === 'over'
          ? { '0': uiSchema }
          : produce(properties, (draft) => {
              const arr = newOrder
                .filter((key) => +key >= index)
                .sort((a, b) => +b - +a)
              arr.map((key) => {
                draft[+key + 1] = draft[key]
                // 设置typePath
                state.typePath[`${addParenTypePath}.${+key + 1}`] = {
                  type: dataSchema.type,
                  parentKey: addParenTypePath,
                }
                if (+key === index) {
                  draft[key] = uiSchema
                  state.typePath[`${addParenTypePath}.${key}`] = {
                    type: dataSchema.type,
                    parentKey: addParenTypePath,
                  }
                }
              })
            })
      if (closestEdge === 'over') {
        state.typePath[`${addParenTypePath}.0`] = {
          type: dataSchema.type,
          parentKey: addParenTypePath,
        }
      }
      // 设置order
      setDeepProp(
        addParentSchemaPath.ui.concat(['order']),
        state.uiSchema,
        newOrder
      )
      // 设置uiSchema
      setDeepProp(
        addParentSchemaPath.ui.concat(['properties']),
        state.uiSchema,
        newProperties
      )
      // 设置dataSchema
      setDeepProp(
        addParentSchemaPath.data.concat(['items']),
        state.dataSchema,
        newItems
      )

      break
    }
    default:
      break
  }
}

export default addField
