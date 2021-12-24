/*
 * 对象容器
 * @Author: jiangxiaowei
 * @Date: 2021-08-11 15:26:55
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: 2021-12-24 14:53:47
 */
import React, { useMemo, memo, useState, useEffect } from 'react'
import { useContainer, useContainerStyle } from '@jdfed/hooks'
import cx from 'classnames'
import renderCoreFn from '../../render'
import { calcTitleMargin, titlePlacementCls, Align } from '../FieldContainer'
import type { RenderFnProps, ContainerType } from '../../render/type'
import type { FC } from 'react'
import type { Props } from '../type'
import './index.styl'

type ObjectContainerProps = {
  containerMap: ContainerType
}

const ObjectContainer: FC<Props & RenderFnProps & ObjectContainerProps> = ({
  theme,
  containerStyle,
  title,
  description = {
    type: 'icon',
    title: '',
  },
  titleUi,
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
  fieldKey,
  containerMap,
  get,
  getKey,
  containerHoc,
  uiProp,
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
  const newContainerStyle = useContainerStyle(formMode, containerStyle)
  const Collapse = uiComponents[theme]?.Collapse
  const Panel = uiComponents[theme]?.Collapse.Panel
  // 是否为折叠面板模式，默认不开启 collapse | normal
  const mode = uiProp.mode || 'normal'
  // 是否渲染为折叠面板模式
  const isCollapse = Collapse && Panel && mode === 'collapse' && showTitle
  /**
   * title组件
   */
  const titleMemo = useMemo(() => {
    const QuestionCircle = uiComponents[theme]?.QuestionCircle
    return (
      <div
        className={cx('object-container__title--common', {
          'object-container__title--collapse': isCollapse,
        })}
        style={{
          ...(titleUi?.textAlign && {
            justifyContent: Align[titleUi?.textAlign],
          }),
          ...(titleUi?.verticalAlign && {
            alignItems: Align[titleUi?.verticalAlign],
          }),
          display: 'flex',
          ...(titleUi?.width && { width: titleUi?.width }),
          margin: titleMargin.style,
        }}
      >
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
    uiComponents,
    isCollapse,
    titleMargin,
  ])

  const defaultActiveKey = useMemo(() => {
    // 用户配置了active||generator viewport区域需要展开折叠面板
    return formMode === 'generator' || uiProp.active ? [fieldKey] : []
  }, [formMode, fieldKey, uiProp.active])
  return (
    <div
      className="object-container"
      style={{
        ...(newContainerStyle?.width && { width: newContainerStyle.width }),
      }}
    >
      {isCollapse ? (
        <Collapse defaultActiveKey={defaultActiveKey}>
          <Panel
            header={titleMemo}
            key={fieldKey}
            forceRender={uiProp.forceRender || false}
          >
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
              containerMap,
              parentUiSchemaKey,
              parentDataSchemaKey,
              parentFormDataKey: fieldKey,
              customComponents,
              get,
              getKey,
              containerHoc,
              arrayKey,
            })}
          </Panel>
        </Collapse>
      ) : (
        <div
          className={titlePlacementCls(titlePlacement)}
          style={{
            justifyContent: 'space-between',
            display: 'flex',
          }}
        >
          {showTitle && titleMemo}
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
              containerMap,
              parentUiSchemaKey,
              parentDataSchemaKey,
              parentFormDataKey: fieldKey,
              customComponents,
              get,
              getKey,
              containerHoc,
              arrayKey,
            })}
          </div>
        </div>
      )}
    </div>
  )
}

const memoObjectContainer = memo(ObjectContainer)

export default memoObjectContainer
