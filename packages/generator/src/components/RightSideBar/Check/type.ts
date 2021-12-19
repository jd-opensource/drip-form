/*
 * dataSchema中关键字校验配置映射
 * @Author: jiangxiaowei
 * @Date: 2021-08-16 14:59:26
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: 2021-11-04 17:25:33
 */

import string from '../../../fields/common/checkConfig/String'
import number from '../../../fields/common/checkConfig/Number'
import object from '../../../fields/common/checkConfig/Object'
import array from '../../../fields/common/checkConfig/Array'
type CheckKes = 'string' | 'number' | 'object' | 'array'
type CheckValue = {
  common: Record<string, Record<string, unknown>>
  business: Record<string, Record<string, unknown>>
}
type TypeMap = Record<CheckKes, CheckValue>
const typeMap: TypeMap = {
  string,
  number,
  object,
  array,
}
export default typeMap
