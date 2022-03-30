/*
 * 容器通用HOC
 * 通用布局、标题、提示、错误展示
 * 对象容器特殊
 * @Author: jiangxiaowei
 * @Date: 2022-01-18 14:04:45
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: 2022-03-30 22:30:33
 */
import cx from 'classnames'
import React, { memo, CSSProperties } from 'react'
import DescriptionAndError from '../DescriptionAndError'
import Title, { titlePlacementCls } from '../Title'
import { useTitle, useContainer } from '@jdfed/hooks'
import type { CommonContainer, CommonContainerHocType } from './type'
import './index.styl'

const CommonContainerHoc: CommonContainerHocType = (Component, props) => {
  const { showTitleEle = true, showDesAndErr = true } = props || {
    showDesAndErr: true,
    showTitleEle: true,
  }
  const commonContainer = memo<CommonContainer>((props) => {
    const {
      titleUi,
      showTitle,
      description,
      showError,
      error,
      requiredFields,
      fieldKey,
      uiComponents,
      theme,
      title,
      dispatch,
      formMode,
      containerStyle,
      uiProp,
    } = props
    useContainer({ fieldKey, dispatch })
    const newTitleUi = useTitle(titleUi)
    return (
      <div
        className={cx('form-container', {
          'form-container-view': formMode === 'view',
          'form-container-generator': formMode === 'generator',
          'form-container-edit': formMode === 'edit',
        })}
        style={{
          ...(['array', 'object'].includes(uiProp.type as string)
            ? (uiProp?.style as CSSProperties)
            : null),
          ...containerStyle,
        }}
      >
        <div
          className={cx(
            'form-container--main',
            titlePlacementCls(newTitleUi?.placement)
          )}
        >
          {/*对象容器折叠模式不展示标题，而是在objectContainer中自定义 */}
          {showTitleEle &&
            showTitle &&
            (uiProp.type != 'object' ||
              (uiProp.type === 'object' && uiProp.mode !== 'collapse')) && (
              <Title
                titleUi={newTitleUi}
                requiredFields={requiredFields}
                fieldKey={fieldKey}
                description={description}
                uiComponents={uiComponents}
                theme={theme}
                title={title}
              />
            )}
          <div className="form-container--content">
            <Component {...props} />
          </div>
        </div>
        {/*对象容器折叠模式不展示提示和错误，而是在objectContainer中自定义 */}
        {showDesAndErr &&
          (uiProp.type !== 'object' ||
            (uiProp.type === 'object' && uiProp.mode !== 'collapse')) && (
            <DescriptionAndError
              titleUi={newTitleUi}
              showTitle={showTitle}
              description={description}
              showError={showError}
              error={error}
            />
          )}
      </div>
    )
  })
  commonContainer.displayName = 'commoncontainer'
  return commonContainer
}

export default CommonContainerHoc
