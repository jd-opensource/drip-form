import React, { memo } from 'react'
import { Radio } from 'antd'
import { useField } from '@jdfed/hooks'
import { CommonProps } from '../global'
import { QuestionCircle } from '../Shared'
export type RadioFieldProps = CommonProps & {
  options: []
  buttonStyle?: 'outline' | 'solid'
}

const RadioField = ({
  fieldKey,
  fieldData,
  dispatch,
  options,
  buttonStyle = 'outline',
  onChange,
  asyncValidate,
  getKey,
  formMode,
  ...restProps
}: RadioFieldProps) => {
  const _onChange = useField(
    { getKey, fieldKey, onChange, asyncValidate, options: { isDelete: false } },
    dispatch
  )
  // view 模式
  if (formMode === 'view') {
    const curOption: Array<Record<string, any>> = options.filter(
      (item: any) => item.value === fieldData
    )
    return curOption[0]?.label || null
  }

  return (
    <Radio.Group
      value={fieldData}
      {...(buttonStyle && { buttonStyle })}
      {...restProps}
      onChange={_onChange}
    >
      {options.map((item: any, idx) => {
        const { value, label, description, ...restOption } = item

        return buttonStyle === 'solid' ? (
          <Radio.Button
            value={value}
            key={`${fieldKey}_${idx}`}
            {...restOption}
          >
            {label}
            {description?.title && <QuestionCircle {...description} />}
          </Radio.Button>
        ) : (
          <Radio value={value} key={`${fieldKey}_${idx}`} {...restOption}>
            {label}
            {description?.title && <QuestionCircle {...description} />}
          </Radio>
        )
      })}
    </Radio.Group>
  )
}

export const radio = memo(RadioField)
export { default as config } from './config'
