/* eslint-disable @typescript-eslint/no-unused-vars */
/*
 * 当前表单是否可以放置拖拽元素
 * @Author: jiangxiaowei
 * @Date: 2021-10-14 14:35:52
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: 2021-11-03 18:04:36
 */
import { useMemo, useContext } from 'react'
import { useRecoilValue } from 'recoil'
import { draggingFieldKeyAtom } from '@generator/store'
import { GeneratorContext } from '@generator/store'

type CanDrop = ({
  fieldKey,
  parentType,
  parentMode,
  hasEmptyEle,
}: {
  fieldKey: string
  parentType?: string
  type?: string
  parentMode?: string
  hasEmptyEle?: boolean
}) => boolean

/**
 * 当前元素不可拖拽进当前元素中
 * @param fieldKey 当前droppable key
 * @returns true 不能被放置 false 可以被放置
 */
const useCurContainer: CanDrop = ({ fieldKey }) => {
  const draggingFieldKey = useRecoilValue(draggingFieldKeyAtom)
  return useMemo(() => {
    if (fieldKey.split('.').length == 1) {
      return draggingFieldKey === fieldKey
    } else {
      return !!draggingFieldKey && fieldKey.startsWith(`${draggingFieldKey}.`)
    }
  }, [draggingFieldKey, fieldKey])
}

/**
 * 自增数组嵌套对象容器，且对象容器内存在元素时，对象容器不可拖拽
 * @param fieldKey 当前droppable key
 * @returns true 不能被放置 false 可以被放置
 */
const useTupleNestObject: CanDrop = ({
  parentMode,
  parentType,
  type,
  hasEmptyEle,
}) => {
  return useMemo(() => {
    return (
      parentMode !== 'normal' &&
      parentType === 'array' &&
      type === 'object' &&
      !hasEmptyEle
    )
  }, [hasEmptyEle, parentMode, parentType, type])
}

const useCanDrop: CanDrop = ({
  fieldKey,
  parentMode,
  parentType,
  type,
  hasEmptyEle,
}) => {
  const curContainer = useCurContainer({ fieldKey })
  const tupleNestObject = useTupleNestObject({
    fieldKey,
    parentMode,
    parentType,
    type,
    hasEmptyEle,
  })
  // 当前正在拖拽的表单key
  const canNotDrop = useMemo(() => {
    return curContainer || tupleNestObject
  }, [curContainer, tupleNestObject])
  return canNotDrop
}

export default useCanDrop
