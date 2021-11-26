import React, { memo } from 'react'
import { Modal } from 'antd'
import DripForm from '@jdfed/drip-form'

import {
  previewVisibleAtom,
  schemaAtom,
  DripFormUiComponetsAtom,
} from '@generator/store'
import { useRecoilState, useRecoilValue } from 'recoil'

const PreviewJSON = () => {
  const [previewVisible, setPreviewVisible] = useRecoilState(previewVisibleAtom)
  const unitedSchema = useRecoilValue(schemaAtom)
  const uiComponents = useRecoilValue(DripFormUiComponetsAtom)

  return (
    <Modal
      keyboard={false}
      maskClosable={false}
      visible={previewVisible}
      footer={null}
      width={1000}
      title="表单预览效果"
      onCancel={() => {
        setPreviewVisible(false)
      }}
    >
      <DripForm unitedSchema={unitedSchema} uiComponents={uiComponents} />
    </Modal>
  )
}

export default memo(PreviewJSON)
