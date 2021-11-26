/*
 * 最近边（中心点计算）&& over的容器
 * @Author: jiangxiaowei
 * @Date: 2021-10-11 11:39:59
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: 2021-11-04 18:00:37
 */
import type {
  LayoutRect,
  UniqueIdentifier,
  DroppableContainer,
  ViewRect,
} from '@dnd-kit/core'
import type { ClosestEdge } from '@jdfed/utils'
type Coordinates = {
  x: number
  y: number
}

export function isViewRect(entry: LayoutRect | ViewRect): entry is ViewRect {
  return 'top' in entry
}

export function distanceBetween(p1: Coordinates, p2: Coordinates): number {
  return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2))
}

/**
 * 获取矩形的中心点坐标
 */
const centerOfRectangle = (
  rect: LayoutRect,
  left = rect.offsetLeft,
  top = rect.offsetTop
): Coordinates => {
  return {
    x: left + rect.width * 0.5,
    y: top + rect.height * 0.5,
  }
}

/**
 * 获取矩形四条边的中心点的坐标
 * @param rect
 * @param left
 * @param top
 * @returns 矩形四条边的中心点的坐标
 */
const centerEdgeRectangle = (
  rect: LayoutRect,
  left = rect.offsetLeft,
  top = rect.offsetTop
): {
  top: Coordinates
  right: Coordinates
  bottom: Coordinates
  left: Coordinates
} => {
  const { width, height } = rect
  return {
    top: { x: left + width / 2, y: top },
    right: { x: left + width, y: top + height / 2 },
    bottom: { x: left + width / 2, y: top + height },
    left: { x: left, y: top + height / 2 },
  }
}

// 获取容器的宽、高、top、left
const getContainer = (
  rect: LayoutRect | ViewRect
): {
  width: number
  height: number
  left: number
  top: number
} => {
  return {
    width: rect.width,
    height: rect.height,
    left: isViewRect(rect) ? rect.left : rect.offsetLeft,
    top: isViewRect(rect) ? rect.top : rect.offsetTop,
  }
}

/**
 * 判断拖拽的元素是否在放置的元素中间
 * @param dragRect 拖拽的元素
 * @param dropRect 放置的元素
 * @returns boolean
 */
const getIsOver = (dragRect: ViewRect, dropRect: LayoutRect) => {
  const {
    width: dragW,
    height: dragH,
    left: dragL,
    top: dragT,
  } = getContainer(dragRect)
  const {
    width: dropW,
    height: dropH,
    left: dropL,
    top: dropT,
  } = getContainer(dropRect)
  return (
    dragL >= dropL &&
    dragL + dragW <= dropL + dropW &&
    dragT >= dropT &&
    dragT + dragH <= dropH + dropT
  )
}

export const closestEdge = ({
  collisionRect,
  droppableContainers,
}: {
  collisionRect: ViewRect
  droppableContainers: DroppableContainer[]
}): {
  minDistanceContainer: string | null
  overContainers: DroppableContainer[]
  minDistanceEdgeDirect: 'top' | 'right' | 'bottom' | 'left' | 'over'
} => {
  const overContainers: DroppableContainer[] = []
  // 最近的一条边方向
  let minDistanceEdgeDirect: ClosestEdge = 'bottom'
  // 最短距离
  let minDistanceToEdge = Infinity
  // 距离最近的边的容器
  let minDistanceContainer: UniqueIdentifier | null = null
  const corners = centerOfRectangle(
    collisionRect,
    isViewRect(collisionRect) ? collisionRect.left : undefined,
    isViewRect(collisionRect) ? collisionRect.top : undefined
  )

  for (const droppableContainer of droppableContainers) {
    const {
      rect: { current: rect },
      data,
    } = droppableContainer

    if (rect) {
      if (getIsOver(collisionRect, rect) && data.current?.hasEmptyEle) {
        overContainers.push(droppableContainer)
      }
      const rectCorners = centerEdgeRectangle(
        rect,
        isViewRect(rect) ? rect.left : undefined,
        isViewRect(rect) ? rect.top : undefined
      )
      for (const direct in rectCorners) {
        const distance = distanceBetween(
          corners,
          rectCorners[direct as keyof typeof rectCorners]
        )
        if (distance <= minDistanceToEdge) {
          minDistanceToEdge = distance
          minDistanceEdgeDirect = direct as ClosestEdge
          minDistanceContainer = droppableContainer.id
        }
      }
    }
  }
  return {
    minDistanceContainer,
    minDistanceEdgeDirect,
    overContainers,
  }
}
