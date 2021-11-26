/*
 * @Author: jiangxiaowei
 * @Date: 2020-05-20 16:36:06
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: yyyy-05-dd 15:29:58
 */
import produce from 'immer'
import type Ajv from 'ajv/dist/2019'
import type { ErrorObject } from 'ajv/dist/2019'
export type Errors = ErrorObject[]
export type ErrorsMap = Record<string, string>
export type validateReturn = {
  pass: boolean
  errors: Errors
  errorsMap: ErrorsMap
  formData: Record<string, unknown>
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
const validate = (
  schema: Record<string, unknown>,
  formData: Record<string, unknown>,
  ajv: Ajv,
  visibleFieldKey?: string[]
): validateReturn => {
  try {
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

export default validate
