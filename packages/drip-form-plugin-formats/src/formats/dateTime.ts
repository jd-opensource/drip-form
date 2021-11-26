/*
 * JSONSchema 默认date-time 校验UTC格式，我们校验2021-07-29 11:50:01
 * @Author: jiangxiaowei
 * @Date: 2021-07-29 11:50:01
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: 2021-07-29 17:05:25
 */
const dateTimeReg =
  /^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)$/i
export default dateTimeReg
