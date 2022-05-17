/*
 * 数组容器（元祖不支持加减模式，普通数组支持加减模式）
 * @Author: jiangxiaowei
 * @Date: 2021-08-11 15:25:43
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: 2022-05-12 13:56:18
 */
import React, { useMemo, memo, useEffect, useCallback } from 'react'
import {
  DndContext,
  PointerSensor,
  useSensor,
  useSensors,
  closestCenter,
  MouseSensor,
} from '@dnd-kit/core'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import {
  restrictToVerticalAxis,
  restrictToParentElement,
} from '@dnd-kit/modifiers'
import { typeCheck } from '@jdfed/utils'
import { useArray } from '@jdfed/hooks'
import SortableItem from './SortableItem'
import { CommonContainerHoc } from '@form/components/index'
import type { RenderFnProps } from '../../render/type'
import type { Props } from '../type'
import type { ArrayProps } from './type'
import './index.styl'
const arrayContainer = memo<Props & RenderFnProps & ArrayProps>((props) => {
  const {
    dispatch,
    dataSchema,
    parentDataSchemaKey,
    fieldData = [],
    uiProp,
    fieldKey,
    formMode,
    arrayKey,
  } = props
  const currentDataSchema = (parentDataSchemaKey || []).reduce((prev, cur) => {
    if (cur === '#') {
      return prev
    } else {
      return prev[cur]
    }
  }, dataSchema as Record<string, any>)
  // 数组自增数组子元素类型
  const childType =
    typeCheck(currentDataSchema.items) === 'Object'
      ? currentDataSchema.items.type
      : undefined

  // 默认ArrayContainer模式为加减模式
  const {
    mode = 'add',
    addTitle = '添加一行数据',
    maxAddCount,
    // 是否可以拖拽排序
    canDrag,
  } = uiProp
  // 是否为add加减模式
  const isAdd = useMemo(() => mode === 'add', [mode])
  // 加减模式，判断是否超过了最大可添加行数
  const notExceedMaxCount = useMemo(
    () => maxAddCount === undefined || maxAddCount > fieldData.length,
    [maxAddCount, fieldData]
  )
  // 是否是元祖模式
  const isTuple = useMemo(() => ['normal', 'tuple'].includes(mode), [mode])
  const { addItem, arrayMove } = useArray({
    fieldKey,
    dispatch,
    fieldData,
  })
  const addIcon = useMemo(
    () => (
      <svg
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="1946"
        width="12"
      >
        <path
          d="M576 64H448v384H64v128h384v384h128V576h384V448H576z"
          fill="#262626"
          p-id="1947"
        ></path>
      </svg>
    ),
    []
  )

  // 初次加载，设置默认key
  useEffect(() => {
    if (!arrayKey[fieldKey]) {
      dispatch({
        type: 'setArrayKey',
        action: {
          fieldKey,
        },
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // 监听指针操作
  const sensors = useSensors(useSensor(PointerSensor), useSensor(MouseSensor))

  const onDragEnd = useCallback(
    (event) => {
      const { active, over } = event
      if (active.id !== over.id && arrayKey[fieldKey]) {
        const oldIndex = arrayKey[fieldKey].indexOf(active.id)
        const newIndex = arrayKey[fieldKey].indexOf(over.id)
        arrayMove(oldIndex, newIndex)
      }
    },
    [arrayKey, arrayMove, fieldKey]
  )

  // 限制垂直拖拽、限制在父元素内拖拽
  const modifiers = useMemo(
    () => [restrictToVerticalAxis, restrictToParentElement],
    []
  )

  return (
    <>
      {/* generator模式需要默认展示一份表单，自增模式、元祖模式由数据渲染表单 */}
      {canDrag && formMode != 'generator' ? (
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={onDragEnd}
          modifiers={modifiers}
        >
          <SortableContext
            items={arrayKey[fieldKey] || []}
            strategy={verticalListSortingStrategy}
          >
            {(isTuple ? [''] : fieldData).map((item, i, array) => {
              return (
                <SortableItem
                  key={(arrayKey[fieldKey] && arrayKey[fieldKey][i]) || i}
                  id={
                    (arrayKey[fieldKey] && arrayKey[fieldKey][i]) || String(i)
                  }
                  array={array}
                  index={i}
                  isAdd={isAdd}
                  {...props}
                ></SortableItem>
              )
            })}
          </SortableContext>
        </DndContext>
      ) : (
        (formMode === 'generator' || isTuple ? [''] : fieldData).map(
          (item, i, array) => {
            return (
              <SortableItem
                key={(arrayKey[fieldKey] && arrayKey[fieldKey][i]) || i}
                id={(arrayKey[fieldKey] && arrayKey[fieldKey][i]) || String(i)}
                array={array}
                index={i}
                isAdd={isAdd}
                {...props}
              ></SortableItem>
            )
          }
        )
      )}
      {isAdd && notExceedMaxCount && (
        <div
          className="array-item--add"
          // TODO 非object、array类型是否需要添加默认值，当前undeined
          onClick={addItem.bind(
            this,
            fieldData.length,
            childType === 'object' ? {} : childType === 'array' ? [] : undefined
          )}
        >
          {addIcon}
          <div className="array-item--add_title">{addTitle}</div>
        </div>
      )}
    </>
  )
})
arrayContainer.displayName = 'arrayContainer'
export default CommonContainerHoc(arrayContainer)
