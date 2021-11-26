/*
 * 拖拽相关状态管理
 * @Author: jiangxiaowei
 * @Date: 2021-09-29 10:01:27
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: 2021-11-04 18:01:03
 */
import { atom } from 'recoil'
import type { ClosestEdge } from '@jdfed/utils'

// hover的drop容器id和最近的边
export const closestEdgeAtom = atom<ClosestEdge>({
  key: 'closestEdge',
  default: 'bottom',
})

/**
 * 当前正在拖拽的表单项FieldKey
 */
export const draggingFieldKeyAtom = atom<string | null>({
  key: 'draggingFieldKey',
  default: null,
})
