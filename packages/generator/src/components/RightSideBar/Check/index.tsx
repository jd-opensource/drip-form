/*
 * 校验配置
 * TODO @jiangxiaowei 优化formData、onParse、control函数
 * @Author: jiangxiaowei
 * @Date: 2021-08-16 11:32:22
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: 2022-08-16 14:32:57
 */
import React, { useMemo, memo, useCallback } from 'react'
import {
  injectVcontrol,
  setDeepProp,
  parseUnitedSchema,
  deleteDeepProp,
} from '@jdfed/utils'
import DripForm from '@jdfed/drip-form'
import commonSchema from '../../../fields/common/checkConfig/Common'
import typeMap from './type'
import useRightSidebar from '../HeadlessComponents'
import type { Map, UnitedSchema } from '@jdfed/utils'

const CheckConfig = (): JSX.Element => {
  const {
    generatorContext,
    selectedFieldKey,
    dataSchema,
    // uiSchema,
    uiComponents,
  } = useRightSidebar()
  // 业务关键字(包含的关键字被转换为formData.bussiness)
  const businessKeywords = useMemo(() => new Set(), [])
  // 通用关键字(包含的关键字被转换为formData.common)
  const commonKeywords = useMemo(() => new Set(), [])

  // 业务关键字错误文案配置schema(表单切换，需要重置)
  const businessErrTipSchema = useMemo<Array<Record<string, unknown>>>(
    () => [],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [selectedFieldKey]
  )
  // 通用关键字错误文案配置schema(表单切换，需要重置)
  const commonErrTipSchema = useMemo<Array<Record<string, unknown>>>(
    () => [],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [selectedFieldKey]
  )

  // 当前数据类型的校验配置（通用+业务）
  const keywordsMap = useMemo(
    () =>
      typeMap[dataSchema.type as keyof typeof typeMap] || {
        common: {},
        business: {},
      },
    [dataSchema.type]
  )
  // 当前表单uiSchmea的type类型
  // const uiType = uiSchema.type as keyof typeof formItemMap
  // 当前表单是否配置需要展示的校验关键字
  // const keywords = formItemMap[uiType]?.checkConfig

  // 隐藏未配置错误类型的错误文案
  const vcontrol = useCallback<
    (typw: 'common' | 'business', fieldKey: string) => string
  >((type, fieldKey) => {
    return `try {
      if(typeof props.get('${type}.${fieldKey}').data!=='number'){
        return !!props.get('${type}.${fieldKey}').data
      }else{
        return true
      }
    } catch (error) {
      return false
    }`
  }, [])

  // 当前表单的通用校验配置
  const curTypeSchema = useMemo(() => {
    const common = keywordsMap.common
    Object.keys(common).map((item) => {
      if (!commonKeywords.has(item)) {
        commonKeywords.add(item)
      }
    })
    // 优先使用用户配置的关键字
    return Object.keys(
      // keywords?.common||
      common
    ).reduce((prev, cur) => {
      commonErrTipSchema.push({
        type: 'string',
        title: common[cur].title,
        fieldKey: cur,
        ui: {
          type: 'text',
          vcontrol: vcontrol('common', cur),
        },
      })
      // 注入vcontrol
      injectVcontrol(common[cur])
      return prev.concat(common[cur] as unknown as ConcatArray<never>)
    }, [])
  }, [commonErrTipSchema, commonKeywords, keywordsMap.common, vcontrol])

  // 所有类型通用校验配置
  const CommonSchema = useMemo(() => {
    return Object.keys(commonSchema).reduce((prev, cur) => {
      commonErrTipSchema.unshift({
        type: 'string',
        title: commonSchema[cur].title,
        fieldKey: cur,
        ui: {
          type: 'text',
          vcontrol: vcontrol('common', cur),
        },
      })
      // 注入vcontrol
      injectVcontrol(commonSchema[cur])
      return prev.concat(commonSchema[cur] as unknown as ConcatArray<never>)
    }, [])
  }, [commonErrTipSchema, vcontrol])

  // 当前表单的业务校验配置
  const bussinessSchema = useMemo(() => {
    const business = keywordsMap.business
    Object.keys(business).map((item) => {
      if (!businessKeywords.has(item)) {
        businessKeywords.add(item)
      }
    })
    // 优先使用用户配置的关键字
    return Object.keys(
      // keywords?.business ||
      business
    ).reduce((prev, cur) => {
      businessErrTipSchema.push({
        type: 'string',
        title: business[cur].title,
        fieldKey: cur,
        ui: {
          type: 'text',
          vcontrol: vcontrol('business', cur),
        },
      })
      // 注入vcontrol
      injectVcontrol(business[cur])
      return prev.concat(business[cur] as unknown as ConcatArray<never>)
    }, [])
  }, [businessErrTipSchema, businessKeywords, keywordsMap.business, vcontrol])

  // 校验配置schema
  const unitedSchema = useMemo<UnitedSchema>(() => {
    return {
      validateTime: 'change',
      theme: 'antd',
      ui: {
        containerStyle: {
          padding: '0 16px',
        },
      },
      schema: !selectedFieldKey
        ? [
            {
              fieldKey: 'validateTime',
              type: 'string',
              title: '校验时机',
              default: 'submit',
              ui: {
                type: 'select',
                options: [
                  { label: '值变化时', value: 'change' },
                  { label: '提交时', value: 'submit' },
                ],
              },
            },
            {
              fieldKey: 'requiredMode',
              type: 'string',
              title: '必填校验模式',
              default: 'default',
              ui: {
                type: 'radio',
                description: {
                  type: 'icon',
                  trigger: 'hover',
                  title:
                    '必填校验模式详细查看文档：<a href="https://jdfed.github.io/drip-form/faq/#%E5%BF%85%E5%A1%AB%E6%A0%A1%E9%AA%8C%E6%A8%A1%E5%BC%8F">必填校验模式</a>',
                },
                options: [
                  {
                    label: 'default',
                    description: {
                      title:
                        // eslint-disable-next-line quotes
                        "{a:'',b:[],c:0,d:null}，以上a、b、c、d字段均不会报必填错误",
                      trigger: 'hover',
                    },
                    value: 'default',
                  },
                  {
                    label: 'empty',
                    description: {
                      // eslint-disable-next-line quotes
                      title: `{a:'',b:[],c:0,d:null}，以上c字段不会报必填错误,a、b、d在用户配置最小长度、最少输入多少项后会报必填错误`,
                      trigger: 'hover',
                    },
                    value: 'empty',
                  },
                ],
              },
            },
          ]
        : [
            {
              type: 'string',
              title: '展示模式',
              fieldKey: 'viewMode',
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
              fieldKey: 'common',
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
              schema: CommonSchema.concat(curTypeSchema),
            },
            ...(bussinessSchema.length > 0
              ? [
                  {
                    type: 'object',
                    title: '业务校验',
                    fieldKey: 'business',
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
                    schema: bussinessSchema,
                  },
                ]
              : []),
            {
              type: 'object',
              title: '校验错误文案配置',
              fieldKey: 'errorMessage',
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
                  fieldKey: '_',
                  // requiredMsg: '必填',
                  ui: {
                    type: 'text',
                    description: {
                      type: 'icon',
                      trigger: 'hover',
                      title: '当关键字未配置错误文案时，发生错误会展示该文案',
                    },
                  },
                },
                ...commonErrTipSchema,
                ...businessErrTipSchema,
              ],
            },
          ],
    }
  }, [
    CommonSchema,
    bussinessSchema,
    curTypeSchema,
    commonErrTipSchema,
    businessErrTipSchema,
    selectedFieldKey,
  ])

  // 获取校验配置的typePath，便于确定如何设置到viewport的dataSchema中（对象形式还是数组形式）
  const typePath = useMemo(() => {
    const typePath = parseUnitedSchema(unitedSchema).typePath
    const typeMap: Record<string, unknown> = {}
    for (const i in typePath) {
      if (Object.prototype.hasOwnProperty.call(typePath, i)) {
        typeMap[i.replace(/^(common|business)\./, '')] = typePath[i]
      }
    }
    return typeMap
  }, [unitedSchema])

  // 当前选中表单的父级fieldKey（相对formData）
  const parentKey = useMemo(() => {
    if (selectedFieldKey) {
      const selectedFieldKeyMap = selectedFieldKey.split('.')
      selectedFieldKeyMap.pop()
      // 根目录直接为'',嵌套获取父级key
      return selectedFieldKey.split('.').length === 1
        ? ''
        : selectedFieldKeyMap.join('.')
    }
  }, [selectedFieldKey])

  // viewport dataSchema配置转换成校验配置的数据
  const formData = useMemo(() => {
    const formData = {}
    // 设置required
    if (
      generatorContext.current?.get &&
      parentKey !== undefined &&
      selectedFieldKey
    ) {
      const required =
        (generatorContext.current?.get(parentKey).dataSchema
          .required as Array<string>) || []
      // 判断当前选中的表单是否必填
      if (required.includes(selectedFieldKey.split('.').pop() as string)) {
        setDeepProp(['common', 'required'], formData, true)
      }
    }
    // 遍历dataSchema配置的校验关键字并输出到formData
    Object.entries(dataSchema).map(([key, value]) => {
      // TODO @jiangxiaowei 针对嵌套做适配
      // TODO @jiangxiaowei 支持自定义转换
      if (['validateTime', 'requiredMode'].includes(key)) {
        setDeepProp(key.split('.'), formData, value)
      } else if (key !== 'errorMessage') {
        setDeepProp(
          [businessKeywords.has(key) ? 'business' : 'common', key],
          formData,
          value
        )
      } else {
        setDeepProp(['errorMessage'], formData, value)
      }
    })
    return formData
  }, [
    businessKeywords,
    dataSchema,
    generatorContext,
    parentKey,
    selectedFieldKey,
  ])

  // 校验表单联动（校验配置改动实时更新到viewport的dataSchema中）
  const controlFn = useCallback(
    ({ changeKey, get }) => {
      // 变化的表单数据
      const data = get(changeKey).data
      if (
        !selectedFieldKey &&
        ['validateTime', 'requiredMode'].includes(changeKey)
      ) {
        generatorContext.current?.merge('', 'dataSchema', {
          [changeKey]: data,
        })
      }
      if (
        changeKey &&
        generatorContext.current?.set &&
        selectedFieldKey &&
        generatorContext.current?.get &&
        generatorContext.current?.merge &&
        parentKey !== undefined
      ) {
        const key =
          changeKey.split('business.')[1] ||
          changeKey.split('common.')[1] ||
          changeKey
        if (key === 'viewMode') return
        // 如果改变的不是对象的必填选项
        if (key.split('.').pop() !== 'required') {
          generatorContext.current?.set(
            selectedFieldKey,
            'dataSchema',
            (draft: unknown) => {
              setDeepProp(key.split('.'), draft as Map, data, typePath)
            }
          )
        } else {
          const oldRequired =
            generatorContext.current?.get(parentKey).dataSchema.required
          // 当前变动必填的key值
          const requiredKey = selectedFieldKey.split('.').pop() as string
          // 必填字段需要设置到选中表单的父级schema中
          if (data) {
            // 设置必填校验
            const newRequired = !oldRequired
              ? [requiredKey]
              : !oldRequired.includes(requiredKey)
              ? [...oldRequired, requiredKey]
              : oldRequired
            generatorContext.current?.merge(parentKey, 'dataSchema', {
              errorMessage: {
                required: {
                  // 如果当前变化的key是必填错误文案（errorMessage.required），则默认使用设置的错误文案，否则文案为必填
                  [requiredKey]: key.startsWith('errorMessage')
                    ? data || '必填'
                    : '必填',
                },
              },
              required: newRequired,
            })
          } else {
            const index = oldRequired?.findIndex((item) => item === requiredKey)
            // 删除必填校验
            generatorContext.current?.set(parentKey, 'dataSchema', (draft) => {
              deleteDeepProp(
                ['errorMessage', 'required', requiredKey],
                draft as Map
              )
              if (index != -1) {
                deleteDeepProp(['required', String(index)], draft as Map)
              }
            })
          }
        }
      }
    },
    [generatorContext, selectedFieldKey, parentKey, typePath]
  )

  return (
    <DripForm
      formData={formData}
      key={selectedFieldKey}
      control={controlFn}
      unitedSchema={unitedSchema}
      uiComponents={uiComponents}
    />
  )
}
const memoCheckConfig = memo(CheckConfig)
export default memoCheckConfig
