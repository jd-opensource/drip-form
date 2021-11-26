import React, { memo, useState, useEffect } from 'react'
import styles from './index.module.css'
import { SaveOutlined, LogoutOutlined } from '@ant-design/icons'
import { message } from 'antd'
import {
  componentsFoldAtom,
  schemaAtom,
  IsSavedAtom,
  versionAtom,
} from '@generator/store'
import { useSetRecoilState, useRecoilState } from 'recoil'
import MonacoEdit from './MonacoEdit'
import { OnChange } from '@monaco-editor/react'
const defaultValue = JSON.stringify({
  theme: 'antd',
  validateTime: 'change',
  schema: [],
})

const EditJSON = () => {
  const setFold = useSetRecoilState(componentsFoldAtom)
  const [unitedSchema, setUnitedSchema] = useRecoilState(schemaAtom)
  const [isSaved, setIsSaved] = useRecoilState(IsSavedAtom)
  const setVersion = useSetRecoilState(versionAtom)
  const [json, setJson] = useState(unitedSchema)

  useEffect(() => {
    setJson(unitedSchema)
  }, [unitedSchema])
  /**
   * 保存json
   */
  const saveJson = () => {
    setUnitedSchema(json)
    setVersion((number) => number + 1)
    setIsSaved(true)
    message.success('保存成功，真棒👍🏻', 2)
  }

  const quitEdit = () => {
    // 保存成功
    if (isSaved) {
      setFold(false)
    } else {
      message.warning('请先保存JSON编辑结果，再退出！', 2)
    }
  }

  const handleEditorChange: OnChange = (value) => {
    try {
      value && setJson(JSON.parse(value))
    } catch (error) {
      console.error(error)
    }
    setIsSaved(false)
  }

  return (
    <div className={styles.containerjson}>
      <div className={styles.title}>
        代码编辑区
        <div className={styles.btncontainer}>
          <div className={styles.jsonbtn} onClick={saveJson}>
            <SaveOutlined />
            <span className="ml-2">保存</span>
          </div>
          <div className={styles.jsonbtn} onClick={quitEdit}>
            <LogoutOutlined />
            <span className="ml-2">退出</span>
          </div>
        </div>
      </div>
      <MonacoEdit
        theme="light"
        value={JSON.stringify(json)}
        defaultValue={defaultValue}
        onChange={handleEditorChange}
      />
    </div>
  )
}

export default memo(EditJSON)
