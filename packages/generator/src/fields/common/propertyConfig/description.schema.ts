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
      type: 'string',
      title: '图标悬浮文案',
      ui: {
        type: 'text',
        style: {
          width: '100%',
        },
        theme: 'antd',
      },
      fieldKey: 'iconTitle',
    },
    {
      type: 'string',
      title: '下方展示文案',
      ui: {
        type: 'text',
        style: {
          width: '100%',
        },
        theme: 'antd',
      },
      fieldKey: 'textTitle',
    },
  ],
}

export default unitedSchema
