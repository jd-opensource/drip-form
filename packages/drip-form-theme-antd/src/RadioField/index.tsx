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
  ...restProps
}: RadioFieldProps) => {
  const _onChange = useField(
    { getKey, fieldKey, onChange, asyncValidate, options: { isDelete: false } },
    dispatch
  )

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
