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
      '$:dripStyle': true,
      ghost: true,
      containerStyle: {
        padding: 0,
        marginBottom: 5,
      },
      active: false,
      title: {
        verticalAlign: 'top',
      },
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
      {
        fieldKey: 'active',
        type: 'boolean',
        title: '是否默认展开',
        default: false,
        ui: {
          type: 'switch',
          vcontrol: 'return props.formData.ui.mode==="collapse"',
        },
      },
      {
        fieldKey: 'bordered',
        type: 'boolean',
        title: '是否带边框',
        default: true,
        ui: {
          type: 'switch',
          vcontrol: 'return props.formData.ui.mode==="collapse"',
        },
      },
      {
        fieldKey: 'destroyInactivePanel',
        type: 'boolean',
        title: '销毁折叠隐藏的面板',
        default: false,
        ui: {
          type: 'switch',
          vcontrol: 'return props.formData.ui.mode==="collapse"',
        },
      },
      {
        fieldKey: 'expandIconPosition',
        type: 'string',
        title: '图标位置',
        default: 'left',
        ui: {
          type: 'radio',
          options: [
            { label: '左', value: 'left' },
            { label: '右', value: 'right' },
          ],
          vcontrol: 'return props.formData.ui.mode==="collapse"',
        },
      },
      {
        fieldKey: 'collapsible',
        type: 'string',
        title: '是否可折叠',
        default: 'header',
        ui: {
          type: 'radio',
          options: [
            { label: '可折叠', value: 'header' },
            { label: '不可折叠', value: 'disabled' },
          ],
          vcontrol: 'return props.formData.ui.mode==="collapse"',
        },
      },
      {
        fieldKey: 'ghost',
        type: 'boolean',
        title: '折叠面板透明无边框',
        default: false,
        ui: {
          type: 'switch',
          vcontrol: 'return props.formData.ui.mode==="collapse"',
        },
      },
      {
        fieldKey: 'showArrow',
        type: 'boolean',
        title: '是否展示箭头',
        default: true,
        ui: {
          type: 'switch',
          vcontrol: 'return props.formData.ui.mode==="collapse"',
        },
      },
      {
        fieldKey: '$:dripStyle',
        type: 'boolean',
        title: '是否开启水滴样式',
        ui: {
          description: {
            type: 'icon',
            trigger: 'hover',
            title: '开启之后，标题为淡蓝色',
          },
          type: 'switch',
        },
      },
    ],
  },
}

export default config
