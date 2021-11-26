import { FieldConfigType } from '../types'

/**
 * 开关
 */
const config: FieldConfigType = {
  icon: 'iconfont icon-switch',
  unitedSchema: {
    type: 'boolean',
    title: '开关',
    ui: {
      type: 'switch',
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
      fieldKey: 'default',
      type: 'boolean',
      title: '默认值',
      default: false,
      ui: {
        type: 'switch',
      },
    },
  ],
}

export default config
