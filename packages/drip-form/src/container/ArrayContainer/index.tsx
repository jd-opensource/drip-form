/*
 * 数组容器（元祖不支持加减模式，普通数组支持加减模式）
 * @Author: jiangxiaowei
 * @Date: 2021-08-11 15:25:43
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: 2022-01-14 14:57:53
 */
import React, { useMemo, useState, useEffect, memo, CSSProperties } from 'react'
import cx from 'classnames'
import { typeCheck, number2Chinese } from '@jdfed/utils'
import { useArray, useContainer, useContainerStyle } from '@jdfed/hooks'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import renderCoreFn from '../../render'
import { calcTitleMargin, titlePlacementCls, Align } from '../FieldContainer'
import type { RenderFnProps, ContainerType } from '../../render/type'
import type { FC } from 'react'
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
    maxAddCount: number
    [propName: string]: unknown
  }
  containerMap: ContainerType
}

const ArrayContainer: FC<Props & RenderFnProps & ArrayProps> = ({
  theme,
  containerStyle,
  title,
  description = {
    type: 'icon',
    title: '',
  },
  titleUi = {
    requiredIcon: false,
  },
  titlePlacement,
  showTitle,
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
  requiredFields,
  uiProp,
  fieldKey,
  containerMap,
  get,
  getKey,
  containerHoc,
  formMode,
  arrayKey,
}) => {
  // title的margin样式
  const [titleMargin, onChangeTitleMargin] = useState(() => {
    return calcTitleMargin(titleUi, titlePlacement)
  })

  useEffect(() => {
    onChangeTitleMargin(calcTitleMargin(titleUi, titlePlacement))
  }, [titlePlacement, titleUi])

  useContainer({ fieldKey, dispatch })
  const currentDataSchema = (parentDataSchemaKey || []).reduce((prev, cur) => {
    if (cur === '#') {
      return prev
    } else {
      return prev[cur]
    }
  }, dataSchema as Record<string, any>)
  // 数组自增数组子元素类型
  const childType =
    typeCheck(currentDataSchema.items) === 'Object'
      ? currentDataSchema.items.type
      : undefined

  const newContainerStyle = useContainerStyle(formMode, containerStyle)
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
  /**
   * title组件
   */
  const titleMemo = useMemo(() => {
    const QuestionCircle = uiComponents[theme]?.QuestionCircle
    return (
      <div
        className="object-container__title"
        style={{
          ...(titleUi?.width && { width: titleUi?.width }),
          ...(titleUi?.textAlign && {
            justifyContent: Align[titleUi?.textAlign],
          }),
          ...(titleUi?.verticalAlign && {
            alignItems: Align[titleUi?.verticalAlign],
          }),
          display: 'flex',
          margin: titleMargin.style,
          lineHeight: '32px',
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
    description,
    theme,
    title,
    titleUi,
    requiredFields,
    uiComponents,
    fieldKey,
    titleMargin,
  ])

  const addIcon = useMemo(() => <FontAwesomeIcon icon={faPlus} />, [])

  return (
    <div
      className={cx(
        'array-field--container',
        titlePlacementCls(titlePlacement)
      )}
      style={{
        ...(uiProp?.style as CSSProperties),
        ...(newContainerStyle?.width && { width: newContainerStyle.width }),
      }}
    >
      {showTitle && titleMemo}
      {/* generator模式需要默认展示一份表单，自增模式、元祖模式由数据渲染表单 */}
      <div
        style={{
          width: `calc(100% - ${
            !showTitle ||
            titleUi?.placement === 'bottom' ||
            titleUi?.placement === 'top'
              ? 0
              : titleUi?.width || 90
          }px)`,
          minWidth: '200px',
          flexShrink: 0,
        }}
      >
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
                  {isAdd && (
                    <FontAwesomeIcon
                      icon={faTrashAlt}
                      onClick={deltItem.bind(this, i)}
                    />
                  )}
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
      </div>
    </div>
  )
}

const memoArrayContainer = memo(ArrayContainer)

export default memoArrayContainer
