/**
 * 多选框配置
 */
const config = {
  icon: 'iconfont icon-checked-box',
  title: '多选框',
  unitedSchema: {
    type: 'array',
    title: '多选框',
    ui: {
      type: 'checkbox',
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
        fieldKey: 'options',
        type: 'array',
        title: '选项',
        default: [],
        ui: {
          type: 'array',
          style: {
            marginBottom: '20px',
          },
        },
        items: {
          type: 'object',
          title: '',
          ui: { type: 'object', showTitle: false },
          schema: [
            {
              type: 'string',
              fieldKey: 'label',
              title: '选项名',
              ui: {
                type: 'text',
                placeholder: '选项',
              },
            },
            {
              type: 'string',
              fieldKey: 'value',
              title: '选项值',
              ui: {
                type: 'text',
                placeholder: '值',
              },
            },
          ],
        },
      },
      {
        fieldKey: 'default',
        type: 'array',
        title: '默认选中项',
        default: [],
        ui: { type: 'array' },
        items: {
          type: 'string',
          title: '选中项的值',
          ui: { type: 'text' },
        },
      },
    ],
  },
}

export default config
