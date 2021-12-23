import { Field } from '../types'

/**
 * 数组容器
 */
const config: Field = {
  icon: 'iconfont icon-shuzu',
  title: '数组容器',
  unitedSchema: {
    type: 'array',
    title: '数组容器',
    ui: {
      type: 'array',
      mode: 'add',
      addTitle: '添加一行数据',
    },
  },
  propertyConfig: {
    styleSchema: [
      {
        fieldKey: 'mode',
        type: 'string',
        title: '容器模式',
        default: 'add',
        ui: {
          type: 'radio',
          options: [
            { label: '加减模式', value: 'add' },
            { label: '不可变模式', value: 'normal' },
          ],
        },
      },
      {
        fieldKey: 'addTitle',
        type: 'string',
        title: '新增按钮文案',
        ui: {
          type: 'text',
        },
      },
    ],
  },
}

export default config
