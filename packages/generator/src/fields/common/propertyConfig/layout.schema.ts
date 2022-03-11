/**
 * 设置布局样式
 */
const unitedSchema = {
  type: 'object',
  fieldKey: 'containerStyle',
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
  title: '布局',
  schema: [
    {
      fieldKey: 'width',
      type: 'string',
      title: '组件宽度',
      ui: {
        type: 'slider',
        showNumber: false,
        min: 0,
        max: 100,
        marks: {
          0: { label: '0' },
          50: { label: '50%' },
          100: { label: '100%' },
        },
      },
    },
    {
      fieldKey: 'margin',
      type: 'string',
      title: '组件外边距',
      ui: {
        type: 'text',
        placeholder: '形如0 30px 20px 0 | 0 30px',
      },
    },
    {
      fieldKey: 'padding',
      type: 'string',
      title: '组件内边距',
      ui: {
        type: 'text',
        placeholder: '形如0 10px 0 10px | 0 10px',
      },
    },
  ],
}

export default unitedSchema
