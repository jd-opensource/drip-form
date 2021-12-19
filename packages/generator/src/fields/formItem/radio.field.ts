import { Field } from '../types'

/**
 * 单选框
 */
const config: Field = {
  icon: 'iconfont icon-radio',
  title: '单选',
  unitedSchema: {
    type: 'string',
    title: '单选',
    ui: {
      type: 'radio',
      options: [
        { label: '是', value: '1' },
        { label: '否', value: '0' },
      ],
    },
  },
  propertyConfig: {
    styleSchema: [
      {
        fieldKey: 'disabled',
        type: 'boolean',
        title: '是否禁用',
        default: false,
        ui: { type: 'switch' },
      },
      {
        fieldKey: 'default',
        type: 'string',
        title: '默认选中项',
        ui: { type: 'text' },
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
              },
            },
          ],
        },
      },
    ],
  },
}

export default config
