/*
 * 拖拽居中
 * @Author: jiangxiaowei
 * @Date: 2021-10-15 18:54:34
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: 2021-10-15 19:03:01
 */

import type { Modifier } from '@dnd-kit/core'
import {
  getEventCoordinates,
  isTouchEvent,
  hasViewportRelativeCoordinates,
} from '@dnd-kit/utilities'
import { LEFTSIDEBARITEM_WH } from '@generator/utils/text'

export const snapCenterToCursor: Modifier = ({
  activatorEvent,
  activeNodeRect,
  transform,
}) => {
  if (
    activeNodeRect &&
    activatorEvent &&
    (isTouchEvent(activatorEvent) ||
      hasViewportRelativeCoordinates(activatorEvent))
  ) {
    const activatorCoordinates = getEventCoordinates(activatorEvent)
    const offsetX = activatorCoordinates.x - activeNodeRect.left
    const offsetY = activatorCoordinates.y - activeNodeRect.top

    return {
      ...transform,
      x: transform.x + offsetX - LEFTSIDEBARITEM_WH.width / 2,
      y: transform.y + offsetY - LEFTSIDEBARITEM_WH.height / 2,
    }
  }

  return transform
}
