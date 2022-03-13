/**
 * 颜色选择器配置
 */
const config = {
  icon: 'iconfont icon-colorpicker',
  title: '颜色选择框',
  unitedSchema: {
    type: 'string',
    title: '颜色选择框',
    format: 'color',
    default: '#1e74f4',
    ui: {
      type: 'colorPicker',
    },
  },
  propertyConfig: {
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
      {
        fieldKey: 'defaultValue',
        type: 'string',
        title: '默认颜色',
        ui: {
          type: 'colorPicker',
        },
      },
    ],
  },
}

export default config
