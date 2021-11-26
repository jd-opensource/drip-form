import { FieldConfigType } from '../types'

/**
 * 颜色选择器配置
 */
const config: FieldConfigType = {
  icon: 'iconfont icon-colorpicker',
  unitedSchema: {
    type: 'string',
    title: '颜色选择框',
    format: 'color',
    default: '#1e74f4',
    ui: {
      type: 'colorPicker',
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
      fieldKey: 'disableAlpha',
      type: 'boolean',
      title: '是否启用Alpha',
      default: true,
      ui: {
        type: 'switch',
      },
    },
  ],
}

export default config
