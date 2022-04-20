import React, { memo, useState, useEffect, useCallback } from 'react'
import styles from './index.module.css'
import { SaveOutlined, LogoutOutlined } from '@ant-design/icons'
import { message } from 'antd'
import {
  componentsFoldAtom,
  schemaAtom,
  IsSavedAtom,
  editJsonAtom,
  selectedAtom,
} from '@generator/store'
import { useSaveJson } from '@generator/hooks'
import { useSetRecoilState, useRecoilState, useRecoilValue } from 'recoil'
import MonacoEdit from './MonacoEdit'
import { OnChange } from '@monaco-editor/react'
const defaultValue = JSON.stringify({
  theme: 'antd',
  validateTime: 'change',
  schema: [],
})

const EditJSON = () => {
  const setSelectedFieldKey = useSetRecoilState(selectedAtom)
  const setFold = useSetRecoilState(componentsFoldAtom)
  const unitedSchema = useRecoilValue(schemaAtom)
  const [isSaved, setIsSaved] = useRecoilState(IsSavedAtom)
  const [json, setJson] = useState(unitedSchema)
  const setEditJson = useSetRecoilState(editJsonAtom)
  const saveJson = useSaveJson()
  useEffect(() => {
    setJson(unitedSchema)
  }, [unitedSchema])
  /**
   * 保存json
   */
  const saveJsonFn = useCallback(() => {
    saveJson(json)
  }, [json, saveJson])

  const quitEdit = useCallback(() => {
    // 保存成功
    if (isSaved) {
      setSelectedFieldKey(null)
      setFold(false)
    } else {
      message.warning('请先保存JSON编辑结果，再退出！', 2)
    }
  }, [isSaved, setFold, setSelectedFieldKey])

  const handleEditorChange: OnChange = (value) => {
    try {
      if (value) {
        setJson(JSON.parse(value))
        setEditJson(JSON.parse(value))
      }
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
          <div className={styles.jsonbtn} onClick={saveJsonFn}>
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
