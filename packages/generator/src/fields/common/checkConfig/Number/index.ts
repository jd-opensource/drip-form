/*
 * 数字校验配置
 * @Author: jiangxiaowei
 * @Date: 2021-08-16 15:01:23
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: 2022-01-12 14:19:08
 */
// TODO 添加integer
const numberDataSchema = {
  maximum: {
    type: 'number',
    title: '最大（包含边界）',
    fieldKey: 'maximum',
    ui: {
      type: 'number',
    },
  },
  minimum: {
    type: 'number',
    fieldKey: 'minimum',
    title: '最小（包含边界）',
    ui: {
      type: 'number',
    },
  },
  exclusiveMaximum: {
    type: 'number',
    fieldKey: 'exclusiveMaximum',
    title: '最大（不包含边界）',
    ui: {
      type: 'number',
    },
  },
  exclusiveMinimum: {
    type: 'number',
    fieldKey: 'exclusiveMinimum',
    title: '最小（不包含边界）',
    ui: {
      type: 'number',
    },
  },
  multipleOf: {
    type: 'number',
    fieldKey: 'multipleOf',
    title: '倍数',
    ui: {
      type: 'number',
    },
  },
}

const ajvKeywordsSchema = {
  range: {
    type: 'array',
    title: '范围（包含边界）',
    fieldKey: 'range',
    ui: {
      type: 'array',
      mode: 'tuple',
    },
    maxItems: 2,
    minItems: 2,
    items: [
      {
        type: 'number',
        title: '大于等于',
        ui: {
          ContainerStyle: {
            width: '50%',
          },
          type: 'number',
        },
      },
      {
        type: 'number',
        title: '小于等于',
        ui: {
          ContainerStyle: {
            width: '50%',
          },
          type: 'number',
        },
      },
    ],
  },
  exclusiveRange: {
    type: 'array',
    title: '范围（不包含边界）',
    fieldKey: 'exclusiveRange',
    ui: {
      type: 'array',
      mode: 'tuple',
    },
    items: [
      {
        type: 'number',
        title: '大于',
        ui: {
          ContainerStyle: {
            width: '50%',
          },
          type: 'number',
        },
      },
      {
        type: 'number',
        title: '小于',
        ui: {
          ContainerStyle: {
            width: '50%',
          },
          type: 'number',
        },
      },
    ],
  },
}

export default {
  common: { ...numberDataSchema, ...ajvKeywordsSchema },
  business: {},
}
