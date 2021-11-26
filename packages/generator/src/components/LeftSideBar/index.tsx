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
  const sidebarData = useRecoilValue(sidebarDataAtom)
  return (
    <div className={cx(fold ? styles.leftClose : styles.left)}>
      <div className={styles.title}>组件区</div>
      <div className={styles.componentstyle}>
        {sidebarData.map((item, index) => {
          return (
            <Fragment key={index}>
              {Object.keys(item.config).length > 0 && (
                <div>
                  <div className={styles.subtitle}>{item.subTitle}</div>
                  <div
                    className={cx(
                      styles.container,
                      !fold && styles.containeropen
                    )}
                  >
                    <React.Suspense fallback={<div>loading...</div>}>
                      {Object.keys(item.config).map((type) => {
                        return (
                          <DragAtom
                            // TODO @drag
                            key={JSON.stringify(item.config[type].unitedSchema)}
                            icon={item.config[type].icon}
                            unitedSchema={item.config[type].unitedSchema}
                          />
                        )
                      })}
                    </React.Suspense>
                  </div>
                </div>
              )}
            </Fragment>
          )
        })}
      </div>
    </div>
  )
}

export default memo(LeftSideBar)
