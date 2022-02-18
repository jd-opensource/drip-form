import React, { memo, FC } from 'react'
import { Select, Input } from 'antd'
import { useField, useQuery } from '@jdfed/hooks'
import { CommonProps } from '../global'
import './index.styl'

export type SelectFieldProps = CommonProps & {
  //   是否可以多选
  multiple?: boolean
  //   配置项
  options?: any[]
  //是否有清除按钮
  allowClear?: boolean
  requestCache?: boolean
}

const SelectTextField: FC<SelectFieldProps> = ({
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
  const { select, text } = fieldData
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
  // fix：antd 多选情况传空字符串，展示空的选项bug
  if (multiple) {
    if (!Array.isArray(fieldData.select || [])) {
      fieldData.select = []
    }
  }
  const _onSelectChange = useField(
    {
      fieldKey,
      onChange,
      asyncValidate,
      getKey,
      options: {
        isSelectText: true,
        subFieldKey: 'select',
        prevFieldData: fieldData,
      },
    },
    dispatch
  )
  const _onTextChange = useField(
    {
      fieldKey,
      onChange,
      getKey,
      asyncValidate,
      options: {
        isSelectText: true,
        subFieldKey: 'text',
        prevFieldData: fieldData,
      },
    },
    dispatch
  )

  // 不管单选多选，均可搜索
  return (
    <div className="bf-select-text babel-ui">
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
        value={select}
        onFocus={queryOptionsFuc}
        onChange={_onSelectChange}
        options={options}
      />
      <Input
        disabled={disabled}
        onChange={_onTextChange}
        value={text}
        style={style}
        {...restProps}
      />
    </div>
  )
}

export const selectText = memo(SelectTextField)
