import React, { memo, useMemo } from 'react'
import { Align, TitleType, IconDesc } from './type'
import questionCircle from '../QuestionCircle'
import './index.styl'

const Title = memo<TitleType>(
  ({
    titleUi,
    requiredFields,
    fieldKey,
    description,
    uiComponents,
    theme,
    title,
  }) => {
    const QuestionCircle = uiComponents[theme]?.QuestionCircle || questionCircle
    const iconDesc = useMemo<IconDesc>(() => {
      if (Array.isArray(description)) {
        let iconDesc: IconDesc
        ;(description || []).map((item) => {
          if (item?.type === 'icon') {
            iconDesc = item
          }
        })
        return iconDesc
      } else if (typeof description === 'object') {
        return description?.type === 'icon' ? description : undefined
      } else {
        return undefined
      }
    }, [description])
    return (
      <div
        className="form-container__title"
        style={{
          ...(titleUi?.width && { width: titleUi.width }),
          ...(titleUi?.textAlign && {
            justifyContent: Align[titleUi?.textAlign],
          }),
          ...(titleUi?.verticalAlign && {
            alignItems: Align[titleUi?.verticalAlign],
          }),
          ...(titleUi?.margin && { margin: titleUi.margin }),
          ...(titleUi?.fontSize && { fontSize: titleUi.fontSize }),
          ...(titleUi?.color && { color: titleUi.color }),
        }}
      >
        {titleUi?.requiredIcon &&
        requiredFields.includes(fieldKey.split('.').pop() as string) ? (
          <span style={{ color: 'red' }}>*</span>
        ) : (
          ''
        )}
        {title}
        {titleUi?.showColon && ':'}
        {iconDesc &&
          iconDesc?.type === 'icon' &&
          iconDesc?.title &&
          QuestionCircle && <QuestionCircle {...iconDesc} />}
      </div>
    )
  }
)
Title.displayName = 'Title'
export default Title

/**
 * 标题布局位置
 * @param placement
 */
export function titlePlacementCls(placement?: string): string {
  switch (placement) {
    case 'top':
      return 'title-top'
    case 'right':
      return 'title-right'
    case 'bottom':
      return 'title-bottom'
    default:
      return 'title-left'
  }
}
