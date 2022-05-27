/*
 * 用于属性配置切换表单类型
 * @Author: jiangxiaowei
 * @Date: 2022-05-19 10:22:53
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: 2022-05-26 14:22:40
 */
import React, { memo, FC, useCallback, useContext } from 'react'
import { Select } from 'antd'
import { CommonProps } from '../global'
import { useSetRecoilState, useRecoilValue } from 'recoil'
import {
  curThemeAndTypeAtom,
  GeneratorContext,
  selectedAtom,
  SelectOption,
} from '@generator/store'
import { deepClone, deleteDeepProp, setDeepProp } from '@jdfed/utils'
import { original } from 'immer'
import type { Map } from '@jdfed/utils'

const UiTypeChangeField: FC<CommonProps> = ({
  fieldData,
  options,
  disabled,
  style,
}) => {
  const setThemeAndType = useSetRecoilState(curThemeAndTypeAtom)
  const generatorContext = useContext(GeneratorContext)
  const selectedFieldKey = useRecoilValue(selectedAtom)

  /**
   * 切换属性配置
   */
  const onReplace = useCallback((draft, schema) => {
    // 待删除的key
    const needToDelete = Object.keys(original(draft) as Map)

    for (const key in schema) {
      setDeepProp([key], draft as Map, schema[key])
      // 已填充的字段不应该被删除
      const idxInDraft = needToDelete.findIndex((val) => val === key)
      if (idxInDraft >= 0) {
        needToDelete.splice(idxInDraft, 1)
      }
    }

    for (const key of needToDelete) {
      deleteDeepProp([key], draft as Map)
    }
  }, [])

  const change = useCallback(
    (value) => {
      let dataSchema: Map = {},
        uiSchema: Map = {}
      // 获取修改组件类型前，该组件的schema
      const preSchema = generatorContext.current?.get(selectedFieldKey || '')
      const preType = preSchema?.uiSchema.type
      const preTitle = preSchema?.dataSchema.title
      // 检查组件title是否是预设的title，默认是
      let isPresetTitle = true
      options.some((item: SelectOption) => {
        // 找到原组件对应的初始schema，比较title
        if (item.value === preType) {
          isPresetTitle = preTitle === item.schema.title
          return true
        }
        return false
      })
      options.some((item: SelectOption) => {
        // 找到新组件对应的初始schema，替换原组件
        if (item.value === value) {
          uiSchema = deepClone(item.schema.ui)
          dataSchema = deepClone(item.schema)
          // 如果不是预设的title，意味着用户已经自行修改过，此时需要保留原值
          if (!isPresetTitle) {
            dataSchema.title = preTitle
          }
          // 移除uiSchema配置
          Reflect.deleteProperty(dataSchema, 'ui')
          return true
        }
        return false
      })

      generatorContext.current?.set(
        selectedFieldKey || '',
        'dataSchema',
        (draft) => {
          onReplace(draft, dataSchema)
        }
      )
      generatorContext.current?.set(
        selectedFieldKey || '',
        'uiSchema',
        (draft) => {
          onReplace(draft, uiSchema)
        }
      )
      // 更新类型
      setThemeAndType(value)
    },
    [generatorContext, onReplace, options, selectedFieldKey, setThemeAndType]
  )

  return (
    <Select
      style={style}
      options={options}
      value={fieldData}
      onChange={change}
      allowClear={false}
      disabled={disabled}
    ></Select>
  )
}

export const uiTypeChange = memo(UiTypeChangeField)
