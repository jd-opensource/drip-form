import { queryCofnig } from '../global'
/**
 * 下拉选择器
 */
const config = {
  icon: 'iconfont icon-select',
  title: '选择器',
  unitedSchema: {
    type: 'string',
    title: '选择器',
    ui: {
      type: 'select',
      theme: 'antd',
      style: { width: 120 },
      queryConfig: {
        optionsType: '1',
        options: [],
        setPath: 'options',
      },
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
        fieldKey: 'multiple',
        type: 'boolean',
        title: '是否可以多选',
        default: false,
        ui: {
          type: 'switch',
        },
      },
      {
        fieldKey: 'allowClear',
        type: 'boolean',
        title: '是否可以清除',
        default: true,
        ui: {
          type: 'switch',
        },
      },
      {
        fieldKey: 'requestCache',
        type: 'boolean',
        title: '是否使用缓存',
        default: true,
        ui: {
          type: 'switch',
        },
      },
      {
        fieldKey: 'listHeight',
        type: 'number',
        title: '弹窗高度',
        default: 256,
        ui: {
          type: 'number',
        },
      },
      {
        fieldKey: 'default',
        type: 'string',
        title: '默认值',
        ui: {
          type: 'text',
          placeholder: '请输入默认值',
          allowClear: true,
        },
      },
      ...queryCofnig,
    ],
  },
}

export default config
