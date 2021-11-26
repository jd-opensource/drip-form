import { FieldConfigType } from '../types'

/**
 * 数组容器
 */
const config: FieldConfigType = {
  icon: 'iconfont icon-shuzu',
  unitedSchema: {
    type: 'array',
    title: '数组容器',
    ui: {
      type: 'array',
      mode: 'add',
    },
  },
  styleSchema: [
    {
      fieldKey: 'mode',
      type: 'string',
      title: '容器模式',
      default: 'add',
      ui: {
        type: 'radio',
        options: [
          { label: '加减模式', value: 'add' },
          { label: '不可变模式', value: 'normal' },
        ],
      },
    },
  ],
}

export default config
