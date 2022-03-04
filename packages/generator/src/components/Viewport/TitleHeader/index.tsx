import React, { memo } from 'react'
import { Breadcrumb } from 'antd'
import { useRecoilValue } from 'recoil'
import { useGetCurSchema } from '@generator/hooks'
import { curEditFieldKeyAtom } from '@generator/store'
import styles from './index.module.css'

const { Item } = Breadcrumb
const TitleHeader = memo(() => {
  const { selectedFieldKey } = useGetCurSchema()
  const curEditFieldKey = useRecoilValue(curEditFieldKeyAtom(selectedFieldKey))
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
        {(selectedFieldKey || '').split('.').map((item, i, arr) => {
          return (
            <Item key={i}>{i === arr.length - 1 ? curEditFieldKey : item}</Item>
          )
        })}
      </Breadcrumb>
    </div>
  )
})

TitleHeader.displayName = 'TitleHeader'

export default TitleHeader
