export const unitedSchema = {
  theme: 'antd',
  validateTime: 'submit',
  requiredMode: 'default',
  type: 'object',
  footer: {},
  formMode: 'edit',
  containerStyle: {},
  'ui:a1': 1,
  ui: {
    mode: 'edit',
    a1: 2,
    b: 2,
    '$:type': 'drip',
  },
  'ui:a': 1,
  'ui:b': 1,
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
      title: '下拉输入',
      type: 'object',
      fieldKey: 'babelRadio',
      ui: {
        type: 'selectText',
        placeholder: '请选择',
        allowClear: true,
        multiple: true,
        requestCache: true,
        options: [
          {
            label: '北京',
            value: '0',
          },
          {
            label: '上海',
            value: '1',
          },
          {
            label: '成都',
            value: '2',
          },
          {
            label: '武汉',
            value: '3',
          },
        ],
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
      babelRadio: {
        title: '下拉输入',
        type: 'object',
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
    footer: {},
    formMode: 'edit',
    containerStyle: {},
    mode: 'edit',
    a: 1,
    a1: 2,
    b: 2,
    order: ['name', 'babelRadio'],
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
      babelRadio: {
        type: 'selectText',
        placeholder: '请选择',
        allowClear: true,
        multiple: true,
        requestCache: true,
        options: [
          {
            label: '北京',
            value: '0',
          },
          {
            label: '上海',
            value: '1',
          },
          {
            label: '成都',
            value: '2',
          },
          {
            label: '武汉',
            value: '3',
          },
        ],
      },
    },
  },
  typePath: {
    babelRadio: {
      title: '下拉输入',
      fatherKey: '',
      type: 'object',
      unitedSchemaKey: 'schema.1',
    },
    name: {
      title: '名字',
      fatherKey: '',
      type: 'string',
      unitedSchemaKey: 'schema.0',
    },
  },
  customProps: [],
}
