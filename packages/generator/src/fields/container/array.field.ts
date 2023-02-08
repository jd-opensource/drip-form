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
      title: {
        verticalAlign: 'top',
      },
      type: 'array',
      mode: 'add',
      addTitle: '添加一行数据',
      hasConfirm: false,
      confirm: {
        confirmTitle: '确定删除这一项？',
        okText: '确定',
        cancelText: '取消',
      },
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
        fieldKey: 'canDrag',
        type: 'boolean',
        title: '支持拖拽排序',
        default: false,
        ui: {
          type: 'switch',
          vcontrol: 'return props.formData.ui.mode==="add"',
        },
      },
      {
        fieldKey: 'showHeader',
        type: 'boolean',
        title: '是否展示header',
        default: true,
        ui: {
          type: 'switch',
          vcontrol: 'return props.formData.ui.mode==="fixed"',
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
        fieldKey: 'maxAddCount',
        type: 'number',
        title: '最大添加行数',
        ui: {
          type: 'number',
          vcontrol: 'return props.formData.ui.mode == "add"',
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
          '$:dripStyle': true,
          ghost: true,
          containerStyle: {
            padding: 0,
            marginBottom: 20,
          },
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
      {
        type: 'boolean',
        title: '删除二次确认',
        ui: {
          type: 'switch',
        },
        fieldKey: 'hasConfirm',
      },
      {
        type: 'string',
        title: '删除按钮',
        default: 'hover',
        ui: {
          type: 'radio',
          theme: 'antd',
          options: [
            {
              label: '一直展示',
              value: 'always',
            },
            {
              label: '鼠标hover展示',
              value: 'hover',
            },
          ],
        },
        fieldKey: 'showDeleteIcon',
      },
      {
        type: 'object',
        title: '二次确认配置',
        ui: {
          type: 'object',
          mode: 'collapse',
          '$:dripStyle': true,
          ghost: true,
          containerStyle: {
            padding: 0,
            marginBottom: 5,
          },
          vcontrol: 'return props.formData.ui.hasConfirm',
        },
        schema: [
          {
            type: 'string',
            title: '删除提示文案',
            ui: {
              type: 'text',
            },
            fieldKey: 'confirmTitle',
          },
          {
            type: 'string',
            title: '确认按钮文案',
            ui: {
              type: 'text',
            },
            fieldKey: 'okText',
          },
          {
            type: 'string',
            title: '取消确认文案',
            ui: {
              type: 'text',
            },
            fieldKey: 'cancelText',
          },
        ],
        fieldKey: 'confirm',
      },
    ],
  },
}

export default config
