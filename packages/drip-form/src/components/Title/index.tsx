import React, { memo } from 'react'
import { Align, TitleType } from './type'
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
    const QuestionCircle = uiComponents[theme]?.QuestionCircle
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
        }}
      >
        {titleUi?.requiredIcon &&
        requiredFields.includes(fieldKey.split('.').pop() as string) ? (
          <span style={{ color: 'red' }}>*</span>
        ) : (
          ''
        )}
        {title}
        {description &&
          description?.type === 'icon' &&
          description?.title &&
          QuestionCircle && <QuestionCircle {...description} />}
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
