import React, { memo } from 'react'
// import PropTypes from 'prop-types'
import { Checkbox } from 'antd'
import { useField } from '@jdfed/hooks'
import { isEmpty, typeCheck } from '@jdfed/utils'
import './index.styl'
import { CommonProps } from '../global'
import { QuestionCircle } from '../Shared'

export interface CheckboxOptions {
  label: string
  value: string
  disabled?: boolean
  description?: {
    title: string
    trigger?: 'hover' | 'click'
  }
}

export type CheckboxFieldProps = CommonProps & {
  needCheckAll?: boolean
  options: Array<string | CheckboxOptions>
}

const CheckboxField = ({
  fieldKey,
  fieldData,
  dispatch,
  needCheckAll = false,
  options = [{ label: '选项', value: 'choice' }],
  onChange,
  asyncValidate,
  getKey,
  ...restProps
}: CheckboxFieldProps) => {
  const _onChange = useField(
    { getKey, fieldKey, onChange, asyncValidate, options: { isDelete: false } },
    dispatch
  )
  /**
   * 针对全选的逻辑处理
   */
  // 判断是否为全选状态
  const isAllChecked: boolean = fieldData
    ? fieldData.length === options.length
    : false
  // 全选状态的value
  const allChecked = options.map((item: string | CheckboxOptions) => {
    if (typeCheck(item) === 'Object') {
      return (item as { value: string })['value']
    } else {
      return item
    }
  })
  // 全选框的value
  const allCheckboxValue = isEmpty(fieldData)
    ? allChecked
    : isAllChecked
    ? []
    : allChecked

  const renderOptions = (options: Array<string | CheckboxOptions>) => {
    return options.map((item: string | CheckboxOptions, index: number) => {
      if (typeCheck(item) === 'String') {
        return (
          <Checkbox value={item} key={index}>
            {item}
          </Checkbox>
        )
      } else {
        const { value, label, disabled, description } = item as CheckboxOptions
        return (
          <Checkbox value={value} disabled={disabled} key={index}>
            {label}
            {description?.title && <QuestionCircle {...description} />}
          </Checkbox>
        )
      }
    })
  }
  // needCheckAll: 特殊props，用于判断是否使用全选
  return needCheckAll ? (
    <div className="check-all-wrapper">
      <Checkbox
        indeterminate={
          fieldData.length !== 0 && fieldData.length < options.length
        }
        onChange={_onChange.bind(CheckboxField, allCheckboxValue)}
        checked={isAllChecked}
      >
        全选
      </Checkbox>
      <div className="check-all-wrapper__line" />
      <Checkbox.Group value={fieldData} onChange={_onChange} {...restProps}>
        {renderOptions(options)}
      </Checkbox.Group>
    </div>
  ) : (
    <Checkbox.Group value={fieldData} onChange={_onChange} {...restProps}>
      {renderOptions(options)}
    </Checkbox.Group>
  )
}

export const checkbox = memo(CheckboxField)
export { default as config } from './config'
