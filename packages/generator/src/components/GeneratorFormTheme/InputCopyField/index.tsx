/*
 * 用途：属性配置更改fieldKey
 * @Author: jiangxiaowei
 * @Date: 2022-05-06 10:43:24
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: 2022-05-06 15:15:01
 */

import React, { memo, FC, useCallback, useState } from 'react'
import { Input, Button } from 'antd'
import { CopyOutlined } from '@ant-design/icons'
import copy from 'copy-to-clipboard'
import { useField } from '@jdfed/hooks'
import { CommonProps } from '../global'
import { useSetRecoilState } from 'recoil'
import { useGetParentType } from '@generator/hooks'
import { viewportTitleHeaderVersion } from '@generator/store'
import styles from './index.module.css'

const TextField: FC<CommonProps & { disabled_input?: string[] }> = ({
  onChange,
  fieldData,
  fieldKey,
  dispatch,
  disabled_input,
  asyncValidate,
  getKey,
  ...restProps
}) => {
  const setVersion = useSetRecoilState(viewportTitleHeaderVersion)
  const parentType = useGetParentType()
  const [initFieldData] = useState(fieldData)
  const _onChange = useField(
    {
      fieldKey,
      onChange,
      asyncValidate,
      getKey,
      ...(disabled_input && { options: { disabled_input, isFormat: true } }),
    },
    dispatch
  )

  // copy fieldKey
  const copyFieldKeyFn = useCallback(() => {
    copy(fieldData)
  }, [fieldData])

  // fieldKey必填，所以失焦后自动恢复默认key
  const onBlur = useCallback(
    (e) => {
      if (!e?.target?.value) {
        _onChange(initFieldData)
      }
      if (initFieldData != e?.target?.value) {
        setVersion((version) => version + 1)
      }
    },
    [_onChange, initFieldData, setVersion]
  )

  return (
    <div className={styles.propertyConfigContent}>
      <Input.Group compact>
        <Input
          className={styles.fieldKey}
          value={fieldData}
          onChange={_onChange}
          onBlur={onBlur}
          // 父元素为数组容器无法修改
          disabled={parentType === 'array'}
          {...restProps}
        />
        <Button icon={<CopyOutlined />} onClick={copyFieldKeyFn} />
      </Input.Group>
    </div>
  )
}

export const inputCopy = memo(TextField)
