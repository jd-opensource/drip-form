/*
 * 通用关键字校验配置
 * @Author: jiangxiaowei
 * @Date: 2021-08-16 15:01:02
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: 2021-08-25 11:15:43
 */
type Map = Record<string, Record<string, unknown>>
const common: Map = {
  required: {
    type: 'boolean',
    title: '是否必填',
    fieldKey: 'required',
    ui: {
      type: 'switch',
    },
  },
}
export default common
