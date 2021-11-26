/*
 * @Author: jiangxiaowei
 * @Date: 2020-05-14 13:33:14
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: 2021-08-11 14:34:36
 */
import React, { memo, useState } from 'react'
// import PropTypes from 'prop-types'
import { SketchPicker } from 'react-color'
import { Tooltip, Input, Button } from 'antd'
import cx from 'classnames'
import { useField, useEventCallback } from '@jdfed/hooks'
import './index.styl'
import { CommonProps } from '../global'

export type ColorPickerFieldProps = CommonProps & {
  // 是否支持透明度选择
  disableAlpha?: boolean
  // 弹框下面的固定颜色
  presetColors?: []
  // 恢复默认的颜色
  defaultValue?: string
}

const ColorPickerField = ({
  disabled,
  onChange,
  fieldData,
  fieldKey,
  dispatch,
  disableAlpha = false,
  presetColors,
  asyncValidate,
  defaultValue,
  getKey,
  ...restProps
}: ColorPickerFieldProps) => {
  const [initColor] = useState(defaultValue || '#000000')
  const _onChange = useField(
    {
      fieldKey,
      onChange,
      getKey,
      asyncValidate,
      options: {
        isColor: true,
        disableAlpha,
      },
    },
    dispatch
  )
  const _changeInitColor = useEventCallback(() => {
    // fix: 默认值未变，点击恢复默认，导致表单状态一直是checking
    if (initColor != fieldData) {
      _onChange(initColor)
    }
  }, [_onChange, initColor])

  return (
    <>
      {disabled ? (
        <div
          className={cx('colorpicker--show', {
            'colorpicker--show--disabled': disabled,
          })}
        >
          <div
            style={{
              backgroundColor: fieldData,
              width: '100%',
              height: '100%',
            }}
          />
        </div>
      ) : (
        <Tooltip
          trigger="click"
          overlayClassName="colorpicker--container"
          overlayStyle={{ width: 260 }}
          title={
            <SketchPicker
              color={fieldData}
              width={'240'}
              onChange={_onChange}
              disableAlpha={disableAlpha}
              presetColors={presetColors}
              {...restProps}
            />
          }
        >
          <div className="colorpicker--show">
            <div
              style={{
                backgroundColor: fieldData,
                width: '100%',
                height: '100%',
              }}
            />
          </div>
        </Tooltip>
      )}
      <Input
        value={fieldData}
        disabled={disabled}
        onChange={_onChange}
        style={{ width: 120, marginRight: 5 }}
      />
      {!disabled && <Button onClick={_changeInitColor}>恢复默认</Button>}
    </>
  )
}

export const colorPicker = memo(ColorPickerField)
