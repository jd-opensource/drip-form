import { FieldConfigType } from '../types'

/**
 * 数组输入框
 */
const config: FieldConfigType = {
  icon: 'iconfont icon-number',
  unitedSchema: {
    type: 'number',
    title: '数字输入框',
    ui: {
      type: 'number',
    },
  },
  styleSchema: [
    {
      fieldKey: 'disabled',
      type: 'boolean',
      title: '是否禁用',
      default: false,
      ui: {
        type: 'switch',
      },
    },
    {
      fieldKey: 'placeholder',
      type: 'string',
      title: '占位符',
      ui: {
        type: 'text',
        placeholder: '请输入文本',
        allowClear: true,
      },
    },
    {
      fieldKey: 'default',
      type: 'number',
      title: '默认值',
      ui: {
        type: 'number',
      },
    },
    {
      fieldKey: 'precision',
      type: 'string',
      title: '精度',
      ui: {
        type: 'text',
        placeholder: '请输入',
        allowClear: true,
      },
    },
    {
      fieldKey: 'max',
      type: 'number',
      title: '最大值',
      default: Number.MAX_SAFE_INTEGER,
      ui: {
        type: 'number',
      },
    },
    {
      fieldKey: 'min',
      type: 'number',
      title: '最小值',
      default: Number.MIN_SAFE_INTEGER,
      ui: {
        type: 'number',
      },
    },
    {
      fieldKey: 'step',
      type: 'number',
      title: '步数',
      ui: {
        type: 'number',
      },
    },
  ],
}

export default config
