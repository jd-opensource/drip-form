/*
 * @Author: jiangxiaowei
 * @Date: 2020-05-20 20:18:36
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: 2022-03-17 16:35:09
 */
import React, { memo } from 'react'
import { InputNumber } from 'antd'
import { useField } from '@jdfed/hooks'
import { CommonProps } from '../global'

export type NumberFieldProps = CommonProps

const NumberField = ({
  disabled,
  onChange,
  fieldData,
  fieldKey,
  dispatch,
  style,
  asyncValidate,
  getKey,
  formMode,
  ...restProps
}: NumberFieldProps) => {
  const _onChange = useField(
    { fieldKey, onChange, asyncValidate, getKey },
    dispatch
  )
  // view 模式
  if (formMode === 'view') return fieldData || null
  return (
    <InputNumber
      disabled={disabled}
      onChange={_onChange}
      value={fieldData}
      style={style}
      {...restProps}
    />
  )
}

export const numberField = memo(NumberField)
export { default as config } from './config'
