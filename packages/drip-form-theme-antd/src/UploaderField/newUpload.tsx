/*
 * @Author: jiangxiaowei
 * @Date: 2022-01-10 17:11:29
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: 2022-04-26 09:53:59
 */

import React, { memo, FC, useMemo, useCallback } from 'react'
import { useImmer as useState } from 'use-immer'
import { Upload, Button } from 'antd'
import { UploadOutlined, PlusOutlined, InboxOutlined } from '@ant-design/icons'
import { useField, useEventCallback } from '@jdfed/hooks'
import { isEmpty, checkImg } from '@jdfed/utils'
import './index.styl'
const { Dragger, LIST_IGNORE } = Upload
import { CommonProps } from '../global'
import type { UploadProps } from 'antd'
import type { Map } from '@jdfed/utils'

type UploadFileStatus = 'error' | 'success' | 'done' | 'uploading' | 'removed'

interface UploadFile<T = any> {
  uid: string
  size?: number
  name: string
  fileName?: string
  lastModified?: number
  lastModifiedDate?: Date
  url?: string
  status?: UploadFileStatus
  percent?: number
  thumbUrl?: string
  originFileObj?: any
  response?: T
  error?: any
  linkProps?: any
  type?: string
  xhr?: T
  preview?: string
}

type UploaderFileType = {
  // 文件名
  name: string
  // 上传进度
  percent: number
  // 上传状态
  status: 'uploading' | 'done' | 'error' | 'removed' | undefined
  // 上传文件在当前文件列表中的唯一标识
  uid: string
  // 上传文件的远程地址，可用于预览
  url: string
} & Map

type UploaderFieldProps = CommonProps &
  Partial<{
    action: string
    // TODO parseUnitedSchema中进行maxFileNumber=>maxCount转换；兼容antd v4.10.0
    maxFileNumber: number
    listType: 'text' | 'picture' | 'picture-card'
    canDrag: boolean
    customUpload: (...args: any[]) => Promise<any>
    exportToString: boolean
    // 针对京东图片服务的配置
    jdAction: {
      // 上传的地址，具体参考：drip-design例子
      action: string
      // 拼接在返回值之前的域名，可自定义，具体参考：drip-design例子
      domain?: string
      // 图片服务对应的jsf业务名
      jfsBusinessName: string
    }
    // 尺寸限制
    dimension: Partial<{
      width: number
      height: number
      minWidth: number
      minHeight: number
      maxWidth: number
      maxHeight: number
      widthDivisor: number
      heightDivisor: number
      widthHeightEqual: boolean
    }>
    // 大小限制
    size: Partial<{
      max: number
      min: number
    }>
  }>

const UploaderField: FC<UploaderFieldProps> = ({
  disabled,
  action,
  listType = 'text',
  canDrag = true,
  onChange,
  fieldData,
  fieldKey,
  dispatch,
  asyncValidate,
  getKey,
  jdAction,
  dimension,
  size,
  exportToString,
  ...restProps
}) => {
  // 如果是string类型，则需要处理为对象形式
  const newFieldData = useMemo<Array<UploadFile>>(() => {
    if (exportToString && typeof fieldData === 'string') {
      return [
        {
          name: '',
          percent: 100,
          status: 'done',
          uid: '',
          url: fieldData,
        },
      ]
    } else if (Array.isArray(fieldData)) {
      return fieldData.map((item) => {
        return {
          name: '',
          percent: 100,
          status: 'done',
          uid: '',
          url: item,
        }
      })
    } else {
      return []
    }
  }, [exportToString, fieldData])

  const [initValue, setValue] = useState<Array<UploadFile>>(newFieldData)

  let jdOssDomain: string, jsfBusinessName: string
  // 如果传入了jdAction，则解析其配置
  if (jdAction && !isEmpty(jdAction)) {
    action = jdAction?.action || ''
    // 配置默认域名
    jdOssDomain = jdAction.domain || '//img10.360buyimg.com'
    jsfBusinessName = jdAction.jfsBusinessName
  }

  // 改变
  const _onChange = useField(
    {
      getKey,
      fieldKey,
      onChange,
      asyncValidate,
      options: { isUploader: true },
    },
    dispatch
  )

  /**
   * 传入Uploader组件的onChange事件
   */
  const change = useEventCallback(
    (value: { file: any; fileList: Array<UploadFile> }) => {
      const { fileList } = value

      if (action && /jd.com/.test(action)) {
        // 未定义afterAction，但使用的action是京东的图片上传服务
        if (!isEmpty(value.file.response)) {
          const { id, msg } = value.file.response
          // 新的文件必要的数据格式，移除不必要的字段
          const fileData: UploaderFileType = {
            name: '',
            percent: 100,
            status: 'done',
            uid: '',
            url: '',
          }
          // 进行值填充
          Object.keys(fileData).forEach((key) => {
            fileData[key] = value.file[key]
          })

          // 上传成功时
          if (id === '1') {
            // 拼接真实的图片地址
            fileData.url = msg ? `${jdOssDomain}/${jsfBusinessName}/${msg}` : ''
          } else {
            // 否则，为上传失败
            fileData.status = 'error'
          }
          // 此处不替换的话，fileData会是Uploader组件的原始对象，字段很多，不利于后台存储
          value.file = fileData

          // 不能直接对fileList进行赋值操作，因为内部状态是由immer进行维护的
          for (const i in value.fileList) {
            if (Object.hasOwnProperty.call(value.fileList, i)) {
              // 找到当前修改的file，将fileList中的这一项进行替换
              if (value.fileList[i].uid === fileData.uid) {
                value.fileList[i] = fileData
              }
            }
          }
        }
      }
      setValue(fileList)
      const newFieldData = fileList
        .filter((item) => item.status === 'done')
        .map((item) => item.url || '')
      _onChange(newFieldData.length === 1 ? newFieldData.join() : newFieldData)
    },
    [_onChange]
  )

  // 上传前diemension、size校验
  const beforeUpload: UploadProps['beforeUpload'] = async (file) => {
    try {
      const { isOk, errors } = await checkImg({ file, dimension, size })
      if (isOk) {
        dispatch({
          type: 'setErr',
          action: {
            deleteKeys: fieldKey,
          },
        })
        return true
      } else {
        dispatch({
          type: 'setErr',
          action: {
            set: {
              [fieldKey]: errors.join(';'),
            },
          },
        })
        return LIST_IGNORE
      }
    } catch (error) {
      console.error('error')
      return LIST_IGNORE
    }
  }

  const _onRemove = useCallback((file) => {
    setValue((oldValue) => {
      return oldValue.filter((item) => item.url != file.url)
    })
  }, [])

  return canDrag ? (
    <Dragger
      disabled={disabled}
      onChange={change}
      onRemove={_onRemove}
      fileList={initValue}
      beforeUpload={beforeUpload}
      {...(action && { action })}
      {...restProps}
    >
      <InboxOutlined />
      <div className="drip-form--dargupload">点击或拖拽上传图片</div>
    </Dragger>
  ) : (
    <Upload
      disabled={disabled}
      listType={listType}
      onChange={change}
      onRemove={_onRemove}
      beforeUpload={beforeUpload}
      fileList={initValue}
      {...(action && { action })}
      {...restProps}
    >
      {listType === 'picture-card' ? (
        <div>
          <PlusOutlined />
          <div>点击上传图片</div>
        </div>
      ) : (
        <Button icon={<UploadOutlined />} disabled={disabled}>
          上传图片
        </Button>
      )}
    </Upload>
  )
}

export const newUpload = memo(UploaderField)
