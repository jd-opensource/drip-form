/**
 * 级联选择
 */
import React, { memo, useMemo, useEffect } from 'react'
import { Cascader } from 'antd'
import { useField, useQuery } from '@jdfed/hooks'
import { typeCheck } from '@jdfed/utils'
import { CommonProps } from '../global'

export type CascaderFieldProps = CommonProps & {
  expandTrigger?: 'hover'
  showSearch?: inputShowSearch | showSearch
}
export interface inputShowSearch {
  filter: string
  render: string
  sort: string
}

export type showSearch =
  | {
      [key: string]: any
    }
  | boolean

const CascaderField = ({
  fieldKey,
  fieldData,
  dispatch,
  expandTrigger,
  showSearch = false,
  onChange,
  asyncValidate,
  getKey,
  options = [],
  queryFunc,
  requestCache,
  ...restProps
}: CascaderFieldProps) => {
  const queryOptionsFuc = useQuery(
    {
      getKey,
      options,
      queryFunc,
      requestCache,
      fieldKey,
    },
    dispatch
  )

  useEffect(() => {
    queryOptionsFuc()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const _onChange = useField(
    { fieldKey, onChange, asyncValidate, getKey },
    dispatch
  )
  // 保存搜索的相关操作
  // 支持本地搜索（如果为bool值则使用默认的，object则使用自定义的）
  const _showSearchObj = useMemo(() => {
    if (typeCheck(showSearch) === 'Object') {
      const _showSearch: showSearch = {}
      // 根据传入对象格式化，主要处理需转成function类型的字段
      Object.keys(showSearch).forEach((searchParam) => {
        switch (searchParam) {
          case 'filter':
          case 'render':
            _showSearch[searchParam] = new Function(
              'inputValue',
              'path',
              (showSearch as { filter: string; render: string })[searchParam]
            )
            break
          case 'sort':
            _showSearch[searchParam] = new Function(
              'a',
              'b',
              'inputValue',
              (showSearch as { sort: string })[searchParam] as string
            )
            break
          default: {
            _showSearch[searchParam] = (showSearch as any)[searchParam]
          }
        }
      })
      return _showSearch
    } else {
      return true
    }
  }, [showSearch])

  return (
    <Cascader
      value={fieldData}
      onChange={_onChange}
      options={options}
      {...(showSearch && { showSearch: _showSearchObj })}
      {...(expandTrigger && { expandTrigger })}
      {...restProps}
    />
  )
}

export const cascader = memo(CascaderField)

export { default as config } from './config'
