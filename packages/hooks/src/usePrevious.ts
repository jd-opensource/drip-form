/*
 * @Author: jiangxiaowei
 * @Date: 2020-05-14 11:08:53
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: 2020-06-23 16:24:55
 */
import { useRef, useEffect } from 'react'

// 返回上一次的value值
const usePrevious = (value: any): any => {
  const ref = useRef<any>()
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}

export default usePrevious
