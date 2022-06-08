/**
 * 纯文本组件
 */
const config = {
  icon: 'iconfont icon-sort-alphabetically',
  title: '文本',
  unitedSchema: {
    type: 'string',
    title: '文本',
    ui: {
      type: 'null',
      theme: 'antd',
      text: '这是一个不会绑定数据的空表单。只用作特殊场景下展示文字使用',
    },
  },
  propertyConfig: {
    styleSchema: [
      {
        fieldKey: 'text',
        type: 'string',
        title: '文字内容',
        default: '这是一段文字',
        ui: { type: 'text' },
      },
      {
        type: 'string',
        title: '类型',
        default: 'none',
        ui: {
          type: 'radio',
          options: [
            {
              label: '无',
              value: 'none',
            },
            {
              label: '成功',
              value: 'success',
            },
            {
              label: '失败',
              value: 'error',
            },
            {
              value: 'warning',
              label: '警告',
            },
            {
              label: '提示',
              value: 'info',
            },
          ],
        },
        fieldKey: 'styleType',
      },
      {
        type: 'object',
        title: '对象容器',
        ui: {
          type: 'object',
          mode: 'normal',
          showTitle: false,
        },
        fieldKey: 'style',
        default: {},
        schema: [
          {
            type: 'string',
            title: '背景颜色',
            default: '#ffffff',
            ui: {
              type: 'colorPicker',
              defaultValue: '#ffffff',
              vcontrol:
                'return !props.formData.ui.styleType||props.formData.ui.styleType==="none"',
            },
            fieldKey: 'backgroundColor',
          },
          {
            type: 'string',
            title: '文本颜色',
            default: '#000000',
            ui: {
              type: 'colorPicker',
              defaultValue: '#000000',
              vcontrol:
                'return !props.formData.ui.styleType||props.formData.ui.styleType==="none"',
            },
            fieldKey: 'color',
          },
        ],
      },
    ],
  },
}

export default config
