import React, { Fragment, memo } from 'react'
import styles from './index.module.css'
import cx from 'classnames'
import { Upload, message, Modal } from 'antd'
import {
  UploadOutlined,
  DownloadOutlined,
  EditOutlined,
  CompressOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons'
import {
  componentsFoldAtom,
  previewVisibleAtom,
  schemaAtom,
  versionAtom,
  optionsAtom,
  IsSavedAtom,
  editJsonAtom,
} from '@generator/store'
import { useSetRecoilState, useRecoilValue, useRecoilCallback } from 'recoil'
import { useSaveJson } from '@generator/hooks'
import FileSaver from 'file-saver'
import type { RcFile } from 'rc-upload/lib/interface'
const { confirm } = Modal
const Header = () => {
  const setFold = useSetRecoilState(componentsFoldAtom)
  const setPreviewVisible = useSetRecoilState(previewVisibleAtom)
  const {
    headerConfig: {
      customExport,
      renderLeftHeader,
      exportText,
      showLogo,
      showUploadJSON,
      showEditJSON,
      showPreviewForm,
      showExportJSON,
    },
  } = useRecoilValue(optionsAtom)
  const setUnitedSchema = useSetRecoilState(schemaAtom)
  const setVersion = useSetRecoilState(versionAtom)
  const saveJson = useSaveJson()
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
          setVersion((version) => version + 1)
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

  /**
   * 导出json
   */
  const exportJson = useRecoilCallback(
    ({ snapshot }) =>
      async () => {
        const editJson = await snapshot.getPromise(editJsonAtom)
        const isSaved = await snapshot.getPromise(IsSavedAtom)
        const exportJson = () => {
          const rawExport = (): void => {
            FileSaver.saveAs(
              new Blob([JSON.stringify(editJson)], {
                type: 'application/json;charset=utf-8',
              }),
              'unitedSchema.json'
            )
          }
          saveJson(editJson)
          if (customExport) {
            customExport(rawExport)
          } else {
            rawExport()
          }
        }
        if (!isSaved) {
          confirm({
            title: '当前JSON正在编辑',
            icon: <ExclamationCircleOutlined />,
            content: `是否保存JSON后${exportText}`,
            onOk() {
              exportJson()
            },
            okText: exportText === '保存' ? exportText : `保存并${exportText}`,
            cancelText: '取消',
          })
        } else {
          exportJson()
        }
      },
    [customExport, exportText, saveJson]
  )

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
