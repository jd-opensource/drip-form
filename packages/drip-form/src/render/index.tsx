/*
 * 渲染 HeadLessComponent
 * @Author: jiangxiaowei
 * @Date: 2021-07-30 16:35:48
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: 2022-10-14 13:45:37
 */
import React from 'react'
import { handleMargin } from '@jdfed/utils'
import type { RenderFnProps } from './type'
import type { Map, Theme } from '@jdfed/utils'

/*TODO 优化renderprops和container编写 区分component prop和container prop*/
const Render = ({
  uiComponents,
  dataSchema,
  uiSchema,
  errors,
  formData,
  onQuery,
  onValidate,
  dispatch,
  customComponents,
  parentUiSchemaKey = ['#'],
  parentDataSchemaKey = ['#'],
  parentFormDataKey = '',
  currentArrayKey,
  containerMap,
  containerHoc,
  get,
  getKey,
  isRoot,
  arrayKey,
}: RenderFnProps): Array<JSX.Element | null> => {
  const {
    theme = 'antd',
    title: globalTitleUi = {},
    formMode = 'edit',
    containerStyle: globalContainerStyle,
  } = uiSchema
  // 当前父级UiSchema
  const currentUiSchema = parentUiSchemaKey.reduce((prev, cur) => {
    if (cur === '#') {
      return prev
    } else {
      return prev[cur]
    }
  }, uiSchema as Map)
  // 当前父级dataSchema
  const currentDataSchema = parentDataSchemaKey.reduce((prev, cur) => {
    if (cur === '#') {
      return prev
    } else {
      return prev[cur]
    }
  }, dataSchema as Map)
  // 当前父级formData 只可能是对象或者数组
  const currentFormData = parentFormDataKey.split('.').reduce((prev, cur) => {
    if (cur === '') {
      return prev
    } else {
      return prev[cur] || (currentDataSchema.type === 'array' ? [] : {})
    }
  }, formData)
  // 获取父级表单ui信息
  const {
    order,
    properties,
    mode: parentMode,
    type: parentType = 'object',
  } = currentUiSchema
  // 表单是否在下方直接展示错误信息
  const showError = dataSchema.validateTime === 'change'
  return (order || []).map((item: string, i: number) => {
    // 当前Field ui类型
    const type = properties[item].type
    // 当前表单是否为普通数组（自增数组）中的每一项
    const isArrayItem = parentType === 'array' && item === '$container'
    // 普通数组子表单类型
    // 当前key路径 （相对dataSchema）
    const currentDataSchemaKey = parentDataSchemaKey
      .concat([
        // array为items，object为properties
        parentType === 'array' ? 'items' : 'properties',
        // 普通数组
        isArrayItem ? '' : item,
      ])
      .filter((item) => item !== '')
    // 当前key路径 （相对uiSchema）
    const currentUiSchemaParentKey = parentUiSchemaKey.concat([
      'properties',
      item,
    ])
    // 当前key（相对formData）普通数组需要获取currentArraykey值
    let currentFieldKey = `${parentFormDataKey}.${
      isArrayItem ? currentArrayKey : item
    }`
    currentFieldKey = currentFieldKey.replace(/^\./, '')
    // 防止用户动态修改uiSchema中表单项key值，无匹配dataSchema导致白屏的问题
    if (!Object.prototype.hasOwnProperty.call(properties, item)) {
      console.log(
        'Render Error: no schema for',
        'color: #fff; background: #ffff00;padding: 3px',
        item
      )
      return null
    }
    // 必填表单
    const requiredFields = currentDataSchema.required || []
    // 当前Field的主题
    const itemTheme = (properties[item]?.theme as Theme) || theme

    // 当前Field标题
    const data =
      currentDataSchema[parentType === 'array' ? 'items' : 'properties']
    const title = item === '$container' ? data.title : data[item].title

    // 若当前Field在dataSchema中未定义，则不渲染
    if (parentType === 'object' && !currentDataSchema.properties[item])
      return null
    if (parentType === 'array') {
      if (item == '$container') {
        // 普通数组不做任何操作
      } else {
        // 元祖
        if (!currentDataSchema.items[item]) return null
      }
    }

    // 当前Field的query函数
    const queryFunc = onQuery?.[item]
    const asyncValidate = onValidate?.[item]
    // 当前Field的错误信息
    const error = errors[currentFieldKey] || ''
    // 当前Field的数据
    const cKey = isArrayItem ? (currentArrayKey as number) : item
    const fieldData = currentFormData[cKey]
    // 当前Field是否展示标题
    const showTitle = Object.prototype.hasOwnProperty.call(
      properties[item],
      'showTitle'
    )
      ? (properties[item].showTitle as boolean)
      : true
    // 布局样式
    const containerStyle = Object.assign(
      type === 'object' && properties[item]?.mode === 'collapse'
        ? { marginBottom: 20 }
        : {},
      isRoot ? { width: '100%', ...globalContainerStyle } : { width: '100%' },
      properties[item]?.containerStyle || {}
    )
    handleMargin(containerStyle)
    // 当前Field所接收的ui props
    const {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      title: uiTitle,
      ...uiProp
    } = properties[item]

    // 当前Field的标题样式, property的样式会覆盖全局标题样式
    const titleUi = Object.assign(
      {
        placement: 'left',
        width: '82px',
        textAlign: 'left',
        verticalAlign: 'center',
        requiredFields: false,
        fontSize: 12,
        color: '#000000',
      },
      globalTitleUi,
      properties[item]?.title || {}
    )

    // 当前Field的提示信息
    const description = uiProp.description || null
    // Field控制函数体
    const vcontrol = properties[item].vcontrol
    let controlFuc
    // 是否展示当前Field
    let isShow = false
    // 解析联动控制函数函数体
    if (vcontrol) {
      try {
        if (typeof vcontrol === 'function') {
          controlFuc = vcontrol
        } else {
          controlFuc = new Function('props', vcontrol as string)
        }
        isShow = controlFuc({
          formData,
          uiSchema,
          dataSchema,
          get,
          getKey,
          fieldKey: currentFieldKey,
          fieldData,
        })
      } catch (error) {
        console.error(`${item}：vcontrol函数体错误，请确认`)
        console.error(error)
      }
    } else {
      isShow = true
    }

    if ((!isShow || !containerMap) && formMode !== 'generator') return null
    /* 结束 */
    const Container =
      containerMap[type as keyof typeof containerMap] || containerMap.default
    // 组件需要的prop参数
    const ui = { uiProp }
    // 不同容器的特殊prop
    const container = {
      array: {},
      object: {},
    }
    // 非FieldContaienr基础容器均需要透传，并且render函数也需要传递
    const render = {
      containerHoc,
      // 全局dataSchema
      dataSchema,
      // 全局uiSchema
      uiSchema,
      // 所有表单错误信息
      errors,
      // 所有表单数据
      formData,
      // 所有表单异步数据获取函数对象
      onQuery,
      // 所有表单异步校验函数对象
      onValidate,
      // 父级uiSchema的路径
      parentUiSchemaKey: currentUiSchemaParentKey,
      // 父级表单的dataSchema路径
      parentDataSchemaKey: currentDataSchemaKey,
      // 父级表单的formData路径===父级表单的fieldKey
      parentFormDataKey: currentFieldKey,
      // 容器对象
      containerMap,
      // vcontrol 参数get函数。用来获取指定fieldKey的formData、uiSchema、dataSchema
      get,
      arrayKey,
    }
    // 所有容器均需要传递
    const common = {
      formMode: uiProp.formMode || formMode,
      // 当前表单标题
      title,
      // 当前表单使用主题
      theme: itemTheme,
      // 当前表单错误信息
      error,
      // 当前表单必填字段
      requiredFields,
      // 当前表单提示信息
      description,
      // 是否展示标题
      showTitle,
      // 当前表单的标题样式
      titleUi,
      // 是否展示错误
      showError,
      // 容器样式
      ...(formMode != 'generator' && { containerStyle }),
      // 当前渲染表单类型
      type,
      // 容器key值
      key: item,
      // 当前表单异步数据查询接口
      queryFunc,
      // 当前表单异步校验函数
      asyncValidate,
      // 当前表单的fieldKey值（相对formData）
      fieldKey: currentFieldKey,
      // 当前表单数据
      fieldData,
      // 全局dispatch函数
      dispatch,
      // 所有组件
      uiComponents,
      // 表单onChange需要。获取当前fieldKey相对uiSchema、dataShcema路径的方法
      getKey,
      // 自定义组件
      customComponents,
    }
    return (
      // eslint-disable-next-line react/jsx-key
      containerHoc ? (
        containerHoc(
          <Container
            {...container[type as keyof typeof container]}
            // 非FieldContainer容器透传render
            {...(container[type as keyof typeof container] && render)}
            {...common}
            {...ui}
          />,
          {
            fieldKey: currentFieldKey,
            error,
            containerStyle,
            type,
            parentMode,
            parentType,
            isFirst: !!isRoot && i === 0,
            uiProp,
            theme: itemTheme,
          }
        )
      ) : (
        <Container
          {...container[type as keyof typeof container]}
          // 非FieldContainer容器透传render
          {...(container[type as keyof typeof container] && render)}
          {...common}
          {...ui}
        />
      )
    )
  })
}

export default Render
