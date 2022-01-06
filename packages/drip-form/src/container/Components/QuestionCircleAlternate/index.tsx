import React, { FC, useState, memo } from 'react'
import { QuestionCircleOutlined } from '@ant-design/icons'
import './index.styl'

type Props = {
  title?: string
  trigger?: 'hover' | 'click'
}

const QuestionCircleAlternate: FC<Props> = ({ title, trigger }) => {
  const [isTipVisible, setIsTipVisible] = useState(false)

  const onMouseEnter = () => {
    if (trigger === 'hover') {
      setIsTipVisible(true)
    }
  }

  const onMouseLeave = () => {
    if (trigger === 'hover') {
      setIsTipVisible(false)
    }
  }

  const onClick = () => {
    if (trigger === 'click') {
      setIsTipVisible(!isTipVisible)
    }
  }

  return (
    <div className="question-circle-alternate">
      <div
        className="question-circle-alternate__tooltip"
        style={{
          display: isTipVisible ? '' : 'none',
        }}
      >
        <div className="question-circle-alternate__text">{title}</div>
      </div>
      <QuestionCircleOutlined
        className="field-container__title-question"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
      />
    </div>
  )
}

export default memo(QuestionCircleAlternate)
