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
      title: "列表添加 ['a', 'b', ...]",
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
          theme: 'custom',
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
        { type: 'string', title: 'ERP', default: null, ui: { type: 'input' } },
        { type: 'number', title: '年龄', ui: { type: 'number' } },
      ],
    },
    {
      type: 'object',
      fieldKey: 'objectItem',
      title: "普通对象 { erp: 'drip', age: 1,c:{a:1} }",
      ui: {
        type: 'object',
      },
      schema: [
        {
          type: 'string',
          fieldKey: 'erp',
          title: 'ERP',
          ui: { type: 'text' },
        },
        {
          type: 'number',
          fieldKey: 'age',
          title: '年龄',
          ui: { type: 'number' },
        },
        {
          type: 'object',
          fieldKey: 'c',
          title: '二级嵌套{a:1}',
          min: 1,
          ui: { type: 'object' },
          schema: [
            {
              type: 'string',
              fieldKey: 'a',
              title: '二级嵌套a',
              ui: {
                type: 'text',
              },
            },
          ],
        },
      ],
    },
    {
      type: 'array',
      fieldKey: 'nestArray',
      title: "嵌套数组 [{erp: 'drip', age: 1}, {erp: 'jmfe', age: 6}]",
      ui: {
        type: 'array',
      },
      items: {
        type: 'object',
        title: '',
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
            theme: 'custom',
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
        order: ['erp', 'age', 'c'],
        properties: {
          erp: {
            type: 'text',
          },
          age: {
            type: 'number',
          },
          c: {
            type: 'object',
            order: ['a'],
            properties: {
              a: {
                type: 'text',
              },
            },
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
    type: 'object',
    requiredMode: 'default',
    properties: {
      addSameList: {
        type: 'array',
        title: "列表添加 ['a', 'b', ...]",
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
            default: null,
          },
          {
            type: 'number',
            title: '年龄',
          },
        ],
      },
      objectItem: {
        type: 'object',
        title: "普通对象 { erp: 'drip', age: 1,c:{a:1} }",
        properties: {
          erp: {
            type: 'string',
            title: 'ERP',
          },
          age: {
            type: 'number',
            title: '年龄',
          },
          c: {
            type: 'object',
            title: '二级嵌套{a:1}',
            min: 1,
            properties: {
              a: {
                type: 'string',
                title: '二级嵌套a',
              },
            },
          },
        },
      },
      nestArray: {
        type: 'array',
        title: "嵌套数组 [{erp: 'drip', age: 1}, {erp: 'jmfe', age: 6}]",
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
      title: "列表添加 ['a', 'b', ...]",
      type: 'array',
      unitedSchemaKey: 'schema.0',
    },
    'addSameList.$container': {
      fatherKey: 'addSameList',
      title: '姓名',
      type: 'string',
      unitedSchemaKey: 'schema.0.items',
    },
    tupleItem: {
      title: "元组 ['drip', 18]",
      fatherKey: '',
      type: 'array',
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
      title: "普通对象 { erp: 'drip', age: 1,c:{a:1} }",
      type: 'object',
      unitedSchemaKey: 'schema.2',
    },
    'objectItem.erp': {
      fatherKey: 'objectItem',
      title: 'ERP',
      type: 'string',
      unitedSchemaKey: 'schema.2.schema.0',
    },
    'objectItem.age': {
      fatherKey: 'objectItem',
      type: 'number',
      title: '年龄',
      unitedSchemaKey: 'schema.2.schema.1',
    },
    'objectItem.c': {
      fatherKey: 'objectItem',
      title: '二级嵌套{a:1}',
      type: 'object',
      unitedSchemaKey: 'schema.2.schema.2',
    },
    'objectItem.c.a': {
      title: '二级嵌套a',
      fatherKey: 'objectItem.c',
      type: 'string',
      unitedSchemaKey: 'schema.2.schema.2.schema.0',
    },
    nestArray: {
      fatherKey: '',
      title: "嵌套数组 [{erp: 'drip', age: 1}, {erp: 'jmfe', age: 6}]",
      type: 'array',
      unitedSchemaKey: 'schema.3',
    },
    'nestArray.$container': {
      fatherKey: 'nestArray',
      title: '',
      type: 'object',
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
      title: '年龄',
      type: 'number',
      unitedSchemaKey: 'schema.3.items.schema.1',
    },
  },
  customProps: [],
}
