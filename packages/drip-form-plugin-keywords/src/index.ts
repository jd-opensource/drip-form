/*
 * addKeywords(ajv) 添加所有keywords
 * addKeywords(ajv,['rangeDelimiter']) 仅添加rangeDelimiter关键字
 * @Author: jiangxiaowei
 * @Date: 2021-07-29 12:56:28
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: 2021-08-17 15:45:38
 */
import keywords from './keywords'
import type { KeywordsName } from './keywords'
import type { Plugin, Options } from 'ajv/dist/2019'

const addKeywords: Plugin<Options> = (ajv, options) => {
  if (Array.isArray(options)) {
    Object.keys(keywords)
      .filter((item) => options.includes(item as KeywordsName))
      .map((item) => {
        keywords[item as KeywordsName](ajv)
      })
  } else if (!options) {
    Object.keys(keywords).map((item) => {
      keywords[item as KeywordsName](ajv)
    })
  }
  return ajv
}

export default addKeywords
