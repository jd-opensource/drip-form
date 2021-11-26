/*
 * @Author: jiangxiaowei
 * @Date: 2020-05-14 11:09:25
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: 2020-06-23 16:24:38
 */

import { useCallback, useRef, useEffect } from 'react'

/**
 * 重写useCallback（保证函数即使dependencies依赖改变。也不会重新生成）
 * 解决因为useCallback的依赖频繁变化导致useCallback缓存效果很差甚至影响性能的问题
 * fn 函数
 * dependencies 依赖数组
 */
const useEventCallback = (
  fn: (...args: any[]) => void,
  dependencies: any[]
): ((...args: any[]) => void) => {
  const ref = useRef<(...args: any[]) => void>(() => {
    throw new Error('Cannot call an event handler while rendering.')
  })

  useEffect(() => {
    ref.current = fn
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fn, ...dependencies])

  return useCallback(
    (...restProps) => {
      const fn = ref.current
      return fn(...restProps)
    },
    [ref]
  )
}

export default useEventCallback
