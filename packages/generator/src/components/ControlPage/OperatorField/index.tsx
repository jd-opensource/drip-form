/*
 * 比较操作符组件
 * @Author: jiangxiaowei
 * @Date: 2022-07-24 09:37:51
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: 2022-07-24 09:59:14
 */
import React, { memo, FC } from 'react'
import { Select, SelectProps } from 'antd'
import { useFieldKeyType } from '@generator/hooks'
import { operatorOptionsAF } from '@generator/store'
import { useRecoilValue } from 'recoil'
import type { Operator } from '@jdfed/utils'
const OperatorField: FC<
  Omit<SelectProps<string>, 'disabled' | 'options' | 'style' | 'value'> & {
    // 比较操作服左侧的值
    fieldKey1: string
    // 当前操作符
    value: Operator
  }
> = ({ fieldKey1 = '', value, ...props }) => {
  const newFieldKey1 = fieldKey1.split(' ')[0]
  const type = useFieldKeyType(newFieldKey1)
  const operatorOptions = useRecoilValue(operatorOptionsAF(type))
  return (
    <Select
      // 未设置fieldKey1时，不展示operator
      disabled={!newFieldKey1}
      // 根据fieldKey1动态设置operations
      options={operatorOptions}
      style={{ width: 100 }}
      value={value}
      {...props}
    ></Select>
  )
}

export default memo(OperatorField)
