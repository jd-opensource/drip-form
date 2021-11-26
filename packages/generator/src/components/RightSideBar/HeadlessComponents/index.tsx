/*
 * headless ui component
 * 封装 属性配置、校验配置的公共逻辑
 * @Author: jiangxiaowei
 * @Date: 2021-08-31 14:06:55
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: 2021-11-12 18:10:16
 */
import { useContext } from 'react'
import { GeneratorContext, DripFormUiComponetsAtom } from '@generator/store'
import { useGetCurSchema } from '@generator/hooks'
import { useRecoilValue } from 'recoil'
import type { GeneratorContextType } from '@generator/store'
import type { UiComponents } from '@jdfed/drip-form'

type UseRightSidebar = () => {
  generatorContext: GeneratorContextType
  selectedFieldKey: string | null
  dataSchema: Record<string, unknown>
  uiSchema: Record<string, unknown>
  uiComponents: UiComponents
}

const useRightSidebar: UseRightSidebar = () => {
  const uiComponents = useRecoilValue(DripFormUiComponetsAtom)
  const generatorContext = useContext(GeneratorContext)
  const { selectedFieldKey, dataSchema, uiSchema } = useGetCurSchema()
  return {
    generatorContext,
    selectedFieldKey,
    dataSchema,
    uiSchema,
    uiComponents,
  }
}

export default useRightSidebar
