/*
 * 数组容器（元祖不支持加减模式，普通数组支持加减模式）
 * @Author: jiangxiaowei
 * @Date: 2021-08-11 15:25:43
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: 2022-01-23 14:35:56
 */
import React, { useMemo, memo, useEffect } from 'react'
import cx from 'classnames'
import { typeCheck, number2Chinese } from '@jdfed/utils'
import { useArray } from '@jdfed/hooks'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import renderCoreFn from '../../render'
import { CommonContainerHoc } from '@form/components/index'
import type { RenderFnProps, ContainerType } from '../../render/type'
import type { Props } from '../type'
import './index.styl'

type ArrayProps = {
  fieldData: Array<unknown>
  uiProp: {
    // 点击增加按钮文案
    addTitle?: string
    //
    /**
     * 数组容器模式
     * add: 数组加减模式  可以点击新增一行数据，根据fiedlData渲染
     * normal、tuple：元祖模式 不展示索引、不展示新增删除按钮 展示数组中所有表单（normal即将废弃，使用tuple）
     * fixed：数组非加减模式 不可以点击新增，根据fieldData渲染
     */
    mode?: 'add' | 'normal' | 'tuple' | 'fixed'
    serialText?: {
      afterText: string
      beforeText: string
      serialLang: 'number' | 'CN'
    }
    hasConfirm?: boolean
    confirm?: {
      confirmTitle: string
      okText: string
      cancelText: string
    }
    maxAddCount: number
    [propName: string]: unknown
  }
  containerMap: ContainerType
}

const arrayContainer = memo<Props & RenderFnProps & ArrayProps>(
  ({
    theme,
    customComponents,
    uiComponents,
    dispatch,
    hasDefault,
    dataSchema,
    uiSchema,
    errors,
    formData,
    onQuery,
    parentUiSchemaKey,
    parentDataSchemaKey,
    onValidate,
    fieldData = [],
    uiProp,
    fieldKey,
    containerMap,
    get,
    getKey,
    containerHoc,
    formMode,
    arrayKey,
  }) => {
    const currentDataSchema = (parentDataSchemaKey || []).reduce(
      (prev, cur) => {
        if (cur === '#') {
          return prev
        } else {
          return prev[cur]
        }
      },
      dataSchema as Record<string, any>
    )
    // 数组自增数组子元素类型
    const childType =
      typeCheck(currentDataSchema.items) === 'Object'
        ? currentDataSchema.items.type
        : undefined

    // 默认ArrayContainer模式为加减模式
    const {
      mode = 'add',
      addTitle = '添加一行数据',
      serialText = {
        afterText: '',
        beforeText: '',
        serialLang: 'number',
      },
      showNo,
      maxAddCount,
      // 删除二次确认，需要主题导出popConfig
      // TODO 后续drip-form单独开发npm包兜底
      hasConfirm = false,
      // 删除提示文案
      confirm = {
        confirmTitle: '确定删除这一项？',
        okText: '确定',
        cancelText: '取消',
      },
    } = uiProp
    // 是否为add加减模式
    const isAdd = useMemo(() => mode === 'add', [mode])
    // 加减模式，判断是否超过了最大可添加行数
    const notExceedMaxCount = useMemo(
      () => maxAddCount === undefined || maxAddCount > fieldData.length,
      [maxAddCount, fieldData]
    )
    // 是否是元祖模式
    const isTuple = useMemo(() => ['normal', 'tuple'].includes(mode), [mode])
    const { addItem, deltItem } = useArray({ fieldKey, dispatch, fieldData })
    const addIcon = useMemo(() => <FontAwesomeIcon icon={faPlus} />, [])
    const Popconfirm = uiComponents[theme]?.Popconfirm

    // 初次加载，设置默认key
    useEffect(() => {
      if (!arrayKey[fieldKey]) {
        dispatch({
          type: 'setArrayKey',
          action: {
            fieldKey,
          },
        })
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
      <>
        {/* generator模式需要默认展示一份表单，自增模式、元祖模式由数据渲染表单 */}
        {(formMode === 'generator' || isTuple ? [''] : fieldData).map(
          (item, i, array) => {
            return (
              <div
                key={(arrayKey[fieldKey] && arrayKey[fieldKey][i]) || i}
                className={cx('array-item--field', {
                  'array-item--field_last-child':
                    isAdd && i === array.length - 1,
                })}
              >
                <div className="array-item--header">
                  {showNo ? (
                    <div className="array-item--number">
                      {serialText.beforeText}
                      {serialText.serialLang === 'CN'
                        ? number2Chinese(i + 1)
                        : i + 1}
                      {serialText.afterText}
                    </div>
                  ) : (
                    <div />
                  )}
                  {isAdd &&
                    (Popconfirm && hasConfirm ? (
                      <Popconfirm
                        title={confirm.confirmTitle || '确定删除这一项？'}
                        onConfirm={deltItem.bind(this, i)}
                        okText={confirm.okText || '确定'}
                        cancelText={confirm.cancelText || '取消'}
                      >
                        <FontAwesomeIcon icon={faTrashAlt} />
                      </Popconfirm>
                    ) : (
                      <FontAwesomeIcon
                        icon={faTrashAlt}
                        onClick={deltItem.bind(this, i)}
                      />
                    ))}
                </div>
                <div className="array-item--case">
                  {renderCoreFn({
                    hasDefault,
                    uiComponents,
                    dataSchema,
                    uiSchema,
                    errors,
                    formData,
                    onQuery,
                    onValidate,
                    dispatch,
                    containerHoc,
                    containerMap,
                    parentUiSchemaKey,
                    parentDataSchemaKey,
                    parentFormDataKey: fieldKey,
                    customComponents,
                    currentArrayKey: i,
                    get,
                    getKey,
                    arrayKey,
                  })}
                </div>
              </div>
            )
          }
        )}
        {isAdd && notExceedMaxCount && (
          <div
            className="array-item--add"
            // TODO 非object、array类型是否需要添加默认值，当前undeined
            onClick={addItem.bind(
              this,
              fieldData.length,
              childType === 'object'
                ? {}
                : childType === 'array'
                ? []
                : undefined
            )}
          >
            {addIcon}
            <div className="array-item--add_title">{addTitle}</div>
          </div>
        )}
      </>
    )
  }
)
arrayContainer.displayName = 'arrayContainer'
export default CommonContainerHoc(arrayContainer)
