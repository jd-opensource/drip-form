/**
 * 联合Schema解析函数
 */
import { judgeAndRegister, isEmpty } from '../common'
import { FieldAtomType, UiSchema, UnitedSchema, DataSchema } from './types'
import type { Map } from '../common/type'

/**
 * 递归解析Schema
 * @param {FieldAtomType} item 待解析的联合schema的某个子节点
 * @param {FieldAtomType} fatherItem 待解析的某个联合schema的父级节点
 * @param {number | '$container'} idx 子节点的序号，或是作为容器的标识
 * @param {'items' | 'properties'} containerKey 读取dataSchema所需的容器字段
 * @param {DataSchema} currLevelDataSchema 当前父节点的dataSchema
 * @param {UiSchema} currLevelUiSchema 当前父节点的uiSchema
 * @param typePath
 * @param fatherPath
 * @param customProps 自定义属性的收集存储
 */
function recursiveParse(
  item: FieldAtomType,
  fatherItem: FieldAtomType,
  idx: number | '$container',
  containerKey: 'items' | 'properties',
  currLevelDataSchema: DataSchema,
  currLevelUiSchema: UiSchema,
  typePath: Map,
  fatherPath: string,
  customProps: any[]
) {
  // 获取表单项标识符
  const fieldKey = item.fieldKey || idx
  // 填充typePath（type为dataSchema的类型）
  const currKeyPath = `${fatherPath === '' ? '' : fatherPath + '.'}${fieldKey}`
  typePath[currKeyPath] = {
    fatherKey: fatherPath,
    type: item.type,
  }

  // 获取父级元素的ui类型
  const fatherUiType = fatherItem.ui?.type || fatherItem['ui:type']
  // 如果是数组或对象容器（undefined默认为对象容器），则需要创建order字段用于ui渲染
  if (
    fatherUiType === 'array' ||
    fatherUiType === 'object' ||
    fatherUiType === undefined
  ) {
    // 判断currLevelUiSchema是否存在order属性，如果没有则创建
    judgeAndRegister(currLevelUiSchema, 'array', 'order')
  }

  // 待渲染表单中不包含当前项时，填充进order，可作为表单的展示顺序
  if (currLevelUiSchema.order && !currLevelUiSchema.order.includes(fieldKey)) {
    currLevelUiSchema.order.push(fieldKey)
  }

  // 开始解析表单配置项
  for (const key in item) {
    if (Object.prototype.hasOwnProperty.call(item, key)) {
      // 当前表单配置项是否为UI Props
      const isUiProp = /^ui:/.test(key) || key === 'ui'

      if (isUiProp) {
        // 判断uiSchema是否有properties.[fieldKey]属性，没有则创建
        judgeAndRegister(currLevelUiSchema, 'object', 'properties', fieldKey)

        // 对于 { ui: { title: {}, ... } } 类型的解析
        if (key === 'ui') {
          Object.assign(currLevelUiSchema.properties[fieldKey], {
            ...item[key],
          })
        } else {
          // 对于 { 'ui:xxx': {}, 'ui:yyy': {} } 类型的解析
          currLevelUiSchema.properties[fieldKey][key.slice(3)] = item[key]
        }
      } else {
        switch (key) {
          case 'schema':
          case 'items':
            // 处理对象嵌套
            initParse(
              item,
              fieldKey === '$container'
                ? (judgeAndRegister(
                    currLevelDataSchema,
                    'object',
                    containerKey
                  ) as DataSchema)
                : (judgeAndRegister(
                    currLevelDataSchema,
                    'object',
                    containerKey,
                    fieldKey
                  ) as DataSchema),
              judgeAndRegister(
                currLevelUiSchema,
                'object',
                'properties',
                fieldKey
              ) as UiSchema,
              typePath,
              currKeyPath,
              customProps
            )
            break
          case 'requiredMsg':
            judgeAndRegister(currLevelDataSchema, 'array', 'required')
            judgeAndRegister(
              currLevelDataSchema,
              'object',
              'errorMessage',
              'required'
            )
            // 必填项报错信息解析
            if (item[key]) {
              if (currLevelDataSchema.required) {
                currLevelDataSchema.required.push(fieldKey)
              }
              currLevelDataSchema.errorMessage.required[fieldKey] = item[key]
            }
            break
          case 'errMsg':
            judgeAndRegister(
              currLevelDataSchema,
              'object',
              containerKey,
              fieldKey
            )
            // 兜底报错信息解析
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            currLevelDataSchema[containerKey][fieldKey].errorMessage = item[key]
            break
          default:
            if (key !== 'fieldKey') {
              // 判断并收集自定义属性
              if (key.match(/^\$:/)) {
                customProps.push(key)
              }

              if (fieldKey === '$container') {
                judgeAndRegister(currLevelDataSchema, 'object', containerKey)
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                currLevelDataSchema[containerKey][key] = item[key]
              } else {
                // 如果不存在fieldKey，则认为为元组类型的子项，需要将container创建为item类型
                if (item.fieldKey === undefined) {
                  judgeAndRegister(currLevelDataSchema, 'array', containerKey)
                }
                judgeAndRegister(
                  currLevelDataSchema,
                  'object',
                  containerKey,
                  fieldKey
                )
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                currLevelDataSchema[containerKey][fieldKey][key] = item[key]
              }
            }
        }
      }
    }
  }
}

/**
 * 初始化解析
 * @param {Map} schema 待解析的联合schema根节点或某个父节点
 * @param {DataSchema} dataSchema 在dataSchema上截取的当前节点的部分
 * @param {UiSchema} uiSchema 同上，但在uiSchema上
 * @param typePath
 * @param customProps 用户的所有$开头的自定义属性，用于在ajv中注册
 * @param fatherPath
 * @param {Boolean} fromRoot 是否来自根节点
 */
function initParse(
  schema: Map,
  dataSchema: DataSchema,
  uiSchema: UiSchema,
  typePath: Map,
  fatherPath = '',
  customProps: any[],
  fromRoot = false
) {
  // 判断下一阶段递归需要读取的容器字段，items标识父节点为数组结构，properties标识为对象结构
  const containerKey = schema?.type === 'array' ? 'items' : 'properties'
  // 对于对象结构而言，待递归的子节点在schema中，否则，对于数组而言在items中（依据JSON Schema协议规范）
  const waitToParse = schema?.schema || schema?.items || []

  // 由于items存在数组和对象两种形式，此处需要判断后走不同的处理逻辑
  if (Array.isArray(waitToParse)) {
    waitToParse.forEach((item, idx) => {
      // 数组结构，遍历递归解析
      recursiveParse(
        item,
        schema,
        idx,
        containerKey,
        dataSchema,
        uiSchema,
        typePath,
        fatherPath,
        customProps
      )
    })
  } else if (typeof schema.items === 'object') {
    // 默认在dataSchema中items为数组格式，针对对象格式的，需要将其置为对象
    // 否则会出现对象key访问数组下标的问题
    dataSchema.items = {}
    // 对象结构递归
    recursiveParse(
      schema.items,
      schema,
      '$container',
      containerKey,
      dataSchema,
      uiSchema,
      typePath,
      fatherPath,
      customProps
    )
  } else {
    throw fromRoot
      ? '表单必须要有items或schema才能开始解析！'
      : `${schema.fieldKey || ''}的解析出现错误！`
  }
}

/**
 * 处理联合schema中不在items或property的自定义属性
 * @param unitedSchema
 * @param customProps
 */
function handleFirstLevelCustomDataProps(
  unitedSchema: UnitedSchema,
  customProps: any[]
): Map {
  const customDataSchema: Map = {}
  // 遍历联合schema
  for (const key in unitedSchema) {
    // 如果是 $: 开头的自定义属性，则加入自定义属性中
    if (
      Object.prototype.hasOwnProperty.call(unitedSchema, key) &&
      key.match(/^\$:/)
    ) {
      customDataSchema[key] = unitedSchema[key]
      customProps.push(key)
    }
  }

  return customDataSchema
}

/**
 * 解析联合Schema
 * @param unitedSchema
 */
const parseUnitedSchema = (
  unitedSchema: UnitedSchema
): {
  uiSchema: UiSchema
  dataSchema: DataSchema
  typePath: Map
  customProps?: any[]
} => {
  const dataSchema = {}
  const uiSchema = {}
  // 用来存储每个表单项对应的type值，如果是嵌套格式，则解析为 { a: 'object', 'a.b': 'object', 'a.b.c': 'array' }
  const typePath = {}
  // $:的自定义属性，仅统计dataSchema的
  const customProps: any[] = []
  // 根元素的ui配置
  const ui: Map = unitedSchema.ui || {}
  // 处理全局schema配置
  const firstLevelProps = handleFirstLevelCustomDataProps(
    unitedSchema,
    customProps
  )

  for (const i in unitedSchema) {
    if (
      Object.prototype.hasOwnProperty.call(unitedSchema, i) &&
      i.startsWith('ui:')
    ) {
      ui[i.slice(3)] = unitedSchema[i]
    }
  }

  initParse(
    unitedSchema,
    dataSchema as DataSchema,
    uiSchema as UiSchema,
    typePath as Map,
    '',
    customProps,
    true
  )

  return {
    dataSchema: {
      validateTime: unitedSchema?.validateTime || 'submit',
      type: unitedSchema.type || 'object',
      ...(unitedSchema?.title && { title: unitedSchema.title }),
      ...dataSchema,
      ...firstLevelProps,
    } as DataSchema,
    uiSchema: {
      ...(unitedSchema.formMode && { formMode: unitedSchema.formMode }),
      ...(unitedSchema?.theme && { theme: unitedSchema?.theme }),
      ...(!isEmpty(ui) && ui),
      ...(unitedSchema.footer && { footer: unitedSchema.footer }),
      ...(unitedSchema.containerStyle && {
        containerStyle: unitedSchema.containerStyle,
      }),
      ...uiSchema,
    },
    typePath,
    ...(customProps.length > 0 && { customProps }),
  }
}

export { parseUnitedSchema }
