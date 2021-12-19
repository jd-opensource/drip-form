import React, { memo, Fragment } from 'react'
// import { useDraggable } from '@dnd-kit/core'
import cx from 'classnames'
import styles from './index.module.css'
import DragAtom from './DragAtom'
import { componentsFoldAtom } from '@generator/store'
import { useRecoilValue } from 'recoil'
import { sidebarDataAtom } from '@generator/store'

const LeftSideBar: React.FC = () => {
  const fold = useRecoilValue(componentsFoldAtom)
  const { order, category } = useRecoilValue(sidebarDataAtom)
  return (
    <div className={cx(fold ? styles.leftClose : styles.left)}>
      <div className={styles.title}>组件区</div>
      <div className={styles.componentstyle}>
        {order.map((key) => {
          return (
            <Fragment key={key}>
              <div>
                <div className={styles.subtitle}>{category[key].title}</div>
                <div
                  className={cx(
                    styles.container,
                    !fold && styles.containeropen
                  )}
                >
                  <React.Suspense fallback={<div>loading...</div>}>
                    {category[key].order.map((type) => {
                      return (
                        category[key].fields[type] && (
                          <DragAtom
                            // TODO @drag
                            key={JSON.stringify(
                              category[key].fields[type].unitedSchema
                            )}
                            icon={category[key].fields[type].icon}
                            unitedSchema={
                              category[key].fields[type].unitedSchema
                            }
                          />
                        )
                      )
                    })}
                  </React.Suspense>
                </div>
              </div>
            </Fragment>
          )
        })}
      </div>
    </div>
  )
}

export default memo(LeftSideBar)
