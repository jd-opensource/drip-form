import type { ElementType, Dispatch } from 'react'
import type { UiComponents } from '../DripForm/type'
import type { GetKey } from '@jdfed/hooks'
import type {
  ContainerStyle,
  Action,
  Theme,
  Description,
  TitleUi,
} from '@jdfed/utils'

export type FieldData =
  | string
  | Record<string, unknown>
  | boolean
  | number
  | Array<unknown>

export type Props = {
  formMode: 'edit' | 'generator' | 'view'
  // 当前表单项使用的主题
  theme: Theme
  // 表单项宽度，以支持弹性布局
  containerStyle: ContainerStyle
  // 表单标题
  title?: string
  // 用于展示的校验错误提示
  error: string
  // 提示信息
  description: Description
  // titleUi
  titleUi: TitleUi
  // 是否展示错误信息
  showError: boolean
  // 是否展示标题
  showTitle: boolean
  // 表单唯一key值
  fieldKey: string
  // 表单类型
  type: string
  // 表单UI生成控制项
  uiProp: Record<string, unknown>
  getKey: GetKey
  // 表单绑定数据
  fieldData: FieldData
  // 当前父级表单相对于根uiSchema的路径
  parentKey?: Array<string>
  // 自定义查询（用于接口调用）
  queryFunc?: () => FieldData
  asyncValidate?: {
    type: 'change' | 'click'
    fn: (fieldData: FieldData) => any
  } | null
  /**
   * 表单组件对象，支持自定义组件库。
   * 类型为键值对，键：组件库命名空间，值：子组件集合。
   * 命名空间将在 type 字段中作为前缀体现，如 CustomComponentLib::InputBox 。
   * 主 theme 命名空间可省略，即使用 antd 作为 theme 时：antd::Input 与 Input 完全等效。
   */
  uiComponents: UiComponents
  dispatch: Dispatch<Action>
  requiredFields: Array<string>
  customComponents?: Record<string, ElementType>
}
