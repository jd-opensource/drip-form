/*
 * 对象容器
 * @Author: jiangxiaowei
 * @Date: 2021-08-11 15:26:55
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: 2022-03-11 13:55:35
 */
import React, { useMemo, memo } from 'react'
import { useTitle } from '@jdfed/hooks'
import renderCoreFn from '../../render'
import { Title, CommonContainerHoc } from '@form/components/index'
import cx from 'classnames'
import type { RenderFnProps, ContainerType } from '../../render/type'
import type { Props } from '../type'
import './index.styl'
type ObjectContainerProps = {
  containerMap: ContainerType
}

// panel面板prop
const panelPropList = ['collapsible', 'showArrow']
// collapse prop
const collapsePropList = [
  'bordered',
  'destroyInactivePanel',
  'expandIconPosition',
  'ghost',
]

const objectContainer = memo<Props & RenderFnProps & ObjectContainerProps>(
  ({
    theme,
    requiredFields,
    title,
    description = {
      type: 'icon',
      title: '',
    },
    titleUi,
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
    const {
      // 是否为折叠面板模式，默认不开启 collapse | normal
      mode = 'normal',
      forceRender = false,
      active = false,
      ...props
    } = uiProp || { mode: 'normal', forceRender: false, active: false }
    const { collapseProp, panelProp } = useMemo<{
      collapseProp: Record<string, any>
      panelProp: Record<string, any>
    }>(() => {
      const collapsePropMap: Record<string, any> = {}
      const panelPropMap: Record<string, any> = {}
      Object.keys(props).map((item) => {
        if (panelPropList.includes(item)) {
          panelPropMap[item] = props[item]
        } else if (collapsePropList.includes(item)) {
          collapsePropMap[item] = props[item]
        }
      })
      return {
        collapseProp: collapsePropMap,
        panelProp: panelPropMap,
      }
    }, [props])
    const newTitleUi = useTitle(titleUi, 'object')
    const Collapse = uiComponents[theme]?.Collapse
    const Panel = uiComponents[theme]?.Collapse.Panel
    // 是否渲染为折叠面板模式
    const isCollapse = Collapse && Panel && mode === 'collapse' && showTitle

    const defaultActiveKey = useMemo(() => {
      // 用户配置了active||generator viewport区域需要展开折叠面板
      return formMode === 'generator' || active ? [fieldKey] : []
    }, [formMode, fieldKey, active])

    return (
      <>
        {isCollapse ? (
          <Collapse
            defaultActiveKey={defaultActiveKey}
            {...collapseProp}
            className={cx({
              'drip-form_objectContainer--collapse': uiProp['$:dripStyle'],
            })}
          >
            <Panel
              header={
                <>
                  <Title
                    titleUi={newTitleUi}
                    requiredFields={requiredFields}
                    fieldKey={fieldKey}
                    description={description}
                    uiComponents={uiComponents}
                    theme={theme}
                    title={title}
                  />
                  <span className="object-container-err">
                    {errors[fieldKey]}
                  </span>
                </>
              }
              extra
              key={fieldKey}
              forceRender={forceRender}
              {...panelProp}
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
          renderCoreFn({
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
          })
        )}
      </>
    )
  }
)
objectContainer.displayName = 'objectContainer'

export default CommonContainerHoc(objectContainer)
