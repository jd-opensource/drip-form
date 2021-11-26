/*
 * 按钮只可以点击一次
 * @Author: jiangxiaowei
 * @Date: 2020-05-14 16:54:56
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: 2020-06-21 18:40:08
 */
import { useRef, useCallback } from 'react'

type ClickFuc = () => void
type ReturnType<T> = [boolean, T, T]

const useClickOne = (): ReturnType<ClickFuc> => {
  const ref = useRef(true)
  const startClick = useCallback(() => {
    ref.current = false
  }, [])
  const stopClick = useCallback(() => {
    ref.current = true
  }, [])
  return [ref.current, startClick, stopClick]
}

export default useClickOne
