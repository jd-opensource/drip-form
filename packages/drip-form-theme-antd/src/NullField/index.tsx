/*
 * @Author: jiangxiaowei
 * @Date: 2020-05-14 13:33:14
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: 2022-03-15 14:49:37
 */
import React, { memo } from 'react'

export type NullFieldProps = {
  style: React.CSSProperties
  text: string
  styleType: 'none' | 'success' | 'error' | 'warning' | 'info'
}

const commonStyle = {
  height: 40,
  lineHeight: '40px',
  padding: '0 16px',
  borderRadius: '2px',
}

const styleTypeMap = {
  none: null,
  success: {
    backgroundColor: '#F6FFED',
    // color: '#feb00e',
    ...commonStyle,
  },
  error: {
    backgroundColor: '#FFF2F0',
    // color: '#feb00e',
    ...commonStyle,
  },
  warning: {
    backgroundColor: '#fff7e1',
    color: '#feb00e',
    ...commonStyle,
  },
  info: {
    backgroundColor: '#E6F7FF',
    // color: '#feb00e',
    ...commonStyle,
  },
}

const NullField = ({ style, text, styleType = 'none' }: NullFieldProps) => {
  return (
    <div
      style={{ wordBreak: 'break-all', ...style, ...styleTypeMap[styleType] }}
    >
      {text}
    </div>
  )
}

export const nullField = memo(NullField)
export { default as config } from './config'
