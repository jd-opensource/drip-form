/*
 * 删除表单
 * @Author: jiangxiaowei
 * @Date: 2021-10-27 14:32:51
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: 2021-11-22 13:46:03
 */

import { useCallback, useContext } from 'react'
import { useRecoilValue } from 'recoil'
import { selectedAtom, GeneratorContext } from '@generator/store'
import { message } from 'antd'
import useCanEditJson from './useCanEditJson'

type DeleteField = (fieldKey?: string) => void

const useDeleteField = (): DeleteField => {
  const generatorContext = useContext(GeneratorContext)
  const selectedKey = useRecoilValue(selectedAtom)
  const canEdit = useCanEditJson()

  const deleteField = useCallback<DeleteField>(
    (fieldKey = selectedKey || '') => {
      if (!canEdit) {
        message.warning('请先保存JSON编辑结果，再退出！', 2)
        return
      } // 当DripForm中有元素时，可以通过内置的deleteField方法来添加元素
      generatorContext.current?.__generator__.deleteField(fieldKey)
    },
    [canEdit, generatorContext, selectedKey]
  )
  return deleteField
}
export default useDeleteField
