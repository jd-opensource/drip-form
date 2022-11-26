import { ElementType } from 'react'
import type { Dispatch, NamedExoticComponent, ComponentType } from 'react'
import type { Action } from '@jdfed/utils'
import type { Theme, Description, TitleUi, ContainerStyle } from '@jdfed/utils'
import type { UiComponents } from '../../DripForm/type'
import type { GetKey } from '@jdfed/hooks'

export type CommonContainer = {
  titleUi: TitleUi
  showTitle: boolean
  description: Description
  showError: boolean
  error: string
  requiredFields: Array<string>
  fieldKey: string
  uiComponents: UiComponents
  theme: Theme
  title: string
  dispatch: Dispatch<Action>
  formMode: 'edit' | 'generator' | 'view'
  containerStyle: ContainerStyle
  // 表单UI生成控制项
  uiProp: Record<string, unknown>
  type: string
  customComponents: Record<string, ElementType>
  getKey: GetKey
}

export type CommonContainerProps = {
  // 是否展示描述和错误
  showDesAndErr?: boolean
  // 是否展示标题
  showTitleEle?: boolean
}

export type CommonContainerHocType = (
  Component: ComponentType<any>,
  props?: CommonContainerProps
) => NamedExoticComponent<CommonContainer>
