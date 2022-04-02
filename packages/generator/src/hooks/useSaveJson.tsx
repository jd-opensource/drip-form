/*
 * 保存json通用hook
 * @Author: jiangxiaowei
 * @Date: 2022-04-02 15:34:29
 * @Last Modified by:   jiangxiaowei
 * @Last Modified time: 2022-04-02 15:34:29
 */
import { IsSavedAtom, schemaAtom, versionAtom } from '@generator/store'
import { useSetRecoilState } from 'recoil'
import { useCallback } from 'react'
import { message } from 'antd'
import type { UnitedSchema } from '@jdfed/utils'

type SaveJson = (json: UnitedSchema) => void

const useSaveJson = (): SaveJson => {
  const setUnitedSchema = useSetRecoilState(schemaAtom)
  const setIsSaved = useSetRecoilState(IsSavedAtom)
  const setVersion = useSetRecoilState(versionAtom)
  const saveJson = useCallback<SaveJson>(
    (json) => {
      setUnitedSchema(json)
      setVersion((number) => number + 1)
      setIsSaved(true)
      message.success('保存成功，真棒👍🏻', 2)
    },
    [setIsSaved, setUnitedSchema, setVersion]
  )
  return saveJson
}

export default useSaveJson
