/*
 * 基础容器（容器的最小单位）
 * @Author: jiangxiaowei
 * @Date: 2020-05-15 17:19:59
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: 2021-12-28 14:28:43
 */
import React, {
  memo,
  useState,
  useMemo,
  FC,
  useEffect,
  useCallback,
  useContext,
} from 'react'
import cx from 'classnames'
// 配置
import { useContainer, useContainerStyle } from '@jdfed/hooks'
import { FormDataContext } from '../../reducers'
import { typeCheck } from '@jdfed/utils'
import './index.styl'
import type { Props } from '../type'
import type { TitlePlacement, TitleUi } from '@jdfed/utils'
// 垂直和水平对齐方式
export enum Align {
  center = 'center',
  top = 'flex-start',
  bottom = 'flex-end',
  left = 'flex-start',
  right = 'flex-end',
}

/**
 * 标题布局位置
 * @param placement
 */
export function titlePlacementCls(placement: string): string {
  switch (placement) {
    case 'top':
      return 'title-top'
    case 'right':
      return 'title-right'
    case 'bottom':
      return 'title-bottom'
    default:
      return 'title-left'
  }
}

/**
 * title margin的基础数值，分别对应title在不同方位的布局
 */
const baseTitleMargin: Record<string, string[]> = {
  top: ['0', '0', '5px', '0'],
  right: ['0', '0', '0', '10px'],
  bottom: ['5px', '0', '0', '0'],
  left: ['0', '10px', '0', '0'],
}

/**
 * margin中index对应margin方向的映射
 */
const indexToMarginP = [
  'marginTop',
  'marginRight',
  'marginBottom',
  'marginLeft',
]

/**
 * 计算title的margin数据
 * @param titleUi
 * @param titlePlacement
 */

interface MarginType {
  style: string
  stringArr: string[]
}

export function calcTitleMargin(
  titleUi: TitleUi,
  titlePlacement: TitlePlacement
): MarginType {
  // 根据title布局确认基础margin，默认使用
  let marginRes: string[] = baseTitleMargin[titlePlacement]

  if (Object.hasOwnProperty.call(titleUi, 'margin')) {
    // 解析margin，并映射到数组对应字段，数组顺序与margin原书写顺序一致
    let tmpMargin = titleUi?.margin?.split(' ') || []
    tmpMargin = tmpMargin.filter((item: any) => !!item)

    if (tmpMargin.length === 1) {
      marginRes = marginRes.map(() => tmpMargin[0])
    } else if (tmpMargin.length === 2) {
      marginRes = marginRes.map((item, idx) => {
        return idx % 2 === 0 ? tmpMargin[0] : tmpMargin[1]
      })
    } else if (tmpMargin.length === 3) {
      marginRes = marginRes.map((item, idx) => {
        return idx === 3 ? tmpMargin[1] : tmpMargin[idx]
      })
    } else {
      marginRes = tmpMargin
    }
  }

  // 如果配置了marginRight等字段，则优先级更高，可覆盖base配置
  marginRes = marginRes.map((item, idx) => {
    const part = indexToMarginP[idx] as
      | 'marginTop'
      | 'marginRight'
      | 'marginBottom'
      | 'marginLeft'
    const hasPartMargin = Object.hasOwnProperty.call(titleUi, part)
    const value =
      hasPartMargin && titleUi !== null
        ? Object.hasOwnProperty.call(titleUi, part) &&
          titleUi[part] !== undefined
          ? titleUi[part]
          : item
        : item
    return Number.isNaN(Number(value)) ? `${value}` : `${value}px`
  })

  return {
    // 用于覆写style
    style: marginRes.join(' '),
    // 用于计算其他元素的宽度或padding
    stringArr: marginRes,
  }
}

/**
 * 计算tips和error父组件的padding
 * @param titleWidth
 * @param titlePlacement
 * @param marginArr
 * @param showTitle
 */
function calcOtherPadding(
  titleWidth: string | number | undefined = '82px',
  titlePlacement: TitlePlacement,
  marginArr: string[],
  showTitle: boolean
) {
  // 如果不需要title，则padding直接设置为0
  if (!showTitle) return '0'

  // 处理横向的padding偏移
  let calcWidth = `${titleWidth}`
  if (marginArr[1] !== '0') calcWidth += ` + ${marginArr[1]}`
  if (marginArr[3] !== '0') calcWidth += ` + ${marginArr[3]}`

  if (titlePlacement === 'left') {
    return `0 0 0 calc(${calcWidth})`
  } else if (titlePlacement === 'right') {
    return `0 calc(${calcWidth}) 0 0`
  } else {
    return 0
  }
}

const FieldContainer: FC<Props> = ({
  theme,
  containerStyle,
  title,
  error,
  description = {
    type: 'icon',
    title: '',
  },
  titleUi = {
    requiredIcon: false,
  },
  titlePlacement,
  showError,
  showTitle,
  fieldKey,
  type,
  uiProp,
  fieldData,
  queryFunc,
  customComponents,
  uiComponents,
  asyncValidate,
  requiredFields,
  dispatch,
  getKey,
  formMode,
}) => {
  // title的margin样式
  const [titleMargin, onChangeTitleMargin] = useState(() => {
    return calcTitleMargin(titleUi, titlePlacement)
  })

  const globalformdatastorekey = useContext(FormDataContext)

  useEffect(() => {
    onChangeTitleMargin(calcTitleMargin(titleUi, titlePlacement))
  }, [titlePlacement, titleUi])

  useContainer({ fieldKey, dispatch })
  const newContainerStyle = useContainerStyle(formMode, containerStyle)
  /**
   * title组件
   */
  const titleMemo = useMemo(() => {
    const QuestionCircle = uiComponents[theme]?.QuestionCircle

    return (
      <div
        className="field-container__title"
        style={{
          ...(titleUi?.width && { width: titleUi?.width }),
          ...(titleUi?.textAlign && {
            justifyContent: Align[titleUi?.textAlign],
          }),
          ...(titleUi?.verticalAlign && {
            alignItems: Align[titleUi?.verticalAlign],
          }),
          margin: titleMargin.style,
        }}
      >
        {titleUi?.requiredIcon &&
        requiredFields.includes(fieldKey.split('.').pop() as string) ? (
          <span style={{ color: 'red' }}>*</span>
        ) : (
          ''
        )}
        {title}
        {description &&
          description?.type === 'icon' &&
          description?.title &&
          QuestionCircle && <QuestionCircle {...description} />}
      </div>
    )
  }, [
    uiComponents,
    theme,
    titleUi?.width,
    titleUi?.textAlign,
    titleUi?.verticalAlign,
    titleUi?.requiredIcon,
    titleMargin,
    requiredFields,
    fieldKey,
    title,
    description,
  ])

  /**
   * 表单组件
   */
  const FieldMemo = useMemo(() => {
    // 当前Field使用的组件 默认antd
    let Component: any
    // 是自定义主题或自定义组件
    let isCustomComOrTheme = false
    if (type === 'custom' && customComponents) {
      isCustomComOrTheme = true
      Component = customComponents[fieldKey]
    } else {
      const [customTheme, customType] = type.split('::')
      if (customType) {
        isCustomComOrTheme = true
        Component = uiComponents[customTheme]?.[customType]
      } else {
        isCustomComOrTheme = false
        Component = uiComponents[theme]?.[type]
      }
    }

    return Component ? (
      <Component
        fieldKey={fieldKey}
        fieldData={fieldData}
        dispatch={dispatch}
        getKey={getKey}
        globalformdatastorekey={globalformdatastorekey}
        {...(isCustomComOrTheme
          ? {
              ...uiProp,
              newContainerStyle,
              title: titleUi,
            }
          : uiProp)}
        {...(queryFunc ? { queryFunc } : null)}
        {...(asyncValidate ? { asyncValidate } : null)}
      />
    ) : null
  }, [
    type,
    customComponents,
    fieldKey,
    fieldData,
    dispatch,
    getKey,
    globalformdatastorekey,
    uiProp,
    newContainerStyle,
    titleUi,
    queryFunc,
    asyncValidate,
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
              type: 'setError',
              [fieldKey]: res,
            })
          } else {
            dispatch({
              type: 'deleteError',
              key: fieldKey,
            })
          }
        })
      } else {
        if (asyncValidateResult) {
          dispatch({
            type: 'setError',
            [fieldKey]: asyncValidateResult,
          })
        } else {
          dispatch({
            type: 'deleteError',
            key: fieldKey,
          })
        }
      }
    }
  }, [asyncValidate, dispatch, error, fieldData, fieldKey])

  // 标题宽度
  const titleWidth = useMemo(() => {
    return typeCheck(titleUi?.width || 82) === 'Number'
      ? `${titleUi?.width || 82}px`
      : titleUi?.width || '82px'
  }, [titleUi?.width])

  return (
    <>
      <div
        className={cx('field-container', {
          'field-container--no-title': !showTitle,
        })}
        style={{
          ...(newContainerStyle?.width && { width: newContainerStyle.width }),
        }}
      >
        <div
          className={cx(
            'field-container__form',
            titlePlacementCls(titlePlacement)
          )}
        >
          {showTitle && titleMemo}
          <div
            className="field-container__content"
            {...(type === 'uploader' && {
              style: {
                // 当title为左右布局时，uploader组件需要减去title的宽和横向margin，否则为100%宽
                width:
                  titlePlacement === 'left' || titlePlacement === 'right'
                    ? `calc(100% - ${titleWidth} - ${titleMargin.stringArr[1]} - ${titleMargin.stringArr[3]})`
                    : '100%',
                height: '100%',
                display: 'block',
              },
            })}
          >
            {asyncValidate && asyncValidate.type === 'click' ? (
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
            )}
          </div>
        </div>
        {/*表单tips及err提示*/}
        {useMemo(() => {
          return (
            <div
              className={'field-container__other'}
              style={{
                padding: calcOtherPadding(
                  titleWidth,
                  titlePlacement,
                  titleMargin.stringArr,
                  showTitle
                ),
              }}
            >
              {description?.type === 'text' && description?.title && (
                <div className="field-container__tips">
                  {description?.title}
                </div>
              )}
              <div
                className={cx('field-container__error', {
                  'field-container__error--no-title': !showTitle,
                })}
              >
                {showError && error}
              </div>
            </div>
          )
        }, [
          description?.title,
          description?.type,
          error,
          showError,
          showTitle,
          titleMargin.stringArr,
          titlePlacement,
          titleWidth,
        ])}
      </div>
    </>
  )
}

const memoFieldContainer = memo(FieldContainer)

export default memoFieldContainer
