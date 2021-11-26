/*
 * 表单校验
 * @Author: jiangxiaowei
 * @Date: 2020-05-19 13:40:24
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: yyyy-05-dd 15:30:48
 */
import { useDebounceFn } from 'ahooks'
import React from 'react'

type Params = {
  dataSchema: {
    [propName: string]: any
  }
  formData: {
    [propName: string]: any
  }
  ajv: any
  dispatch: React.Dispatch<any>
  visibleFieldKey: string[]
  onValidate: {
    [propName: string]: any
  }
}

type ValidateFuc = (
  dataSchema: any,
  formData: any,
  ajv: any,
  visibleFieldKey?: string[]
) => {
  errorsMap: {
    [propName: string]: string
  }
  formData: Record<string, any>
}

const useValidate = (validate: ValidateFuc): ((arg0: Params) => void) => {
  const { run } = useDebounceFn(
    ({ dataSchema, formData, dispatch, visibleFieldKey, ajv, onValidate }) => {
      /*
      因为ajv中有option配置可以改变formData(useDefaults：true)修改默认值
      或者类似ajv-keywords的自定义关键字transform等情况会修改formData。
      所以需要在在validate中使用immer，并重新返回新的formData。在此需要对formData重新dispatch设置
      */
      const ignoreKeys = Object.keys(onValidate).filter((item) => {
        return onValidate[item].type === 'change'
      })
      const { errorsMap, formData: newFormData } = validate(
        dataSchema,
        formData,
        ajv,
        visibleFieldKey
      )

      dispatch({
        type: 'setError',
        errors: errorsMap,
        ignore: ignoreKeys,
      })
      dispatch({
        type: 'setFormData',
        formData: newFormData,
      })
      dispatch({
        type: 'setChecking',
        checking: false,
      })
      dispatch({
        type: 'setDefaultSuccess',
        hasDefault: true,
      })
    },
    { wait: 500 }
  )
  return run
}

export default useValidate
