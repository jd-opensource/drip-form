import { Field } from '../types'

/**
 * 多选框配置
 */
const config: Field = {
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
        ui: { type: 'array' },
        items: {
          type: 'object',
          title: '',
          ui: { type: 'object' },
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
                style: {
                  marginBottom: '20px',
                },
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
