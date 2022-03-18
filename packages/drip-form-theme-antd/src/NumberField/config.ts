/**
 * 数组输入框
 */
const config = {
  icon: 'iconfont icon-number',
  title: '数字输入框',
  unitedSchema: {
    type: 'number',
    title: '数字输入框',
    ui: {
      type: 'number',
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
        type: 'number',
        title: '精度',
        ui: {
          type: 'number',
          description: {
            type: 'icon',
            trigger: 'hover',
            title: '若要整数，则设置0',
          },
          placeholder: '请输入',
          allowClear: true,
        },
      },
      {
        fieldKey: 'max',
        type: 'number',
        title: '最大值',
        ui: {
          type: 'number',
        },
      },
      {
        fieldKey: 'min',
        type: 'number',
        title: '最小值',
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
  },
}

export default config
