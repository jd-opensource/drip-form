/*
 * @Author: jiangxiaowei
 * @Date: 2022-03-08 17:48:49
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: 2022-03-09 17:10:13
 */

import { createContext, useContext } from 'react'

// 必填校验模式 default：必填同JSON schema reuqired关键字校验模式（会清空当前表单项） empty: 使用@jdfed/utils isEmpty判断（不会清空当前表单项）
type RequiredMode = 'default' | 'empty'
export const RequiredModeContext = createContext<RequiredMode>('default')

// 返回上一次的value值
const useRequiredModeContext = (): RequiredMode => {
  const requiredMode = useContext(RequiredModeContext)
  return requiredMode
}

export default useRequiredModeContext
