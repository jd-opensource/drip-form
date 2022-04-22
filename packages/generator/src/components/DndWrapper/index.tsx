/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useContext } from 'react'
import {
  DndContext,
  // closestCorners,
  PointerSensor,
  useSensor,
  useSensors,
  closestCenter,
  MouseSensor,
} from '@dnd-kit/core'
import { useRecoilState } from 'recoil'
import { overFieldKeyAtom, GeneratorContext } from '@generator/store'
import type { DragStartEvent, DragOverEvent, DragEndEvent } from '@dnd-kit/core'
import { useAddField } from '@generator/hooks'
import { closestEdge } from './algorithms/closestEdge'
import { closestEdgeAtom, draggingFieldKeyAtom } from '@generator/store'
import { snapCenterToCursor } from './modifiers/snapCenterToCursor'
import { combine } from '@jdfed/utils'
import type { DataSchema, UiSchema } from '@jdfed/utils'
import type { CollisionDetection } from '@dnd-kit/core'
import type { UnitedSchemaAtom } from '@generator/fields/types'
interface DndWrapperType {
  children: React.ReactNode
}

/**
 * 拖拽区的Wrapper
 * @param generatorContext
 * @param children
 * @param indicator
 * @constructor
 */
function DndWrapper({ children }: DndWrapperType) {
  // 设置当前over的边
  const [closetEdge, setClosestContainer] = useRecoilState(closestEdgeAtom)
  const generatorContext = useContext(GeneratorContext)
  // 当前选中的表单项fieldKey
  const [, setDraggingFieldKey] = useRecoilState(draggingFieldKeyAtom)
  // 当前鼠标hover所在的元素的fieldKey
  const [, setOverFieldKey] = useRecoilState(overFieldKeyAtom)
  const addField = useAddField()
  /**
   * 初始化开始拖拽的状态
   */
  const handleDragStart = useCallback(
    ({ active: { id, data } }: DragStartEvent) => {
      setOverFieldKey(id)
      document.body.style.setProperty('cursor', 'grabbing')

      // 只有viport区域拖拽，才可以设置当前表单的key单拖拽的key（左侧sidebar拖拽时，id还未生成表单）
      if (data.current?.dragType === 'viewport') {
        // 初始化状态，当前拖拽项和鼠标所在的项均为draggingFieldKey
        setDraggingFieldKey(id)
      }
    },
    [setDraggingFieldKey, setOverFieldKey]
  )

  /**
   * 记录鼠标悬浮位置
   */
  const handleDragOver = useCallback(
    ({ over }: DragOverEvent) => {
      setOverFieldKey(over?.id ?? null)
    },
    [setOverFieldKey]
  )

  const resetState = useCallback(() => {
    setOverFieldKey(null)
    setDraggingFieldKey(null)

    document.body.style.removeProperty('cursor')
  }, [setDraggingFieldKey, setOverFieldKey])

  /**
   * 结束拖拽
   */
  const handleDragEnd = useCallback(
    ({ active, over }: DragEndEvent) => {
      resetState()
      // 左侧拖拽到viewport区域结束
      if (active.data.current?.dragType === 'leftSideBar') {
        addField({
          unitedSchema: active.data.current?.unitedSchema,
          fieldKey: over?.data.current?.fieldKey,
          closestEdge: closetEdge,
        })
      } else {
        // viewport区域拖拽
        const activeKey = active.data.current?.fieldKey
        if (
          active.id !== over?.id &&
          activeKey &&
          generatorContext.current?.get
        ) {
          const { dataSchema, uiSchema } =
            generatorContext.current?.get(activeKey)
          const unitedSchema = combine(dataSchema, uiSchema) as UnitedSchemaAtom
          addField({
            unitedSchema,
            fieldKey: over?.data.current?.fieldKey,
            closestEdge: closetEdge,
            oldFieldKey: activeKey,
          })
        }
      }
    },
    [addField, closetEdge, generatorContext, resetState]
  )

  /**
   * 取消拖拽
   */
  const handleDragCancel = useCallback(() => {
    resetState()
  }, [resetState])

  // 监听指针操作
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 15,
      },
    }),
    useSensor(MouseSensor, {
      activationConstraint: {
        distance: 15,
      },
    })
  )

  const closestEdgeFn = useCallback<CollisionDetection>(
    (params) => {
      const { collisionRect, droppableContainers } = params
      const { minDistanceContainer, minDistanceEdgeDirect, overContainers } =
        closestEdge({
          collisionRect,
          droppableContainers,
        })
      if (overContainers.length > 0) {
        setClosestContainer('over')
        return closestCenter(params)
      }
      setClosestContainer(minDistanceEdgeDirect)
      return minDistanceContainer
    },
    [setClosestContainer]
  )

  return (
    <DndContext
      sensors={sensors}
      modifiers={[snapCenterToCursor]}
      collisionDetection={closestEdgeFn}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
      onDragCancel={handleDragCancel}
    >
      {children}
    </DndContext>
  )
}

export default React.memo(DndWrapper)
