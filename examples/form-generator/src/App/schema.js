export default {
  type: 'object',
  validateTime: 'change',
  ui: {},
  theme: 'antd',
  schema: [
    {
      type: 'string',
      title: '单选',
      default: '1',
      ui: {
        type: 'radio',
        theme: 'antd',
        options: [
          {
            label: '是',
            value: '1',
          },
          {
            label: '否',
            value: '0',
          },
        ],
      },
      fieldKey: 'a',
    },
    {
      type: 'string',
      title: '输入框',
      ui: {
        type: 'text',
        style: {
          width: '100%',
        },
        theme: 'antd',
      },
      fieldKey: 'b',
    },
    {
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
      schema: [
        {
          type: 'string',
          title: '对象.输入框',
          ui: {
            type: 'text',
            style: {
              width: '100%',
            },
            theme: 'antd',
          },
          fieldKey: 'c1',
        },
        {
          type: 'string',
          title: '颜色选择框',
          format: 'color',
          ui: {
            type: 'colorPicker',
            theme: 'antd',
          },
          fieldKey: 'c2',
        },
      ],
      fieldKey: 'c',
    },
    {
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
      items: {
        type: 'string',
        title: '数组.单选',
        default: '1',
        ui: {
          type: 'radio',
          theme: 'antd',
          options: [
            {
              label: '是',
              value: '1',
            },
            {
              label: '否',
              value: '0',
            },
          ],
        },
      },
      fieldKey: 'd',
    },
    {
      type: 'object',
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
      schema: [
        {
          type: 'string',
          title: '输入框',
          ui: {
            type: 'text',
            style: {
              width: '100%',
            },
            theme: 'antd',
          },
          fieldKey: 'text_zXl0Lc',
        },
      ],
      fieldKey: 'object_l_8rSp',
    },
    {
      type: 'array',
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
      items: {
        type: 'string',
        title: '输入框',
        ui: {
          type: 'text',
          style: {
            width: '100%',
          },
          theme: 'antd',
        },
      },
      fieldKey: 'array_hP4Zs4',
    },
    {
      type: 'boolean',
      title: '开关',
      ui: {
        type: 'switch',
        theme: 'antd',
      },
      fieldKey: 'switch_lgGNAJ',
    },
    {
      type: 'number',
      title: '数字输入框',
      ui: {
        type: 'number',
        theme: 'antd',
      },
      fieldKey: 'number_H9pJKX',
    },
    {
      type: ['string', 'array'],
      title: '上传组件',
      ui: {
        type: 'uploader',
        theme: 'antd',
        listType: 'picture',
        canDrag: false,
        exportToString: true,
        maxCount: 1,
      },
      fieldKey: 'uploader_6Bv24p',
    },
  ],
}
