import { Field } from '../types'

const serialTextUiSchema = [
  {
    type: 'string',
    fieldKey: 'beforeText',
    title: '序号前文案',
    ui: {
      type: 'text',
    },
  },
  {
    type: 'string',
    fieldKey: 'serialLang',
    title: '序号展示类型',
    ui: {
      type: 'select',
      options: [
        {
          value: 'number',
          label: '数字',
        },
        {
          value: 'CN',
          label: '中文',
        },
      ],
    },
  },
  {
    type: 'string',
    fieldKey: 'afterText',
    title: '序号后文案',
    ui: {
      type: 'text',
    },
  },
]

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
            { label: '不可变模式', value: 'fixed' },
            { label: '元祖模式', value: 'tuple' },
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
      {
        fieldKey: 'showNo',
        type: 'boolean',
        title: '是否展示索引序号',
        ui: {
          type: 'switch',
        },
      },
      {
        fieldKey: 'serialText',
        type: 'object',
        title: '序号文案',
        ui: {
          type: 'object',
          mode: 'collapse',
          style: {
            paddingBottom: '20px',
          },
          vcontrol: 'return props.formData.ui.showNo == true',
        },
        default: {
          before: '',
          serialLang: 'number',
          after: '',
        },
        schema: serialTextUiSchema,
      },
    ],
  },
}

export default config
