/**
 * 设置布局样式
 */
const unitedSchema = {
  type: 'object',
  fieldKey: 'containerStyle',
  ui: {
    type: 'object',
    mode: 'collapse',
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
  ],
}

export default unitedSchema
