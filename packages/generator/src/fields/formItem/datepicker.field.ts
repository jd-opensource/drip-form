import { Field } from '../types'

/**
 * 日期选择器
 */
const config: Field = {
  icon: 'iconfont icon-datepicker',
  title: '日期选择框',
  unitedSchema: {
    type: 'string',
    title: '日期选择框',
    format: 'date-time',
    ui: {
      type: 'datePicker',
    },
  },
  propertyConfig: {
    styleSchema: [
      {
        fieldKey: 'range',
        type: 'boolean',
        title: '是否为范围选择器',
        default: false,
        ui: { type: 'switch' },
      },
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
        fieldKey: 'showTime',
        type: 'boolean',
        title: '是否开启时间选择功能',
        default: true,
        ui: { type: 'switch' },
      },
      {
        fieldKey: 'picker',
        type: 'string',
        title: '选择器类型',
        default: 'date',
        ui: {
          type: 'select',
          style: { width: '50%' },
          options: [
            { label: '日', value: 'date' },
            { label: '周', value: 'week' },
            { label: '月', value: 'month' },
            { label: '季', value: 'quarter' },
            { label: '年', value: 'year' },
          ],
        },
      },
      {
        fieldKey: 'placeholder',
        type: 'string',
        title: '占位符',
        ui: {
          type: 'text',
          placeholder: '请选择日期',
          vcontrol: 'return !props.formData.ui.range',
        },
      },
      {
        fieldKey: 'default',
        type: 'string',
        title: '默认值',
        ui: {
          type: 'text',
          placeholder: '2021-11-11 11:11:11',
          vcontrol: 'return !props.formData.ui.range',
        },
      },
      {
        fieldKey: 'placeholder__range',
        type: 'array',
        title: '范围型时间选择器占位符',
        default: [],
        ui: {
          type: 'array',
          mode: 'tuple',
          vcontrol: 'return props.formData.ui.range',
        },
        maxItems: 2,
        minItems: 2,
        items: [
          {
            type: 'string',
            title: '起始时间',
            ui: {
              type: 'text',
              placeholder: '起始时间占位符',
            },
          },
          {
            type: 'string',
            title: '终止时间',
            ui: {
              type: 'text',
              placeholder: '终止时间占位符',
            },
          },
        ],
      },
      {
        fieldKey: 'default__range',
        type: 'array',
        title: '默认值',
        default: [],
        ui: {
          type: 'array',
          mode: 'tuple',
          vcontrol: 'return props.formData.ui.range',
        },
        maxItems: 2,
        minItems: 2,
        items: [
          {
            type: 'string',
            title: '起始时间',
            ui: {
              type: 'text',
              placeholder: '2021-11-11 11:11:11',
            },
          },
          {
            type: 'string',
            title: '终止时间',
            ui: {
              type: 'text',
              placeholder: '2021-12-12 12:12:12',
            },
          },
        ],
      },
      {
        fieldKey: 'format',
        type: 'string',
        title: '时间格式',
        default: 'YYYY-MM-DD HH:mm:ss',
        ui: {
          type: 'text',
          placeholder: 'YYYY-MM-DD HH:mm:ss',
        },
      },
    ],
  },
}

export default config
