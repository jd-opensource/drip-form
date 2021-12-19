/*
 * array 校验配置
 * @Author: jiangxiaowei
 * @Date: 2021-08-16 15:00:11
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: 2021-08-19 11:23:05
 */
// 数组通用dataSchema关键字
const common = {
  maxItems: {
    type: 'number',
    title: '最多多少项（包含边界）',
    fieldKey: 'maxItems',
    ui: {
      type: 'number',
    },
  },
  minItems: {
    type: 'number',
    title: '最少多少项（包含边界）',
    fieldKey: 'minItems',
    ui: {
      type: 'number',
    },
  },
  uniqueItems: {
    type: 'boolean',
    title: '每一项唯一',
    fieldKey: 'uniqueItems',
    default: false,
    ui: {
      type: 'switch',
      options: [
        {
          value: true,
          label: '唯一',
        },
        {
          value: false,
          label: '不唯一',
        },
      ],
    },
  },
  /* TODO @jiangxiaowei 交互待确定
  additionalItems: {},
  */
  /* TODO @jiangxiaowei 交互待确定
  unevaluatedItems:{
  }, */
  // contains: {
  //   type: 'object',
  //   title: '数组中最少包含指定类型多少项',
  //   fieldKey: 'contains',
  //   ui: {
  //     type: 'object',
  //   },
  //   schema: [
  //     {
  //       type:'string',
  //       fieldKey:'contains',
  //       title:'指定jsonSchema',
  //       ui:{
  //         type:'text',
  //         multiple:true,
  //       }
  //     },
  //     {
  //       type: 'number',
  //       fieldKey: 'maxContains',
  //       title: '最多包含多少个',
  //       ui: {
  //         type: 'number',
  //       },
  //     },
  //     {
  //       type: 'number',
  //       fieldKey: 'minContains',
  //       title: '最少包含多少个',
  //       ui: {
  //         type: 'number',
  //       },
  //     },
  //   ],
  // },
}

// 数组业务校验关键字
const business = {}

export default { common, business }
