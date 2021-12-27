import React, { memo, Fragment, useMemo } from 'react'
import { createPortal } from 'react-dom'
import { useDraggable, DragOverlay } from '@dnd-kit/core'
import { nanoid } from 'nanoid'
import Item from './Item'
import type { DragAtomProps } from './Item'

const DragAtom: React.FC<DragAtomProps> = ({
  icon,
  unitedSchema,
  customBarStyle,
}) => {
  const id = useMemo(() => {
    return `${unitedSchema.ui.type}_${nanoid(6)}`
  }, [unitedSchema])
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id,
    data: { unitedSchema, dragType: 'leftSideBar' },
  })

  return (
    <Fragment>
      <Item
        ref={setNodeRef}
        attributes={attributes}
        listeners={listeners}
        icon={icon}
        unitedSchema={unitedSchema}
        customBarStyle={customBarStyle}
      />
      {isDragging &&
        createPortal(
          <DragOverlay>
            <Item
              icon={icon}
              unitedSchema={unitedSchema}
              customBarStyle={customBarStyle}
            />
          </DragOverlay>,
          document.body,
          id
        )}
    </Fragment>
  )
}

export default memo(DragAtom)
