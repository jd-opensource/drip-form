/*
 * 获取指定fieldkey的数据类型
 * @Author: jiangxiaowei
 * @Date: 2022-07-24 09:06:13
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: 2022-07-24 11:38:04
 */
import { useContext } from 'react'
import { GeneratorContext } from '@generator/store'
import { OperatorType } from '@generator/utils/flow'

const useFieldKeyType = (fieldKey: string): OperatorType => {
  const generatorContext = useContext(GeneratorContext)
  // TODO type可能为混合形式,比如图片上传组件type为['string','array']
  return (generatorContext.current?.get(fieldKey).dataSchema.type ||
    'string') as OperatorType
}

export default useFieldKeyType
