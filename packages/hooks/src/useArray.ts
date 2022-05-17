/*
 * ArrayContainer 逻辑封装
 * @Author: jiangxiaowei
 * @Date: 2021-08-01 16:54:41
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: 2022-05-17 18:14:35
 */
import { useCallback } from 'react'
import produce from 'immer'
import type { Dispatch } from 'react'
import type { Action } from '@jdfed/utils'
type AddItem = (order: number, item: unknown) => void
type DeltItem = (order: number) => void
type ArrayMove = (oldIndex: number, newIndex: number) => void

const useArray = ({
  fieldKey,
  dispatch,
  fieldData,
}: {
  fieldKey: string
  dispatch: Dispatch<Action>
  fieldData: Array<unknown>
}): {
  addItem: AddItem
  deltItem: DeltItem
  arrayMove: ArrayMove
} => {
  // 新增一项
  const addItem = useCallback<AddItem>(
    (order, item) => {
      dispatch({
        type: 'setArrayKey',
        action: {
          fieldKey,
          order,
        },
      })
      dispatch({
        type: 'setData',
        action: {
          set: {
            [fieldKey]: produce(fieldData || [], (draft) => {
              draft.splice(order, 0, item)
            }),
          },
        },
      })
    },
    [dispatch, fieldData, fieldKey]
  )
  // 删除一项
  const deltItem = useCallback<DeltItem>(
    (order) => {
      dispatch({
        type: 'setArrayKey',
        action: {
          fieldKey,
          order,
          isDelete: true,
        },
      })
      // 删除自定义错误
      dispatch({
        type: 'setErr',
        action: {
          deleteKeys: `${fieldKey}.${order}`,
        },
      })
      dispatch({
        type: 'setData',
        action: {
          deleteKeys: `${fieldKey}.${order}`,
        },
      })
    },
    [dispatch, fieldKey]
  )
  // 切换顺序
  const arrayMove = useCallback<ArrayMove>(
    (oldIndex, newIndex) => {
      dispatch({
        type: 'setData',
        action: {
          set: {
            [fieldKey]: produce(fieldData || [], (draft) => {
              draft.splice(newIndex, 0, draft.splice(oldIndex, 1)[0])
            }),
          },
        },
      })
      dispatch({
        type: 'setArrayKey',
        action: {
          fieldKey,
          move: [oldIndex, newIndex],
        },
      })
    },
    [dispatch, fieldData, fieldKey]
  )

  return {
    addItem,
    deltItem,
    arrayMove,
  }
}

export default useArray
