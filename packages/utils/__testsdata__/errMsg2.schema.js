export const unitedSchema = {
  validateTime: 'submit',
  type: 'object',
  theme: 'antd',
  ui: {
    mode: 'edit',
  },
  schema: [
    {
      title: '名字',
      type: 'string',
      minLength: 2,
      maxLength: 3,
      ui: {
        type: 'text',
        placeholder: '请输入name，当name1有值时，该表单隐藏',
        description: {
          type: 'icon',
          title: 'hover触发提示',
          trigger: 'hover',
        },
      },
      requiredMsg: '必填',
      fieldKey: 'name',
      errMsg: { _: '兜底', minLength: '2', $required: '1', maxLength: '3' },
    },
  ],
}

export const parsedSchema = {
  dataSchema: {
    validateTime: 'submit',
    type: 'object',
    properties: {
      name: {
        title: '名字',
        type: 'string',
        minLength: 2,
        errorMessage: {
          _: '兜底',
          minLength: '2',
          $required: '1',
          maxLength: '3',
        },
        maxLength: 3,
      },
    },
    errorMessage: { required: { name: '必填' } },
    required: ['name'],
  },
  uiSchema: {
    mode: 'edit',
    theme: 'antd',
    order: ['name'],
    properties: {
      name: {
        type: 'text',
        placeholder: '请输入name，当name1有值时，该表单隐藏',
        description: { type: 'icon', title: 'hover触发提示', trigger: 'hover' },
      },
    },
  },
  typePath: {
    name: {
      fatherKey: '',
      type: 'string',
      unitedSchemaKey: 'schema.0',
    },
  },
}
