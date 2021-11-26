/*
 * @Author: jiangxiaowei
 * @Date: 2020-05-20 22:17:44
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: 2021-11-24 22:42:42
 */
import React, { memo, FC, useEffect } from 'react'
import { TreeSelect } from 'antd'
import { useField, useQuery } from '@jdfed/hooks'
import { CommonProps } from '../global'
const { SHOW_ALL, SHOW_CHILD, SHOW_PARENT } = TreeSelect

export type TreeSelectFieldProps = CommonProps &
  Partial<{
    // 是否展示清除按钮
    allowClear: boolean
    // 是否可以搜索
    showSearch: boolean
    // 是否可以多选
    multiple: boolean
    // 是否显示选择框
    treeCheckable: boolean
    showCheckedStrategy: 'all' | 'parent' | 'child'
    // 是否使用简单格式的treeData 即扁平化options
    treeDataSimpleMode: boolean
    // 包括pId的分隔符
    withPidDelimiter: string
  }>

const checkedMap = {
  all: SHOW_ALL,
  parent: SHOW_PARENT,
  child: SHOW_CHILD,
}

export const TreeSelectField: FC<TreeSelectFieldProps> = memo(
  ({
    placeholder,
    disabled,
    onChange,
    fieldData,
    fieldKey,
    dispatch,
    queryFunc,
    options = [],
    requestCache = false,
    allowClear = false,
    showSearch = false,
    multiple = false,
    treeCheckable = false,
    treeDataSimpleMode = false,
    style,
    asyncValidate,
    withPidDelimiter,
    showCheckedStrategy = 'child',
    getKey,
    ...restProps
  }) => {
    // 优化多选下没有数据，初始效果
    if (multiple && !fieldData) {
      fieldData = []
    }
    // 包含父级id且options大于0的时候处理数据 将'0#1#2 变成 ‘2'
    if (withPidDelimiter && options.length > 0) {
      fieldData = (fieldData || []).map((item: any) => {
        const isNumber = typeof options[0].value === 'number'
        item = String(item)
        const arr = item.split(withPidDelimiter)
        return isNumber ? Number(arr[arr.length - 1]) : arr[arr.length - 1]
      })
    }
    const queryOptionsFuc = useQuery(
      {
        options,
        getKey,
        queryFunc,
        requestCache,
        fieldKey,
      },
      dispatch
    )

    useEffect(() => {
      /**
       * 参数2 当前是第一加载
       */
      queryOptionsFuc({ isFirstLoad: true })
    }, [queryOptionsFuc])
    const _onChange = useField(
      {
        fieldKey,
        onChange,
        asyncValidate,
        getKey,
        ...(withPidDelimiter && {
          options: {
            isWithPid: true,
            options,
            withPidDelimiter,
          },
        }),
      },
      dispatch
    )
    // 不管单选多选，均可搜索
    return (
      <TreeSelect
        style={style}
        showSearch={showSearch}
        allowClear={allowClear}
        // loadData={queryOptionsFuc as (...args: any[]) => Promise<unknown>}
        treeCheckable={treeCheckable}
        placeholder={placeholder}
        disabled={disabled}
        value={fieldData}
        treeDataSimpleMode={treeDataSimpleMode}
        {...(treeDataSimpleMode &&
          queryFunc && {
            loadData: async (node) => {
              node.loading = true
              const data = await queryFunc({
                isFirstLoad: false,
                pId: node.id,
              })
              node.isloading = false
              dispatch({
                type: 'setUiSchema',
                [`${getKey(fieldKey, 'uiSchema')}.options`]:
                  options.concat(data),
              })
            },
          })}
        multiple={multiple}
        onChange={_onChange}
        showCheckedStrategy={checkedMap[showCheckedStrategy]}
        treeData={options}
        {...restProps}
      />
    )
  }
)

TreeSelectField.displayName = 'TreeSelectField'
