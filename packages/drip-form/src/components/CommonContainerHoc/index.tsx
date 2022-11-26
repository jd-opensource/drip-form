/*
 * 容器通用HOC
 * 通用布局、标题、提示、错误展示
 * 对象容器特殊
 * @Author: jiangxiaowei
 * @Date: 2022-01-18 14:04:45
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: 2022-11-26 19:07:33
 */
import cx from 'classnames'
import React, {
  memo,
  CSSProperties,
  useRef,
  useEffect,
  useContext,
} from 'react'
import DescriptionAndError from '../DescriptionAndError'
import { FormDataContext } from '../../reducers'
import Title, { titlePlacementCls } from '../Title'
import { get } from '@jdfed/utils'
import { useTitle, useContainer, useGlobalOptions } from '@jdfed/hooks'
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
      type,
      customComponents,
      getKey,
    } = props
    const { globalFormDataStoreKey, fetchApi } = useContext(FormDataContext)
    useContainer({ fieldKey, dispatch })
    const newTitleUi = useTitle(titleUi)

    const { undefinedComponent } = useGlobalOptions()

    let Field: any
    if (type === 'custom' && customComponents) {
      Field = customComponents[fieldKey]
    } else {
      const [customTheme, customType] = type.split('::')
      if (customType) {
        Field = uiComponents[customTheme]?.[customType]
      } else {
        Field = uiComponents[theme]?.[type]
      }
    }

    const notRender = undefinedComponent?.type === 'console' && !Field

    const { queryConfig } = uiProp as Record<string, unknown> & {
      queryConfig?:
        | {
            refreshId: number
            url: string
            params: Array<{ key: string; value: string }>
            method: 'GET' | 'POST'
            dataPath: string
            optionsType: '0'
            setPath: string
          }
        | {
            optionsType: '1'
            setPath: string
            options: Array<{ label: string; value: string }>
          }
    }

    const refreshRef = useRef(
      queryConfig?.optionsType === '0' ? queryConfig?.refreshId || 0 : 0
    )
    //替换data中部分参数
    useEffect(() => {
      ;(async () => {
        if (fetchApi && queryConfig?.optionsType === '0') {
          try {
            const {
              // 重置请求
              refreshId = 0,
              // 接口url
              url,
              // 接口入参
              params = [],
              // 接口类型
              method = 'GET',
              // 接口返回路径
              dataPath,
              // 需要设置到uiSchema中的位置
              setPath = 'options',
            } = queryConfig
            refreshRef.current = refreshId
            //模板字符串替换
            const newParams = params.map((item) => {
              /**
               * 假设表单数据formData为{a:{b:1},c:2}，使用以下函数可将'{{formData.a.b}}-{{formData.c}}'转换为'1-2'
               */
              const value = item.value.replace(
                /\{\{(formData.+?)\}\}/g,
                (match, p1) => {
                  try {
                    return new Function('formData', `return ${p1}`)(
                      (window as any)[globalFormDataStoreKey]
                    )
                  } catch (e) {
                    return match
                  }
                }
              )
              return {
                key: item.key,
                value,
              }
            })
            const res = await fetchApi({
              params: newParams,
              url,
              method,
            })
            const options = dataPath ? get(res, dataPath) : res
            // refreshId的比较是为了防止，频繁切换调用接口，前置请求的数据覆盖后置请求的数据
            if (setPath && refreshId === refreshRef.current) {
              dispatch({
                type: 'setUi',
                action: {
                  set: {
                    [`${getKey(fieldKey, 'uiSchema')}.${setPath}`]: options,
                  },
                },
              })
            }
          } catch (err) {
            console.error(err)
          }
        }
      })()
    }, [
      queryConfig,
      dispatch,
      fetchApi,
      fieldKey,
      getKey,
      globalFormDataStoreKey,
    ])

    /**
     * 如果queryConfig为自定义数据模式，则设置数据
     * 注：queryConfig可以允许表单在满足固定条件时，使用接口或配置的数据填充uiSchema
     */
    useEffect(() => {
      if (queryConfig?.optionsType === '1') {
        dispatch({
          type: 'setUi',
          action: {
            set: {
              [`${getKey(fieldKey, 'uiSchema')}.${queryConfig.setPath}`]:
                queryConfig.options,
            },
          },
        })
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return !notRender ? (
      <div
        // form-container需要和packages/generator/src/components/Viewport/DripFormDragHoc/index.module.css中同步修改
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
    ) : null
  })
  commonContainer.displayName = 'commoncontainer'
  return commonContainer
}

export default CommonContainerHoc
