/*
 * @Author: jiangxiaowei
 * @Date: 2020-05-20 22:17:44
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: 2022-09-28 21:45:42
 */
import React, { memo, FC, useEffect } from 'react'
import { Select } from 'antd'
import { useField, useQuery } from '@jdfed/hooks'
import { CommonProps } from '../global'

export type SelectFieldProps = CommonProps & {
  //   是否可以多选
  multiple?: boolean
  //   配置项
  options?: any[]
  //是否有清除按钮
  allowClear?: boolean
  requestCache?: boolean
}

const SelectField: FC<SelectFieldProps> = ({
  disabled,
  onChange,
  fieldData,
  fieldKey,
  dispatch,
  multiple,
  options = [],
  allowClear,
  queryFunc,
  asyncValidate,
  requestCache = false,
  style,
  getKey,
  ...restProps
}) => {
  const queryOptionsFuc = useQuery(
    {
      getKey,
      options,
      queryFunc,
      requestCache,
      fieldKey,
    },
    dispatch
  )

  useEffect(() => {
    queryOptionsFuc()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // fix：antd 多选情况传空字符串，展示空的选项bug
  if (
    multiple ||
    restProps?.mode === 'multiple' ||
    restProps?.mode === 'tags'
  ) {
    if (!Array.isArray(fieldData)) {
      fieldData = []
    }
  }
  const _onChange = useField(
    { fieldKey, onChange, asyncValidate, getKey },
    dispatch
  )
  // 不管单选多选，均可搜索
  return (
    <Select
      style={style}
      {...(multiple
        ? {
            mode: 'multiple',
          }
        : {
            showSearch: true,
          })}
      allowClear={allowClear}
      disabled={disabled}
      value={fieldData}
      onChange={_onChange}
      options={options}
      {...restProps}
    />
  )
}

export const select = memo(SelectField)
export { default as config } from './config'
