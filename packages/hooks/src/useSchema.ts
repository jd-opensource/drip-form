/*
 * 获取设置uiSchema、dataSchema、formData的函数
 * @Author: jiangxiaowei
 * @Date: 2021-08-06 15:33:25
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: 2021-11-07 17:04:36
 */
import { typeCheck } from '@jdfed/utils'
import { useCallback } from 'react'
import produce from 'immer'
import useGetKey from './useGetKey'
import type { Dispatch } from 'react'
import type {
  Action,
  Map,
  Get,
  ClosestEdge,
  UiSchema,
  DataSchema,
} from '@jdfed/utils'

export type SetType = 'data' | 'uiSchema' | 'dataSchema'
type SetFn = (value: unknown) => void
type StaticValue =
  | undefined
  | null
  | string
  | number
  | boolean
  | Record<string, unknown>
  | Array<unknown>
export type Set = (
  fieldKey: string,
  type: SetType,
  value: SetFn | StaticValue
) => void
export type DeleteField = (fieldKey: string) => void
export type AddField = (params: {
  fieldKey: string
  closestEdge: ClosestEdge
  unitedSchema: Map
  overFieldKey: string
  shouldDelete: boolean
  cb: () => void
}) => void
export type Merge = (
  fieldKey: string,
  type: SetType,
  value: StaticValue
) => void
type HandleFn = (
  fieldKey: string,
  value: SetFn | StaticValue,
  type: SetType,
  mode?: 'set' | 'merge'
) => void | unknown

const useSchema = ({
  uiSchema,
  dataSchema,
  typeMap,
  formData,
  dispatch,
}: {
  dispatch: Dispatch<Action>
  uiSchema: UiSchema
  dataSchema: DataSchema
  typeMap: Map
  formData: Map
}): {
  get: Get
  set: Set
  deleteField: DeleteField
  addField: AddField
  merge: Merge
} => {
  const { getTypeKey, getKey } = useGetKey(typeMap)
  const get = useCallback<Get>(
    (fieldKey) => {
      // 找不到则获取根目录
      if (!fieldKey) {
        return {
          uiSchema,
          dataSchema,
          data: formData,
        }
      } else {
        const fieldKeyMap = fieldKey.split('.')
        const arr = getTypeKey(fieldKey).split('.')
        return arr.reduce(
          (prev, cur, index, arr) => {
            if (cur === '') {
              // 返回根目录的dataSchema、uiSchema、formData
              return prev
            } else if (
              index === 0 ||
              (typeMap[arr.slice(0, index).join('.')] as Map).type === 'object'
            ) {
              // 对象类型
              return {
                uiSchema: (prev.uiSchema.properties as Map)[cur],
                dataSchema: (prev.dataSchema.properties as Map)[cur],
                data: prev.data ? prev.data[cur] : undefined,
              }
            } else if (
              (typeMap[arr.slice(0, index).join('.')] as Map).type === 'array'
            ) {
              // 数组类型
              if (cur === '$container') {
                // 普通数组
                return {
                  uiSchema: prev.uiSchema.properties.$container,
                  dataSchema:
                    prev.dataSchema[index === 0 ? 'properties' : 'items'],
                  data: prev.data ? prev.data[fieldKeyMap[index]] : undefined,
                }
              } else {
                // 元祖
                return {
                  uiSchema: prev.uiSchema.properties[cur],
                  dataSchema: (
                    prev.dataSchema[index === 0 ? 'properties' : 'items'] as Map
                  )[cur],
                  data: prev.data ? prev.data[cur] : undefined,
                }
              }
            } else {
              return {
                uiSchema: prev.uiSchema,
                dataSchema: prev.dataSchema,
                data: prev.data,
              }
            }
          },
          { data: formData, uiSchema, dataSchema }
        )
      }
    },
    [dataSchema, formData, getTypeKey, typeMap, uiSchema]
  )

  /**
   * 获取当前value值
   * @param fieldKey 表单项路径，a.b.c
   * @param value 待替换值
   * @param type 类型
   */
  const handleFn = useCallback<HandleFn>(
    (fieldKey, value, type, mode = 'set') => {
      const typeMap = {
        data: formData,
        uiSchema: uiSchema,
        dataSchema: dataSchema,
      }
      // 根据FieldKey和type，获取在schema中的真实位置，如在ui中的a.properties.b.properties.c
      // 生成解析映射树 ''在set中代表根路径，所以直接返回
      let oldData
      if (fieldKey === '') {
        oldData = typeMap[type]
      } else {
        const key = getKey(fieldKey, type)
        oldData = key.split('.').reduce((prev, cur) => {
          return prev[cur] as Map
        }, typeMap[type])
      }
      switch (typeCheck(value)) {
        case 'Function':
          return produce(oldData, value as SetFn)
        case 'Object':
          if (mode === 'set') {
            return value
          } else {
            const recursionFn = (oldData: Map, value: Map) => {
              return produce(oldData, (draft) => {
                for (const i in value as Map) {
                  if (typeCheck(value[i]) === 'Object') {
                    // 如果存在，继续递归遍历设置对象的每个属性类似webpack-merge方式
                    if (draft[i]) {
                      draft[i] = recursionFn(draft[i] as Map, value[i] as Map)
                    } else {
                      // 不存在直接设置
                      draft[i] = (value as Map)[i]
                    }
                  } else {
                    draft[i] = (value as Map)[i]
                  }
                }
              })
            }
            return recursionFn(oldData, value as Map)
          }
        default:
          return value
      }
    },
    [dataSchema, formData, getKey, uiSchema]
  )
  // TODO 多个set合并
  const set = useCallback<Set>(
    (key, type, value) => {
      switch (type) {
        case 'data':
          dispatch({
            type: 'setFormData',
            [key === '' ? 'formData' : key]: handleFn(key, value, 'data'),
          })
          break
        case 'uiSchema':
          dispatch({
            type: 'setUiSchema',
            [key === '' ? 'uiSchema' : getKey(key, 'uiSchema')]: handleFn(
              key,
              value,
              'uiSchema'
            ),
          })
          break
        case 'dataSchema':
          dispatch({
            type: 'setDataSchema',
            [key === '' ? 'dataSchema' : getKey(key, 'dataSchema')]: handleFn(
              key,
              value,
              'dataSchema'
            ),
          })
          break
        default:
          break
      }
    },
    [dispatch, getKey, handleFn]
  )

  // 支持深度merge，类似webpack-merge方式
  const merge = useCallback<Merge>(
    (key, type, value) => {
      switch (type) {
        case 'data':
          dispatch({
            type: 'setFormData',
            [key === '' ? 'formData' : key]: handleFn(
              key,
              value,
              'data',
              'merge'
            ),
          })
          break
        case 'uiSchema':
          dispatch({
            type: 'setUiSchema',
            [key === '' ? 'uiSchema' : getKey(key, 'uiSchema')]: handleFn(
              key,
              value,
              'uiSchema',
              'merge'
            ),
          })
          break
        case 'dataSchema':
          dispatch({
            type: 'setDataSchema',
            [key === '' ? 'dataSchema' : getKey(key, 'dataSchema')]: handleFn(
              key,
              value,
              'dataSchema',
              'merge'
            ),
          })
          break
        default:
          break
      }
    },
    [dispatch, getKey, handleFn]
  )
  /**
   * 删除一个表单项（同步删除uiSchema、dataSchema中的配置）
   */
  const deleteField = useCallback(
    (key) => {
      dispatch({
        type: 'deleteField',
        fieldKey: key,
        get,
        getKey,
        getTypeKey,
      })
    },
    [dispatch, get, getKey, getTypeKey]
  )
  /**
   * 添加一个表单项
   */
  const addField = useCallback(
    ({
      fieldKey,
      closestEdge,
      unitedSchema,
      overFieldKey,
      cb,
      shouldDelete,
    }) => {
      dispatch({
        type: 'addField',
        fieldKey,
        closestEdge,
        unitedSchema,
        overFieldKey,
        get,
        getKey,
        getTypeKey,
        shouldDelete,
      })
      cb && cb()
    },
    [dispatch, get, getKey, getTypeKey]
  )
  return {
    get,
    set,
    deleteField,
    addField,
    merge,
  }
}

export default useSchema
