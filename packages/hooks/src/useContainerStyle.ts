/*
 * 返回容器需要的样式
 * @Author: jiangxiaowei
 * @Date: 2021-10-25 11:06:41
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: 2022-01-18 23:40:09
 */
import { useMemo } from 'react'
import type { ContainerStyle } from '@jdfed/utils'

const useContainerStyle = (
  formMode: 'edit' | 'generator' | 'view',
  containerStyle: ContainerStyle
): ContainerStyle => {
  const newContainerStyle = useMemo(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { width, ...props } = containerStyle || {}
    // generator模式的宽度在@jdfed/form-generator中使用containerHoc控制
    return formMode === 'edit' ? containerStyle : props
  }, [containerStyle, formMode])

  return newContainerStyle
}

export default useContainerStyle
