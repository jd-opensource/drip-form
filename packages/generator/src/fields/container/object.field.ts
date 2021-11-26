import { FieldConfigType } from '../types'

/**
 * 对象容器
 */
const config: FieldConfigType = {
  icon: 'iconfont icon-zhediemianban',
  unitedSchema: {
    type: 'object',
    title: '对象容器',
    ui: {
      type: 'object',
      mode: 'collapse',
    },
  },
  styleSchema: [
    {
      fieldKey: 'mode',
      type: 'string',
      title: '容器模式',
      default: 'normal',
      ui: {
        type: 'radio',
        options: [
          { label: '默认', value: 'normal' },
          { label: '折叠模式', value: 'collapse' },
        ],
      },
    },
  ],
}

export default config
