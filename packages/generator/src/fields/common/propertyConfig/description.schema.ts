/**
 * 表单项提示信息
 */
const unitedSchema = {
  type: 'object',
  fieldKey: 'description',
  title: '提示',
  ui: {
    type: 'object',
    mode: 'collapse',
    '$:dripStyle': true,
    ghost: true,
    containerStyle: {
      padding: 0,
      marginBottom: 5,
    },
  },
  schema: [
    {
      fieldKey: 'hasDesc',
      type: 'boolean',
      title: '有无提示',
      default: false,
      ui: {
        type: 'switch',
      },
    },
    {
      fieldKey: 'title',
      type: 'string',
      title: '提示文案',
      default: '',
      ui: {
        type: 'text',
        multiline: true,
        allowClear: true,
        vcontrol: 'return props.formData.description.hasDesc',
      },
    },
    {
      fieldKey: 'type',
      type: 'string',
      title: '提示方式',
      default: 'icon',
      ui: {
        type: 'radio',
        options: [
          { label: '图标悬浮', value: 'icon' },
          { label: '下方展示', value: 'text' },
        ],
        vcontrol: 'return props.formData.description.hasDesc',
      },
    },
    {
      fieldKey: 'trigger',
      type: 'string',
      title: '触发形式',
      default: 'hover',
      ui: {
        type: 'radio',
        options: [
          { label: '点击', value: 'click' },
          { label: '悬浮', value: 'hover' },
        ],
        vcontrol:
          'return props.formData.description.hasDesc && (props.formData.description.trigger === "icon")',
      },
    },
  ],
}

export default unitedSchema
