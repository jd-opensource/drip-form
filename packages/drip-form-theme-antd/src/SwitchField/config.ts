/**
 * 开关
 */
const config = {
  icon: 'iconfont icon-switch',
  title: '开关',
  unitedSchema: {
    type: 'boolean',
    title: '开关',
    ui: {
      type: 'switch',
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
        fieldKey: 'default',
        type: 'boolean',
        title: '默认值',
        default: false,
        ui: {
          type: 'switch',
        },
      },
    ],
  },
}

export default config
