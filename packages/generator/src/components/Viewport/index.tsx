/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {
  memo,
  useCallback,
  useMemo,
  useEffect,
  useContext,
  forwardRef,
  useState,
} from 'react'
import TitleHeader from './TitleHeader'
import styles from './index.module.css'
import DripFrom from '@jdfed/drip-form'
import { produce } from 'immer'
import { typeCheck, isEmpty as isObjectEmpty } from '@jdfed/utils'
import { usePrevious } from '@jdfed/hooks'
import type { Map, UnitedSchema } from '@jdfed/utils'

// import SortableField from './SortableField'
import DripFormDragHoc from './DripFormDragHoc'

import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import {
  GeneratorContext,
  schemaAtom,
  selectedAtom,
  DripFormUiComponetsAtom,
  draggingFieldKeyAtom,
  versionAtom,
  curTypeAtom,
} from '@generator/store'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { combine, deepClone } from '@jdfed/utils'
import type { ContainerHoc } from '@jdfed/drip-form'

const defaultInitializer = (index: number) => index

export function createRange<T = number>(
  length: number,
  initializer: (index: number) => any = defaultInitializer
): T[] {
  return [...new Array(length)].map((_, index) => initializer(index))
}
interface Props {
  schema?: UnitedSchema
  removable?: boolean
}

/**
 * 可拖拽排序的可视区
 * @param collapsible 是否允许容器折叠
 * @param indicator 层级间隔，即下一层级比上一层偏移的距离
 * @param indentationWidth 偏移量
 * @param removable 是否允许删除
 * @constructor
 */
const Viewport = forwardRef<HTMLDivElement, Props>(
  ({ schema, removable }, ref) => {
    const uiComponents = useRecoilValue(DripFormUiComponetsAtom)
    const generatorContext = useContext(GeneratorContext)
    const [unitedSchema, setUnitedSchema] = useRecoilState(schemaAtom)
    const [version, setVersion] = useRecoilState(versionAtom)
    // 针对viewport修改表单模式为generator
    const newUnitedSchema = useMemo(() => {
      return produce(unitedSchema, (draft) => {
        draft.formMode = 'generator'
      })
    }, [unitedSchema])
    // 当前正在拖拽的元素
    const draggingFieldKey = useRecoilValue(draggingFieldKeyAtom)
    // 当前选中的表单项
    const setSelectedFieldKey = useSetRecoilState(selectedAtom)
    const setCurType = useSetRecoilState(curTypeAtom)
    // 当前正在拖拽元素的schema
    const draggingFieldSchema = useMemo(() => {
      const schema: { data: Map | undefined; ui: Map | undefined } = {
        data: undefined,
        ui: undefined,
      }

      if (draggingFieldKey) {
        const fieldSchema = generatorContext.current?.get(draggingFieldKey)
        schema.data = fieldSchema?.dataSchema
        schema.ui = fieldSchema?.uiSchema
      }
      return schema
    }, [draggingFieldKey, generatorContext])

    /**
     * 针对DripForm的Container，使用可拖拽的高阶组件进行包裹
     */
    const containerHocFunc = useCallback<ContainerHoc>(
      (FormItem, formItemProps) => {
        const {
          fieldKey: currentFieldKey,
          containerStyle,
          type,
          parentType,
          parentMode,
          isFirst,
        } = formItemProps
        return (
          <DripFormDragHoc
            key={currentFieldKey}
            fieldKey={currentFieldKey}
            containerStyle={containerStyle}
            type={type}
            parentMode={parentMode}
            parentType={parentType}
            isFirst={isFirst}
          >
            {FormItem}
          </DripFormDragHoc>
        )
      },
      []
    )

    /**
     * 有序fieldKey列表，从generatorContext的order中获取，用于渲染
     * 此处不能使用memo，因为ref无法被监听修改
     */
    const schemaMap = generatorContext.current?.get('')
    const uiSchema = schemaMap?.uiSchema

    /**
     * 由于在viewport内对于dripform均由内部的set和merge触发
     * 由于外部传入的schema仅在init时进行了注册
     * 为了保持全局schema的一致，此处需要提取dripform内部维护的ui和data，生成联合schema
     * 存储在全局的schemaAtom中
     * 注意：仅修改schemaAtom不会引起dripform重渲，因为还有key值限制
     */
    const onSyncFormChange = useCallback(
      ({ uiSchema, dataSchema }) => {
        const unitedSchema = combine(dataSchema, uiSchema)
        delete unitedSchema?.ui?.mode
        setUnitedSchema(
          produce(unitedSchema, (draft) => {
            delete draft?.ui?.formMode
            delete draft?.formMode
          })
        )
      },
      [setUnitedSchema]
    )

    /**
     * 初始化时，将外部传入的联合schema填充至recoil
     */
    useEffect(() => {
      schema && !isObjectEmpty(schema) && setUnitedSchema(schema)
      setVersion((version) => version + 1)
      // 此处请不要添加依赖，schema仅在初始化时进行操作
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const isEmpty = useMemo(() => {
      return (
        !newUnitedSchema ||
        ((!newUnitedSchema.schema ||
          (typeCheck(newUnitedSchema?.schema) === 'Array' &&
            newUnitedSchema.schema.length === 0)) &&
          (!newUnitedSchema?.ui?.footer ||
            (typeCheck(newUnitedSchema?.ui?.footer) === 'Object' &&
              Object.keys(newUnitedSchema?.ui?.footer).length === 0)))
      )
    }, [newUnitedSchema])

    const prevIsEmpty = usePrevious(isEmpty)

    useEffect(() => {
      if (prevIsEmpty === true && isEmpty === false) {
        setVersion((version) => version + 1)
      }
    }, [isEmpty, prevIsEmpty, setVersion])

    const clickFn = useCallback(() => {
      setSelectedFieldKey(null)
      setCurType('root')
    }, [setCurType, setSelectedFieldKey])

    return (
      <div className={styles.viewport} onClick={clickFn}>
        <TitleHeader />
        <div className={styles.formstyle} ref={ref}>
          <DripFrom
            ref={generatorContext}
            key={version}
            reload={false}
            unitedSchema={newUnitedSchema}
            uiComponents={uiComponents}
            containerHoc={containerHocFunc}
            control={onSyncFormChange}
          />
          {isEmpty && (
            <div className={styles.emptyMask}>请从左侧面板点击添加</div>
          )}
        </div>
      </div>
    )
  }
)

Viewport.displayName = 'viewport'

export default memo(Viewport)
