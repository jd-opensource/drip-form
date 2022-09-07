const config = {
  icon: 'iconfont icon-clock',
  title: '穿梭框',
  unitedSchema: {
    type: 'array',
    title: '穿梭框',
    ui: {
      type: 'transfer',
      theme: 'antd',
      titles: ['Source', 'Target'],
    },
  },
  propertyConfig: {
    styleSchema: [
      {
        fieldKey: 'disabled',
        type: 'boolean',
        title: '是否禁用',
        default: false,
        ui: { type: 'switch' },
      },
      {
        fieldKey: 'titles',
        type: 'array',
        title: '标题集合',
        ui: {
          type: 'array',
          mode: 'tuple',
        },
        items: [
          {
            type: 'string',
            title: '左侧标题',
            ui: {
              type: 'text',
            },
          },
          {
            type: 'string',
            title: '右侧标题',
            ui: {
              type: 'text',
            },
          },
        ],
      },
      {
        fieldKey: 'dataSource',
        type: 'array',
        title: '选项',
        default: [],
        ui: {
          type: 'array',
          style: {
            marginBottom: '20px',
          },
        },
        items: {
          type: 'object',
          title: '',
          ui: { type: 'object', showTitle: false },
          schema: [
            {
              type: 'string',
              fieldKey: 'title',
              title: '选项名',
              ui: {
                type: 'text',
                placeholder: '选项',
              },
            },
            {
              type: 'string',
              fieldKey: 'key',
              title: '选项值',
              ui: {
                type: 'text',
                placeholder: '值',
              },
            },
          ],
        },
      },
    ],
  },
}

export default config
