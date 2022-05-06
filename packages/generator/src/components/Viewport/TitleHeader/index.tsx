import React, { memo, useContext } from 'react'
import { Breadcrumb } from 'antd'
import { useRecoilValue } from 'recoil'
import { useGetCurSchema } from '@generator/hooks'
import { GeneratorContext, viewportTitleHeaderVersion } from '@generator/store'
import styles from './index.module.css'

const { Item } = Breadcrumb
const TitleHeader = memo(() => {
  const { selectedFieldKey } = useGetCurSchema()
  const version = useRecoilValue(viewportTitleHeaderVersion)
  const generatorContext = useContext(GeneratorContext)

  return (
    <div className={styles.titleHeader}>
      <div className={styles.pagetitle}>可视区</div>
      <Breadcrumb key={version}>
        <Item>
          <span>
            <i className="iconfont icon-position" />
            <span>全局</span>
          </span>
        </Item>
        {(selectedFieldKey || '').split('.').map((item, i, arr) => {
          const fieldKey =
            generatorContext.current?.get(arr.slice(0, i + 1).join('.'))
              .dataSchema.$fieldKey || item
          return <Item key={i}>{fieldKey}</Item>
        })}
      </Breadcrumb>
    </div>
  )
})

TitleHeader.displayName = 'TitleHeader'

export default TitleHeader
