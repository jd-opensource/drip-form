/**
 * 表单项标题配置
 */
const unitedSchema = {
  type: 'object',
  fieldKey: 'title',
  ui: {
    type: 'object',
    mode: 'collapse',
    containerStyle: {
      marginBottom: 0,
    },
  },
  title: '标题',
  schema: [
    {
      fieldKey: 'title',
      type: 'string',
      title: '名称',
      ui: {
        type: 'text',
        placeholder: '请输入单行文本',
        allowClear: true,
      },
    },
    {
      fieldKey: 'showTitle',
      type: 'boolean',
      title: '是否展示标题',
      default: true,
      ui: { type: 'switch' },
    },
    {
      fieldKey: 'followRootConfig',
      type: 'boolean',
      title: '跟随全局标题配置',
      default: true,
      ui: { type: 'switch' },
    },
    {
      fieldKey: 'requiredIcon',
      type: 'boolean',
      title: '是否展示*号',
      default: false,
      ui: {
        type: 'switch',
        description: {
          title: '需配置校验规则为必填时才生效',
          type: 'icon',
          trigger: 'hover',
        },
        vcontrol: 'return props.formData.title.followRootConfig == false',
      },
    },
    {
      fieldKey: 'width',
      type: 'number',
      title: '标签宽度',
      default: 82,
      ui: {
        type: 'number',
        style: { width: '50%' },
        placeholder: '请输入数字',
        allowClear: true,
        vcontrol: 'return props.formData.title.followRootConfig == false',
      },
    },
    {
      fieldKey: 'placement',
      type: 'object',
      title: '标题位置',
      default: 'left',
      ui: {
        type: 'select',
        style: { width: '50%' },
        options: [
          { label: '左侧', value: 'left' },
          { label: '上侧', value: 'top' },
          { label: '右侧', value: 'right' },
          { label: '下侧', value: 'bottom' },
        ],
        vcontrol: 'return props.formData.title.followRootConfig == false',
      },
    },
    {
      fieldKey: 'textAlign',
      type: 'string',
      title: '标签水平对齐方式',
      default: 'left',
      ui: {
        type: 'select',
        style: { width: '50%' },
        options: [
          { label: '左侧', value: 'left' },
          { label: '居中', value: 'center' },
          { label: '右侧', value: 'right' },
        ],
        vcontrol: 'return props.formData.title.followRootConfig == false',
      },
    },
    {
      fieldKey: 'verticalAlign',
      type: 'string',
      title: '标签垂直对齐方式',
      default: 'center',
      ui: {
        type: 'select',
        style: { width: '50%' },
        options: [
          { label: '上对齐', value: 'top' },
          { label: '居中对齐', value: 'center' },
          { label: '下对齐', value: 'bottom' },
        ],
        vcontrol: 'return props.formData.title.followRootConfig == false',
      },
    },
    {
      fieldKey: 'margin',
      type: 'string',
      title: '标签外边距',
      ui: {
        type: 'text',
        disabled: false,
        placeholder: '形如0 30px 20px 0 | 0 30px',
        vcontrol: 'return props.formData.title.followRootConfig == false',
      },
    },
  ],
}

export default unitedSchema
