/* eslint-disable quotes */
export const unitedSchema = {
  validateTime: 'change',
  theme: 'antd',
  type: 'object',
  ui: {
    containerStyle: {
      padding: '0 16px',
    },
  },
  schema: [
    {
      type: 'string',
      title: '展示模式',
      fieldKey: 'viewMode1',
      default: 'all',
      ui: {
        type: 'select',
        style: {
          width: '100%',
        },
        options: [
          {
            value: 'configured',
            label: '只展示已配置校验规则',
          },
          {
            value: 'all',
            label: '全部展示',
          },
        ],
      },
    },
    {
      type: 'object',
      title: '通用校验',
      fieldKey: 'common1',
      ui: {
        type: 'object',
        mode: 'collapse',
        '$:dripStyle': true,
        ghost: true,
        containerStyle: {
          marginBottom: 5,
          padding: 0,
        },
      },
      schema: [
        {
          type: 'boolean',
          title: '是否必填',
          fieldKey: 'required1',
          ui: {
            type: 'switch',
            vcontrol:
              'const {fieldKey,formData,get}=props;return formData.viewMode==="configured"?typeof get(fieldKey).data!==\'number\'? get(fieldKey).data:true:true',
          },
        },
        {
          type: 'number',
          fieldKey: 'minLength1',
          title: '最小长度',
          ui: {
            type: 'number',
            vcontrol:
              'const {fieldKey,formData,get}=props;return formData.viewMode==="configured"?typeof get(fieldKey).data!==\'number\'? get(fieldKey).data:true:true',
          },
        },
        {
          type: 'number',
          fieldKey: 'maxLength1',
          title: '最大长度',
          ui: {
            type: 'number',
            vcontrol:
              'const {fieldKey,formData,get}=props;return formData.viewMode==="configured"?typeof get(fieldKey).data!==\'number\'? get(fieldKey).data:true:true',
          },
        },
        {
          type: 'string',
          title: '正则表达式不带标志',
          fieldKey: 'pattern1',
          ui: {
            type: 'text',
            vcontrol:
              'const {fieldKey,formData,get}=props;return formData.viewMode==="configured"?typeof get(fieldKey).data!==\'number\'? get(fieldKey).data:true:true',
          },
        },
        {
          type: 'string',
          fieldKey: 'format1',
          title: '常见正则',
          ui: {
            type: 'select',
            style: {
              width: '100%',
            },
            allowClear: true,
            options: [
              {
                value: 'color',
                label: 'color',
              },
              {
                value: 'https',
                label: 'https',
              },
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
            vcontrol:
              'const {fieldKey,formData,get}=props;return formData.viewMode==="configured"?typeof get(fieldKey).data!==\'number\'? get(fieldKey).data:true:true',
          },
        },
        {
          type: 'string',
          fieldKey: 'regexp1',
          title: '正则表达带标志·',
          ui: {
            description: {
              type: 'icon',
              trigger: 'hover',
              title: '可以使用g、i、u等正则标志',
            },
            type: 'text',
            vcontrol:
              'const {fieldKey,formData,get}=props;return formData.viewMode==="configured"?typeof get(fieldKey).data!==\'number\'? get(fieldKey).data:true:true',
          },
        },
        {
          type: 'array',
          fieldKey: 'transform1',
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
            ],
            vcontrol:
              'const {fieldKey,formData,get}=props;return formData.viewMode==="configured"?typeof get(fieldKey).data!==\'number\'? get(fieldKey).data:true:true',
          },
        },
      ],
    },
    {
      type: 'object',
      title: '业务校验',
      fieldKey: 'business1',
      ui: {
        type: 'object',
        mode: 'collapse',
        '$:dripStyle': true,
        ghost: true,
        containerStyle: {
          padding: 0,
          marginBottom: 5,
        },
      },
      schema: [
        {
          type: 'object',
          fieldKey: 'rangeDelimiter1',
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
            vcontrol:
              'const {fieldKey,formData,get}=props;return formData.viewMode==="configured"?typeof get(fieldKey).data!==\'number\'? get(fieldKey).data:true:true',
          },
          schema: [
            {
              type: 'string',
              fieldKey: 'delimiter1',
              title: '自定义分隔符',
              ui: {
                type: 'text',
              },
            },
            {
              type: 'number',
              fieldKey: 'max1',
              title: '最多',
              ui: {
                type: 'number',
              },
            },
            {
              type: 'number',
              fieldKey: 'min1',
              title: '最少',
              ui: {
                type: 'number',
              },
            },
          ],
        },
        {
          type: 'object',
          fieldKey: 'gbkLength1',
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
            vcontrol:
              'const {fieldKey,formData,get}=props;return formData.viewMode==="configured"?typeof get(fieldKey).data!==\'number\'? get(fieldKey).data:true:true',
          },
          schema: [
            {
              type: 'number',
              fieldKey: 'max1',
              title: '最多',
              ui: {
                type: 'number',
              },
            },
            {
              type: 'number',
              fieldKey: 'min1',
              title: '最少',
              ui: {
                type: 'number',
              },
            },
          ],
        },
      ],
    },
    {
      type: 'object',
      title: '校验错误文案配置',
      fieldKey: 'errorMessage1',
      ui: {
        type: 'object',
        mode: 'collapse',
        '$:dripStyle': true,
        ghost: true,
        containerStyle: {
          padding: 0,
          marginBottom: 5,
        },
      },
      schema: [
        {
          type: 'string',
          title: '错误兜底文案',
          fieldKey: '_1',
          ui: {
            type: 'text',
            description: {
              type: 'icon',
              trigger: 'hover',
              title: '当关键字未配置错误文案时，发生错误会展示该文案',
            },
          },
        },
        {
          type: 'string',
          title: '是否必填',
          fieldKey: 'required1',
          ui: {
            type: 'text',
            vcontrol:
              "try {\n      if(typeof props.get('common.required').data!=='number'){\n        return !!props.get('common.required').data\n      }else{\n        return true\n      }\n    } catch (error) {\n      return false\n    }",
          },
        },
        {
          type: 'string',
          title: '最小长度',
          fieldKey: 'minLength1',
          ui: {
            type: 'text',
            vcontrol:
              "try {\n      if(typeof props.get('common.minLength').data!=='number'){\n        return !!props.get('common.minLength').data\n      }else{\n        return true\n      }\n    } catch (error) {\n      return false\n    }",
          },
        },
        {
          type: 'string',
          title: '最大长度',
          fieldKey: 'maxLength1',
          ui: {
            type: 'text',
            vcontrol:
              "try {\n      if(typeof props.get('common.maxLength').data!=='number'){\n        return !!props.get('common.maxLength').data\n      }else{\n        return true\n      }\n    } catch (error) {\n      return false\n    }",
          },
        },
        {
          type: 'string',
          title: '正则表达式不带标志',
          fieldKey: 'pattern1',
          ui: {
            type: 'text',
            vcontrol:
              "try {\n      if(typeof props.get('common.pattern').data!=='number'){\n        return !!props.get('common.pattern').data\n      }else{\n        return true\n      }\n    } catch (error) {\n      return false\n    }",
          },
        },
        {
          type: 'string',
          title: '常见正则',
          fieldKey: 'format1',
          ui: {
            type: 'text',
            vcontrol:
              "try {\n      if(typeof props.get('common.format').data!=='number'){\n        return !!props.get('common.format').data\n      }else{\n        return true\n      }\n    } catch (error) {\n      return false\n    }",
          },
        },
        {
          type: 'string',
          title: '正则表达带标志·',
          fieldKey: 'regexp1',
          ui: {
            type: 'text',
            vcontrol:
              "try {\n      if(typeof props.get('common.regexp').data!=='number'){\n        return !!props.get('common.regexp').data\n      }else{\n        return true\n      }\n    } catch (error) {\n      return false\n    }",
          },
        },
        {
          type: 'string',
          title: '格式化',
          fieldKey: 'transform1',
          ui: {
            type: 'text',
            vcontrol:
              "try {\n      if(typeof props.get('common.transform').data!=='number'){\n        return !!props.get('common.transform').data\n      }else{\n        return true\n      }\n    } catch (error) {\n      return false\n    }",
          },
        },
        {
          type: 'string',
          title: '分隔符范围',
          fieldKey: 'rangeDelimiter1',
          ui: {
            type: 'text',
            vcontrol:
              "try {\n      if(typeof props.get('business.rangeDelimiter').data!=='number'){\n        return !!props.get('business.rangeDelimiter').data\n      }else{\n        return true\n      }\n    } catch (error) {\n      return false\n    }",
          },
        },
        {
          type: 'string',
          title: '中英文长度',
          fieldKey: 'gbkLength1',
          ui: {
            type: 'text',
            vcontrol:
              "try {\n      if(typeof props.get('business.gbkLength').data!=='number'){\n        return !!props.get('business.gbkLength').data\n      }else{\n        return true\n      }\n    } catch (error) {\n      return false\n    }",
          },
        },
      ],
    },
  ],
}

export const parsedSchema = {
  dataSchema: {
    validateTime: 'change',
    type: 'object',
    properties: {
      viewMode: {
        type: 'string',
        title: '展示模式',
        default: 'all',
        $fieldKey: 'viewMode1',
      },
      common: {
        type: 'object',
        title: '通用校验',
        $fieldKey: 'common1',
        properties: {
          required: {
            type: 'boolean',
            title: '是否必填',
            $fieldKey: 'required1',
          },
          minLength: {
            type: 'number',
            title: '最小长度',
            $fieldKey: 'minLength1',
          },
          maxLength: {
            type: 'number',
            title: '最大长度',
            $fieldKey: 'maxLength1',
          },
          pattern: {
            type: 'string',
            title: '正则表达式不带标志',
            $fieldKey: 'pattern1',
          },
          format: {
            type: 'string',
            title: '常见正则',
            $fieldKey: 'format1',
          },
          regexp: {
            type: 'string',
            title: '正则表达带标志·',
            $fieldKey: 'regexp1',
          },
          transform: {
            type: 'array',
            title: '格式化',
            $fieldKey: 'transform1',
          },
        },
      },
      business: {
        type: 'object',
        title: '业务校验',
        $fieldKey: 'business1',
        properties: {
          rangeDelimiter: {
            type: 'object',
            title: '分隔符范围',
            $fieldKey: 'rangeDelimiter1',
            properties: {
              delimiter: {
                type: 'string',
                title: '自定义分隔符',
                $fieldKey: 'delimiter1',
              },
              max: {
                type: 'number',
                title: '最多',
                $fieldKey: 'max1',
              },
              min: {
                type: 'number',
                title: '最少',
                $fieldKey: 'min1',
              },
            },
          },
          gbkLength: {
            type: 'object',
            title: '中英文长度',
            $fieldKey: 'gbkLength1',
            properties: {
              max: {
                type: 'number',
                title: '最多',
                $fieldKey: 'max1',
              },
              min: {
                type: 'number',
                title: '最少',
                $fieldKey: 'min1',
              },
            },
          },
        },
      },
      errorMessage: {
        type: 'object',
        title: '校验错误文案配置',
        $fieldKey: 'errorMessage1',
        properties: {
          _: {
            type: 'string',
            title: '错误兜底文案',
            $fieldKey: '_1',
          },
          required: {
            type: 'string',
            title: '是否必填',
            $fieldKey: 'required1',
          },
          minLength: {
            type: 'string',
            title: '最小长度',
            $fieldKey: 'minLength1',
          },
          maxLength: {
            type: 'string',
            title: '最大长度',
            $fieldKey: 'maxLength1',
          },
          pattern: {
            type: 'string',
            title: '正则表达式不带标志',
            $fieldKey: 'pattern1',
          },
          format: {
            type: 'string',
            title: '常见正则',
            $fieldKey: 'format1',
          },
          regexp: {
            type: 'string',
            title: '正则表达带标志·',
            $fieldKey: 'regexp1',
          },
          transform: {
            type: 'string',
            title: '格式化',
            $fieldKey: 'transform1',
          },
          rangeDelimiter: {
            type: 'string',
            title: '分隔符范围',
            $fieldKey: 'rangeDelimiter1',
          },
          gbkLength: {
            type: 'string',
            title: '中英文长度',
            $fieldKey: 'gbkLength1',
          },
        },
      },
    },
  },
  uiSchema: {
    theme: 'antd',
    containerStyle: {
      padding: '0 16px',
    },
    order: ['viewMode', 'common', 'business', 'errorMessage'],
    properties: {
      viewMode: {
        type: 'select',
        style: {
          width: '100%',
        },
        options: [
          {
            value: 'configured',
            label: '只展示已配置校验规则',
          },
          {
            value: 'all',
            label: '全部展示',
          },
        ],
      },
      common: {
        type: 'object',
        mode: 'collapse',
        '$:dripStyle': true,
        ghost: true,
        containerStyle: {
          marginBottom: 5,
          padding: 0,
        },
        order: [
          'required',
          'minLength',
          'maxLength',
          'pattern',
          'format',
          'regexp',
          'transform',
        ],
        properties: {
          required: {
            type: 'switch',
            vcontrol:
              'const {fieldKey,formData,get}=props;return formData.viewMode==="configured"?typeof get(fieldKey).data!==\'number\'? get(fieldKey).data:true:true',
          },
          minLength: {
            type: 'number',
            vcontrol:
              'const {fieldKey,formData,get}=props;return formData.viewMode==="configured"?typeof get(fieldKey).data!==\'number\'? get(fieldKey).data:true:true',
          },
          maxLength: {
            type: 'number',
            vcontrol:
              'const {fieldKey,formData,get}=props;return formData.viewMode==="configured"?typeof get(fieldKey).data!==\'number\'? get(fieldKey).data:true:true',
          },
          pattern: {
            type: 'text',
            vcontrol:
              'const {fieldKey,formData,get}=props;return formData.viewMode==="configured"?typeof get(fieldKey).data!==\'number\'? get(fieldKey).data:true:true',
          },
          format: {
            type: 'select',
            style: {
              width: '100%',
            },
            allowClear: true,
            options: [
              {
                value: 'color',
                label: 'color',
              },
              {
                value: 'https',
                label: 'https',
              },
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
            vcontrol:
              'const {fieldKey,formData,get}=props;return formData.viewMode==="configured"?typeof get(fieldKey).data!==\'number\'? get(fieldKey).data:true:true',
          },
          regexp: {
            description: {
              type: 'icon',
              trigger: 'hover',
              title: '可以使用g、i、u等正则标志',
            },
            type: 'text',
            vcontrol:
              'const {fieldKey,formData,get}=props;return formData.viewMode==="configured"?typeof get(fieldKey).data!==\'number\'? get(fieldKey).data:true:true',
          },
          transform: {
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
            ],
            vcontrol:
              'const {fieldKey,formData,get}=props;return formData.viewMode==="configured"?typeof get(fieldKey).data!==\'number\'? get(fieldKey).data:true:true',
          },
        },
      },
      business: {
        type: 'object',
        mode: 'collapse',
        '$:dripStyle': true,
        ghost: true,
        containerStyle: {
          padding: 0,
          marginBottom: 5,
        },
        order: ['rangeDelimiter', 'gbkLength'],
        properties: {
          rangeDelimiter: {
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
            vcontrol:
              'const {fieldKey,formData,get}=props;return formData.viewMode==="configured"?typeof get(fieldKey).data!==\'number\'? get(fieldKey).data:true:true',
            order: ['delimiter', 'max', 'min'],
            properties: {
              delimiter: {
                type: 'text',
              },
              max: {
                type: 'number',
              },
              min: {
                type: 'number',
              },
            },
          },
          gbkLength: {
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
            vcontrol:
              'const {fieldKey,formData,get}=props;return formData.viewMode==="configured"?typeof get(fieldKey).data!==\'number\'? get(fieldKey).data:true:true',
            order: ['max', 'min'],
            properties: {
              max: {
                type: 'number',
              },
              min: {
                type: 'number',
              },
            },
          },
        },
      },
      errorMessage: {
        type: 'object',
        mode: 'collapse',
        '$:dripStyle': true,
        ghost: true,
        containerStyle: {
          padding: 0,
          marginBottom: 5,
        },
        order: [
          '_',
          'required',
          'minLength',
          'maxLength',
          'pattern',
          'format',
          'regexp',
          'transform',
          'rangeDelimiter',
          'gbkLength',
        ],
        properties: {
          _: {
            type: 'text',
            description: {
              type: 'icon',
              trigger: 'hover',
              title: '当关键字未配置错误文案时，发生错误会展示该文案',
            },
          },
          required: {
            type: 'text',
            vcontrol:
              "try {\n      if(typeof props.get('common.required').data!=='number'){\n        return !!props.get('common.required').data\n      }else{\n        return true\n      }\n    } catch (error) {\n      return false\n    }",
          },
          minLength: {
            type: 'text',
            vcontrol:
              "try {\n      if(typeof props.get('common.minLength').data!=='number'){\n        return !!props.get('common.minLength').data\n      }else{\n        return true\n      }\n    } catch (error) {\n      return false\n    }",
          },
          maxLength: {
            type: 'text',
            vcontrol:
              "try {\n      if(typeof props.get('common.maxLength').data!=='number'){\n        return !!props.get('common.maxLength').data\n      }else{\n        return true\n      }\n    } catch (error) {\n      return false\n    }",
          },
          pattern: {
            type: 'text',
            vcontrol:
              "try {\n      if(typeof props.get('common.pattern').data!=='number'){\n        return !!props.get('common.pattern').data\n      }else{\n        return true\n      }\n    } catch (error) {\n      return false\n    }",
          },
          format: {
            type: 'text',
            vcontrol:
              "try {\n      if(typeof props.get('common.format').data!=='number'){\n        return !!props.get('common.format').data\n      }else{\n        return true\n      }\n    } catch (error) {\n      return false\n    }",
          },
          regexp: {
            type: 'text',
            vcontrol:
              "try {\n      if(typeof props.get('common.regexp').data!=='number'){\n        return !!props.get('common.regexp').data\n      }else{\n        return true\n      }\n    } catch (error) {\n      return false\n    }",
          },
          transform: {
            type: 'text',
            vcontrol:
              "try {\n      if(typeof props.get('common.transform').data!=='number'){\n        return !!props.get('common.transform').data\n      }else{\n        return true\n      }\n    } catch (error) {\n      return false\n    }",
          },
          rangeDelimiter: {
            type: 'text',
            vcontrol:
              "try {\n      if(typeof props.get('business.rangeDelimiter').data!=='number'){\n        return !!props.get('business.rangeDelimiter').data\n      }else{\n        return true\n      }\n    } catch (error) {\n      return false\n    }",
          },
          gbkLength: {
            type: 'text',
            vcontrol:
              "try {\n      if(typeof props.get('business.gbkLength').data!=='number'){\n        return !!props.get('business.gbkLength').data\n      }else{\n        return true\n      }\n    } catch (error) {\n      return false\n    }",
          },
        },
      },
    },
  },
  typePath: {
    viewMode: {
      fatherKey: '',
      unitedSchemaKey: 'schema.0',
      type: 'string',
    },
    common: {
      fatherKey: '',
      unitedSchemaKey: 'schema.1',
      type: 'object',
    },
    'common.required': {
      fatherKey: 'common',
      unitedSchemaKey: 'schema.1.schema.0',
      type: 'boolean',
    },
    'common.minLength': {
      fatherKey: 'common',
      unitedSchemaKey: 'schema.1.schema.1',
      type: 'number',
    },
    'common.maxLength': {
      fatherKey: 'common',
      unitedSchemaKey: 'schema.1.schema.2',
      type: 'number',
    },
    'common.pattern': {
      fatherKey: 'common',
      unitedSchemaKey: 'schema.1.schema.3',
      type: 'string',
    },
    'common.format': {
      fatherKey: 'common',
      unitedSchemaKey: 'schema.1.schema.4',
      type: 'string',
    },
    'common.regexp': {
      fatherKey: 'common',
      unitedSchemaKey: 'schema.1.schema.5',
      type: 'string',
    },
    'common.transform': {
      fatherKey: 'common',
      unitedSchemaKey: 'schema.1.schema.6',
      type: 'array',
    },
    business: {
      fatherKey: '',
      unitedSchemaKey: 'schema.2',
      type: 'object',
    },
    'business.rangeDelimiter': {
      fatherKey: 'business',
      unitedSchemaKey: 'schema.2.schema.0',
      type: 'object',
    },
    'business.rangeDelimiter.delimiter': {
      fatherKey: 'business.rangeDelimiter',
      unitedSchemaKey: 'schema.2.schema.0.schema.0',
      type: 'string',
    },
    'business.rangeDelimiter.max': {
      fatherKey: 'business.rangeDelimiter',
      unitedSchemaKey: 'schema.2.schema.0.schema.1',
      type: 'number',
    },
    'business.rangeDelimiter.min': {
      fatherKey: 'business.rangeDelimiter',
      unitedSchemaKey: 'schema.2.schema.0.schema.2',
      type: 'number',
    },
    'business.gbkLength': {
      fatherKey: 'business',
      unitedSchemaKey: 'schema.2.schema.1',
      type: 'object',
    },
    'business.gbkLength.max': {
      fatherKey: 'business.gbkLength',
      unitedSchemaKey: 'schema.2.schema.1.schema.0',
      type: 'number',
    },
    'business.gbkLength.min': {
      fatherKey: 'business.gbkLength',
      unitedSchemaKey: 'schema.2.schema.1.schema.1',
      type: 'number',
    },
    errorMessage: {
      fatherKey: '',
      unitedSchemaKey: 'schema.3',
      type: 'object',
    },
    'errorMessage._': {
      fatherKey: 'errorMessage',
      unitedSchemaKey: 'schema.3.schema.0',
      type: 'string',
    },
    'errorMessage.required': {
      fatherKey: 'errorMessage',
      unitedSchemaKey: 'schema.3.schema.1',
      type: 'string',
    },
    'errorMessage.minLength': {
      fatherKey: 'errorMessage',
      unitedSchemaKey: 'schema.3.schema.2',
      type: 'string',
    },
    'errorMessage.maxLength': {
      fatherKey: 'errorMessage',
      unitedSchemaKey: 'schema.3.schema.3',
      type: 'string',
    },
    'errorMessage.pattern': {
      fatherKey: 'errorMessage',
      unitedSchemaKey: 'schema.3.schema.4',
      type: 'string',
    },
    'errorMessage.format': {
      fatherKey: 'errorMessage',
      unitedSchemaKey: 'schema.3.schema.5',
      type: 'string',
    },
    'errorMessage.regexp': {
      fatherKey: 'errorMessage',
      unitedSchemaKey: 'schema.3.schema.6',
      type: 'string',
    },
    'errorMessage.transform': {
      fatherKey: 'errorMessage',
      unitedSchemaKey: 'schema.3.schema.7',
      type: 'string',
    },
    'errorMessage.rangeDelimiter': {
      fatherKey: 'errorMessage',
      unitedSchemaKey: 'schema.3.schema.8',
      type: 'string',
    },
    'errorMessage.gbkLength': {
      fatherKey: 'errorMessage',
      unitedSchemaKey: 'schema.3.schema.9',
      type: 'string',
    },
  },
  customProps: [],
}
