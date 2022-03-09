export const unitedSchema = {
  validateTime: 'change',
  requiredMode: 'default',
  type: 'object',
  theme: 'antd',
  schema: [
    {
      type: 'array',
      title: '数组容器',
      ui: {
        type: 'array',
        mode: 'add',
        addTitle: '添加一行数据',
      },
      minItems: 1,
      errMsg: {
        minItems: '最小1',
      },
      items: {
        type: 'string',
        title: '输入框',
        minLength: 2,
        errMsg: {
          minLength: '2',
        },
        ui: {
          type: 'text',
          style: {
            width: '100%',
          },
        },
      },
      fieldKey: 'array_g6NF65',
    },
  ],
}

export const parsedSchema = {
  dataSchema: {
    validateTime: 'change',
    requiredMode: 'default',
    type: 'object',
    properties: {
      array_g6NF65: {
        type: 'array',
        title: '数组容器',
        minItems: 1,
        errorMessage: {
          minItems: '最小1',
        },
        items: {
          type: 'string',
          title: '输入框',
          minLength: 2,
          errorMessage: {
            minLength: '2',
          },
        },
      },
    },
  },
  uiSchema: {
    theme: 'antd',
    order: ['array_g6NF65'],
    properties: {
      array_g6NF65: {
        type: 'array',
        mode: 'add',
        addTitle: '添加一行数据',
        order: ['$container'],
        properties: {
          $container: {
            type: 'text',
            style: {
              width: '100%',
            },
          },
        },
      },
    },
  },
  typePath: {
    array_g6NF65: {
      fatherKey: '',
      type: 'array',
      unitedSchemaKey: 'schema.0',
    },
    'array_g6NF65.$container': {
      fatherKey: 'array_g6NF65',
      type: 'string',
      unitedSchemaKey: 'schema.0.items',
    },
  },
}
