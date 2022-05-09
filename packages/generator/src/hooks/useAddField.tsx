/*
 * 左侧sidebar点击/拖拽添加表单项
 * @Author: jiangxiaowei
 * @Date: 2021-10-08 10:20:13
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: 2022-05-09 10:14:55
 */
import { useCallback, useContext } from 'react'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import {
  selectedAtom,
  GeneratorContext,
  curTypeAtom,
  optionsAtom,
} from '@generator/store'
import useDeleteField from './useDeleteField'
import useCanEditJson from './useCanEditJson'
import { message } from 'antd'
import type { UnitedSchemaAtom } from '@generator/fields/types'
import type { ClosestEdge } from '@jdfed/utils'
type AddField = (param: {
  unitedSchema: UnitedSchemaAtom
  fieldKey?: string
  closestEdge?: ClosestEdge
  // viewport区域拖拽，正在拖拽的表单fielKey
  oldFieldKey?: string
}) => void

const useAddField = (): AddField => {
  const generatorContext = useContext(GeneratorContext)
  const { fieldKeyFn, addFieldLocation } = useRecoilValue(optionsAtom)
  const [selectedKey, setSelected] = useRecoilState(selectedAtom)
  const setCurType = useSetRecoilState(curTypeAtom)
  const deleteField = useDeleteField(false)
  const canEdit = useCanEditJson()
  // unitedSchema最外层的order
  const rootOrder = generatorContext.current?.get().uiSchema?.order || []
  // 最后一个fieldkey
  const lastFieldKey = String(rootOrder[rootOrder.length - 1])

  const addField = useCallback<AddField>(
    ({
      unitedSchema,
      fieldKey = selectedKey || '',
      closestEdge,
      oldFieldKey,
    }) => {
      if (!canEdit) {
        message.warning('请先保存JSON编辑结果，再退出！', 2)
        return
      }
      const newClosestEdge = closestEdge || 'bottom'
      // 生成当前新增表单项的key
      let newFieldKey = fieldKeyFn(unitedSchema)

      // 选中新增的表单项
      let selectKey = newFieldKey
      const keyPath = fieldKey.split('.')
      const parentKey =
        newClosestEdge === 'over'
          ? fieldKey
          : keyPath.slice(0, keyPath.length - 1).join('.')
      let type =
        generatorContext.current?.get(parentKey).uiSchema.type || 'object'
      const mode = generatorContext.current?.get(parentKey).uiSchema.mode
      // 拖拽之后是否应该删除拖拽的元素
      let shouldDelete = true

      if (type === 'array' && mode && ['normal', 'tuple'].includes(mode)) {
        type = 'tuple'
      }
      switch (type) {
        case 'object':
          // vieport区域拖拽
          if (oldFieldKey) {
            const lastFieldKey = oldFieldKey.split('.').pop() as string
            if (newClosestEdge != 'over') {
              const keyPath = oldFieldKey.split('.')
              const oldParentKey = keyPath
                .slice(0, keyPath.length - 1)
                .join('.')
              if (oldParentKey === parentKey) {
                // 在同一层级拖拽，fieldKey不变化
                shouldDelete = false
                newFieldKey = lastFieldKey
              } else {
                // 不在同一层级，但是层级中没有当前fieldkey
                const order = (generatorContext.current?.get(parentKey).uiSchema
                  .order || []) as Array<string>
                if (!order.includes(lastFieldKey)) {
                  newFieldKey = lastFieldKey
                }
              }
            } else {
              // 拖拽到对象容器上，对象容器内无元素时，fieldKey取最后
              newFieldKey = lastFieldKey
            }
          }
          selectKey = `${parentKey ? `${parentKey}.` : ''}${newFieldKey}`
          break
        case 'array':
          if (newClosestEdge != 'over') {
            // viewport区域拖拽
            if (oldFieldKey) {
              newFieldKey = oldFieldKey.split('.').pop() as string
            }
          }
          selectKey = `${parentKey}${
            newClosestEdge != 'over' ? `.0.${newFieldKey}` : '.0'
          }`
          break
        case 'tuple': {
          const curKey = fieldKey.split('.').pop() as string
          if (newClosestEdge != 'over') {
            if (oldFieldKey) {
              const keyPath = oldFieldKey.split('.')
              const oldParentKey = keyPath
                .slice(0, keyPath.length - 1)
                .join('.')
              if (oldParentKey === parentKey) {
                shouldDelete = false
                newFieldKey = oldFieldKey.split('.').pop() as string
                let direction: 'topToBottom' | 'bottomToTop'
                if (+curKey > +newFieldKey) {
                  direction = 'topToBottom'
                } else {
                  direction = 'bottomToTop'
                }
                selectKey = `${parentKey}.${
                  direction === 'topToBottom'
                    ? ['top', 'left'].includes(newClosestEdge)
                      ? +curKey - 1
                      : curKey
                    : curKey
                }`
              } else {
                newFieldKey = String(
                  ['left', 'top'].includes(newClosestEdge)
                    ? +curKey
                    : +curKey + 1
                )
                selectKey = `${parentKey}.${newFieldKey}`
              }
            } else {
              newFieldKey = String(
                ['left', 'top'].includes(newClosestEdge) ? +curKey : +curKey + 1
              )
              selectKey = `${parentKey}.${newFieldKey}`
            }
          } else {
            newFieldKey = '0'
            selectKey = `${parentKey}.${newFieldKey}`
          }
          break
        }
        default:
          break
      }
      generatorContext.current?.__generator__.addField({
        fieldKey: newFieldKey,
        closestEdge: newClosestEdge,
        unitedSchema,
        overFieldKey:
          // 未选中任何表单，左侧点击新增，并且设置方向为bottom时，自动添加到最后一个元素后
          !selectedKey && addFieldLocation === 'bottom' && !closestEdge
            ? lastFieldKey
            : fieldKey,
        shouldDelete,
        cb: () => {
          // 设置选中的表单
          setSelected(selectKey)
          // 设置选中的表单类型
          setCurType(unitedSchema.ui.type)
        },
      })
      // // viewport区域拖拽且非排序模式，需要删除原来位置的表单
      if (shouldDelete && oldFieldKey) {
        deleteField(oldFieldKey)
      }
    },
    [
      addFieldLocation,
      canEdit,
      deleteField,
      fieldKeyFn,
      generatorContext,
      lastFieldKey,
      selectedKey,
      setCurType,
      setSelected,
    ]
  )
  return addField
}
export default useAddField
