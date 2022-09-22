/*
 * 基础容器（容器的最小单位）
 * @Author: jiangxiaowei
 * @Date: 2020-05-15 17:19:59
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: 2022-09-22 13:38:27
 */
import React, { memo, useMemo, useCallback, useContext } from 'react'
import cx from 'classnames'
// 配置
import { FormDataContext } from '../../reducers'
import { CommonContainerHoc } from '@form/components/index'
import { useGlobalOptions, UndefinedComponentFn } from '@jdfed/hooks'
import './index.styl'
import type { Props } from '../type'

const fieldContainer = memo<Props>(
  ({
    theme,
    error,
    fieldKey,
    type,
    uiProp,
    formMode,
    fieldData,
    queryFunc,
    customComponents,
    uiComponents,
    asyncValidate,
    dispatch,
    getKey,
  }) => {
    const { globalFormDataStoreKey, fireEvent, globalData } =
      useContext(FormDataContext)
    const undefinedComponent = useGlobalOptions().undefinedComponent
    /**
     * 表单组件
     */
    const FieldMemo = useMemo(() => {
      let errTip
      const getErrTip: UndefinedComponentFn = (params) =>
        typeof undefinedComponent?.value == 'function'
          ? undefinedComponent.value(params)
          : undefinedComponent?.value || ''
      // 当前Field使用的组件 默认antd
      let Component: any
      if (type === 'custom' && customComponents) {
        Component = customComponents[fieldKey]
        if (!Component) {
          errTip = getErrTip({
            fieldKey,
          })
        }
      } else {
        const [customTheme, customType] = type.split('::')
        if (customType) {
          Component = uiComponents[customTheme]?.[customType]
        } else {
          Component = uiComponents[theme]?.[type]
        }
        if (!Component) {
          errTip = getErrTip({
            theme: customType ? customTheme : theme,
            type: customType || type,
            fieldKey,
          })
        }
      }

      if (undefinedComponent?.type === 'console') {
        switch (undefinedComponent.consoleType) {
          case 'log':
            console.log(errTip)
            break
          case 'warn':
            console.warn(errTip)
            break
          case 'error':
            console.error(errTip)
            break
          default:
            break
        }
      }

      return Component ? (
        <Component
          fieldKey={fieldKey}
          fieldData={fieldData}
          formMode={formMode}
          dispatch={dispatch}
          getKey={getKey}
          fireEvent={fireEvent}
          globalformdatastorekey={globalFormDataStoreKey}
          {...(globalData ? { globalData } : null)}
          {...uiProp}
          {...(queryFunc ? { queryFunc } : null)}
          {...(asyncValidate ? { asyncValidate } : null)}
        />
      ) : undefinedComponent?.type == 'tips' && errTip ? (
        <span style={{ color: 'red' }}>{errTip}</span>
      ) : null
    }, [
      type,
      customComponents,
      fieldKey,
      fieldData,
      formMode,
      dispatch,
      getKey,
      fireEvent,
      globalFormDataStoreKey,
      globalData,
      uiProp,
      queryFunc,
      asyncValidate,
      undefinedComponent,
      uiComponents,
      theme,
    ])

    const asyncValidateFn = useCallback(() => {
      // 系统jsonSchema检验失败，不允许点击确定按钮进行校验（避免因为防抖300ms导致的系统校验覆盖自定义校验和异步校验问题）issue参考：#C2020092384669
      if (error) return
      if (asyncValidate?.fn) {
        const asyncValidateResult = asyncValidate.fn(fieldData)
        if (asyncValidateResult?.then) {
          asyncValidateResult.then((res: string): void => {
            if (res) {
              dispatch({
                type: 'setErr',
                action: {
                  set: {
                    [fieldKey]: res,
                  },
                },
              })
            } else {
              dispatch({
                type: 'setErr',
                action: {
                  deleteKeys: fieldKey,
                },
              })
            }
          })
        } else {
          if (asyncValidateResult) {
            dispatch({
              type: 'setErr',
              action: {
                set: {
                  [fieldKey]: asyncValidateResult,
                },
              },
            })
          } else {
            dispatch({
              type: 'setErr',
              action: {
                deleteKeys: fieldKey,
              },
            })
          }
        }
      }
    }, [asyncValidate, dispatch, error, fieldData, fieldKey])

    return asyncValidate && asyncValidate.type === 'click' ? (
      <div className="field__sure--container">
        {FieldMemo}
        <div
          className={cx('field__sure--button', {
            'field__sure--button-disabled': error,
          })}
          onClick={asyncValidateFn}
        >
          确定
        </div>
      </div>
    ) : (
      FieldMemo
    )
  }
)

fieldContainer.displayName = 'fieldContainer'

export default CommonContainerHoc(fieldContainer)
