/**
 * 上传组件
 */
const config = {
  icon: 'iconfont icon-cloud-storage',
  title: '上传组件',
  unitedSchema: {
    type: ['string', 'array'],
    title: '上传组件',
    ui: {
      type: 'uploader',
      theme: 'antd',
      listType: 'picture',
      canDrag: false,
      exportToString: true,
      maxCount: 1,
    },
  },
  propertyConfig: {
    styleSchema: [
      {
        fieldKey: 'exportToString',
        type: 'boolean',
        title: '输出string',
        ui: {
          description: {
            type: 'icon',
            trigger: 'hover',
            title: '关闭后，该组件返回对象形式',
          },
          type: 'switch',
        },
      },
      {
        fieldKey: 'disabled',
        type: 'boolean',
        title: '是否禁用',
        default: false,
        ui: {
          type: 'switch',
        },
      },
      // {
      //   fieldKey: 'directory',
      //   type: 'boolean',
      //   title: '是否支持上传文件夹',
      //   default: true,
      //   ui: {
      //     type: 'switch',
      //   },
      // },
      {
        fieldKey: 'listType',
        type: 'string',
        title: '上传列表的内建样式',
        default: 'text',
        ui: {
          type: 'radio',
          options: [
            { label: 'text', value: 'text' },
            { label: 'picture', value: 'picture' },
            { label: 'picture-card', value: 'picture-card' },
          ],
        },
      },
      {
        fieldKey: 'action',
        type: 'string',
        title: '上传的地址',
        ui: {
          type: 'text',
          placeholder: 'https://www.jd.com',
          allowClear: true,
        },
      },
      {
        fieldKey: 'method',
        type: 'string',
        title: '上传请求的http方法',
        default: 'post',
        ui: {
          type: 'select',
          style: { width: '50%' },
          options: [
            { label: 'get', value: 'get' },
            { label: 'post', value: 'post' },
          ],
        },
      },
      {
        fieldKey: 'withCredentials',
        type: 'boolean',
        title: '上传请求是否携带cookie',
        default: true,
        ui: {
          type: 'switch',
        },
      },
      {
        fieldKey: 'accept',
        type: 'string',
        title: '接收上传的文件类型',
        ui: {
          type: 'text',
          description: {
            type: 'icon',
            trigger: 'hover',
            title:
              '详细参考：https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept',
          },
          allowClear: true,
        },
      },
      {
        fieldKey: 'canDrag',
        type: 'boolean',
        title: '能否拖动',
        default: true,
        ui: {
          type: 'switch',
        },
      },
      {
        fieldKey: 'maxCount',
        type: 'number',
        title: '最大上传文件数',
        ui: {
          type: 'number',
        },
      },
      {
        fieldKey: 'uploadLabel',
        type: 'string',
        title: '上传按钮文案',
        ui: { type: 'text' },
      },
      {
        fieldKey: 'dimension',
        type: 'object',
        title: '图片尺寸限制',
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
            type: 'number',
            title: '宽度',
            ui: {
              type: 'number',
            },
            fieldKey: 'width',
          },
          {
            type: 'number',
            title: '最小宽度',
            ui: {
              type: 'number',
            },
            fieldKey: 'minWidth',
          },
          {
            type: 'number',
            title: '最大宽度',
            ui: {
              type: 'number',
            },
            fieldKey: 'maxWidth',
          },
          {
            type: 'number',
            title: '宽度除数',
            ui: {
              description: {
                type: 'icon',
                trigger: 'hover',
                title: '宽度是当前值的倍数',
              },
              type: 'number',
            },
            fieldKey: 'widthDivisor',
          },
          {
            type: 'number',
            title: '高度',
            ui: {
              type: 'number',
            },
            fieldKey: 'height',
          },
          {
            type: 'number',
            title: '最小高度',
            ui: {
              type: 'number',
            },
            fieldKey: 'minHeight',
          },
          {
            type: 'number',
            title: '最大高度',
            ui: {
              type: 'number',
            },
            fieldKey: 'maxHeight',
          },
          {
            type: 'number',
            title: '高度除数',
            ui: {
              description: {
                type: 'icon',
                trigger: 'hover',
                title: '高度是当前值的倍数',
              },
              type: 'number',
            },
            fieldKey: 'heightDivisor',
          },
          {
            type: 'boolean',
            title: '宽高相等',
            ui: {
              type: 'switch',
            },
            fieldKey: 'widthHeightEqual',
          },
        ],
      },
      {
        fieldKey: 'size',
        type: 'object',
        title: '图片大小限制',
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
            type: 'number',
            title: '最小尺寸',
            ui: {
              type: 'number',
            },
            fieldKey: 'min',
          },
          {
            type: 'number',
            title: '最大尺寸',
            ui: {
              type: 'number',
            },
            fieldKey: 'max',
          },
        ],
      },
      {
        type: 'object',
        title: '图片报错文案',
        ui: {
          type: 'object',
          mode: 'collapse',
          '$:dripStyle': true,
          ghost: true,
          containerStyle: {
            padding: 0,
            marginBottom: 5,
          },
          active: false,
          title: {
            verticalAlign: 'top',
          },
        },
        default: {},
        schema: [
          {
            type: 'string',
            title: '尺寸限制报错文案',
            default: '图片尺寸校验未通过',
            ui: {
              type: 'text',
              style: {
                width: '100%',
              },
              theme: 'antd',
              description: [
                {
                  type: 'icon',
                  title: '当上传的图片尺寸限制不通过时，提示该文案',
                },
              ],
            },
            fieldKey: 'dimension',
          },
          {
            type: 'string',
            title: '图片大小报错文案',
            default: '图片大小校验未通过',
            ui: {
              type: 'text',
              style: {
                width: '100%',
              },
              theme: 'antd',
              title: {
                showTitle: true,
                requiredIcon: false,
                showColon: false,
                width: 82,
                placement: 'left',
                fontSize: '12',
                color: '#000000',
                textAlign: 'left',
                verticalAlign: 'top',
                title: '图片大小报错文案',
              },
              description: [
                {
                  type: 'icon',
                  title: '当上传的图片大小不通过时，提示该文案',
                },
              ],
            },
            fieldKey: 'size',
          },
        ],
        fieldKey: 'errMsg',
      },
    ],
  },
}

export default config
