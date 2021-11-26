/*
 * 返回容器需要的样式
 * @Author: jiangxiaowei
 * @Date: 2021-10-25 11:06:41
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: 2021-11-05 17:45:17
 */
import { useMemo } from 'react'
import type { ContainerStyle } from '@jdfed/utils'

const useContainerStyle = (
  formMode: 'edit' | 'generator' | 'view',
  containerStyle: ContainerStyle
): ContainerStyle => {
  const newContainerStyle = useMemo(() => {
    return formMode === 'edit' ? containerStyle : {}
  }, [containerStyle, formMode])

  return newContainerStyle
}

export default useContainerStyle
