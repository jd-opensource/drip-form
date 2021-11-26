import React, { memo } from 'react'
import { Breadcrumb } from 'antd'
import { useGetCurSchema } from '@generator/hooks'
import styles from './index.module.css'

const { Item } = Breadcrumb
const TitleHeader = memo(() => {
  const { selectedFieldKey } = useGetCurSchema()
  return (
    <div className={styles.titleHeader}>
      <div className={styles.pagetitle}>可视区</div>
      <Breadcrumb>
        <Item>
          <span>
            <i className="iconfont icon-position" />
            <span>全局</span>
          </span>
        </Item>
        {(selectedFieldKey || '').split('.').map((item, i) => {
          return <Item key={i}>{item}</Item>
        })}
      </Breadcrumb>
    </div>
  )
})

TitleHeader.displayName = 'TitleHeader'

export default TitleHeader
