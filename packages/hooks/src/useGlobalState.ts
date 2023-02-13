/*
 * 全局状态
 * @Author: linjunchen5
 */

import { createContext, useContext } from 'react'

export type TGlobalState = Partial<{
  // 暂存的错误信息
  stageErrors: Record<string, string>
}>

// 默认全局状态
export const defaultGlobalState: TGlobalState = {
  stageErrors: {},
}

export const globalStateContext =
  createContext<TGlobalState>(defaultGlobalState)

// 返回上一次的value值
const useGlobalState = (): TGlobalState => useContext(globalStateContext)

export default useGlobalState
