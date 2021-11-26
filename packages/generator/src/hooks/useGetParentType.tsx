/*
 * 获取选中元素的父元素类型
 * @Author: jiangxiaowei
 * @Date: 2021-11-09 11:21:41
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: 2021-11-09 11:29:59
 */
import { useContext } from 'react'
import { useRecoilValue } from 'recoil'
import { selectedAtom, GeneratorContext } from '@generator/store'

const useGetParentType = (): string => {
  const generatorContext = useContext(GeneratorContext)
  const selectedFieldKey = useRecoilValue(selectedAtom)
  let parentFieldKey = ''
  if (selectedFieldKey) {
    const selectArr = selectedFieldKey.split('.')
    if (selectArr.length > 1) {
      parentFieldKey = selectArr.splice(0, selectArr.length - 1).join('.')
    }
  }
  return generatorContext.current?.get(parentFieldKey).uiSchema.type || 'object'
}

export default useGetParentType
