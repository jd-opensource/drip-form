/*
 * 动作配置表单
 * @Author: jiangxiaowei
 * @Date: 2022-07-25 10:50:27
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: 2022-11-25 14:29:15
 */
import React, { FC, useMemo, memo } from 'react'
import SelectField from '../SelectField'
import SetValueField from '../SetValueField'
import { Select, Switch, Space } from 'antd'
import { SetEffect, typeCheck } from '@jdfed/utils'
import styles from './index.module.css'

// TODO 支持设置组件的样式（根据组件的样式配置面板自动生成）；支持设置组件的校验和错误信息(根据组件的校验配置自动生成)
const typeOptions = [
  {
    label: '表单样式',
    value: '表单样式',
    options: [{ label: '设置组件展示/隐藏', value: 'uiSchema.vcontrol' }],
  },
  {
    label: '表单数据',
    value: '表单数据',
    options: [{ label: '设置组件的值', value: 'data' }],
  },
  {
    label: '接口',
    value: '接口',
    options: [{ label: '刷新接口', value: 'uiSchema.queryConfig.refreshId' }],
  },
]

const Action: FC<{
  effect: SetEffect
  onChange: (effect: SetEffect) => void
}> = ({ effect, onChange }) => {
  const { fieldKey, value } = effect
  const actionType = useMemo(() => {
    let actionType = 'data'
    const [, type, property] = fieldKey.split(' ') || 'data'

    switch (type) {
      case 'data':
        actionType = 'data'
        break
      case 'uiSchema': {
        actionType = `uiSchema.${property}`
        break
      }
      case 'dataSchema':
      default:
        break
    }
    return actionType
  }, [fieldKey])

  return (
    <Space align="start">
      <SelectField
        value={fieldKey}
        placeholder="需要设置的表单"
        onChange={(value) => {
          const [, ...args] = effect.fieldKey.split(' ')
          // 变化逻辑（注意清空逻辑，默认为设置组件的值）
          onChange({
            ...effect,
            fieldKey: value ? `${value} ${args.join(' ') || 'data'}` : '',
          })
        }}
      />
      <Select
        options={typeOptions}
        value={actionType}
        style={{ width: 160 }}
        onChange={(value) => {
          const fieldKey = effect.fieldKey.split(' ').shift()
          // 设置的类型 data、uiSchema、dataSchema
          const typeProperty = value.split('.')
          const type = typeProperty.shift()
          const property = typeProperty.join('.')
          onChange({
            ...effect,
            fieldKey: `${fieldKey} ${type}${
              type != 'data' ? ` ${property}` : ''
            }`,
            // 处理展示、隐藏默认值（默认情况为空字符，处理成布尔值）
            ...(property === 'vcontrol' &&
              typeCheck(effect.value) != 'Boolean' && {
                value: !!effect.value,
              }),
          })
        }}
      ></Select>
      {actionType === 'uiSchema.vcontrol' && (
        <div className={styles.switch}>
          <Switch
            checkedChildren="展示"
            unCheckedChildren="隐藏"
            defaultChecked
            checked={!!value}
            onChange={(checked) => {
              onChange({
                ...effect,
                value: checked,
              })
            }}
          />
        </div>
      )}
      {actionType === 'data' && (
        <SetValueField
          value={value}
          onChange={(value) => {
            onChange({
              ...effect,
              value,
            })
          }}
          depencyKey={fieldKey}
          mode="set"
        />
      )}
      {/* TODO 设置组件的样式、组件的校验和错误信息、设置组件的值 */}
    </Space>
  )
}

export default memo(Action)
