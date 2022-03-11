import React, {
  Fragment,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react'
import DripForm from '@jdfed/drip-form'
import {
  typeCheck,
  deepClone,
  deleteDeepProp,
  isEmpty,
  setDeepProp,
} from '@jdfed/utils'
import cx from 'classnames'
import { SettingOutlined } from '@ant-design/icons'
import {
  uiTypeOptionsAtom,
  curTypePropertyConfigSelector,
  curTypeAtom,
  schemaAtom,
  curEditFieldKeyAtom,
} from '@generator/store'
import { useGetParentType } from '@generator/hooks'
// import BaseForm from './BaseForm'
import useRightSidebar from '../HeadlessComponents'
import styles from '../index.module.css'
import { original, produce } from 'immer'
import { Select, Input, Button } from 'antd'
import { CopyOutlined } from '@ant-design/icons'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { usePrevious } from '@jdfed/hooks'
import type { SetType } from '@jdfed/hooks'
import type { Map, UnitedSchema } from '@jdfed/utils'

const PropertyConfig = () => {
  const {
    generatorContext,
    selectedFieldKey,
    dataSchema,
    uiSchema,
    uiComponents,
  } = useRightSidebar()
  const [curEditFieldKey, setCurEditFieldKey] = useRecoilState(
    curEditFieldKeyAtom(selectedFieldKey)
  )
  const [prevEditFieldKey, setPrevEditFieldKey] = useState(curEditFieldKey)
  const prevSelectedFieldkey = usePrevious(selectedFieldKey)
  const parentType = useGetParentType()
  const setUnitedSchema = useSetRecoilState(schemaAtom)
  const uiTypeOptions = useRecoilValue(uiTypeOptionsAtom)
  // 当前选中的组件UI类型
  const [type, setType] = useRecoilState(curTypeAtom)
  //当前类型的样式配置schema
  const curTypePropertyConfig = useRecoilValue(curTypePropertyConfigSelector)

  useEffect(() => {
    setType((uiSchema.type as string) || 'root')
  }, [setType, uiSchema.type])

  /**
   * 初始化配置数据
   */
  const formData = useMemo(() => {
    return {
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
  }, [dataSchema?.validateTime, dataSchema.default, type, uiSchema])

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
          formData.containerStyle.width = Number(
            String(
              formData.containerStyle.width ||
                generatorContext.current?.get().uiSchema?.containerStyle
                  ?.width ||
                100
            ).split(/%|(vw)|(px)/)[0]
          )
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

      if (changeKey.startsWith('ui.options.')) {
        data = get('ui.options').data
        key = 'ui.options'
      }
      if (changeKey === 'containerStyle.width') {
        // 更改全局布局宽度时，如果选用多列并且未设置padding，则自动设置
        if (type === 'root' && data !== 100 && !get().data.padding) {
          set('containerStyle.padding', 'data', '0 10px 0 0')
        }
        // TODO @jiangxiaowei 后续支持px、vw
        data = data + '%'
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
      if (key === 'ui.default') {
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
   * 切换属性配置
   */
  const onReplace = useCallback((draft, schema) => {
    // 待删除的key
    const needToDelete = Object.keys(original(draft) as Map)

    for (const key in schema) {
      setDeepProp([key], draft as Map, schema[key])
      // 已填充的字段不应该被删除
      const idxInDraft = needToDelete.findIndex((val) => val === key)
      if (idxInDraft >= 0) {
        needToDelete.splice(idxInDraft, 1)
      }
    }

    for (const key of needToDelete) {
      deleteDeepProp([key], draft as Map)
    }
  }, [])

  /**
   * 修改ui类型
   */
  const onChangeUiType = useCallback(
    (val) => {
      let dataSchema: Map = {},
        uiSchema: Map = {}
      // 获取修改组件类型前，该组件的schema
      const preSchema = generatorContext.current?.get(selectedFieldKey || '')
      const preType = preSchema?.uiSchema.type
      const preTitle = preSchema?.dataSchema.title
      // 检查组件title是否是预设的title，默认是
      let isPresetTitle = true
      uiTypeOptions.some((item) => {
        // 找到原组件对应的初始schema，比较title
        if (item.value === preType) {
          isPresetTitle = preTitle === item.schema.title
          return true
        }
        return false
      })
      uiTypeOptions.some((item) => {
        // 找到新组件对应的初始schema，替换原组件
        if (item.value === val) {
          uiSchema = deepClone(item.schema.ui)
          dataSchema = deepClone(item.schema)
          // 如果不是预设的title，意味着用户已经自行修改过，此时需要保留原值
          if (!isPresetTitle) {
            dataSchema.title = preTitle
          }
          // 移除uiSchema配置
          Reflect.deleteProperty(dataSchema, 'ui')
          return true
        }
        return false
      })

      generatorContext.current?.set(
        selectedFieldKey || '',
        'dataSchema',
        (draft) => {
          onReplace(draft, dataSchema)
        }
      )
      generatorContext.current?.set(
        selectedFieldKey || '',
        'uiSchema',
        (draft) => {
          onReplace(draft, uiSchema)
        }
      )
      // 更新类型
      setType(val)
    },
    [generatorContext, onReplace, selectedFieldKey, setType, uiTypeOptions]
  )

  /**
   * 不同表单项生成不同的联合schema
   */
  const unitedSchema = useMemo<UnitedSchema>(() => {
    return {
      validateTime: 'change',
      theme: 'antd',
      schema: curTypePropertyConfig,
    }
  }, [curTypePropertyConfig])

  const changeFieldKey = useCallback(
    (e) => {
      const value = e?.target?.value.replaceAll('.', '')
      setCurEditFieldKey(value)
      // 获取当前选中表单相对unitdSchema的path路径
      const unitedSchemaPath = generatorContext.current?.getKey(
        selectedFieldKey || '',
        'unitedSchema'
      )
      // 修改全局unitdSchema
      unitedSchemaPath &&
        value &&
        setUnitedSchema((unitedSchema) =>
          produce(unitedSchema, (draft) => {
            setDeepProp(
              unitedSchemaPath.split('.').concat('fieldKey'),
              draft,
              value
            )
          })
        )
    },
    [generatorContext, selectedFieldKey, setCurEditFieldKey, setUnitedSchema]
  )

  useEffect(() => {
    if (prevSelectedFieldkey !== selectedFieldKey) {
      setPrevEditFieldKey(curEditFieldKey)
    }
  }, [curEditFieldKey, prevSelectedFieldkey, selectedFieldKey])

  // fieldKey必填，所以失焦后自动恢复默认key
  const onBlur = useCallback(
    (e) => {
      if (!e?.target?.value) {
        setCurEditFieldKey(prevEditFieldKey)
      }
    },
    [prevEditFieldKey, setCurEditFieldKey]
  )

  return (
    <Fragment>
      <div className={styles.panelConfig}>
        {type !== 'root' && (
          <>
            <div className={cx(styles.propertyConfig)}>
              <div className={styles.propertyConfigTitle}>
                <SettingOutlined className={cx(styles.icon)} />
                <span>组件类型</span>
              </div>
              <div className={styles.propertyConfigContent}>
                <Select
                  style={{
                    width: '100%',
                  }}
                  value={type}
                  onChange={onChangeUiType}
                  options={uiTypeOptions}
                />
              </div>
            </div>
            <div className={cx(styles.propertyConfig)}>
              <div className={styles.propertyConfigTitle}>
                <SettingOutlined className={cx(styles.icon)} />
                <span>fieldKey</span>
              </div>
              <div className={styles.propertyConfigContent}>
                <Input.Group compact>
                  <Input
                    className={styles.fieldKey}
                    value={curEditFieldKey}
                    onChange={changeFieldKey}
                    onBlur={onBlur}
                    placeholder="不可包含字符 ."
                    // 父元素为数组容器无法修改
                    disabled={parentType === 'array'}
                  />
                  <Button icon={<CopyOutlined />} />
                </Input.Group>
              </div>
            </div>
          </>
        )}
        <DripForm
          key={selectedFieldKey}
          formData={formData}
          parse={onParse}
          control={onChangeSchema}
          unitedSchema={unitedSchema}
          uiComponents={uiComponents}
        />
      </div>
    </Fragment>
  )
}

export default memo(PropertyConfig)
