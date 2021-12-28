import { Field } from '../types'

/**
 * 上传组件
 */
const config: Field = {
  icon: 'iconfont icon-cloud-storage',
  title: '上传组件',
  unitedSchema: {
    type: 'object',
    title: '上传组件',
    ui: {
      type: 'uploader',
      listType: 'picture',
    },
  },
  propertyConfig: {
    styleSchema: [
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
        title: '接收上传的地址',
        ui: {
          type: 'text',
          placeholder: 'https://www.jd.com',
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
    ],
  },
}

export default config
