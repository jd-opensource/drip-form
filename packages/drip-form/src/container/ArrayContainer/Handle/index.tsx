/*
 * 数组容器拖拽按钮
 * @Author: jiangxiaowei
 * @Date: 2022-05-12 15:04:52
 * @Last Modified by:   jiangxiaowei
 * @Last Modified time: 2022-05-12 15:04:52
 */
import React, { FC, memo } from 'react'
import { Action } from '../Action'
const handle: FC<React.HTMLAttributes<HTMLButtonElement>> = memo((props) => {
  return (
    <Action {...props}>
      <svg viewBox="0 0 20 20" width="12">
        <path d="M7 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 2zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 14zm6-8a2 2 0 1 0-.001-4.001A2 2 0 0 0 13 6zm0 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 14z"></path>
      </svg>
    </Action>
  )
})

handle.displayName = 'Handle'

export const Handle = handle
