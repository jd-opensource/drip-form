import React, { memo, MutableRefObject } from 'react'
import cx from 'classnames'
import styles from './index.module.css'
import PropertyConfig from './PropertyConfig'
import CheckConfig from './Check'
import { Tabs } from 'antd'
import type { DripFormRefType } from '@jdfed/drip-form'

const { TabPane } = Tabs
interface RightSideBarType {
  formRef: MutableRefObject<DripFormRefType | undefined>
}

const Config = () => {
  return (
    <div className={cx(styles.container, 'rightSideBarGlobal')}>
      <Tabs defaultActiveKey="1" type="card">
        <TabPane tab="属性配置" key="1">
          <PropertyConfig />
        </TabPane>
        <TabPane tab="校验配置" key="2">
          <CheckConfig />
        </TabPane>
      </Tabs>
    </div>
  )
}

export default memo(Config)

export type { RightSideBarType }
