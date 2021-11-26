/*
 * 对象容器、数组容器子元素为空时，占位
 * @Author: jiangxiaowei
 * @Date: 2021-10-21 21:49:38
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: 2021-10-21 21:50:05
 */
import React, { memo } from 'react'
import cx from 'classnames'
import styles from './Placeholder.module.css'
import type { FC } from 'react'

const Placeholder: FC<{ fieldKey: string }> = memo(({ fieldKey }) => {
  return <div className={cx(styles.placeholder)}>{fieldKey}占位符</div>
})

Placeholder.displayName = 'placeholder'

export default Placeholder
