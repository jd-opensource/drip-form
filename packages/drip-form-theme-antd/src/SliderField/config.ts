/**
 * 滑动输入条
 */
const config = {
  icon: 'iconfont icon-sliders',
  title: '滑动输入条',
  unitedSchema: {
    type: 'number',
    title: '滑动输入条',
    ui: {
      type: 'slider',
      theme: 'antd',
    },
  },
  propertyConfig: {
    styleSchema: [
      // {
      //   fieldKey: 'range',
      //   type: 'boolean',
      //   title: '是否为范围选择器',
      //   default: false,
      //   ui: { type: 'switch' },
      // },
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
        fieldKey: 'allowClear',
        type: 'boolean',
        title: '是否允许清除',
        default: true,
        ui: { type: 'switch' },
      },
      {
        fieldKey: 'showNumber',
        type: 'boolean',
        title: '是否展示右侧的数字输入组件',
        default: false,
        ui: { type: 'switch' },
      },
      {
        fieldKey: 'vertical',
        type: 'boolean',
        title: '是否垂直展示',
        default: false,
        ui: { type: 'switch' },
      },
      {
        fieldKey: 'min',
        type: 'number',
        title: '最小值',
        default: 0,
        ui: { type: 'number' },
      },
      {
        fieldKey: 'max',
        type: 'number',
        title: '最大值',
        default: 100,
        ui: { type: 'number' },
      },
      {
        fieldKey: 'step',
        type: 'number',
        title: '步距',
        default: 1,
        ui: { type: 'number' },
      },
      /* TODO:
    {
      fieldKey: 'marks',
      type: 'array',
      title: '刻度标记',
      default: [],
      ui: {
        type: 'array',
        mode: 'add'
      },
      items: {
        type: 'object',
        title: '',
        ui: {
          type: 'object'
        },
        schema: [
          {
            title: '标记值',
            type: 'string',
            fieldKey: 'label',
            ui: {
              type: 'text',
              allowClear: true,
              placeholder: '1'
            }
          },
          {
            title: '标记',
            type: 'string',
            fieldKey: 'value',
            ui: {
              type: 'text',
              placeholder: '最小值',
              allowClear: true,
            }
          }
        ],
       }
    },*/
      {
        fieldKey: 'dots',
        type: 'boolean',
        title: '是否只能拖拽到刻度上',
        default: false,
        ui: { type: 'switch' },
      },
      {
        fieldKey: 'default',
        type: 'number',
        title: '默认值',
        ui: {
          type: 'number',
          vcontrol: 'return !props.formData.ui.range',
        },
      },
      {
        fieldKey: 'rangeDefaultValue',
        type: 'array',
        title: '范围型滑动条默认值',
        default: [],
        ui: {
          type: 'array',
          vcontrol: 'return props.formData.ui.range',
        },
        items: {
          type: 'object',
          title: '',
          ui: { type: 'object', showTitle: false },
          minItems: 1,
          maxItems: 1,
          schema: [
            {
              type: 'number',
              fieldKey: 'minNum',
              title: '最小值',
              ui: { type: 'number' },
            },
            {
              type: 'number',
              fieldKey: 'maxNum',
              title: '最大值',
              ui: { type: 'number' },
            },
          ],
        },
      },
    ],
  },
}

export default config
