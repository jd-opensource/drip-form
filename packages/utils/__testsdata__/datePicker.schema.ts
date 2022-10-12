export const unitedSchema = {
  theme: 'antd',
  requiredMode: 'empty',
  validateTime: 'submit',
  type: 'object',
  '$:customSchema': '位于顶层的自定义属性',
  ui: {
    mode: 'edit',
    '$:customUi': '位于ui顶层的自定义属性',
  },
  schema: [
    {
      type: 'array',
      title: '时间选择框',
      '$:customData': '666',
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
        '$:customUi': 'xxx',
      },
      fieldKey: 'hahaha',
    },
  ],
}

export const parsedSchema = {
  dataSchema: {
    properties: {
      hahaha: {
        '$:customData': '666',
        items: [
          {
            format: 'time',
            type: 'string',
          },
          {
            format: 'time',
            type: 'string',
          },
        ],
        title: '时间选择框',
        type: 'array',
      },
    },
    type: 'object',
    '$:customSchema': '位于顶层的自定义属性',
    validateTime: 'submit',
    requiredMode: 'empty',
  },
  uiSchema: {
    mode: 'edit',
    order: ['hahaha'],
    '$:customUi': '位于ui顶层的自定义属性',
    properties: {
      hahaha: {
        type: 'timePicker',
        '$:customUi': 'xxx',
      },
    },
    theme: 'antd',
  },
  typePath: {
    hahaha: {
      fatherKey: '',
      title: '时间选择框',
      type: 'array',
      unitedSchemaKey: 'schema.0',
    },
    'hahaha.0': {
      fatherKey: 'hahaha',
      title: '',
      type: 'string',
      unitedSchemaKey: 'schema.0.items.0',
    },
    'hahaha.1': {
      fatherKey: 'hahaha',
      title: '',
      type: 'string',
      unitedSchemaKey: 'schema.0.items.1',
    },
  },
  customProps: ['$:customSchema', '$:customData'],
}
