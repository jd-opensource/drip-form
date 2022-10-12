/*
 * 结果中、条件中设置value的组件
 * 支持以下功能：
 * 1. 按传入类型(type)展示设置的组件类型
 * 2. 按照依赖的表单key(depencykey)判断展示的组件类型
 * 3. 支持数组多个值的配置（支持指定nubmer or string or boolean）
 * 4. 支持对象包含的多个属性配置
 * 5. 支持两种模式 比较模式（compare）、设置模式（set）
 *     根据不同模式，展示不同控件和文案提示
 *     根据不同模式，更改不同的flow schema
 * 6. 支持string、number、boolean、array、object配置
 * @Author: jiangxiaowei
 * @Date: 2022-07-25 12:48:36
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: 2022-10-12 16:56:38
 */
import React, { memo, FC, useCallback } from 'react'
import type { OperatorType } from '@generator/utils/flow'
import { useFieldKeyType } from '@generator/hooks'
import { Input, InputNumber, Select, Switch } from 'antd'
import MonacoEdit from '@generator/components/RightSideBar/MonacoEdit'
import styles from './index.module.css'

const SetValueField: FC<{
  // 组件会根据type判断需要展示的组件（优先级比depencykey高）不设置默认string
  type?: OperatorType
  // 依赖的fieldKey类型，组件会按照该key的数据类型，来判断展示何种组件（优先级比type低）不设置默认string
  depencyKey?: string
  // 默认set模式
  mode?: 'set' | 'compare'
  // 默认false
  disabled?: boolean
  value: unknown
  onChange: (value: unknown) => void
}> = ({
  type: initType,
  depencyKey,
  mode = 'set',
  onChange,
  disabled = false,
  value,
}) => {
  const depencyKeyType = useFieldKeyType((depencyKey || '').split(' ')[0])
  const type = initType || depencyKey ? depencyKeyType : 'string' || 'string'

  const inputChangeFn = useCallback(
    (e) => {
      onChange(e?.target?.value)
    },
    [onChange]
  )

  const monacoEditChangeFn = useCallback(
    (value) => {
      try {
        if (value) {
          onChange(value)
        }
      } catch (error) {
        console.error(error)
      }
    },
    [onChange]
  )

  // TODO 切换type类型，value重置？value自动更改类型
  return (
    <>
      {type === 'string' && (
        <Input
          placeholder="请输入"
          style={{ width: 200 }}
          disabled={disabled}
          value={value as string}
          onChange={inputChangeFn}
        />
      )}
      {type === 'number' && (
        <InputNumber
          value={value as number}
          onChange={onChange}
          disabled={disabled}
        />
      )}
      {/* 布尔类型，只有设置模式才展示；比较模式使用比较操作符实现 */}
      {type === 'boolean' && mode === 'set' && (
        <div className={styles.switch}>
          <Switch
            checkedChildren="true"
            unCheckedChildren="false"
            defaultChecked
            disabled={disabled}
            checked={!!value}
            onChange={onChange}
          />
        </div>
      )}
      {/* 对象类型比较模式可配置对象的属性 */}
      {type === 'object' && mode === 'compare' && (
        <Select
          mode="tags"
          allowClear
          disabled={disabled}
          value={value as string}
          style={{ width: 200 }}
          placeholder="输入对象的属性"
          tokenSeparators={[',']}
          onChange={onChange}
        ></Select>
      )}
      {type === 'array' && mode === 'compare' && (
        // <div>
        <MonacoEdit
          language="javascript"
          defaultLanguage="javascript"
          value={String(value)}
          className="test"
          height={180}
          width={400}
          onChange={monacoEditChangeFn}
        />
        // </div>
      )}
      {type === 'object' && mode === 'set' && (
        <MonacoEdit
          language="javascript"
          defaultLanguage="javascript"
          value={String(value)}
          height={180}
          width={400}
          onChange={monacoEditChangeFn}
        />
      )}
      {type === 'array' && mode === 'set' && (
        <MonacoEdit
          language="javascript"
          defaultLanguage="javascript"
          value={String(value)}
          height={180}
          width={400}
          onChange={monacoEditChangeFn}
        />
      )}
    </>
  )
}

export default memo(SetValueField)
