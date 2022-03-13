/*
 * @Author: jiangxiaowei
 * @Date: 2020-05-14 13:33:14
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: yyyy-05-dd 16:13:16
 */
import React, { memo, useEffect, useState, FC } from 'react'
import { TimePicker } from 'antd'
import { useField } from '@jdfed/hooks'
import moment from 'moment'
import locale from 'antd/es/date-picker/locale/zh_CN'
const { RangePicker } = TimePicker
import { CommonProps } from '../global'

export type TimePickerFieldProps = CommonProps &
  Partial<{
    multiline: number | boolean
    range: false
    allowClear: boolean
    format: string
    use12Hours: boolean
  }>

const TimePickerField: FC<TimePickerFieldProps> = ({
  disabled,
  onChange,
  fieldData,
  fieldKey,
  dispatch,
  style,
  allowClear = true,
  range = false,
  use12Hours = false,
  asyncValidate,
  format = 'HH:mm:ss',
  getKey,
  ...restProps
}) => {
  /**
   * 暂时不支持的TimePicker功能
   * 底部附加选项
   */
  const [isValid, setValid] = useState(false)
  const _onChange = useField(
    {
      getKey,
      fieldKey,
      onChange,
      asyncValidate,
      options: {
        isMoment: true,
        format,
      },
    },
    dispatch
  )
  // 判断是否需要展示value值.校验fieldData是否合法

  useEffect(() => {
    try {
      // 点击清空的时候，会变成null。
      if (fieldData === null) {
        setValid(true)
      } else {
        if (range) {
          setValid(
            moment(fieldData[0], format).isValid() &&
              moment(fieldData[1], format).isValid()
          )
        } else {
          setValid(moment(fieldData, format).isValid())
        }
      }
    } catch (error) {
      setValid(false)
    }
  }, [fieldData, format, range])
  return range ? (
    <RangePicker
      {...(isValid
        ? {
            value: fieldData
              ? [moment(fieldData[0], format), moment(fieldData[1], format)]
              : null,
          }
        : null)}
      onChange={_onChange}
      use12Hours={use12Hours}
      format={format}
      locale={locale}
      {...restProps}
    />
  ) : (
    <TimePicker
      allowClear={allowClear}
      {...(isValid
        ? {
            value: fieldData ? moment(fieldData, format) : null,
          }
        : null)}
      disabled={disabled}
      onChange={_onChange}
      style={style}
      locale={locale}
      use12Hours={use12Hours}
      {...restProps}
    />
  )
}

export const timePicker = memo(TimePickerField)
export { default as config } from './config'
