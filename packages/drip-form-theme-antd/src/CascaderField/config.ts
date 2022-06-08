/**
 * 级联选择器配置
 */
const config = {
  icon: 'iconfont icon-cascader',
  title: '级联选择',
  unitedSchema: {
    type: 'array',
    title: '级联选择',
    ui: {
      type: 'cascader',
      theme: 'antd',
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
        fieldKey: 'expandTrigger',
        type: 'object',
        title: '次级菜单展开方式',
        default: 'click',
        ui: {
          type: 'radio',
          options: [
            { label: '点击', value: 'click' },
            { label: '悬浮', value: 'hover' },
          ],
        },
      },
      {
        fieldKey: 'showSearch',
        type: 'boolean',
        title: '选择框中是否显示搜索框',
        default: false,
        ui: {
          type: 'switch',
        },
      },
      {
        fieldKey: 'options',
        type: 'string',
        title: '选项',
        ui: {
          type: 'text',
          multiline: true,
          allowClear: true,
          placeholder:
            '[{ label: "标签", value: "value", children: [{label: "子标签", value: "subvalue", children: [...]}]}]',
        },
      },
    ],
  },
}

export default config
