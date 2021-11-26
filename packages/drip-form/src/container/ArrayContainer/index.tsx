/*
 * 数组容器（元祖不支持加减模式，普通数组支持加减模式）
 * @Author: jiangxiaowei
 * @Date: 2021-08-11 15:25:43
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: 2021-11-05 18:12:13
 */
import React, { useMemo, useState, useEffect, memo, Fragment } from 'react'
import cx from 'classnames'
import { typeCheck } from '@jdfed/utils'
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
    // 是否为加减模式，默认为加减模式
    mode?: 'add' | 'normal'
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
  fieldData,
  requiredFields,
  uiProp,
  fieldKey,
  containerMap,
  get,
  getKey,
  containerHoc,
  formMode,
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
  // 默认ArrayContainer模式为加减 normal不展示用于元祖
  const { mode = 'add', addTitle = '添加一行数据' } = uiProp
  // 是否为add加减模式
  const isAdd = useMemo(() => mode === 'add', [mode])
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
  // const deltIcon = useCallback(
  //   (i) =>
  //     isAdd && (
  //       <FontAwesomeIcon icon={faTrashAlt} onClick={deltItem.bind(this, i)} />
  //     ),
  //   [deltItem, isAdd]
  // )

  return (
    <div
      className={cx(
        'array-field--container',
        titlePlacementCls(titlePlacement)
      )}
      style={{
        ...(newContainerStyle?.width && { width: newContainerStyle.width }),
      }}
    >
      {showTitle && titleMemo}
      {/* 元祖模式和generator模式需要展示表单，自增模式由数据渲染表单 */}
      <div
        style={{
          width: `calc(100% - ${
            titleUi?.placement === 'bottom' || titleUi?.placement === 'top'
              ? 0
              : titleUi?.width || 90
          }px)`,
          minWidth: '200px',
        }}
      >
        {(!isAdd || formMode === 'generator' ? [''] : fieldData || []).map(
          (item, i, array) => {
            return (
              <Fragment key={i}>
                <div
                  className={cx({
                    'array-item--field': isAdd,
                    'array-item--field_last-child':
                      isAdd && i === array.length - 1,
                  })}
                >
                  {isAdd && <div className="array-item--number">{i + 1}</div>}
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
                  })}
                  {isAdd && (
                    <FontAwesomeIcon
                      icon={faTrashAlt}
                      onClick={deltItem.bind(this, i)}
                    />
                  )}
                </div>
              </Fragment>
            )
          }
        )}
        {isAdd && (
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
