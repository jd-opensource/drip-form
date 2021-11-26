/*
 * 校验配置
 * TODO @jiangxiaowei 优化formData、onParse、control函数
 * @Author: jiangxiaowei
 * @Date: 2021-08-16 11:32:22
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: 2021-11-19 11:28:20
 */
import React, { useMemo, memo, useCallback } from 'react'
import {
  injectVcontrol,
  setDeepProp,
  parseUnitedSchema,
  deleteDeepProp,
} from '@jdfed/utils'
import DripForm from '@jdfed/drip-form'
import commonSchema from './Common'
import typeMap from './type'
import { formItemMap } from '@generator/fields'
import useRightSidebar from '../HeadlessComponents'
import type { Map } from '@jdfed/utils'

const CheckConfig = (): JSX.Element => {
  const {
    generatorContext,
    selectedFieldKey,
    dataSchema,
    uiSchema,
    uiComponents,
  } = useRightSidebar()
  // 业务关键字(包含的关键字被转换为formData.bussiness)
  const businessKeywords = useMemo(() => new Set(), [])
  // 通用关键字(包含的关键字被转换为formData.common)
  const commonKeywords = useMemo(() => new Set(), [])

  // 业务关键字错误文案配置schema
  const businessErrTipSchema = useMemo<Array<Record<string, unknown>>>(
    () => [],
    []
  )
  // 通用关键字错误文案配置schema
  const commonErrTipSchema = useMemo<Array<Record<string, unknown>>>(
    () => [],
    []
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
  const uiType = uiSchema.type as keyof typeof formItemMap
  // 当前表单是否配置需要展示的校验关键字
  const keywords = formItemMap[uiType]?.keywords

  // 隐藏未配置错误类型的错误文案
  const vcontrol = useCallback<
    (typw: 'common' | 'business', fieldKey: string) => string
  >((type, fieldKey) => {
    return `try {
      return props.get('${type}.${fieldKey}').data
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
    return (keywords?.common || Object.keys(common)).reduce((prev, cur) => {
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
  }, [
    commonErrTipSchema,
    commonKeywords,
    keywords?.common,
    keywordsMap.common,
    vcontrol,
  ])

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
    return (keywords?.business || Object.keys(business)).reduce((prev, cur) => {
      businessErrTipSchema.push({
        type: 'string',
        title: business[cur].title,
        fieldKey: cur,
        ui: {
          type: 'text',
          vcontrol: vcontrol('common', cur),
        },
      })
      // 注入vcontrol
      injectVcontrol(business[cur])
      return prev.concat(business[cur] as unknown as ConcatArray<never>)
    }, [])
  }, [
    businessErrTipSchema,
    businessKeywords,
    keywords?.business,
    keywordsMap.business,
    vcontrol,
  ])

  // 校验配置schema
  const unitedSchema = useMemo(() => {
    return {
      validateTime: 'change',
      theme: 'antd',
      schema: !selectedFieldKey
        ? [
            {
              fieldKey: 'validateTime',
              type: 'string',
              title: '检验时机',
              default: 'change',
              ui: {
                type: 'select',
                options: [
                  { label: '值变化时', value: 'change' },
                  { label: '提交时', value: 'submit' },
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
              ui: { type: 'object', mode: 'collapse' },
              schema: CommonSchema.concat(curTypeSchema),
            },
            ...(bussinessSchema.length > 0
              ? [
                  {
                    type: 'object',
                    title: '业务校验',
                    fieldKey: 'business',
                    ui: { type: 'object', mode: 'collapse' },
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
      if (key === 'validateTime') {
        setDeepProp(['validateTime'], formData, value)
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
      if (!selectedFieldKey && changeKey === 'validateTime') {
        generatorContext.current?.merge('', 'dataSchema', {
          validateTime: data,
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
          // 必填字段需要设置到选中表单的父级schema中
          if (data) {
            // 设置必填校验
            const newRequired = !oldRequired
              ? [selectedFieldKey]
              : Array.isArray(oldRequired) &&
                !oldRequired.includes(selectedFieldKey)
              ? [...oldRequired, selectedFieldKey]
              : [selectedFieldKey]
            generatorContext.current?.merge(parentKey, 'dataSchema', {
              errorMessage: {
                required: {
                  // 如果当前变化的key是必填错误文案（errorMessage.required），则默认使用设置的错误文案，否则文案为必填
                  [selectedFieldKey]: key.startsWith('errorMessage')
                    ? data || '必填'
                    : '必填',
                },
              },
              required: newRequired,
            })
          } else {
            const index = oldRequired?.findIndex(
              (item) => item === selectedFieldKey
            )
            // 删除必填校验
            generatorContext.current?.set(parentKey, 'dataSchema', (draft) => {
              deleteDeepProp(
                ['errorMessage', 'required', selectedFieldKey],
                draft as Map
              )
              if (index) {
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
      control={controlFn}
      unitedSchema={unitedSchema}
      uiComponents={uiComponents}
    />
  )
}
const memoCheckConfig = memo(CheckConfig)
export default memoCheckConfig
