/*
 * 获取fieldKey相对uiSchema、dataSchema、typeMap路径
 * @Author: jiangxiaowei
 * @Date: 2021-08-11 11:39:48
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: 2021-11-07 17:12:19
 */
import { useCallback } from 'react'
import { generateReg } from '@jdfed/utils'
import type { Map, GetTypeKey, GetKey } from '@jdfed/utils'

const useGetKey = (
  typeMap: Map
): {
  getTypeKey: GetTypeKey
  getKey: GetKey
} => {
  // 获取fieldKey相对typeMap的路径
  const getTypeKey = useCallback<GetTypeKey>(
    (fieldKey) => {
      const fieldKeyToTypeMap = Object.keys(typeMap).find((item) => {
        return generateReg(fieldKey.split('.')).test(item)
      })
      if (!fieldKeyToTypeMap) {
        throw `无法在typeMap中找到与${fieldKey}对应的key`
      }
      return fieldKeyToTypeMap
    },
    [typeMap]
  )
  // 获取fieldKey相对uiSchema、dataSchema路径
  const getKey = useCallback<GetKey>(
    (fieldKey, type) => {
      if (type === 'data') return fieldKey
      return getTypeKey(fieldKey)
        .split('.')
        .reduce((prev, cur, index, arr) => {
          switch (
            index === 0
              ? 'object'
              : (typeMap[arr.slice(0, index).join('.')] as Map).type
          ) {
            case 'array':
              if (cur === '$container') {
                // 普通数组
                return type === 'uiSchema'
                  ? `${prev ? `${prev}.` : ''}properties.${cur}`
                  : `${prev ? `${prev}.` : ''}items`
              } else {
                // 元祖
                return type === 'uiSchema'
                  ? `${prev ? `${prev}.` : ''}properties.${cur}`
                  : `${prev ? `${prev}.` : ''}items.${cur}`
              }
            case 'object':
              // 对象
              return `${prev ? `${prev}.` : ''}properties.${cur}`

            default:
              return `${prev ? `${prev}.` : ''}properties.${cur}`
          }
        }, '')
    },
    [getTypeKey, typeMap]
  )
  return {
    getTypeKey,
    getKey,
  }
}

export default useGetKey
