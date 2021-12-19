import { Field } from '../types'

/**
 * 树形选择器
 */
const config: Field = {
  icon: 'iconfont icon-treeselect',
  title: '树选择',
  unitedSchema: {
    type: 'array',
    title: '树选择',
    ui: {
      type: 'treeSelect',
      style: { width: 120 },
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
        fieldKey: 'allowClear',
        type: 'boolean',
        title: '是否允许清除',
        default: true,
        ui: { type: 'switch' },
      },
      {
        fieldKey: 'requestCache',
        type: 'boolean',
        title: '是否请求缓存数据',
        default: false,
        ui: { type: 'switch' },
      },
      {
        fieldKey: 'showSearch',
        type: 'boolean',
        title: '是否支持搜索框',
        default: false,
        ui: { type: 'switch' },
      },
      {
        fieldKey: 'multiple',
        type: 'boolean',
        title: '是否可多选',
        default: false,
        ui: { type: 'switch' },
      },
      {
        fieldKey: 'placeholder',
        type: 'string',
        title: '占位符',
        ui: { type: 'text' },
      },
      {
        fieldKey: 'options',
        type: 'string',
        title: '选项',
        ui: {
          type: 'text',
          placeholder:
            '[{title: "node1", value: "1", key: "1", children: [{title: "chidnode1", value: "1-1", key: "1-1"}, ...]}, ...]',
        },
      },
    ],
  },
}

export default config
