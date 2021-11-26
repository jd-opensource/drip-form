/**
 * 测试数据
 * @type {{schema: [{ui: {type: string}, fieldKey: string, type: string, title: string, items: {ui: {placeholder: string, type: string}, minLength: number, type: string, title: string, maxLength: number}}, {ui: {type: string}, fieldKey: string, type: string, title: string, items: [{default: null, ui: {type: string}, type: string, title: string}, {ui: {type: string}, type: string, title: string}]}, {schema: [{ui: {type: string}, fieldKey: string, type: string, title: string}, {ui: {type: string}, fieldKey: string, type: string, title: string}, {schema: [{ui: {type: string}, fieldKey: string, type: string, title: string}], min: number, fieldKey: string, type: string, title: string}], ui: {type: string}, fieldKey: string, type: string, title: string}, {ui: {type: string}, fieldKey: string, type: string, title: string, items: {schema: [{ui: {type: string}, fieldKey: string, type: string, title: string}, {ui: {type: string}, fieldKey: string, maximum: number, type: string, title: string, minimum: number}], ui: {type: string}, type: string, title: string}}], validateTime: string, theme: string, title: {placement: string}}}
 */
export const unitedSchema = {
  theme: 'antd',
  validateTime: 'change',
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
 * @type {{dataSchema: {validateTime: string, type: string, properties: {addSameList: {type: string, title: string, items: {minLength: number, type: string, title: string, maxLength: number}}, objectItem: {type: string, title: string, properties: {erp: {type: string, title: string}, c: {min: number, type: string, title: string, properties: {a: {type: string, title: string}}}, age: {type: string, title: string}}}, nestArray: {type: string, title: string, items: {type: string, title: string, properties: {erp: {type: string, title: string}, age: {maximum: number, type: string, title: string, minimum: number}}}}, tupleItem: {type: string, title: string, items: {'0': {default: null, type: string, title: string}, '1': {type: string, title: string}}}}}, uiSchema: {theme: string, title: {placement: string}, properties: {addSameList: {type: string, properties: {$container: {placeholder: string, type: string}}, order: string[]}, objectItem: {type: string, properties: {erp: {type: string}, c: {properties: {a: {type: string}}, order: string[]}, age: {type: string}}, order: string[]}, nestArray: {type: string, properties: {$container: {type: string, properties: {erp: {type: string}, age: {type: string}}, order: string[]}}, order: string[]}, tupleItem: {type: string, properties: {'0': {type: string}, '1': {type: string}}, order: number[]}}, order: string[]}}}
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
        order: [0, 1],
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
    addSameList: { fatherKey: '', type: 'array' },
    'addSameList.$container': { fatherKey: 'addSameList', type: 'string' },
    tupleItem: { fatherKey: '', type: 'array' },
    'tupleItem.0': { fatherKey: 'tupleItem', type: 'string' },
    'tupleItem.1': { fatherKey: 'tupleItem', type: 'number' },
    objectItem: { fatherKey: '', type: 'object' },
    'objectItem.erp': { fatherKey: 'objectItem', type: 'string' },
    'objectItem.age': { fatherKey: 'objectItem', type: 'number' },
    'objectItem.c': { fatherKey: 'objectItem', type: 'object' },
    'objectItem.c.a': { fatherKey: 'objectItem.c', type: 'string' },
    nestArray: { fatherKey: '', type: 'array' },
    'nestArray.$container': { fatherKey: 'nestArray', type: 'object' },
    'nestArray.$container.erp': {
      fatherKey: 'nestArray.$container',
      type: 'string',
    },
    'nestArray.$container.age': {
      fatherKey: 'nestArray.$container',
      type: 'number',
    },
  },
}
