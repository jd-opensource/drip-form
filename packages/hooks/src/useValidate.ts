/*
 * 表单校验
 * @Author: jiangxiaowei
 * @Date: 2020-05-19 13:40:24
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: yyyy-05-dd 15:30:48
 */
import produce from 'immer'
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

/**
 *
 * @param {json} schema 校验数据的json schema
 * @param {object} formData 校验数据
 * @param {Ajv} ajv 校验器
 * @param visibleFieldKey
 * return {
 *  pass {bol} 是否校验通过
 *  error {} 校验错误信息
 * }
 */
export const validate: Validate = ({
  schema,
  formData,
  ajv,
  visibleFieldKey,
  customProps,
}) => {
  try {
    const ignoreKeywords =
      customProps?.filter((item) => !ajv.RULES.keywords[item]) || []
    if (ignoreKeywords?.length > 0) {
      ajv.addVocabulary(ignoreKeywords)
    }
    // 编译ajv
    const validateFuc = ajv.compile(schema)
    // 校验是否通过
    let pass = false
    // 因为ajv会改动formData数据。而formData是不可变的，我们通过immer生成新的数据
    const newFormData = produce(formData, (draft) => {
      pass = validateFuc(draft)
    })

    // 未通过校验的数据，结构如下
    // [{
    //   instancePath: '/e/0/1', // 这是一个嵌套表单，数据结构为 { e: [[]] }
    //   schemaPath: '#/properties/e/items/items/1/errorMessage',
    //   keyword: 'errorMessage',
    //   params: { errors: [Array] },
    //   message: '类型错误！应为number',
    //   schema: { type: '类型错误！应为number' },
    //   parentSchema: { type: 'number', title: '手机', minimum: 1, errorMessage: [Object] },
    //   data: '231'
    // }, ...]
    let errors = validateFuc?.errors || []
    // 当前数据错误映射
    const errorsMap: {
      [propName: string]: string
    } = {}
    // 只处理 dataSchema 中 errorMessage 给出具体错误内容的错误
    errors = errors.filter(
      (err: { keyword: string }) => err.keyword === 'errorMessage'
    )
    // 解析错误信息
    errors.forEach((error: ErrorObject) => {
      // 由于获取的instancePath前面会带有/，此处移除首项的
      const key: string | number = error?.instancePath
        .replace(/^\//, '')
        .replace(/\//g, '.')
      // TODO 错误兜底逻辑优化，过滤error.message上不存在的错误
      if (key) {
        // 数组嵌套对象必填校验 只区instacePath不行，还需加上 error.params.errors[0].params.missingProperty
        errorsMap[
          `${String(key)}${
            error.params.errors[0].params.missingProperty
              ? '.' + error.params.errors[0].params.missingProperty
              : ''
          }`
        ] = error.message || '未知错误'
      } else {
        // 根目录required错误
        errorsMap[error.params.errors[0].params.missingProperty] =
          error.message || '未知错误'
      }
    })

    // 如果该字段不展示在界面上，比如通过开关控制显隐的一些必填项
    // 则从校验中移除这些错误
    Object.keys(errorsMap).map((key) => {
      if (visibleFieldKey && !visibleFieldKey?.includes(key)) {
        delete errorsMap[key]
      }
    })
    return {
      pass,
      errors,
      errorsMap,
      formData: newFormData,
    }
  } catch (error) {
    console.error(error)
    return {
      pass: false,
      errors: [],
      formData,
      errorsMap: {},
    }
  }
}

/**
 *
 * @param delay 校验防抖，延迟多少ms校验
 * @returns
 */
const useValidate = (delay = 0): ((arg0: Params) => void) => {
  const { run } = useDebounceFn<(arg0: Params) => void>(
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
    { wait: delay }
  )
  return run
}

export default useValidate
