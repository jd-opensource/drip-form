import React, { Fragment, memo } from 'react'
import styles from './index.module.css'
import cx from 'classnames'
import { Upload, message } from 'antd'
import {
  UploadOutlined,
  DownloadOutlined,
  EditOutlined,
  CompressOutlined,
} from '@ant-design/icons'
import {
  componentsFoldAtom,
  previewVisibleAtom,
  exportVisibleAtom,
  schemaAtom,
  headerConfigAtom,
} from '@generator/store'
import { useSetRecoilState, useRecoilState, useRecoilValue } from 'recoil'
import FileSaver from 'file-saver'
import type { RcFile } from 'rc-upload/lib/interface'

const Header = () => {
  const setFold = useSetRecoilState(componentsFoldAtom)
  const setPreviewVisible = useSetRecoilState(previewVisibleAtom)
  const setExportVisible = useSetRecoilState(exportVisibleAtom)
  const {
    customExport,
    renderLeftHeader,
    exportText,
    showLogo,
    showUploadJSON,
    showEditJSON,
    showPreviewForm,
    showExportJSON,
  } = useRecoilValue(headerConfigAtom)
  const [unitedSchema, setUnitedSchema] = useRecoilState(schemaAtom)

  const importJson = (file: RcFile) => {
    return new Promise<void>(() => {
      const reader = new FileReader()
      reader.readAsText(file)
      reader.onload = (e) => {
        try {
          let schema
          if (e && e.target) {
            schema = JSON.parse(e.target.result as string)
          }
          setUnitedSchema(schema)
          message.success('上传成功!', 2)
        } catch (error) {
          message.error('上传失败,请检查文件格式!', 2)
          throw error
        }
      }
    })
  }

  const editJson = () => {
    setFold(true)
  }

  const preview = () => {
    setPreviewVisible(true)
  }

  const rawExport = () => {
    setExportVisible(true)
    FileSaver.saveAs(
      new Blob([JSON.stringify(unitedSchema)], {
        type: 'application/json;charset=utf-8',
      }),
      'unitedSchema.json'
    )
  }

  /**
   * 导出json
   */
  const exportJson = () => {
    // todo: 如果有自定义导出，则执行自定义，但后续应移除该方法
    if (customExport) {
      customExport(rawExport)
    } else {
      rawExport()
    }
  }

  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        {showLogo &&
          (renderLeftHeader ? (
            renderLeftHeader()
          ) : (
            <Fragment>
              <img
                className={styles.ico}
                src="http://m.360buyimg.com/babel/jfs/t1/198287/16/2689/8501/61133b1cEbf895566/fd5c679852e69de9.png"
              />
              Drip-Form Generator
            </Fragment>
          ))}
      </div>

      <div className={styles.btncontainer}>
        {showUploadJSON && (
          <Upload
            accept="json"
            multiple={false}
            showUploadList={false}
            beforeUpload={importJson}
          >
            <div className={cx(styles.btn, styles.text)}>
              <DownloadOutlined />
              <span className="ml-1">导入JSON</span>
            </div>
          </Upload>
        )}
        {showEditJSON && (
          <div onClick={editJson} className={cx(styles.btn, styles.text)}>
            <EditOutlined />
            <span className="ml-1">JSON编辑</span>
          </div>
        )}
        {showPreviewForm && (
          <div onClick={preview} className={cx(styles.btn, styles.text)}>
            <CompressOutlined />
            <span className="ml-1">表单预览</span>
          </div>
        )}
        {showExportJSON && (
          <div onClick={exportJson} className={cx(styles.btn, styles.primary)}>
            <UploadOutlined />
            <span className="ml-1">{exportText}</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default memo(Header)
