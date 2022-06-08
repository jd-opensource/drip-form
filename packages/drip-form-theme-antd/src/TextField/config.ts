/**
 * 输入框
 */
const config = {
  icon: 'iconfont icon-input',
  title: '输入框',
  unitedSchema: {
    type: 'string',
    title: '输入框',
    ui: {
      type: 'text',
      style: { width: '100%' },
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
        fieldKey: 'multiline',
        type: 'number',
        title: '文本行数',
        default: 1,
        // formatter: 'value => `${value}%`',
        ui: {
          type: 'number',
          allowClear: true,
          min: 1,
          step: 1,
        },
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
        fieldKey: 'allowClear',
        type: 'boolean',
        title: '能否清空',
        default: true,
        ui: {
          type: 'switch',
        },
      },
      {
        fieldKey: 'showCount',
        type: 'boolean',
        title: '是否展示字数',
        default: false,
        ui: {
          type: 'switch',
          vcontrol: 'return props.formData.ui.multiline>1',
        },
      },
      {
        fieldKey: 'default',
        type: 'string',
        title: '默认值',
        ui: {
          type: 'text',
          placeholder: '请输入文本',
          allowClear: true,
        },
      },
    ],
  },
}

export default config
