/*
 * 获取当前选中的schema
 * @Author: jiangxiaowei
 * @Date: 2021-08-16 16:02:18
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: 2021-08-19 15:45:28
 */
import { useContext } from 'react'
import { useRecoilValue } from 'recoil'
import { selectedAtom, GeneratorContext } from '@generator/store'

type Schema = {
  dataSchema: Record<string, unknown>
  uiSchema: Record<string, unknown>
  selectedFieldKey: string | null
}

const useGetCurSchema = (): Schema => {
  const generatorContext = useContext(GeneratorContext)
  const selectedFieldKey = useRecoilValue(selectedAtom)
  const schema = generatorContext.current?.get(selectedFieldKey || '')
  return schema
    ? {
        ...schema,
        selectedFieldKey,
      }
    : {
        dataSchema: {},
        uiSchema: {},
        selectedFieldKey,
      }
}

export default useGetCurSchema
