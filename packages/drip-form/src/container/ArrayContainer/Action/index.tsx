/*
 * 数组容器按钮hover态
 * @Author: jiangxiaowei
 * @Date: 2022-05-12 14:10:24
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: 2022-05-12 14:45:26
 */
import React, { FC, memo } from 'react'
import cx from 'classnames'
import './index.styl'

const action: FC<React.HTMLAttributes<HTMLButtonElement>> = memo(
  ({ className, ...props }) => {
    return <button {...props} className={cx('array-item--action', className)} />
  }
)

action.displayName = 'Action'

export const Action = action
