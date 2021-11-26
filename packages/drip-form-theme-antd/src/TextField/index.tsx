/*
 * @Author: jiangxiaowei
 * @Date: 2020-05-14 13:33:14
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: 2021-11-07 17:42:58
 */
import React, { memo, FC } from 'react'
import { Input } from 'antd'
import { useField } from '@jdfed/hooks'
const { TextArea } = Input
import { CommonProps } from '../global'

export type TextFieldProps = CommonProps &
  Partial<{
    multiline: number | boolean
    // 禁止输入的字符串
    disabled_input: string[]
  }>
const TextField: FC<TextFieldProps> = ({
  multiline: autoSize = false,
  placeholder = '请输入',
  disabled,
  onChange,
  fieldData,
  fieldKey,
  dispatch,
  disabled_input,
  style,
  asyncValidate,
  getKey,
  ...restProps
}) => {
  const _onChange = useField(
    {
      fieldKey,
      onChange,
      asyncValidate,
      getKey,
      ...(disabled_input && { options: { disabled_input, isFormat: true } }),
    },
    dispatch
  )

  return autoSize && autoSize !== 1 ? (
    <TextArea
      {...(typeof autoSize === 'number' ? { rows: autoSize } : null)}
      placeholder={placeholder}
      disabled={disabled}
      onChange={_onChange}
      value={fieldData}
      style={style}
      {...restProps}
    />
  ) : (
    <Input
      placeholder={placeholder}
      disabled={disabled}
      onChange={_onChange}
      value={fieldData}
      style={style}
      {...restProps}
    />
  )
}

export const text = memo(TextField)
