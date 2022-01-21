/*
 * @Author: jiangxiaowei
 * @Date: 2022-01-20 19:26:31
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: 2022-01-20 19:48:12
 */

import type { Plugin } from 'ajv/dist/2019'
/**
 * 计算中文、英文最长最短长度
 * @schemaKey {number} max 最大长度
 * @schemaKey {number} min 最短长度
 */
export const gbkLength: Plugin<undefined> = (ajv) => {
  if (!ajv.getKeyword('gbkLength')) {
    ajv.addKeyword({
      // schema关键字
      keyword: 'gbkLength',
      // 允许的校验类型
      type: 'string',
      // modifying:true,
      // 校验函数
      validate: (
        schema: {
          max: number
          min: number
        },
        data: string
      ): boolean => {
        const { max, min } = schema

        // eslint-disable-next-line no-control-regex
        const len = data.trim().replace(/[^\x00-\xff]/g, 'aa').length

        if (min !== undefined && min > len) {
          return false
        } else if (max !== undefined && max < len) {
          return false
        }
        return true
      },
    })
  }
  return ajv
}
