/*
 * 是否是json对象 这里只判断string类型（format针对string类型）
 * @Author: jiangxiaowei
 * @Date: 2022-01-14 20:28:33
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: 2022-01-14 20:50:21
 */
const jsonObject = (data: string): boolean => {
  try {
    data = JSON.parse(data)
  } catch (e) {
    return false
  }

  return typeof data === 'object' && data !== null
}

export default jsonObject
