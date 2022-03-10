/*
 * drip-form拖拽高阶函数
 * @Author: jiangxiaowei
 * @Date: 2021-10-09 14:28:24
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: 2022-03-02 13:04:29
 */
import React, { memo, useCallback, useMemo, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import cx from 'classnames'
import { useDroppable, useDraggable, DragOverlay } from '@dnd-kit/core'
import styles from './index.module.css'
import {
  selectedAtom,
  closestEdgeAtom,
  allFieldAtom,
  curTypeAtom,
  viewportConfigSelector,
} from '@generator/store'
// import Placeholder from '../CustomComponents/Placeholder'
import { useCanDrop } from '@generator/hooks'
import DragItem from '@generator/components/LeftSideBar/DragAtom/Item'
import { useContainerStyle } from '@jdfed/hooks'
import ActiveTools from '../ActiveTools'
import type { FC } from 'react'
import type { ContainerStyle, ClosestEdge } from '@jdfed/utils'
import type { ReactElement } from 'react'

type Props = {
  fieldKey: string
  containerStyle: ContainerStyle
  type: string
  parentType: string
  parentMode: string
  isFirst: boolean
}

// over对应边classname
const directCls = {
  left: 'isLeftOver',
  top: 'isTopOver',
  bottom: 'isBottomOver',
  right: 'isRightOver',
  over: '',
}

const DripFormDragHoc: FC<Props> = memo(
  ({
    fieldKey,
    children,
    containerStyle,
    type,
    parentType,
    parentMode,
    isFirst,
  }) => {
    const newContainerStyle = useContainerStyle('edit', containerStyle)
    const [ref, setRef] = useState<HTMLElement | null>(null)
    const allField = useRecoilValue(allFieldAtom)
    // 对象、数组容器为空（改变碰撞检测算法实现）
    const hasEmptyEle = useMemo(() => {
      return (
        ['object', 'array'].includes(type) &&
        Object.keys((children as ReactElement)?.props?.uiProp?.properties || {})
          .length < 1
      )
    }, [children, type])
    // 最近的一条边
    const closestEdge = useRecoilValue<ClosestEdge>(closestEdgeAtom)
    const disabled = useCanDrop({
      fieldKey,
      parentType,
      parentMode,
      type,
      hasEmptyEle,
    })
    const { setNodeRef: setDropRef, isOver } = useDroppable({
      id: `${fieldKey}_droppable`,
      data: {
        hasEmptyEle,
        fieldKey,
        type,
      },
      disabled: disabled,
    })
    const {
      attributes,
      listeners,
      setNodeRef: setDragRef,
      isDragging,
    } = useDraggable({
      id: `${fieldKey}`,
      data: {
        dragType: 'viewport',
        fieldKey,
      },
    })

    // 当前选中的field
    const [selectedFieldKey, setSelectedFieldKey] = useRecoilState(selectedAtom)
    const setCurType = useSetRecoilState(curTypeAtom)

    /**
     * 选中field的事件
     */
    const onSelect = useCallback(
      (e) => {
        e.stopPropagation()
        setSelectedFieldKey(fieldKey as string)
        setCurType(type)
      },
      [fieldKey, setCurType, setSelectedFieldKey, type]
    )

    useEffect(() => {
      if (selectedFieldKey === fieldKey) {
        ref?.scrollIntoView()
      }
    }, [fieldKey, ref, selectedFieldKey])

    const setRefFn = useCallback(
      (el) => {
        setDropRef(el)
        setRef(el)
      },
      [setDropRef]
    )

    const viewportConfig = useRecoilValue(viewportConfigSelector)

    return (
      <>
        <div
          ref={setRefFn}
          className={cx(
            'drip-form_container--droppable',
            // hover时，虚线边框
            selectedFieldKey !== fieldKey && styles.droppableHover,
            // 选中时，实现边框
            selectedFieldKey === fieldKey && styles.selected,
            // over时最近的边高亮
            isOver && closestEdge !== 'over' && styles[directCls[closestEdge]],
            //拖拽到空的嵌套容器中时，父元素高亮
            isOver && closestEdge === 'over' && styles.childIsOver
          )}
          onClick={onSelect}
          style={{
            ...newContainerStyle,
          }}
        >
          {selectedFieldKey === fieldKey && viewportConfig.showActionBar && (
            <ActiveTools isFirst={isFirst} />
          )}
          <div
            className="draggable"
            {...listeners}
            {...attributes}
            ref={setDragRef}
          >
            <>
              {children}
              {/* 数组、对象容器支持嵌套；添加兜底droppable容器(只有容器中没有子元素时才添加) */}
              {/* {hasEmptyEle && <Placeholder fieldKey={fieldKey} />} */}
            </>
          </div>
        </div>
        {isDragging &&
          createPortal(
            <DragOverlay>
              <DragItem
                icon={allField[type].icon}
                unitedSchema={allField[type].unitedSchema}
              />
            </DragOverlay>,
            document.body,
            `${fieldKey}_draggable`
          )}
      </>
    )
  }
)

DripFormDragHoc.displayName = 'DripFormDragHoc'

export default DripFormDragHoc
