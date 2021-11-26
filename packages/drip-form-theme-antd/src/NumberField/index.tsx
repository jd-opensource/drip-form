/*
 * @Author: jiangxiaowei
 * @Date: 2020-05-20 20:18:36
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: 2021-08-11 14:41:44
 */
import React, { memo } from 'react'
import { InputNumber } from 'antd'
import { useField } from '@jdfed/hooks'
import { CommonProps } from '../global'

export type NumberFieldProps = CommonProps

const NumberField = ({
  placeholder,
  disabled,
  onChange,
  fieldData,
  fieldKey,
  dispatch,
  style,
  asyncValidate,
  getKey,
  ...restProps
}: NumberFieldProps) => {
  const _onChange = useField(
    { fieldKey, onChange, asyncValidate, getKey },
    dispatch
  )
  return (
    <InputNumber
      disabled={disabled}
      placeholder={placeholder}
      onChange={_onChange}
      value={fieldData}
      style={style}
      {...restProps}
    />
  )
}

export const numberField = memo(NumberField)
