import React, { memo, useRef, forwardRef, useEffect } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import cx from 'classnames'
import '../styles/global.css'
import styles from './index.module.css'
import Header from '@generator/components/Header'
import RightSideBar from '@generator/components/RightSideBar'
import LeftSideBar from '@generator/components/LeftSideBar'
import Viewport from '@generator/components/Viewport'
import DndWrapper from '@generator/components/DndWrapper'
import { PreviewJSON } from '@generator/components/Modal'
import { produce } from 'immer'
import { DripFormRefType } from '@jdfed/drip-form'
import {
  GeneratorContext,
  schemaAtom,
  DripFormUiComponetsAtom,
  sidebarDataAtom,
  optionsAtom,
} from '@generator/store'
import '@jdfed/drip-form/dist/index.css'
import '@jdfed/drip-form-theme-antd/dist/index.css'
import 'antd/dist/antd.css'
import type { GeneratorType, GeneratorRef } from './types'
import type { UnitedSchema } from '@jdfed/utils'
import { Field } from '@generator/fields/types'

const Generator = forwardRef<GeneratorRef, GeneratorType>(
  (
    {
      schema,
      customExport,
      exportText,
      renderLeftHeader,
      theme,
      customComponents,
      headerConfig,
      viewportConfig,
      components,
      options,
    },
    ref
  ) => {
    const formRef = useRef<DripFormRefType>()
    const unitedSchema = useRecoilValue(schemaAtom)
    const setOptions = useSetRecoilState(optionsAtom)
    const setDripFormUiComonents = useSetRecoilState(DripFormUiComponetsAtom)
    const setSidebarData = useSetRecoilState(sidebarDataAtom)

    // 设置全局配置
    useEffect(() => {
      setOptions((oldOption) => {
        return {
          ...oldOption,
          viewportConfig: {
            ...oldOption.viewportConfig,
            ...viewportConfig,
            ...options?.viewportConfig,
          },
          headerConfig: {
            ...oldOption.headerConfig,
            ...(customExport && { customExport }),
            ...(exportText && { exportText }),
            ...(renderLeftHeader && { renderLeftHeader }),
            ...headerConfig,
            ...options?.headerConfig,
          },
          ...options,
        }
      })
    }, [
      customExport,
      exportText,
      headerConfig,
      options,
      renderLeftHeader,
      setOptions,
      viewportConfig,
    ])

    // 动态添加图标
    useEffect(() => {
      const headerDomList = document.querySelector('head')
      const fontStyleDom = document.createElement('link')
      fontStyleDom.rel = 'stylesheet'
      // 如果需要更新图标，替换这里的cdn即可，使用时需要按照<i className="iconfont icon-xxx" / >使用
      fontStyleDom.href = '//at.alicdn.com/t/font_2740440_bddrj0imxt.css'
      headerDomList?.appendChild(fontStyleDom)
    }, [])

    // 设置内部drip-form主题选项
    useEffect(() => {
      if (theme) {
        setDripFormUiComonents((draft) => {
          return { ...draft, ...theme }
        })
      }
    }, [setDripFormUiComonents, theme])

    // 设置左侧组件
    useEffect(() => {
      if (components) {
        setSidebarData((oldSidebarData) => {
          return {
            ...oldSidebarData,
            ...components,
          }
        })
      } else {
        if (customComponents) {
          setSidebarData((oldSidebarData) => {
            const customComponent: Record<string, Field> =
              customComponents.reduce((prev, cur) => {
                return { ...prev, [cur.unitedSchema.ui.type]: cur }
              }, {})
            return produce(oldSidebarData, (draft) => {
              draft.category.business.order = Object.keys(customComponent)
              draft.category.business.fields = customComponent
            })
          })
        }
      }
    }, [components, customComponents, setSidebarData])

    /**
     * 外抛ref
     */
    React.useImperativeHandle<
      { schema: UnitedSchema },
      { schema: UnitedSchema }
    >(ref, () => ({
      // 联合schema
      schema: unitedSchema,
    }))

    return (
      <GeneratorContext.Provider value={formRef}>
        <div className={styles.drip_form_generator}>
          {(headerConfig?.showHeader ?? true) && <Header />}
          <div className={cx(styles.body)}>
            <DndWrapper>
              <LeftSideBar />
              <Viewport schema={schema} removable />
            </DndWrapper>
            <RightSideBar />
          </div>
          <PreviewJSON />
        </div>
      </GeneratorContext.Provider>
    )
  }
)
Generator.displayName = 'FormGeneratorApp'

export default memo(Generator)
