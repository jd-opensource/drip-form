/*
 * @Author: jiangxiaowei
 * @Date: 2020-05-14 13:33:14
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: 2021-08-11 14:44:05
 */
import React, { memo, FC, useMemo } from 'react'
import { Slider, InputNumber } from 'antd'
import { useField } from '@jdfed/hooks'
import { CommonProps } from '../global'

export type SliderFieldProps = CommonProps & {
  range?: boolean
  vertical?: boolean
  min?: number
  max?: number
  showNumber?: boolean
  step?: number | null
}

const SliderField: FC<SliderFieldProps> = ({
  disabled = false,
  onChange,
  fieldData,
  fieldKey,
  style,
  range = false,
  dispatch,
  vertical = false,
  showNumber = false,
  min = 0,
  max = 100,
  step,
  asyncValidate,
  getKey,
  ...restProps
}) => {
  /**
   * 暂时不支持的slider功能: tipFormatter 自定义提示 | 带icon的滑块
   */
  const _onChange = useField(
    { fieldKey, onChange, asyncValidate, getKey },
    dispatch
  )

  const sliderStyle = useMemo(() => {
    let defaultStyle = {
      width: '100%',
      height: 'unset',
    }
    if (vertical) {
      defaultStyle = {
        width: 'unset',
        height: '64px',
      }
    }
    return Object.assign({}, defaultStyle, style)
  }, [vertical, style])

  return (
    <>
      <Slider
        style={sliderStyle}
        disabled={disabled}
        range={range}
        min={min}
        max={max}
        step={step}
        vertical={vertical}
        onChange={_onChange}
        value={fieldData}
        {...restProps}
      />
      {showNumber && !range && step !== null && (
        <InputNumber
          value={fieldData}
          step={step}
          min={min}
          max={max}
          onChange={_onChange}
          style={{ marginLeft: '8px' }}
        />
      )}
    </>
  )
}

export const slider = memo(SliderField)
