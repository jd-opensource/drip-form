/*
 * addFormat(ajv) 添加所有formats
 * addFormat(ajv,['color','date-time']) 仅添加color和date-time format
 * @Author: jiangxiaowei
 * @Date: 2021-07-29 12:56:28
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: 2022-01-07 17:48:50
 */
import formats from './formats'
import type { formatsName } from './formats'
import type { Plugin } from 'ajv/dist/2019'

const addFormat: Plugin<Array<formatsName>> = (ajv, options) => {
  if (Array.isArray(options)) {
    Object.keys(formats)
      .filter((item) => options.includes(item as formatsName))
      .map((item) => {
        ajv.addFormat(item, formats[item as formatsName])
      })
  } else if (!options) {
    Object.keys(formats).map((item) => {
      ajv.addFormat(item, formats[item as formatsName])
    })
  }
  return ajv
}

export default addFormat
