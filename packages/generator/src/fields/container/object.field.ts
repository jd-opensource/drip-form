import { Field } from '../types'

/**
 * 对象容器
 */
const config: Field = {
  icon: 'iconfont icon-zhediemianban',
  title: '对象容器',
  unitedSchema: {
    type: 'object',
    title: '对象容器',
    ui: {
      type: 'object',
      mode: 'collapse',
    },
  },
  propertyConfig: {
    styleSchema: [
      {
        fieldKey: 'mode',
        type: 'string',
        title: '容器模式',
        default: 'normal',
        ui: {
          type: 'radio',
          options: [
            { label: '默认', value: 'normal' },
            { label: '折叠模式', value: 'collapse' },
          ],
        },
      },
    ],
  },
}

export default config
