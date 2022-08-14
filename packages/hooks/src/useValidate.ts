/*
 * 表单校验
 * @Author: jiangxiaowei
 * @Date: 2020-05-19 13:40:24
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: yyyy-05-dd 15:30:48
 */
import { useDebounceFn } from 'ahooks'
import type Ajv from 'ajv/dist/2019'
import type { ErrorObject } from 'ajv/dist/2019'

import type { Dispatch } from 'react'
import type { Action } from '@jdfed/utils'
type Errors = ErrorObject[]
export type ErrorsMap = Record<string, string>
type ValidateReturn = {
  pass: boolean
  errors: Errors
  errorsMap: ErrorsMap
  formData: Record<string, unknown>
}

export type Validate = (param: {
  schema: Record<string, unknown>
  formData: Record<string, unknown>
  ajv: Ajv
  visibleFieldKey?: string[]
  customProps?: string[]
}) => ValidateReturn

type Params = {
  dataSchema: {
    [propName: string]: any
  }
  formData: {
    [propName: string]: any
  }
  ajv: any
  dispatch: Dispatch<Action>
  visibleFieldKey: string[]
}

const useValidate = (validate: Validate): ((arg0: Params) => void) => {
  const { run } = useDebounceFn(
    ({ dataSchema, formData, dispatch, visibleFieldKey, ajv }) => {
      /*
      因为ajv中有option配置可以改变formData(useDefaults：true)修改默认值
      或者类似ajv-keywords的自定义关键字transform等情况会修改formData。
      所以需要在在validate中使用immer，并重新返回新的formData。在此需要对formData重新dispatch设置
      */
      const { errorsMap, formData: newFormData } = validate({
        schema: dataSchema,
        formData,
        ajv,
        visibleFieldKey,
      })

      dispatch({
        type: 'setAjvErr',
        action: {
          errors: errorsMap,
        },
      })
      dispatch({
        type: 'setData',
        action: {
          formData: newFormData,
        },
      })
      dispatch({
        type: 'setChecking',
        checking: false,
      })
    },
    { wait: 500 }
  )
  return run
}

export default useValidate
