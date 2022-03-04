/*
 * @Author: jiangxiaowei
 * @Date: 2022-03-02 13:04:51
 * @Last Modified by:   jiangxiaowei
 * @Last Modified time: 2022-03-02 13:04:51
 */
import React, { memo } from 'react'
import { useRecoilValue } from 'recoil'
import { useDeleteField } from '@generator/hooks'
import { viewportConfigSelector } from '@generator/store'
import Item from './Item'
import cx from 'classnames'
import style from './index.module.css'

const ActiveTools = memo<{
  // 是否第一个表单元素
  isFirst: boolean
}>(({ isFirst = false }) => {
  const deleteField = useDeleteField()
  const { showDeleteIcon } = useRecoilValue(viewportConfigSelector)

  return (
    <div className={cx(isFirst ? style.firstActiveTools : style.activeTools)}>
      {/* <Item icon="xiangshang" />
      <Item icon="xiangxia" />
      <Item icon="fuzhi1" /> */}
      {showDeleteIcon && (
        <Item icon="shanchu" onClick={deleteField.bind(this, undefined)} />
      )}
    </div>
  )
})

ActiveTools.displayName = 'ActiveTools'

export default ActiveTools
