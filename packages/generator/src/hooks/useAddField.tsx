/*
 * 左侧sidebar点击/拖拽添加表单项
 * @Author: jiangxiaowei
 * @Date: 2021-10-08 10:20:13
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: 2021-12-27 16:40:13
 */
import { useCallback, useContext } from 'react'
import { nanoid } from 'nanoid'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { selectedAtom, GeneratorContext, curTypeAtom } from '@generator/store'
import useDeleteField from './useDeleteField'
import useCanEditJson from './useCanEditJson'
import { message } from 'antd'
import type { UnitedSchemaAtom } from '@generator/fields/types'
import type { ClosestEdge } from '@jdfed/utils'
type AddField = (param: {
  unitedSchema: UnitedSchemaAtom
  fieldKey?: string
  closestEdge?: ClosestEdge
  oldFieldKey?: string
}) => void

const useAddField = (): AddField => {
  const generatorContext = useContext(GeneratorContext)
  const [selectedKey, setSelected] = useRecoilState(selectedAtom)
  const setCurType = useSetRecoilState(curTypeAtom)
  const deleteField = useDeleteField()
  const canEdit = useCanEditJson()

  const addField = useCallback<AddField>(
    ({
      unitedSchema,
      fieldKey = selectedKey || '',
      closestEdge = 'bottom',
      oldFieldKey,
    }) => {
      if (!canEdit) {
        message.warning('请先保存JSON编辑结果，再退出！', 2)
        return
      }
      // 生成当前新增表单项的key
      let newFieldKey = `${unitedSchema.ui.type}_${nanoid(6)}`

      // 选中新增的表单项
      let selectKey = newFieldKey
      const keyPath = fieldKey.split('.')
      const lastKey = keyPath.length > 1 ? fieldKey.split('.').pop() : ''
      const parentKey =
        closestEdge === 'over'
          ? fieldKey
          : keyPath.slice(0, keyPath.length - 1).join('.')
      let type =
        generatorContext.current?.get(parentKey).uiSchema.type || 'object'
      const mode = generatorContext.current?.get(parentKey).uiSchema.mode
      // 拖拽之后是否应该删除拖拽的元素
      let shouldDelete = true

      if (type === 'array' && mode === 'normal') {
        type = 'tuple'
      }
      switch (type) {
        case 'object':
          if (oldFieldKey) {
            const lastFieldKey = oldFieldKey.split('.').pop() as string
            if (closestEdge != 'over') {
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
          selectKey = `${parentKey}${
            closestEdge != 'over' ? `.0.${newFieldKey}` : '.0'
          }`
          break
        case 'tuple': {
          const curKey = lastKey ? (lastKey as string) : fieldKey
          // 当前插入位置
          const index =
            closestEdge === 'over'
              ? 0
              : ['left', 'top'].includes(closestEdge)
              ? +curKey
              : +curKey + 1

          selectKey = `${parentKey}.${index}`
          break
        }
        default:
          break
      }
      generatorContext.current?.__generator__.addField({
        fieldKey: newFieldKey,
        closestEdge,
        unitedSchema,
        overFieldKey: fieldKey,
        shouldDelete,
        cb: () => {
          setSelected(selectKey)
          setCurType(unitedSchema.ui.type)
        },
      })
      if (shouldDelete && oldFieldKey) {
        deleteField(oldFieldKey)
      }
    },
    [
      canEdit,
      deleteField,
      generatorContext,
      selectedKey,
      setCurType,
      setSelected,
    ]
  )
  return addField
}
export default useAddField
