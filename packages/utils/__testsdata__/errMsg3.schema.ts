export const unitedSchema = {
  validateTime: 'submit',
  requiredMode: 'default',
  type: 'object',
  theme: 'antd',
  ui: {
    mode: 'edit',
  },
  schema: [
    {
      title: '名字',
      type: 'string',
      minLength: 1,
      errMsg: {
        _: '1',
      },
      ui: {
        type: 'text',
        placeholder: '请输入name，当name1有值时，该表单隐藏',
        description: {
          type: 'icon',
          title: 'hover触发提示',
          trigger: 'hover',
        },
      },
      requiredMsg: true,
      fieldKey: 'name',
    },
  ],
}

export const parsedSchema = {
  dataSchema: {
    errorMessage: {
      required: {
        name: true,
      },
    },
    properties: {
      name: {
        errorMessage: {
          _: '1',
        },
        minLength: 1,
        title: '名字',
        type: 'string',
      },
    },
    required: ['name'],
    type: 'object',
    validateTime: 'submit',
    requiredMode: 'default',
  },
  typePath: {
    name: {
      fatherKey: '',
      type: 'string',
      unitedSchemaKey: 'schema.0',
    },
  },
  uiSchema: {
    mode: 'edit',
    order: ['name'],
    properties: {
      name: {
        description: {
          title: 'hover触发提示',
          trigger: 'hover',
          type: 'icon',
        },
        placeholder: '请输入name，当name1有值时，该表单隐藏',
        type: 'text',
      },
    },
    theme: 'antd',
  },
  customProps: [],
}
