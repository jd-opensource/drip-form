/*
 * @Author: jiangxiaowei
 * @Date: 2020-05-14 13:33:14
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: 2022-03-13 12:29:08
 */
import React, { memo } from 'react'

export type NullFieldProps = {
  style: React.CSSProperties
  text: string
}

const NullField = ({ style, text }: NullFieldProps) => {
  return <div style={{ wordBreak: 'break-all', ...style }}>{text}</div>
}

export const nullField = memo(NullField)
export { default as config } from './config'
