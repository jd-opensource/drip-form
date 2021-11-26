/*
 * @Author: jiangxiaowei
 * @Date: 2020-05-14 13:33:14
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: 2021-04-14 12:19:56
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
