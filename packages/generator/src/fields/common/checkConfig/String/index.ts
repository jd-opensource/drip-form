/*
 * 字符相关校验关键字的配置schema
 * @Author: jiangxiaowei
 * @Date: 2021-08-16 11:31:04
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: 2022-03-11 11:33:44
 */
// dataSchema2019-09支持的字符串校验关键字
const stringJsonSchema = {
  // 大于等于
  minLength: {
    type: 'number',
    fieldKey: 'minLength',
    title: '最小长度',
    ui: {
      type: 'number',
    },
  },
  // 小于等于
  maxLength: {
    type: 'number',
    fieldKey: 'maxLength',
    title: '最大长度',
    ui: {
      type: 'number',
    },
  },
  pattern: {
    type: 'string',
    title: '正则表达式不带标志',
    fieldKey: 'pattern',
    ui: {
      type: 'text',
    },
  },
  format: {
    type: 'string',
    fieldKey: 'format',
    title: '常见正则',
    ui: {
      type: 'select',
      style: {
        width: '100%',
      },
      allowClear: true,
      // TODO 后续接入埋点。统计用户使用次数，options异步拉取
      options: [
        // 水滴官方format插件 color关键字
        {
          value: 'color',
          label: 'color',
        },
        // 水滴官方format插件 https关键字
        {
          value: 'https',
          label: 'https',
        },
        // 水滴官方format插件 jsonObject关键字
        {
          value: 'jsonObject',
          label: 'jsonObject',
        },
        {
          value: 'date',
          label: 'date',
        },
        {
          value: 'time',
          label: 'time',
        },
        //  // 水滴官方format插件 date-time 关键字
        {
          value: 'date-tiem',
          label: 'date-time',
        },
        {
          value: 'duration',
          label: 'duration',
        },
        {
          value: 'uri',
          label: 'uri',
        },
        {
          value: 'uri-reference',
          label: 'uri-reference',
        },
        {
          value: 'uri-template',
          label: 'uri-template',
        },
        {
          value: 'url',
          label: 'url',
        },
        {
          value: 'email',
          label: 'email',
        },
        {
          value: 'hostname',
          label: 'hostname',
        },
        {
          value: 'ipv4',
          label: 'ipv4',
        },
        {
          value: 'ipv6',
          label: 'ipv6',
        },
        {
          value: 'regex',
          label: 'regex',
        },
        {
          value: 'uuid',
          label: 'uuid',
        },
        {
          value: 'json-pointer',
          label: 'json-pointer',
        },
        {
          value: 'relative-json-pointer',
          label: 'relative-json-pointer',
        },
        {
          value: 'byte',
          label: 'byte',
        },
        {
          value: 'int32',
          label: 'int32',
        },
        {
          value: 'int64',
          label: 'int64',
        },
        {
          value: 'float',
          label: 'float',
        },
        {
          value: 'double',
          label: 'double',
        },
        {
          value: 'password',
          label: 'password',
        },
        {
          value: 'binary',
          label: 'binary',
        },
      ],
    },
  },
}
// ajv-keywords支持的字符校验关键字
const ajvKeywordsSchema = {
  regexp: {
    type: 'string',
    fieldKey: 'regexp',
    title: '正则表达带标志·',
    ui: {
      description: {
        type: 'icon',
        trigger: 'hover',
        title: '可以使用g、i、u等正则标志',
      },
      type: 'text',
    },
  },
  transform: {
    type: 'array',
    fieldKey: 'transform',
    title: '格式化',
    ui: {
      type: 'select',
      style: {
        width: '100%',
      },
      mode: 'multiple',
      options: [
        {
          value: 'trim',
          label: '去除首尾空格',
        },
        {
          value: 'trimStart',
          label: '去除开始的空格',
        },
        {
          value: 'trimEnd',
          label: '去除尾部的空格',
        },
        {
          value: 'toLowerCase',
          label: '转换为小写',
        },
        {
          value: 'trimUpperCase',
          label: '转换为大写',
        },
        // TODO 后续联动添加enum
        // {
        //   value: 'toEnumCase',
        //   label:'自定义格式转换'
        // },
      ],
    },
  },
}

// TODO 后续插件必须写配置交互文件用来在generator中展示。一期写死schema，二期从@jdfed/drip-form-plugin-keywords引入
const dripFormPluginKeywords = {
  rangeDelimiter: {
    type: 'object',
    fieldKey: 'rangeDelimiter',
    title: '分隔符范围',
    ui: {
      type: 'object',
      mode: 'collapse',
      '$:dripStyle': true,
      ghost: true,
      containerStyle: {
        padding: 0,
        marginBottom: 5,
      },
      description: {
        type: 'icon',
        title: '使用delimiter指定的字符分隔，最少多少，最多多少',
      },
    },
    schema: [
      {
        type: 'string',
        fieldKey: 'delimiter',
        title: '自定义分隔符',
        ui: {
          type: 'text',
        },
      },
      {
        type: 'number',
        fieldKey: 'max',
        title: '最多',
        ui: {
          type: 'number',
        },
      },
      {
        type: 'number',
        fieldKey: 'min',
        title: '最少',
        ui: {
          type: 'number',
        },
      },
    ],
  },
  gbkLength: {
    type: 'object',
    fieldKey: 'gbkLength',
    title: '中英文长度',
    ui: {
      type: 'object',
      mode: 'collapse',
      '$:dripStyle': true,
      ghost: true,
      containerStyle: {
        padding: 0,
        marginBottom: 5,
      },
      description: {
        type: 'icon',
        title: '中文2个字符，英文1个字符',
      },
    },
    schema: [
      {
        type: 'number',
        fieldKey: 'max',
        title: '最多',
        ui: {
          type: 'number',
        },
      },
      {
        type: 'number',
        fieldKey: 'min',
        title: '最少',
        ui: {
          type: 'number',
        },
      },
    ],
  },
}

export default {
  common: {
    ...stringJsonSchema,
    ...ajvKeywordsSchema,
  },
  business: dripFormPluginKeywords,
}
