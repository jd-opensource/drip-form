import { FieldConfigType } from '../types'

/**
 * 纯文本组件
 */
const config: FieldConfigType = {
  icon: 'iconfont icon-sort-alphabetically',
  unitedSchema: {
    type: 'string',
    title: '文本',
    ui: {
      type: 'null',
      text: '这是一个不会绑定数据的空表单。只用作特殊场景下展示文字使用',
    },
  },
  styleSchema: [
    {
      fieldKey: 'text',
      type: 'string',
      title: '文字内容',
      default: '这是一段文字',
      ui: { type: 'text' },
    },
  ],
}

export default config
