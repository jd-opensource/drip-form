/*
 * @Author: jiangxiaowei
 * @Date: 2020-05-14 16:54:32
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: 2021-12-24 15:59:29
 */
import React, {
  forwardRef,
  memo,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  createContext,
} from 'react'
import produce from 'immer'
import { useImmerReducer } from 'use-immer'
import './index.styl'
// 配置与工具
import validate from '../validate'
import formDataReducer from '../reducers'
import renderCoreFn from '../render'
import { typeCheck, parseUnitedSchema, randomString } from '@jdfed/utils'
import { useValidate, useSchema, useGetKey, usePrevious } from '@jdfed/hooks'
import containerMap from '../container'
import Footer from './Footer'
import type { DripFormRenderProps } from './type'
import type { State, Action, Theme } from '@jdfed/utils'
export const FormDataContext = createContext('')

/**
 * 表单入口
 */
const DripForm = forwardRef(
  (
    {
      formData: initFormData = {},
      unitedSchema,
      ajv,
      uiComponents,
      customComponents,
      customFunc,
      control,
      onValidate = {},
      onQuery,
      transform,
      containerHoc,
      onSubmit,
      onCancel,
      parse,
      reload = true,
    }: DripFormRenderProps,
    ref
  ) => {
    const prevUnitedSchema = usePrevious(unitedSchema)
    const prevFormData = usePrevious(initFormData)
    const parseFormData = useMemo(() => {
      // 判断是否需要触发转化函数
      if (
        parse &&
        typeof parse === 'function' &&
        prevFormData !== initFormData
      ) {
        const newFormData = parse(initFormData || {})
        // 确认返回值格式正确
        if (typeof newFormData !== 'object') {
          console.error('parse函数解析失败，请确认parse的返回值是一个对象！')
          return prevFormData
        } else {
          return newFormData
        }
      }
    }, [initFormData, parse, prevFormData])
    const {
      uiSchema: initUiSchema,
      dataSchema: initDataSchema,
      typePath: initTypePath,
    } = useMemo(() => {
      return parseUnitedSchema(unitedSchema)
    }, [unitedSchema])

    // 取随机数用于存储formData数据到全局，需要透传
    const globalFormDataStoreKey = useMemo<string>(() => {
      return randomString(12)
    }, [])

    // 递归uiSchema中properties中的各项
    const recursiveSchema = useCallback(
      (currSchema, schemaKey, schemaValue) => {
        if (typeCheck(schemaValue) === 'Object') {
          Object.keys(schemaValue).forEach((itemKey) => {
            recursiveSchema(schemaValue, itemKey, schemaValue[itemKey])
          })
        } else if (typeCheck(schemaValue) === 'Array') {
          schemaValue.forEach((itemValue: any, itemIdx: number) => {
            recursiveSchema(schemaValue, itemIdx, itemValue)
          })
        } else {
          // 如果uiSchema中配置项的值为string型，判断是否需要替换为自定义方法，以$$标识，格式为：$$customFunc
          if (typeCheck(schemaValue) === 'String') {
            const customFuncReg = /^\$\$/g
            const shouldUseFunc = schemaValue.match(customFuncReg)

            if (shouldUseFunc && shouldUseFunc.length > 0) {
              currSchema[schemaKey] =
                customFunc &&
                Object.prototype.hasOwnProperty.call(customFunc, schemaValue)
                  ? customFunc[schemaValue]
                  : (console.error(
                      `找不到与'${schemaValue}'对应的自定义方法，请检查'customFunc'`
                    ),
                    schemaValue)
            }
          }
        }
      },
      [customFunc]
    )

    // 预处理uiSchema，将 $$xx 关键字转化为自定义函数
    const memoUiSchema = useMemo(() => {
      return produce(initUiSchema, (draft) => {
        const properties = draft.properties ?? []
        Object.keys(properties).forEach((formKey) => {
          recursiveSchema(properties, formKey, properties[formKey])
        })
      })
    }, [initUiSchema, recursiveSchema])

    const initArgs = useMemo<State>(
      () => ({
        typePath: initTypePath,
        uiSchema: memoUiSchema,
        dataSchema: initDataSchema,
        formData:
          validate(initDataSchema, parseFormData || initFormData, ajv)
            .formData || {},
        // ajv是否已经将dataSchema中的默认值添加到formData中
        hasDefault: false,
        errors: {},
        // 表单是否在校验中
        checking: false,
        // 当前展示（已加载）的组件。用来优化校验逻辑（隐藏表单不校验)
        visibleFieldKey: [],
        changeKey: '',
        arrayKey: {},
      }),
      [
        initTypePath,
        memoUiSchema,
        initDataSchema,
        parseFormData,
        initFormData,
        ajv,
      ]
    )
    const [data, dispatch] = useImmerReducer<State, Action>(
      formDataReducer,
      initArgs
    )

    // 重新初始化
    useEffect(() => {
      if (
        ((prevUnitedSchema && prevUnitedSchema != unitedSchema) ||
          (prevFormData &&
            Object.keys(prevFormData).length > 0 &&
            prevFormData !== initFormData)) &&
        reload
      ) {
        dispatch({
          type: 'reload',
          ...initArgs,
        })
      }
    }, [
      dispatch,
      prevFormData,
      initFormData,
      initArgs,
      initDataSchema,
      parseFormData,
      initTypePath,
      initUiSchema,
      prevUnitedSchema,
      unitedSchema,
      reload,
    ])

    const {
      typePath,
      uiSchema,
      dataSchema,
      formData,
      errors,
      checking,
      hasDefault,
      visibleFieldKey,
      changeKey,
      arrayKey,
    } = data
    const { theme = 'antd' } = uiSchema

    useEffect(() => {
      // 当前值为暂时获取其他表单数据，后续会更新获取方法
      ;(window as any)[globalFormDataStoreKey] = formData
    }, [globalFormDataStoreKey, formData])

    // 实时校验
    const validateDebounce = useValidate(validate)

    // dispatch setFormData、setUiSchema、setDataSchema 语法糖
    const { get, set, deleteField, addField, merge } = useSchema({
      dataSchema,
      uiSchema,
      typeMap: typePath,
      dispatch,
      formData,
    })

    // 获取当前fieldKey相对uiSchema、dataSchema路径
    const { getKey } = useGetKey(typePath)

    // 向外抛出表单数据
    useImperativeHandle(
      ref,
      () => ({
        errors,
        checking,
        dispatch,
        get,
        set,
        merge,
        getKey,
        // 适用于生成器的
        __generator__: {
          deleteField,
          addField,
        },
        get formData() {
          // 在用户取值时判断是否需要触发transform，并返回formData的一个拷贝
          return produce(formData, (draft) => {
            transform && transform(draft)
          })
        },
      }),
      [
        addField,
        checking,
        deleteField,
        dispatch,
        errors,
        formData,
        get,
        getKey,
        merge,
        set,
        transform,
      ]
    )

    useEffect(() => {
      validateDebounce({
        dataSchema,
        formData,
        ajv,
        dispatch,
        visibleFieldKey,
        onValidate,
      })
    }, [
      dataSchema,
      formData,
      validateDebounce,
      dispatch,
      visibleFieldKey,
      onValidate,
      ajv,
    ])

    // 最高等级 表单联动控制逻辑
    useEffect(() => {
      if (control) {
        try {
          control({
            formData,
            uiSchema,
            dataSchema,
            dispatch,
            changeKey,
            checking,
            get,
            set,
            merge,
            deleteField,
          })
        } catch (error) {
          console.error(error)
        }
      }
    }, [
      control,
      dataSchema,
      dispatch,
      formData,
      uiSchema,
      changeKey,
      checking,
      get,
      set,
      merge,
      deleteField,
    ])
    const globalTheme: Theme = theme

    return (
      <FormDataContext.Provider value={globalFormDataStoreKey}>
        <div className={'drip-form-root'}>
          {renderCoreFn({
            hasDefault,
            uiComponents,
            dataSchema,
            uiSchema,
            errors,
            formData,
            onQuery,
            onValidate,
            dispatch,
            customComponents,
            containerMap,
            getKey,
            get,
            containerHoc,
            arrayKey,
            isRoot: true,
          })}
          <Footer
            uiSchema={uiSchema}
            uiComponents={uiComponents}
            onSubmit={onSubmit}
            onCancel={onCancel}
            transform={transform}
            globalTheme={globalTheme}
            checking={checking}
            errors={errors}
            formData={formData}
            initFormData={parseFormData}
            dispatch={dispatch}
          />
        </div>
      </FormDataContext.Provider>
    )
  }
)

DripForm.defaultProps = {
  onValidate: {},
  onQuery: {},
}

DripForm.displayName = 'DripForm'

const memoDripForm = memo(DripForm)

export default memoDripForm
