import React, { memo, useCallback } from 'react'
import { useRecoilState } from 'recoil'
import { Drawer } from 'antd'
import { controlVisibleAtom } from '@generator/store'
import ControlFlow from './ControlFlow'

const ControlPage = () => {
  const [visible, setVisible] = useRecoilState(controlVisibleAtom)

  const onClose = useCallback(() => {
    setVisible(false)
  }, [setVisible])

  return (
    <Drawer
      title="Basic Drawer"
      placement="right"
      onClose={onClose}
      visible={visible}
      getContainer={false}
      headerStyle={{
        display: 'none',
      }}
      style={{
        position: 'absolute',
      }}
      width="100%"
    >
      <ControlFlow />
    </Drawer>
  )
}

export default memo(ControlPage)
