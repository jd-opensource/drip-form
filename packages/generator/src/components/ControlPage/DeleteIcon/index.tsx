import React, { memo, FC } from 'react'
import styles from './index.module.css'
import cx from 'classnames'

const DeleteIcon: FC<{
  onClick: () => void
  className?: string
}> = ({ onClick, className }) => {
  return (
    <i
      className={cx(
        'icon',
        'iconfont',
        'icon-shanchu',
        styles.hover,
        className
      )}
      onClick={onClick}
    ></i>
  )
}

export default memo(DeleteIcon)
