import React, { memo } from 'react'
import { useDeleteField } from '@generator/hooks'
import Item from './Item'
import style from './index.module.css'

const ActiveTools = memo(() => {
  const deleteField = useDeleteField()

  return (
    <div className={style.activeTools}>
      {/* <Item icon='xiangshang'/>
    <Item icon='xiangxia'/> */}
      {/* <Item icon="fuzhi1" /> */}
      <Item icon="shanchu" onClick={deleteField.bind(this, undefined)} />
    </div>
  )
})

ActiveTools.displayName = 'ActiveTools'

export default ActiveTools
