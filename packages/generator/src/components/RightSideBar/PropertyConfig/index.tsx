import React, { memo, useCallback, useEffect, useMemo } from 'react'
import DripForm from '@jdfed/drip-form'
import {
  typeCheck,
  deepClone,
  isEmpty,
  setDeepProp,
  getThemeAndType,
} from '@jdfed/utils'
import {
  curTypePropertyConfigSelector,
  curThemeAndTypeAtom,
  curTypeAtom,
  propertyConfigSelector,
} from '@generator/store'
import useRightSidebar from '../HeadlessComponents'
import { produce } from 'immer'
import { useRecoilState, useRecoilValue } from 'recoil'
import generatorTheme from '@generator/components/GeneratorFormTheme'
import type { SetType } from '@jdfed/hooks'
import type { Map, UnitedSchema, UiSchema } from '@jdfed/utils'

const PropertyConfig = () => {
  const {
    generatorContext,
    selectedFieldKey,
    dataSchema,
    uiSchema,
    uiComponents,
    fieldKey,
  } = useRightSidebar()
  // 当前选中的组件
  const [themeAndType, setThemeAndType] = useRecoilState(curThemeAndTypeAtom)
  // 当前选中的组件类型
  const type = useRecoilValue(curTypeAtom)
  //当前类型的样式配置schema
  const curTypePropertyConfig = useRecoilValue(curTypePropertyConfigSelector)
  const propertyConfigOptions = useRecoilValue(propertyConfigSelector)

  useEffect(() => {
    const globalTheme = generatorContext.current?.get('').uiSchema.theme
    setThemeAndType(
      uiSchema.type
        ? getThemeAndType({
            ...(!['object', 'array'].includes(uiSchema.type as string) && {
              theme: globalTheme,
            }),
            ...uiSchema,
          } as UiSchema)
        : 'root'
    )
  }, [generatorContext, setThemeAndType, uiSchema, uiSchema.type])

  /**
   * 初始化配置数据
   */
  const formData = useMemo(() => {
    return {
      type: themeAndType,
      $fieldKey: dataSchema.$fieldKey || fieldKey,
      title: uiSchema.title || {},
      containerStyle: uiSchema.containerStyle || {},
      description: uiSchema.description || {},
      ...(type === 'root' && { footer: {} }),
      validateTime: dataSchema?.validateTime || 'change',
      ui: {
        ...uiSchema,
        ...(!!dataSchema.default && { default: dataSchema.default }),
        // TODO 后续等属性配置支持直接在主题测配置之后，迁移该部分
        ...(['timePicker', 'datePicker'].includes(type) &&
          typeCheck(uiSchema.placeholder) === 'Array' && {
            placeholder__range: uiSchema.placeholder,
          }),
      },
    }
  }, [
    themeAndType,
    dataSchema.$fieldKey,
    dataSchema?.validateTime,
    dataSchema.default,
    fieldKey,
    uiSchema,
    type,
  ])

  /**
   * 将数据填充进右侧配置面板前进行处理
   */
  const onParse = useCallback(
    (rawFormData) => {
      // 因为formData是从渲染区的schema中获取的，其为immer；所以此处需要深拷贝一份出来
      const formData = deepClone(rawFormData)
      Object.keys(formData).map((key) => {
        // 提示特殊处理
        if (key === 'description') {
          formData.description.hasDesc =
            Object.keys(formData.description).filter(
              (item) => item !== 'hasDesc'
            ).length > 0
        }
        // 布局特殊处理
        if (key === 'containerStyle') {
          // TODO @jiangxiaowei 暂不支持解析vw、px写法 (vw、px默认转换为百分比)
          formData.containerStyle.width =
            formData.containerStyle.width ||
            generatorContext.current?.get().uiSchema?.containerStyle?.width ||
            (type != 'root' ? '100%' : 100)
        }
        // 标题特殊处理
        if (key === 'title') {
          formData.title = Object.assign({}, uiSchema.title, {
            title: dataSchema?.title || '',
            followRootConfig: isEmpty(uiSchema.title),
            showTitle: uiSchema?.showTitle ?? true,
          })
        }
        if (key === 'footer') {
          formData.footer = Object.assign({}, uiSchema.footer, {
            showFooter: !isEmpty(uiSchema.footer),
            // onOk:uiSchema?.footer?.onOk||'',
            // onCancel:
          })
        }
      })
      return formData
    },
    [
      dataSchema?.title,
      generatorContext,
      type,
      uiSchema.footer,
      uiSchema?.showTitle,
      uiSchema.title,
    ]
  )

  /**
   * 监听配置区修改，实时更新到渲染区
   */
  const onChangeSchema = useCallback(
    ({ changeKey, get, set }) => {
      // 当chengKey为空字符串时，认为为ajv校验或初始化执行的操作，不做实时更新
      if (changeKey === '') return
      // 当前修改的字段处理为为可映射到渲染区schema的路径
      let key = changeKey
      let data = get(key).data
      const keyArr = key.split('.')
      keyArr.pop()
      const parentKey = keyArr.join('.')
      // 父元素是数组的，需要考虑数组的删除。所以修改父级数据
      if (parentKey) {
        const parentType = get(parentKey).dataSchema.type
        if (parentType === 'array') {
          key = parentKey
          data = get(parentKey).data
        }
      }
      // 是否设置formData，默认不设置
      let setFormData = false
      // 需要设置的表单数据
      let fieldData
      // 默认均修改uiSchema
      let changeSchema = 'uiSchema'
      // 处理全局属性
      if (changeKey === 'validateTime') {
        changeSchema = 'dataSchema'
      }
      // 更改表单fieldKey
      if (key === '$fieldKey') {
        changeSchema = 'dataSchema'
      }

      // TODO 后续等属性配置支持直接在主题测配置之后，迁移该部分
      switch (type) {
        case 'slider':
          if (changeKey === 'ui.range') {
            setFormData = true
            if (data === true) {
              fieldData = [uiSchema?.min || 0, uiSchema?.max || 100]
            } else {
              fieldData = uiSchema?.min || 0
            }
          }
          break
        case 'colorPicker':
          if (key === 'ui.defaultValue') {
            setFormData = true
            fieldData = get('ui.defaultValue').data
            generatorContext.current?.set(
              selectedFieldKey || '',
              'dataSchema',
              (draft) => {
                setDeepProp(['default'], draft as Map, data)
              }
            )
          }
          break
        case 'timePicker':
        case 'datePicker':
          if (changeKey.startsWith('ui.placeholder__range')) {
            key = 'placeholder'
            const newData = get('ui.placeholder__range').data
            data = newData
          }
          if (changeKey.startsWith('ui.default__range')) {
            key = 'ui.default'
            const newData = get('ui.default__range').data
            data = newData
            fieldData = newData
          }
      }

      if (changeKey === 'containerStyle.width') {
        // 更改全局布局宽度时，如果选用多列并且未设置padding，则自动设置
        if (type === 'root' && data !== 100 && !get().data.padding) {
          set('containerStyle.padding', 'data', '0 10px 0 0')
        }
        if (type === 'root') {
          data = data + '%'
        }
      }
      if (changeKey === 'description.hasDesc') {
        // 如果展示description，则获取当前配置的全部信息进行填充
        if (data === true) {
          key = 'description'
          // description所有配置
          data = produce(get(key).data, (draft: Map) => {
            delete draft.hasDesc
          })
        } else {
          key = 'description'
          data = {}
        }
      }
      // 标题需要设置到dataSchema中呢
      if (changeKey === 'title.title') {
        key = 'title'
        changeSchema = 'dataSchema'
      }
      if (changeKey === 'title.showTitle') {
        key = 'showTitle'
      }
      if (changeKey === 'title.followRootConfig') {
        if (data) {
          key = 'title'
          data = {}
        } else {
          key = 'title'
          data = produce(get(key).data, (draft: Map) => {
            delete draft.followRootConfig
          })
        }
      }
      if (changeKey === 'footer.showFooter') {
        if (data) {
          key = 'footer'
          data = produce(get(key).data, (draft: Map) => {
            delete draft.showFooter
          })
        } else {
          key = 'footer'
          data = {}
        }
      }
      // 针对数组的default情况，变化的是ui.defualt.0，而不是ui.default；同时要避免ui.default_value，所以需要正则匹配
      const changeKeyMap = changeKey.split('.')
      if (
        changeKeyMap[0] === 'ui' &&
        ['default', 'default__range'].includes(changeKeyMap[1])
      ) {
        changeSchema = 'dataSchema'
        // 在ajv校验时，如果formData中已经有值，则不再生成新的formData，需要set formData
        setFormData = true
      }
      // 填充渲染区Schema
      generatorContext.current?.set(
        selectedFieldKey || '',
        changeSchema as SetType,
        (draft) => {
          setDeepProp(
            key.split('.').filter((item: string) => !['ui'].includes(item)),
            draft as Map,
            data
          )
        }
      )
      if (setFormData) {
        generatorContext.current?.set(
          selectedFieldKey || '',
          'data',
          fieldData as any
        )
      }
    },
    [generatorContext, selectedFieldKey, type, uiSchema?.max, uiSchema?.min]
  )

  /**
   * 不同表单项生成不同的联合schema
   */
  const unitedSchema = useMemo<UnitedSchema>(() => {
    return {
      validateTime: 'change',
      theme: 'antd',
      ui: {
        ...(propertyConfigOptions.control && {
          change: propertyConfigOptions.control,
        }),
      },
      schema: curTypePropertyConfig,
    }
  }, [curTypePropertyConfig, propertyConfigOptions.control])

  const newUiComponents = useMemo(() => {
    return {
      ...uiComponents,
      generatorTheme,
    }
  }, [uiComponents])

  return (
    <DripForm
      key={selectedFieldKey}
      formData={formData}
      parse={onParse}
      control={onChangeSchema}
      unitedSchema={unitedSchema}
      uiComponents={newUiComponents}
    />
  )
}

export default memo(PropertyConfig)
