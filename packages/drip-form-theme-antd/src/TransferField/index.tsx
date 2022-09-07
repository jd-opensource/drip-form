/*
 * @Author: jiangxiaowei
 * @Date: 2022-09-07 14:23:05
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: 2022-09-07 15:47:39
 */
import React, { memo, FC, useCallback } from 'react'
import { Transfer, TransferProps } from 'antd'
import { useField } from '@jdfed/hooks'
import { CommonProps } from '../global'

type TransferItem = {
  key?: string
  title?: string
  description?: string
  disabled?: boolean
  [name: string]: any
}

export type TransferFieldProps = CommonProps & TransferProps<TransferItem>

const TransferField: FC<TransferFieldProps> = ({
  onChange,
  fieldData,
  fieldKey,
  dispatch,
  asyncValidate,
  getKey,
  ...restProps
}) => {
  const _onChange = useField(
    {
      getKey,
      fieldKey,
      onChange,
      asyncValidate,
    },
    dispatch
  )

  const change = (nextTargetKeys: string[]) => {
    _onChange(nextTargetKeys)
  }

  const render = useCallback((item) => item.title, [])

  return (
    <Transfer
      targetKeys={fieldData}
      onChange={change}
      render={render}
      {...restProps}
    ></Transfer>
  )
}

export const transfer = memo(TransferField)
export { default as config } from './config'
