export const unitedSchema = {
  theme: 'antd',
  validateTime: 'submit',
  requiredMode: 'default',
  type: 'object',
  ui: {
    mode: 'edit',
    '$:type': 'drip',
  },
  schema: [
    {
      fieldKey: 'name',
      title: '名字',
      type: 'string',
      requiredMsg: '该项必填',
      ui: {
        type: 'text',
        placeholder: '请输入name，当name1有值时，该表单隐藏',
        description: {
          type: 'icon',
          title: 'hover触发提示',
          trigger: 'hover',
        },
      },
    },
    {
      fieldKey: 'name',
      title: '名字',
      type: 'string',
      requiredMsg: '该项必填',
      ui: {
        type: 'text',
        placeholder: '请输入name，当name1有值时，该表单隐藏',
        description: {
          type: 'icon',
          title: 'hover触发提示',
          trigger: 'hover',
        },
      },
    },
  ],
}

export const parsedSchema = {
  dataSchema: {
    validateTime: 'submit',
    requiredMode: 'default',
    type: 'object',
    properties: {
      name: {
        title: '名字',
        type: 'string',
      },
    },
    required: ['name'],
    errorMessage: {
      required: {
        name: '该项必填',
      },
    },
  },
  uiSchema: {
    theme: 'antd',
    mode: 'edit',
    order: ['name'],
    '$:type': 'drip',
    properties: {
      name: {
        type: 'text',
        placeholder: '请输入name，当name1有值时，该表单隐藏',
        description: {
          type: 'icon',
          title: 'hover触发提示',
          trigger: 'hover',
        },
      },
    },
  },
  typePath: {
    name: {
      fatherKey: '',
      type: 'string',
      unitedSchemaKey: 'schema.1',
    },
  },
  customProps: [],
}
