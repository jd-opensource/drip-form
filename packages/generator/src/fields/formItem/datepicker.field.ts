import { Field } from '../types'
import type { OnChange } from '@jdfed/utils'

const formatList = {
  date: 'YYYY-MM-DD HH:mm:ss',
  week: 'YYYY-wo',
  month: 'YYYY-MM',
  quarter: 'YYYY-quarter',
  year: 'YYYY',
}

const changeShowTime: OnChange = ({ dispatch, getKey, val }) => {
  dispatch({
    type: 'setUi',
    action: {
      set: {
        [getKey('ui.default', 'uiSchema') + '.showTime']: val,
        [getKey('ui.default', 'uiSchema') + '.format']: val
          ? 'YYYY-MM-DD HH:mm:ss'
          : 'YYYY-MM-DD',
        [getKey('ui.default__range.0', 'uiSchema') + '.showTime']: val,
        [getKey('ui.default__range.1', 'uiSchema') + '.showTime']: val,
        [getKey('ui.default__range.0', 'uiSchema') + '.format']: val
          ? 'YYYY-MM-DD HH:mm:ss'
          : 'YYYY-MM-DD',
        [getKey('ui.default__range.1', 'uiSchema') + '.format']: val
          ? 'YYYY-MM-DD HH:mm:ss'
          : 'YYYY-MM-DD',
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
        'ui.format': val ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD',
      },
    },
  })
}

const changePicker: OnChange = ({ dispatch, getKey, val }) => {
  dispatch({
    type: 'setUi',
    action: {
      set: {
        [getKey('ui.default', 'uiSchema') + '.picker']: val,
        [getKey('ui.default', 'uiSchema') + '.format']:
          formatList[val as keyof typeof formatList],
        [getKey('ui.default__range.0', 'uiSchema') + '.picker']: val,
        [getKey('ui.default__range.1', 'uiSchema') + '.picker']: val,
        [getKey('ui.default__range.0', 'uiSchema') + '.format']:
          formatList[val as keyof typeof formatList],
        [getKey('ui.default__range.1', 'uiSchema') + '.format']:
          formatList[val as keyof typeof formatList],
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
        'ui.format': formatList[val as keyof typeof formatList],
      },
    },
  })
}

/**
 * 日期选择器
 */
const config: Field = {
  icon: 'iconfont icon-datepicker',
  title: '日期选择框',
  unitedSchema: {
    type: 'string',
    title: '日期选择框',
    ui: {
      type: 'datePicker',
      showTime: true,
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
        ui: {
          type: 'switch',
          onChange: changeShowTime,
          // eslint-disable-next-line quotes
          vcontrol: "return props.formData.ui.picker==='date'",
        },
      },
      {
        fieldKey: 'picker',
        type: 'string',
        title: '选择器类型',
        default: 'date',
        ui: {
          type: 'select',
          style: { width: '50%' },
          onChange: changePicker,
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
          type: 'datePicker',
          picker: 'date',
          showTime: true,
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
              type: 'datePicker',
              picker: 'date',
              showTime: true,
            },
          },
          {
            type: 'string',
            title: '终止时间',
            ui: {
              type: 'datePicker',
              picker: 'date',
              showTime: true,
            },
          },
        ],
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
