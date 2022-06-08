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
    ui: {
      type: 'colorPicker',
      theme: 'antd',
    },
  },
  propertyConfig: {
    styleSchema: [
      {
        type: 'string',
        title: '表单模式',
        default: 'edit',
        ui: {
          type: 'radio',
          options: [
            {
              value: 'edit',
              label: '编辑',
            },
            {
              value: 'view',
              label: '查看',
            },
          ],
        },
        fieldKey: 'formMode',
      },
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
