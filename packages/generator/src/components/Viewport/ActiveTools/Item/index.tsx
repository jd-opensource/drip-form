import React, { memo } from 'react'
import cx from 'classnames'
import style from './index.module.css'
import type { FC } from 'react'

type Props = {
  onClick?: () => void
  icon: string
}

const Item: FC<Props> = memo(({ onClick, icon }) => {
  return (
    <div className={style.activeButton} {...(onClick && { onClick })}>
      <i className={cx('icon', 'iconfont', `icon-${icon}`, style.icon)}></i>
    </div>
  )
})

Item.displayName = 'Item'

export default Item
