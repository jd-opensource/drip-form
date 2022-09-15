import type { Theme, Description, TitleUi } from '@jdfed/utils'
import type { UiComponents } from '../../DripForm/type'

// 垂直和水平对齐方式
export enum Align {
  center = 'center',
  top = 'flex-start',
  bottom = 'flex-end',
  left = 'flex-start',
  right = 'flex-end',
}

export type TitleType = {
  // 当前表单项使用的主题
  theme: Theme
  uiComponents: UiComponents
  // 提示信息
  description: Description
  // 表单唯一key值
  fieldKey: string
  // 必填表单
  requiredFields: Array<string>
  // titleUi
  titleUi: TitleUi
  // 表单标题
  title?: string
}

export type IconDesc =
  | {
      type: 'icon'
      title: string
      trigger?: 'click' | 'hover'
    }
  | undefined
