import { OnChange } from '@jdfed/utils'

const changeUse12Hours: OnChange = ({ dispatch, val, getKey }) => {
  dispatch({
    type: 'setUi',
    action: {
      set: {
        [getKey('ui.default', 'uiSchema') + '.use12Hours']: val,
        [getKey('ui.default', 'uiSchema') + '.format']: val
          ? 'h:mm:ss a'
          : 'HH:mm:ss',
        [getKey('ui.default__range.0', 'uiSchema') + '.use12Hours']: val,
        [getKey('ui.default__range.1', 'uiSchema') + '.use12Hours']: val,
        [getKey('ui.default__range.0', 'uiSchema') + '.format']: val
          ? 'h:mm:ss a'
          : 'HH:mm:ss',
        [getKey('ui.default__range.1', 'uiSchema') + '.format']: val
          ? 'h:mm:ss a'
          : 'HH:mm:ss',
      },
    },
  })
  dispatch({
    type: 'setValidate',
    action: {
      set: {
        [getKey('ui.default', 'dataSchema') + '.default']: '',
      },
    },
  })
  dispatch({
    type: 'setData',
    action: {
      set: {
        'ui.default': '',
        'ui.default__range': [],
        'ui.format': val ? 'h:mm:ss a' : 'HH:mm:ss',
      },
    },
  })
}

/**
 * 时间选择器
 */
const config = {
  icon: 'iconfont icon-clock',
  title: '时间选择器',
  unitedSchema: {
    type: 'string',
    title: '时间选择框',
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
        ui: { type: 'switch', onChange: changeUse12Hours },
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
        ui: {
          type: 'text',
          placeholder: '请选择时间',
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
        fieldKey: 'default',
        type: 'string',
        title: '默认值',
        ui: {
          type: 'timePicker',
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
              type: 'timePicker',
            },
          },
          {
            type: 'string',
            title: '终止时间',
            ui: {
              type: 'timePicker',
            },
          },
        ],
      },
    ],
  },
}

export default config
