/*
 * @Author: jiangxiaowei
 * @Date: 2021-07-29 19:40:44
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: 2021-08-17 18:40:36
 */
import type { Plugin } from 'ajv/dist/2019'
/**
 * 针对对string类型的关键字：使用分割符分割之后的最长最短输入校验
 * @schemaKey {string} delimiter 字符串分隔符
 * @schemaKey {number} max 最大长度
 * @schemaKey {number} min 最短长度
 */
export const rangeDelimiter: Plugin<undefined> = (ajv) => {
  if (!ajv.getKeyword('rangeDelimiter')) {
    ajv.addKeyword({
      // schema关键字
      keyword: 'rangeDelimiter',
      // 允许的校验类型
      type: 'string',
      // modifying:true,
      // 校验函数
      validate: (
        schema: {
          delimiter: string
          max: number
          min: number
        },
        data: string
      ): boolean => {
        const {
          delimiter,
          max,
          min,
        }: { delimiter: string; max: number; min: number } = schema
        const dataList = data.split(delimiter).filter((item) => item).length
        // TODO 使用codegen修改data数据
        return !(dataList > max || dataList < min)
      },
    })
  }
  return ajv
}
