/*
 * @Author: jiangxiaowei
 * @Date: 2020-05-14 11:08:36
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: 2020-06-23 16:25:02
 */

/*  例子
import {useRefProp} from 'hooks'

Component = (props)=>{
    const ref = useRefProp(依赖的值)
    // callback避免依赖过多，导致onClick多次重新生成问题。使用useRefProp可以保证onClick不变
    const onClick = useCallback(()=>{
        const {xxx} = ref.current
    },[])
} */

import { useRef, useEffect } from 'react'

const useRefProp = (
  props: any[]
): {
  current: null | any[]
} => {
  const ref = useRef<any[] | null>(null)
  useEffect(() => {
    ref.current = props
  })
  return ref
}

export default useRefProp
