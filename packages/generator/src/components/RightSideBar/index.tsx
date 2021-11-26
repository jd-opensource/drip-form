import React, { memo, Fragment } from 'react'
import Config from './Config'
import EditJSON from './EditJSON'
import { componentsFoldAtom } from '@generator/store'
import { useRecoilValue } from 'recoil'

const RightSideBar = () => {
  const fold = useRecoilValue(componentsFoldAtom)

  return <Fragment>{fold ? <EditJSON /> : <Config />}</Fragment>
}

export default memo(RightSideBar)
