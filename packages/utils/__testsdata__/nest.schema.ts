/**
 * 测试数据
 */
export const unitedSchema = {
  theme: 'antd',
  validateTime: 'change',
  requiredMode: 'default',
  ui: {
    mode: 'edit',
    title: {
      placement: 'left',
    },
  },
  type: 'object',
  schema: [
    {
      type: 'array',
      fieldKey: 'addSameList',
      title: "允许添加的列表 ['a', 'b', ...]",
      ui: {
        type: 'array',
      },
      items: {
        type: 'string',
        title: '姓名',
        minLength: 2,
        maxLength: 4,
        ui: {
          type: 'input',
          placeholder: '请输入2-4个字的姓名',
        },
      },
    },
    {
      type: 'array',
      fieldKey: 'tupleItem',
      title: "元组 ['drip', 18]",
      ui: {
        type: 'array',
      },
      items: [
        { type: 'string', title: 'ERP', ui: { type: 'input' } },
        { type: 'number', title: '年龄', ui: { type: 'number' } },
      ],
    },
    {
      type: 'object',
      fieldKey: 'objectItem',
      title: "普通对象 { erp: 'drip', age: 1 }",
      ui: {
        type: 'object',
      },
      schema: [
        {
          type: 'string',
          fieldKey: 'erp',
          title: 'ERP',
          ui: { type: 'input' },
        },
        {
          type: 'number',
          fieldKey: 'age',
          title: '年龄',
          ui: { type: 'number' },
        },
      ],
    },
    {
      type: 'array',
      fieldKey: 'nestArray',
      title:
        "允许添加的对象数组 [{erp: 'drip', age: 1}, {erp: 'jmfe', age: 6}, ...]",
      ui: { type: 'array' },
      items: {
        type: 'object',
        title: '',
        ui: { type: 'object' },
        schema: [
          {
            type: 'string',
            fieldKey: 'erp',
            title: 'ERP',
            ui: { type: 'input' },
          },
          {
            type: 'number',
            fieldKey: 'age',
            title: '年龄',
            ui: { type: 'number' },
            maximum: 100,
            minimum: 0,
          },
        ],
      },
    },
  ],
}

/**
 * 验证数据
 */
export const parsedSchema = {
  uiSchema: {
    mode: 'edit',
    theme: 'antd',
    title: {
      placement: 'left',
    },
    order: ['addSameList', 'tupleItem', 'objectItem', 'nestArray'],
    properties: {
      addSameList: {
        type: 'array',
        order: ['$container'],
        properties: {
          $container: {
            type: 'input',
            placeholder: '请输入2-4个字的姓名',
          },
        },
      },
      tupleItem: {
        type: 'array',
        order: ['0', '1'],
        properties: {
          0: {
            type: 'input',
          },
          1: {
            type: 'number',
          },
        },
      },
      objectItem: {
        type: 'object',
        order: ['erp', 'age'],
        properties: {
          erp: {
            type: 'input',
          },
          age: {
            type: 'number',
          },
        },
      },
      nestArray: {
        type: 'array',
        order: ['$container'],
        properties: {
          $container: {
            type: 'object',
            order: ['erp', 'age'],
            properties: {
              erp: {
                type: 'input',
              },
              age: {
                type: 'number',
              },
            },
          },
        },
      },
    },
  },
  dataSchema: {
    validateTime: 'change',
    requiredMode: 'default',
    type: 'object',
    properties: {
      addSameList: {
        type: 'array',
        title: "允许添加的列表 ['a', 'b', ...]",
        items: {
          type: 'string',
          title: '姓名',
          minLength: 2,
          maxLength: 4,
        },
      },
      tupleItem: {
        type: 'array',
        title: "元组 ['drip', 18]",
        items: [
          {
            type: 'string',
            title: 'ERP',
          },
          {
            type: 'number',
            title: '年龄',
          },
        ],
      },
      objectItem: {
        type: 'object',
        title: "普通对象 { erp: 'drip', age: 1 }",
        properties: {
          erp: {
            type: 'string',
            title: 'ERP',
          },
          age: {
            type: 'number',
            title: '年龄',
          },
        },
      },
      nestArray: {
        type: 'array',
        title:
          "允许添加的对象数组 [{erp: 'drip', age: 1}, {erp: 'jmfe', age: 6}, ...]",
        items: {
          type: 'object',
          title: '',
          properties: {
            erp: {
              type: 'string',
              title: 'ERP',
            },
            age: {
              type: 'number',
              title: '年龄',
              maximum: 100,
              minimum: 0,
            },
          },
        },
      },
    },
  },
  typePath: {
    addSameList: {
      fatherKey: '',
      title: "允许添加的列表 ['a', 'b', ...]",
      type: 'array',
      unitedSchemaKey: 'schema.0',
    },
    'addSameList.$container': {
      title: '姓名',
      fatherKey: 'addSameList',
      type: 'string',
      unitedSchemaKey: 'schema.0.items',
    },
    tupleItem: {
      fatherKey: '',
      type: 'array',
      title: "元组 ['drip', 18]",
      unitedSchemaKey: 'schema.1',
    },
    'tupleItem.0': {
      fatherKey: 'tupleItem',
      title: 'ERP',
      type: 'string',
      unitedSchemaKey: 'schema.1.items.0',
    },
    'tupleItem.1': {
      fatherKey: 'tupleItem',
      title: '年龄',
      type: 'number',
      unitedSchemaKey: 'schema.1.items.1',
    },
    objectItem: {
      fatherKey: '',
      type: 'object',
      title: "普通对象 { erp: 'drip', age: 1 }",
      unitedSchemaKey: 'schema.2',
    },
    'objectItem.erp': {
      fatherKey: 'objectItem',
      type: 'string',
      title: 'ERP',
      unitedSchemaKey: 'schema.2.schema.0',
    },
    'objectItem.age': {
      fatherKey: 'objectItem',
      title: '年龄',
      type: 'number',
      unitedSchemaKey: 'schema.2.schema.1',
    },
    nestArray: {
      fatherKey: '',
      title:
        "允许添加的对象数组 [{erp: 'drip', age: 1}, {erp: 'jmfe', age: 6}, ...]",
      type: 'array',
      unitedSchemaKey: 'schema.3',
    },
    'nestArray.$container': {
      fatherKey: 'nestArray',
      type: 'object',
      title: '',
      unitedSchemaKey: 'schema.3.items',
    },
    'nestArray.$container.erp': {
      fatherKey: 'nestArray.$container',
      type: 'string',
      title: 'ERP',
      unitedSchemaKey: 'schema.3.items.schema.0',
    },
    'nestArray.$container.age': {
      fatherKey: 'nestArray.$container',
      type: 'number',
      title: '年龄',
      unitedSchemaKey: 'schema.3.items.schema.1',
    },
  },
  customProps: [],
}
