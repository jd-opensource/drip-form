/*
 * @Author: jiangxiaowei
 * @Date: 2020-05-14 13:33:14
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: 2022-01-10 17:31:02
 */
import React, { memo, useEffect, FC } from 'react'
import { useImmer as useState } from 'use-immer'
import { Upload, Button } from 'antd'
import { UploadOutlined, PlusOutlined, InboxOutlined } from '@ant-design/icons'
import { useField, useEventCallback, usePrevious } from '@jdfed/hooks'
import { binaryData2Blob, isEmpty, checkImg } from '@jdfed/utils'
import './index.styl'
const { Dragger, LIST_IGNORE } = Upload
import { CommonProps } from '../global'
import type { UploadProps } from 'antd'
import type { Map } from '@jdfed/utils'

export type UploaderFileType = {
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
    // 使用action上传完成后的处理
    afterAction: (value: { file?: any; fileList?: any }) => {
      file: any
      fileList: any
    }
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
  maxFileNumber,
  canDrag = true,
  onChange,
  fieldData,
  fieldKey,
  dispatch,
  asyncValidate,
  customUpload,
  afterAction,
  getKey,
  jdAction,
  dimension,
  size,
  ...restProps
}) => {
  const [initValue, setValue] = useState(fieldData)
  const prevValue = usePrevious(initValue)

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
      options: { isUploader: true, draft: true },
    },
    dispatch
  )
  // 删除
  const _onDelete1 = useField(
    {
      getKey,
      fieldKey,
      onChange,
      asyncValidate,
      options: { isDelete: true, draft: true },
    },
    dispatch
  )

  /**
   * 传入Uploader组件的onChange事件
   */
  const change = useEventCallback(
    (value: { file?: any; fileList?: any }) => {
      const { fileList } = value

      // 如果定义了afterAction，则执行afterAction，并将value进行替换
      if (afterAction) {
        value = afterAction(value)
      } else if (action && /jd.com/.test(action)) {
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

      setValue({
        file: value.file,
        fileList,
      })
    },
    [_onChange]
  )

  // 因为antd的uploader实现会对fileList修改。
  // 而调用useField的change函数会将表单变成不可变数据。
  // 所以需要以下特殊处理。只有在fileList不再变化的时候才调用_onChange函数
  useEffect(() => {
    if (
      prevValue?.file?.status === 'uploading' &&
      initValue?.file?.status === 'done'
    ) {
      _onChange(initValue)
    }
  }, [
    _onChange,
    initValue,
    initValue?.file?.status,
    prevValue?.file?.status,
    initValue?.file?.thumbUrl,
  ])
  /**
   * 自定义上传时手动处理fileList
   */
  const handledFileList = useEventCallback((imgItem: { uid: any }) => {
    // 是否需要在末尾填充
    let needPush = false
    // 待处理的文件列表
    const beforeFileList = !initValue.fileList
      ? [imgItem]
      : initValue.fileList.map((file: { uid: any }, idx: number) => {
          if (file.uid === imgItem.uid) return imgItem
          if (
            idx === initValue.fileList.length - 1 &&
            file.uid !== imgItem.uid
          ) {
            needPush = true
          }
          return file
        })

    // 如果列表中不存在正在操作的文件，则在末尾填充
    if (needPush) {
      beforeFileList.push(imgItem)
    }

    return beforeFileList
  }, [])

  /**
   * 通过customUpload，允许用户通过自定义上传的fetch方法，不使用action进行上传
   * @todo: 目前仅针对图片做了处理，需要进一步支持其他文件
   */
  const customRequest = useEventCallback(
    async (options: { file: any }) => {
      if (customUpload) {
        // 如果用户传入了自定义的上传函数，则覆写customRequest
        const { file } = options

        // 伪装进度条
        const imgItem = {
          uid: file.uid,
          name: file.name,
          status: 'uploading',
          url: '',
          percent: 99,
        }
        const beforeFileList = handledFileList(imgItem)

        setValue({
          file: imgItem,
          fileList: beforeFileList,
        })

        // 解析图片文件，转化为base64格式
        const handledFile = await binaryData2Blob(file)
        const res = await customUpload(
          Object.assign({}, { file }, { handledFile })
        )

        const { url, ...restProps } = res

        // 如果没有获取到图片的url，则返回false
        if (!url) {
          const errorFile = Object.assign({}, imgItem, {
            status: 'error',
            percent: 100,
          })
          const errorFileList = handledFileList(errorFile)

          setValue({
            file: errorFile,
            fileList: errorFileList,
          })

          return false
        }

        // 完成上传
        const nextImgItem = {
          uid: file.uid,
          name: file.name,
          status: 'done',
          url: url,
          percent: 100,
          ...restProps,
        }
        const nextFileList = handledFileList(nextImgItem)

        const newValue = {
          file: nextImgItem,
          fileList: nextFileList,
        }

        setValue(newValue)
      }
    },
    [customUpload]
  )

  // 上传前diemension、size校验
  const beforeUpload: UploadProps['beforeUpload'] = async (file) => {
    try {
      const { isOk, errors } = await checkImg({ file, dimension, size })
      if (isOk) {
        dispatch({
          type: 'deleteError',
          key: fieldKey,
        })
        return true
      } else {
        dispatch({
          type: 'setError',
          [fieldKey]: errors.join(';'),
        })
        return LIST_IGNORE
      }
    } catch (error) {
      console.error('error')
      return LIST_IGNORE
    }
  }

  return canDrag ? (
    <Dragger
      disabled={disabled}
      onChange={change}
      {...(action && { action })}
      beforeUpload={beforeUpload}
      onRemove={() => {
        _onDelete1()
        setValue([])
        // 这里返回false的原因同上，antd删除时修改的file的status。我们这里直接不调用antd的删除。而是使用initValue来代替
        return Promise.resolve(false)
      }}
      {...(customUpload && { customRequest })}
      {...(maxFileNumber && { maxCount: maxFileNumber })}
      {...restProps}
    >
      <InboxOutlined />
      <div className="babel-form--dargupload">点击或拖拽上传图片</div>
    </Dragger>
  ) : (
    <Upload
      disabled={disabled}
      {...(action && { action })}
      listType={listType}
      onChange={change}
      beforeUpload={beforeUpload}
      onRemove={() => {
        _onDelete1()
        setValue([])
        // 这里返回false的原因同上，antd删除时修改的file的status。我们这里直接不调用antd的删除。而是使用initValue来代替
        return Promise.resolve(false)
      }}
      fileList={initValue?.fileList || []}
      {...(customUpload && { customRequest })}
      {...(maxFileNumber && { maxCount: maxFileNumber })}
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

export const oldUpload = memo(UploaderField)
