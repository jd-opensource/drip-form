import React, { CSSProperties, memo } from 'react'
import { Radio, Input } from 'antd'
import { useField } from '@jdfed/hooks'
import { CommonProps } from '../global'
// import { render } from 'react-dom'

interface ComplicateOption {
  label: string
  value: any
  more?: boolean
  hideStyle?: 'visible' | 'disable'
  placeholder?: string
  disabled?: boolean
  style?: CSSProperties
}
export type RadioTextFieldProps = CommonProps & {
  options: ComplicateOption[]
}

const isOptionValue = (value: any, options: ComplicateOption[]) =>
  options.filter((val) => !val.more).findIndex((opt) => opt.value === value) >
  -1

const textVisible = (
  more: boolean,
  hideStyle: 'visible' | 'disable',
  moredata: boolean
) => {
  if (more) {
    if (hideStyle === 'disable') {
      return true
    } else if (moredata) {
      return true
    }
  }
  return false
}

const RadioTextField = ({
  fieldKey,
  fieldData,
  dispatch,
  options,
  onChange,
  asyncValidate,
  getKey,
  ...restProps
}: RadioTextFieldProps) => {
  const _onChange = useField(
    { getKey, fieldKey, onChange, asyncValidate },
    dispatch
  )
  const isMoreData = !isOptionValue(fieldData, options)
  return (
    <Radio.Group value={fieldData} {...restProps} onChange={_onChange}>
      {options.map((item: ComplicateOption, idx) => {
        const {
          value,
          label,
          more,
          placeholder,
          hideStyle = 'disable',
          disabled,
          ...restOptions
        } = item
        return (
          <React.Fragment key={`${fieldKey}_${idx}`}>
            <Radio value={more && isMoreData ? fieldData : value}>
              {label}
            </Radio>
            {textVisible(!!more, hideStyle, isMoreData) && (
              <Input
                placeholder={placeholder}
                disabled={!!disabled || !isMoreData}
                value={isMoreData ? fieldData : ''}
                {...restOptions}
                onChange={_onChange}
              />
            )}
          </React.Fragment>
        )
      })}
    </Radio.Group>
  )
}

export const radioText = memo(RadioTextField)
