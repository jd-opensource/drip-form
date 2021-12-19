import { Field } from '../types'

/**
 * 时间选择器
 */
const config: Field = {
  icon: 'iconfont icon-clock',
  title: '时间选择器',
  unitedSchema: {
    type: 'array',
    title: '时间选择框',
    items: [
      {
        type: 'string',
        format: 'time',
      },
      {
        type: 'string',
        format: 'time',
      },
    ],
    ui: {
      type: 'timePicker',
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
        fieldKey: 'use12Hours',
        type: 'boolean',
        title: '是否采用12小时制',
        default: false,
        ui: { type: 'switch' },
      },
      {
        fieldKey: 'showNow',
        type: 'boolean',
        title: '面板是否显示“此刻”按钮',
        default: false,
        ui: { type: 'switch' },
      },
      {
        fieldKey: 'format',
        type: 'string',
        title: '时间格式',
        default: 'HH:mm:ss',
        ui: {
          type: 'text',
          placeholder: 'HH:mm:ss',
        },
      },
      {
        fieldKey: 'placeholder',
        type: 'string',
        title: '占位符',
        default: '请选择时间',
        ui: {
          type: 'text',
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
          mode: 'normal',
          vcontrol: 'return props.formData.ui.range',
        },
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
        fieldKey: 'default',
        type: 'string',
        title: '默认值',
        ui: {
          type: 'text',
          placeholder: '11:11:11',
          vcontrol: 'return !props.formData.ui.range',
        },
      },
      {
        fieldKey: 'default__range',
        type: 'array',
        title: '默认值',
        default: [],
        ui: {
          type: 'array',
          mode: 'normal',
          vcontrol: 'return props.formData.ui.range',
        },
        items: [
          {
            type: 'string',
            title: '起始时间',
            ui: {
              type: 'text',
              placeholder: '11:11:11',
            },
          },
          {
            type: 'string',
            title: '终止时间',
            ui: {
              type: 'text',
              placeholder: '12:12:12',
            },
          },
        ],
      },
    ],
  },
}

export default config
