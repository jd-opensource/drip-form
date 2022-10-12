/*
 * flow相关操作
 * 条件逻辑相关：新增条件逻辑 删除条件逻辑 添加条件 删除条件 添加动作 删除动作
 * @Author: jiangxiaowei
 * @Date: 2022-07-20 19:03:04
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: 2022-08-12 14:29:10
 */
import { useRecoilCallback } from 'recoil'
import { flowSchemaSelector } from '@generator/store'
import { produce } from 'immer'
import type { ControlFlowAction, SetEffect, Condintion } from '@jdfed/utils'

// 初始化添加的条件逻辑中的条件
const initCondintion: Condintion = {
  fieldKey1: '',
  operator: '',
  value2: '',
  logicOperator: '&&',
}
// 初始化添加的条件逻辑中的动作
const initEffect: SetEffect = {
  type: 'set',
  fieldKey: '',
  value: '',
}
// 初始化添加的条件逻辑
const initControlFlowSchema: ControlFlowAction = {
  type: 'controlFlow',
  condintion: [initCondintion],
  effect: [],
}

const useFlow = (): {
  addControlFlow: () => void
  deleteControlFlow: (index: number) => void
  addCondintion: (args: {
    actionIndex: number
    condintionIndex: number
    logicOperator: '&&' | '||'
  }) => void
  deleteCondintion: (args: {
    actionIndex: number
    condintionIndex: number
  }) => void
  addEffect: (actionIndex: number) => void
  deleteEffect: (args: { actionIndex: number; effectIndex: number }) => void
} => {
  // 添加条件逻辑
  const addControlFlow = useRecoilCallback(
    ({ set }) =>
      () => {
        set(flowSchemaSelector, (oldFlowSchema) => {
          return produce(oldFlowSchema, (draft) => {
            if (!draft || !draft.actions) {
              draft = {
                version: '0.1.0',
                trigger: {
                  event: 'globalChange',
                },
                actions: [initControlFlowSchema],
              }
              return draft
            } else {
              draft.actions.push(initControlFlowSchema)
            }
          })
        })
      },
    []
  )
  // 删除指定位置的条件逻辑
  const deleteControlFlow = useRecoilCallback(
    ({ set }) =>
      (index: number) => {
        set(flowSchemaSelector, (oldFlowSchema) => {
          return produce(oldFlowSchema, (draft) => {
            if (draft) {
              draft.actions.splice(index, 1)
            }
            return draft
          })
        })
      },
    []
  )
  // 添加条件
  const addCondintion = useRecoilCallback<
    [
      {
        actionIndex: number
        condintionIndex: number
        logicOperator: '&&' | '||'
      }
    ],
    void
  >(({ set }) => ({ actionIndex, condintionIndex, logicOperator }) => {
    set(flowSchemaSelector, (oldFlowSchema) => {
      return produce(oldFlowSchema, (draft) => {
        if (draft) {
          draft.actions[actionIndex].condintion[condintionIndex].logicOperator =
            logicOperator
          draft.actions[actionIndex].condintion[condintionIndex + 1] =
            initCondintion
        }
        return draft
      })
    })
  })
  // 删除条件
  const deleteCondintion = useRecoilCallback<
    [{ actionIndex: number; condintionIndex: number }],
    void
  >(({ set }) => ({ actionIndex, condintionIndex }) => {
    set(flowSchemaSelector, (oldFlowSchema) => {
      return produce(oldFlowSchema, (draft) => {
        if (draft) {
          // 点击删除清空最后一个条件
          if (draft.actions[actionIndex].condintion.length === 1) {
            draft.actions[actionIndex].condintion = [initCondintion]
          } else {
            draft.actions[actionIndex].condintion.splice(condintionIndex, 1)
            draft.actions[actionIndex].condintion[
              condintionIndex - 1
            ].logicOperator = '&&'
          }
        }
        return draft
      })
    })
  })
  // 添加动作
  const addEffect = useRecoilCallback<[actionIndex: number], void>(
    ({ set }) =>
      (actionIndex) => {
        set(flowSchemaSelector, (oldFlowSchema) => {
          return produce(oldFlowSchema, (draft) => {
            if (draft) {
              draft.actions[actionIndex].effect.push(initEffect)
            }
            return draft
          })
        })
      }
  )
  // 删除动作
  const deleteEffect = useRecoilCallback<
    [{ actionIndex: number; effectIndex: number }],
    void
  >(({ set }) => ({ actionIndex, effectIndex }) => {
    set(flowSchemaSelector, (oldFlowSchema) => {
      return produce(oldFlowSchema, (draft) => {
        if (draft) {
          draft.actions[actionIndex].effect.splice(effectIndex, 1)
        }
        return draft
      })
    })
  })

  return {
    addControlFlow,
    deleteControlFlow,
    addCondintion,
    deleteCondintion,
    addEffect,
    deleteEffect,
  }
}

export default useFlow
