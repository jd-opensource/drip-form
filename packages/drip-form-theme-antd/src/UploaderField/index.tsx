/*
 * @Author: jiangxiaowei
 * @Date: 2020-05-14 13:33:14
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: 2022-01-10 17:29:06
 */
import React, { memo, FC } from 'react'
import './index.styl'
import { newUpload as NewUpload } from './newUpload'
import { oldUpload as OldUpload } from './oldUpload'
import { CommonProps } from '../global'

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

const UploaderField: FC<UploaderFieldProps> = (props) => {
  return props.exportToString ? (
    <NewUpload {...props} />
  ) : (
    <OldUpload {...props} />
  )
}

export const uploader = memo(UploaderField)
