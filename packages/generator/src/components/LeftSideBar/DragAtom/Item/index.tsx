import React, { memo, forwardRef, CSSProperties } from 'react'
import { useAddField } from '@generator/hooks'
import styles from './index.module.css'
import cx from 'classnames'
import { LEFTSIDEBARITEM_WH } from '@generator/utils/text'
import type { DraggableSyntheticListeners } from '@dnd-kit/core'
import type { UnitedSchemaAtom } from '@generator/fields/types'

export type DragAtomProps = {
  icon: string
  unitedSchema: UnitedSchemaAtom
  customBarStyle?: CSSProperties
}

type ItemType = {
  listeners?: DraggableSyntheticListeners
  attributes?: any
  customBarStyle?: CSSProperties
} & DragAtomProps

const Item = forwardRef<HTMLElement, ItemType>(
  ({ listeners, customBarStyle, attributes, icon, unitedSchema }, ref) => {
    //点击添加新的表单项
    const onClick = useAddField()

    return (
      <div
        className={cx('leftsidebar-item')}
        onClick={onClick.bind(null, { unitedSchema })}
        ref={ref}
        style={{ ...LEFTSIDEBARITEM_WH, ...customBarStyle }}
        {...listeners}
        {...attributes}
      >
        <i className={`${icon}`} />
        <span className={styles.title}>{unitedSchema.title}</span>
      </div>
    )
  }
)

Item.displayName = 'leftSidebarItem'

export default memo(Item)
