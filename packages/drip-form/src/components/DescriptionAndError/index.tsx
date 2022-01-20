import React, { memo } from 'react'
import cx from 'classnames'
import type { TitlePlacement } from '@jdfed/utils'
import type { DescriptionAndErrorType } from './type'
import './index.styl'
/**
 * 计算tips和error父组件的padding
 * @param titleWidth
 * @param titlePlacement
 * @param marginArr
 * @param showTitle
 */
function calcOtherPadding(
  titleWidth: string | number | undefined = '82px',
  titlePlacement: TitlePlacement = 'left',
  marginArr: string[] = ['0', '10', '0', '0'],
  showTitle: boolean
) {
  // 如果不需要title，则padding直接设置为0
  if (!showTitle) return '0'

  // 处理横向的padding偏移
  let calcWidth = `${titleWidth}`
  if (marginArr[1] !== '0') calcWidth += ` + ${marginArr[1]}`
  if (marginArr[3] !== '0') calcWidth += ` + ${marginArr[3]}`

  if (titlePlacement === 'left') {
    return `0 0 0 calc(${calcWidth})`
  } else if (titlePlacement === 'right') {
    return `0 calc(${calcWidth}) 0 0`
  } else {
    return 0
  }
}

const DescriptionAndError = memo<DescriptionAndErrorType>(
  ({ titleUi, showTitle, description, showError, error }) => {
    const { width, placement, margin } = titleUi || {}
    return (
      <div
        className="form-container__other"
        style={{
          padding: calcOtherPadding(
            width,
            placement,
            margin ? margin.split(' ') : ['0', '10', '0', '0'],
            showTitle
          ),
        }}
      >
        {description?.type === 'text' && description?.title && (
          <div className="form-container__tips">{description?.title}</div>
        )}
        <div
          className={cx('form-container__error', {
            'form-container__error--no-title': !showTitle,
          })}
        >
          {showError && error}
        </div>
      </div>
    )
  }
)

DescriptionAndError.displayName = 'Description'

export default DescriptionAndError
