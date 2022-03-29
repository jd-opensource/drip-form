/**
 * 全局样式配置
 */
const footerUiSchema = [
  {
    type: 'string',
    fieldKey: 'text',
    title: '按钮文案',
    ui: {
      type: 'text',
    },
  },
  {
    type: 'string',
    title: '按钮类型',
    fieldKey: 'type',
    ui: {
      type: 'select',
      options: [
        {
          value: 'primary',
          label: 'primary',
        },
        {
          value: 'ghost',
          label: 'ghost',
        },
        {
          value: 'dashed',
          label: 'dashed',
        },
        {
          value: 'link',
          label: 'link',
        },
        {
          value: 'text',
          label: 'text',
        },
        {
          value: 'default',
          label: 'default',
        },
      ],
    },
  },
  {
    type: 'string',
    title: '按钮形状',
    fieldKey: 'shape',
    ui: {
      type: 'select',
      options: [
        {
          value: 'round',
          label: '椭圆',
        },
        {
          value: 'circle',
          label: '圆形',
        },
        {
          value: 'squash',
          label: '长方形',
        },
      ],
    },
  },
  {
    type: 'string',
    title: '按钮大小',
    fieldKey: 'size',
    ui: {
      type: 'select',
      options: [
        {
          value: 'large',
          label: 'large',
        },
        {
          value: 'middle',
          label: 'middle',
        },
        {
          value: 'small',
          label: 'small',
        },
      ],
    },
  },
]

const unitedSchema = [
  {
    type: 'object',
    fieldKey: 'title',
    title: '全局标题',
    ui: {
      type: 'object',
      mode: 'collapse',
      '$:dripStyle': true,
      ghost: true,
      containerStyle: {
        padding: 0,
        marginBottom: 5,
      },
    },
    schema: [
      {
        fieldKey: 'width',
        type: 'number',
        title: '标题宽度',
        default: 82,
        ui: {
          type: 'number',
          style: { width: '50%' },
          placeholder: '请输入数字',
          allowClear: true,
        },
      },
      {
        fieldKey: 'requiredIcon',
        type: 'boolean',
        title: '是否展示*号',
        default: false,
        ui: {
          type: 'switch',
          description: {
            title: '需配置校验规则为必填时才生效',
            type: 'icon',
            trigger: 'hover',
          },
        },
      },
      {
        fieldKey: 'placement',
        type: 'object',
        title: '标题位置',
        default: 'left',
        ui: {
          type: 'select',
          style: { width: '50%' },
          options: [
            { label: '左侧', value: 'left' },
            { label: '上侧', value: 'top' },
            { label: '右侧', value: 'right' },
            { label: '下侧', value: 'bottom' },
          ],
        },
      },
      {
        fieldKey: 'textAlign',
        type: 'string',
        title: '标题水平对齐方式',
        default: 'left',
        ui: {
          type: 'select',
          style: { width: '50%' },
          options: [
            { label: '左侧', value: 'left' },
            { label: '居中', value: 'center' },
            { label: '右侧', value: 'right' },
          ],
        },
      },
      {
        fieldKey: 'verticalAlign',
        type: 'string',
        title: '标题垂直对齐方式',
        default: 'center',
        ui: {
          type: 'select',
          style: { width: '50%' },
          options: [
            { label: '上对齐', value: 'top' },
            { label: '居中对齐', value: 'center' },
            { label: '下对齐', value: 'bottom' },
          ],
        },
      },
      // {
      //   fieldKey: 'requiredIcon',
      //   type: 'boolean',
      //   title: '必填项是否展示*号',
      //   default: false,
      //   ui: {
      //     type: 'switch',
      //     disabled: false,
      //   },
      // },
      {
        fieldKey: 'margin',
        type: 'string',
        title: '标题外边距',
        ui: {
          type: 'text',
          disabled: false,
          placeholder: '形如0 30px 20px 0 | 0 30px',
        },
      },
      // {
      //   fieldKey: 'theme',
      //   type: 'string',
      //   title: '主题',
      //   requiredMsg: '必填',
      //   default: 'antd',
      //   ui: {
      //     type: 'select',
      //     options: [
      //       { label: 'antd', value: 'antd' },
      //       { label: 'babel-ui', value: 'babel-ui' },
      //       { label: 'antd', value: 'antd' },
      //     ],
      //   },
      // },
    ],
  },
  {
    type: 'object',
    fieldKey: 'containerStyle',
    title: '全局布局',
    ui: {
      mode: 'collapse',
      type: 'object',
      '$:dripStyle': true,
      ghost: true,
      containerStyle: {
        padding: 0,
        marginBottom: 5,
      },
    },
    schema: [
      {
        fieldKey: 'width',
        type: 'string',
        title: '组件宽度',
        default: 100,
        ui: {
          type: 'slider',
          style: { width: '90%' },
          showNumber: false,
          min: 33,
          max: 100,
          step: null,
          marks: {
            33: { label: '一行三个' },
            50: { label: '一行两个' },
            100: { label: '一行一个' },
          },
        },
      },
      {
        fieldKey: 'margin',
        type: 'string',
        title: '组件外边距',
        ui: {
          type: 'text',
          placeholder: '形如0 30px 20px 0 | 0 30px',
        },
      },
      {
        fieldKey: 'padding',
        type: 'string',
        title: '组件内边距',
        ui: {
          type: 'text',
          placeholder: '形如0 10px 0 10px | 0 10px',
        },
      },
    ],
  },
  {
    type: 'object',
    fieldKey: 'footer',
    title: '底部按钮',
    ui: {
      type: 'object',
      mode: 'collapse',
      '$:dripStyle': true,
      ghost: true,
      containerStyle: {
        padding: 0,
        marginBottom: 5,
      },
    },
    schema: [
      {
        fieldKey: 'showFooter',
        type: 'boolean',
        title: '展示底部按钮',
        default: false,
        ui: {
          type: 'switch',
          options: [
            {
              value: false,
              label: '不展示',
            },
            {
              value: true,
              label: '展示',
            },
          ],
        },
      },
      {
        fieldKey: 'justifyContent',
        title: '对齐方式',
        type: 'string',
        default: 'right',
        ui: {
          type: 'select',
          options: [
            { value: 'left', label: '左对齐' },
            { value: 'center', label: '居中' },
            { value: 'right', label: '右对齐' },
          ],
        },
      },
      {
        type: 'object',
        title: 'style配置',
        ui: {
          type: 'object',
          mode: 'normal',
          showTitle: false,
        },
        schema: [
          {
            type: 'string',
            title: '宽度',
            ui: {
              type: 'text',
              style: {
                width: '100%',
              },
            },
            fieldKey: 'width',
          },
        ],
        fieldKey: 'style',
      },
      {
        fieldKey: 'margin',
        title: '按钮间隔',
        default: 10,
        type: 'number',
        ui: {
          type: 'number',
        },
      },
      {
        fieldKey: 'onOk',
        type: 'object',
        title: '保存按钮',
        ui: {
          type: 'object',
          mode: 'collapse',
          '$:dripStyle': true,
          ghost: true,
          containerStyle: {
            padding: 0,
            marginBottom: 5,
          },
          vcontrol: 'return props.formData.footer.showFooter == true',
        },
        default: {
          text: '保存',
          type: 'primary',
          size: 'middle',
          shape: 'squash',
        },
        schema: footerUiSchema,
      },
      {
        fieldKey: 'onCancel',
        type: 'object',
        title: '重置按钮',
        ui: {
          type: 'object',
          mode: 'collapse',
          '$:dripStyle': true,
          ghost: true,
          containerStyle: {
            padding: 0,
            marginBottom: 5,
          },
          vcontrol: 'return props.formData.footer.showFooter == true',
        },
        default: {
          text: '重置',
          type: 'default',
          size: 'middle',
          shape: 'squash',
        },
        schema: footerUiSchema,
      },
    ],
  },
]

export default unitedSchema
