/*
 * 删除表单
 * @Author: jiangxiaowei
 * @Date: 2021-10-27 14:32:51
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: 2022-04-27 15:42:31
 */

import { useContext } from 'react'
import { selectedAtom, GeneratorContext } from '@generator/store'
import { message } from 'antd'
import { useRecoilCallback } from 'recoil'
import useCanEditJson from './useCanEditJson'

type DeleteField = (fieldKey?: string) => void

/**
 *
 * @param setSelected 删除后是否设置选中项。默认选中
 * @returns
 */
const useDeleteField = (setSelected = true): DeleteField => {
  const generatorContext = useContext(GeneratorContext)
  const canEdit = useCanEditJson()
  const deleteField = useRecoilCallback<[string | undefined], void>(
    ({ snapshot, set }) =>
      async (fieldKey) => {
        if (!canEdit) {
          message.warning('请先保存JSON编辑结果，再退出！', 2)
          return
        } // 当DripForm中有元素时，可以通过内置的deleteField方法来添加元素
        const selectedKey = await snapshot.getPromise(selectedAtom)
        // 待删除的表单fieldKey
        const deleteFieldKey = fieldKey || selectedKey || ''
        const keyPath = deleteFieldKey.split('.')
        // 删除元素的父级
        const parentKey = keyPath.slice(0, keyPath.length - 1).join('.')
        const order =
          generatorContext.current?.get(parentKey).uiSchema.order || []
        generatorContext.current?.__generator__.deleteField(
          deleteFieldKey,
          () => {
            // 删除元素，选中上一个元素，没有上一个元素，则选中父级。设置selectFieldKey
            let type =
              generatorContext.current?.get(parentKey).uiSchema.type || 'object'
            const mode = generatorContext.current?.get(parentKey).uiSchema.mode
            if (
              type === 'array' &&
              mode &&
              ['normal', 'tuple'].includes(mode)
            ) {
              type = 'tuple'
            }
            const index = order.findIndex(
              (item) => String(item) === keyPath.slice(-1).join()
            )
            // 删除后，自动选中
            if (setSelected) {
              if (index > 0) {
                // 存在上一个相邻元素
                set(
                  selectedAtom,
                  `${parentKey ? parentKey + '.' : ''}${order[index - 1]}`
                )
              } else {
                //不存在上一个相邻元素，自动选中父级
                set(selectedAtom, parentKey)
              }
            }
          }
        )
      },
    [canEdit, generatorContext, setSelected]
  )
  return deleteField
}
export default useDeleteField
