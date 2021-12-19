/*
 * 对象关键字校验配置
 * @Author: jiangxiaowei
 * @Date: 2021-08-16 15:02:48
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: 2021-08-25 09:49:20
 */
// 对象通用dataSchema校验关键字
const common = {
  maxProperties: {
    type: 'number',
    title: '最多多少个属性（包含边界）',
    fieldKey: 'maxProperties',
    ui: {
      type: 'number',
    },
  },
  minProperties: {
    type: 'number',
    title: '最少多少个属性（包含边界）',
    fieldKey: 'minProperties',
    ui: {
      type: 'number',
    },
  },
  required: {
    type: 'array',
    fieldKey: 'required',
    title: '指定必填项（all）',
    ui: {
      style: {
        width: '100%',
      },
      type: 'select',
      mode: 'tags',
    },
  },
  // 交互待确定
  // patternProperties: {
  //   type: 'string',
  //   title: '属性正则匹配',
  //   fieldKey: 'patternProperties',
  //   transform: ['trim'],
  //   // TODO @jiangxiaowe 后续支持标志位
  //   format: 'regex',
  //   ui: {
  //     type: 'text',
  //   },
  // },
  /* TODO @jiangxiaowei 交互待确定
  propertyNames: {
  }, */
  additionalProperties: {
    type: 'boolean',
    title: '是否允许出现未定义字段',
    fieldKey: 'additionalProperties',
    // default: true,
    ui: {
      type: 'switch',
      options: [
        {
          value: true,
          label: '允许',
        },
        {
          value: false,
          label: '不允许',
        },
      ],
    },
  },
  // TODO @jiangxiaowei 交互待确认
  // discriminator: {
  // },
}
// 对象ajv-keywords校验关键字
const ajvKeywords = {
  allRequired: {
    type: 'boolean',
    fieldKey: 'allRequired',
    title: '所有属性均必填',
    default: false,
    ui: {
      type: 'switch',
      options: [
        {
          value: true,
          label: '开启',
        },
        {
          value: false,
          label: '关闭',
        },
      ],
    },
  },
  anyRequired: {
    type: 'array',
    fieldKey: 'anyRequired',
    title: '指定必填项（any）',
    ui: {
      description: {
        type: 'icon',
        title: '指定的必填项中，满足一个即可',
        trigger: 'hover',
      },
      style: {
        width: '100%',
      },
      type: 'select',
      mode: 'tags',
    },
  },
  oneRequired: {
    type: 'array',
    fieldKey: 'oneRequired',
    title: '指定必填项（only）',
    ui: {
      description: {
        type: 'icon',
        title: '指定的必填项中，只允许满足一个',
        trigger: 'hover',
      },
      style: {
        width: '100%',
      },
      type: 'select',
      mode: 'tags',
    },
  },
  patternRequired: {
    type: 'array',
    fieldKey: 'patternRequired',
    title: '指定必填项正则',
    format: 'regex',
    ui: {
      description: {
        type: 'icon',
        title: '每个正则表达式应至少匹配数据对象中的一个属性名称',
        trigger: 'hover',
      },
      style: {
        width: '100%',
      },
      type: 'select',
      mode: 'tags',
    },
  },
  prohibited: {
    type: 'array',
    fieldKey: 'prohibited',
    title: '禁止以下属性',
    ui: {
      description: {
        type: 'icon',
        title: '禁止列表中的任何属性出现在对象中',
        trigger: 'hover',
      },
      style: {
        width: '100%',
      },
      type: 'select',
      mode: 'tags',
    },
  },
  /* TODO @jiangxiaowei 交互待确认
  deepProperties:{} */
  /* TODO @jiangxiaowei 交互待确认
  deepRequired:{} */
}
// 对象业务校验关键字
const business = {}
export default { common: { ...common, ...ajvKeywords }, business }
