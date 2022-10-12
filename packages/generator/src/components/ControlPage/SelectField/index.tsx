/*
 * 表单选择组件
 * @Author: jiangxiaowei
 * @Date: 2022-07-22 14:52:07
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: 2022-07-24 10:33:17
 */
import React, { memo, FC, useCallback } from 'react'
import { useRecoilValue } from 'recoil'
import { componentsFilterData } from '@generator/store'
import { TreeSelect, TreeSelectProps } from 'antd'
import { generateReg } from '@jdfed/utils'

const SelectField: FC<
  Omit<
    TreeSelectProps<string>,
    | 'treeData'
    | 'treeDataSimpleMode'
    | 'dropdownStyle'
    | 'showSearch'
    | 'treeLine'
    | 'onSearch'
    | 'allowClear'
    | 'filterTreeNode'
    | 'style'
  >
> = ({ value, ...props }) => {
  const treeData = useRecoilValue(componentsFilterData(''))

  const filterFn = useCallback((filterValue, treeNode) => {
    return (
      (treeNode.title || '').startsWith(filterValue) ||
      generateReg(filterValue.split('.')).test(treeNode.value || '')
    )
  }, [])

  return (
    <TreeSelect
      dropdownStyle={{
        maxHeight: 400,
        overflow: 'auto',
      }}
      style={{ width: 200 }}
      showSearch
      treeDataSimpleMode={{
        id: 'value',
        pId: 'fatherKey',
        rootPId: '',
      }}
      // flow condintinon fieldKey1格式为 fieldKey type，这里只需要fieldKey
      value={value?.split(' ')[0]}
      allowClear
      treeData={treeData}
      treeLine={{ showLeafIcon: false }}
      filterTreeNode={filterFn}
      {...props}
    ></TreeSelect>
  )
}

export default memo(SelectField)
