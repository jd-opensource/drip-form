import React, { memo } from 'react'
import { Modal } from 'antd'
import DripForm from '@jdfed/drip-form'

import {
  previewAtom,
  previewSchemaAtom,
  DripFormUiComponetsAtom,
} from '@generator/store'
import { useRecoilState, useRecoilValue } from 'recoil'

const PreviewJSON = () => {
  const [preview, setPreview] = useRecoilState(previewAtom)
  const unitedSchema = useRecoilValue(previewSchemaAtom)
  const uiComponents = useRecoilValue(DripFormUiComponetsAtom)

  return (
    <Modal
      keyboard={false}
      maskClosable={false}
      visible={preview.visible}
      footer={null}
      width={1000}
      title="表单预览效果"
      onCancel={() => {
        setPreview((old) => ({ ...old, visible: false }))
      }}
    >
      <DripForm unitedSchema={unitedSchema} uiComponents={uiComponents} />
    </Modal>
  )
}

export default memo(PreviewJSON)
