import React, { memo } from 'react'
import { QuestionCircleOutlined } from '@ant-design/icons'
import { Tooltip } from 'antd'
import { typeCheck } from '@jdfed/utils'
export type DescriptionProp = {
  title?: string
  trigger?: 'hover' | 'click'
}

const QuestionCircle = (description: DescriptionProp) => {
  const tooltipTitle = (
    <div
      dangerouslySetInnerHTML={{
        __html: description.title ? description.title : '',
      }}
    ></div>
  )
  return (
    <Tooltip
      title={
        typeCheck(description.title || '') === 'String'
          ? tooltipTitle
          : description.title || ''
      }
      trigger={description?.trigger ? description.trigger : 'hover'}
    >
      <QuestionCircleOutlined className="field-container__title-question" />
    </Tooltip>
  )
}

const memoQuestionCircle = memo(QuestionCircle)

export default memoQuestionCircle
