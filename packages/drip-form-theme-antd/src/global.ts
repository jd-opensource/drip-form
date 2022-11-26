import { CSSProperties, Dispatch as DispatchR } from 'react'
import type { GetKey } from '@jdfed/hooks'
import type { Action } from '@jdfed/utils'
export declare type Dispatch = DispatchR<Action>

declare type DripFormEventType = {
  type: string
  payload: any
}

declare type DripFormEventFuncType = (event: DripFormEventType) => any
export declare type CommonProps = Partial<{
  // 是否禁用表单
  disabled: boolean
  style: CSSProperties
  onChange: string
  queryFunc: (...args: any[]) => any
  requestCache: boolean
  formMode: 'edit' | 'generator' | 'view'
  fireEvent?: DripFormEventFuncType
}> & {
  fieldKey: string
  dispatch: Dispatch
  fieldData: any
  [propName: string]: any
  getKey: GetKey
}

export const queryCofnig = [
  {
    type: 'object',
    title: '选项配置',
    default: {},
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
    schema: [
      {
        type: 'string',
        title: '选项配置',
        default: '1',
        ui: {
          type: 'radio',
          theme: 'antd',
          options: [
            {
              label: '自定义数据',
              value: '1',
            },
            {
              label: '自定义接口',
              value: '0',
            },
          ],
        },
        fieldKey: 'optionsType',
      },
      {
        fieldKey: 'options',
        type: 'array',
        title: '选项',
        default: [],
        ui: {
          type: 'array',
          vcontrol: 'return props.formData.ui.queryConfig.optionsType==="1"',
        },
        items: {
          type: 'object',
          title: '',
          ui: {
            type: 'object',
            showTitle: false,
          },
          schema: [
            {
              type: 'string',
              fieldKey: 'label',
              title: '选项名',
              ui: {
                type: 'text',
                placeholder: '选项',
              },
            },
            {
              type: 'string',
              fieldKey: 'value',
              title: '选项值',
              ui: {
                type: 'text',
                placeholder: '值',
              },
            },
          ],
        },
      },
      {
        type: 'string',
        title: '选项路径',
        default: 'options',
        ui: {
          type: 'text',
          style: {
            width: '100%',
          },
          theme: 'antd',
          description: [
            {
              type: 'icon',
              title:
                '比如：select组件是options，最后会将选项数据设置到ui.options中',
            },
            {
              type: 'text',
              title: '默认无需改动',
            },
          ],
        },
        requiredMsg: '必填',
        fieldKey: 'setPath',
      },
      {
        type: 'string',
        title: '请求url',
        transform: ['trim'],
        format: 'url',
        errMsg: {
          format: '请输入正确的url',
        },
        ui: {
          type: 'text',
          style: {
            width: '100%',
          },
          theme: 'antd',
          vcontrol: 'return props.formData.ui.queryConfig.optionsType==="0"',
        },
        requiredMsg: '必填',
        fieldKey: 'url',
      },
      {
        type: 'string',
        title: '请求类型',
        default: 'GET',
        ui: {
          type: 'radio',
          theme: 'antd',
          vcontrol: 'return props.formData.ui.queryConfig.optionsType==="0"',
          options: [
            {
              label: 'GET',
              value: 'GET',
            },
            {
              label: 'POST',
              value: 'POST',
            },
          ],
        },
        fieldKey: 'method',
      },
      {
        type: 'array',
        title: '数组容器',
        default: [],
        ui: {
          title: {
            verticalAlign: 'top',
          },
          type: 'array',
          vcontrol: 'return props.formData.ui.queryConfig.optionsType==="0"',
          mode: 'add',
          addTitle: '添加请求参数',
          hasConfirm: false,
          confirm: {
            confirmTitle: '确定删除这一项？',
            okText: '确定',
            cancelText: '取消',
          },
          showTitle: false,
          showNo: true,
          serialText: {
            beforeText: '请求参数',
          },
        },
        items: {
          type: 'object',
          title: '',
          ui: {
            type: 'object',
            showTitle: false,
          },
          schema: [
            {
              type: 'string',
              title: 'key',
              ui: {
                type: 'text',
                style: {
                  width: '100%',
                },
                theme: 'antd',
              },
              requiredMsg: '必填',
              fieldKey: 'key',
            },
            {
              type: 'string',
              title: 'value',
              ui: {
                type: 'text',
                style: {
                  width: '100%',
                },
                theme: 'antd',
                placeholder: 'formdata.a.b',
                description: [
                  {
                    type: 'text',
                    title: '格式形如：{{formData.a.b}}',
                  },
                  {
                    type: 'icon',
                    title: '将表单a.b的数据作为请求参数',
                  },
                ],
              },
              requiredMsg: '必填',
              fieldKey: 'value',
            },
          ],
        },
        fieldKey: 'params',
      },
      {
        type: 'string',
        title: '选项对应接口路径',
        transform: ['trim'],
        ui: {
          type: 'text',
          style: {
            width: '100%',
          },
          vcontrol: 'return props.formData.ui.queryConfig.optionsType==="0"',
          theme: 'antd',
          description: [
            {
              type: 'icon',
              title: '获取接口返回指定路径的数据，设置为选项',
            },
          ],
        },
        requiredMsg: '必填',
        fieldKey: 'dataPath',
      },
    ],
    fieldKey: 'queryConfig',
  },
]
