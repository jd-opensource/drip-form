/*
 * @Author: jiangxiaowei
 * @Date: 2020-05-27 21:46:47
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: 2022-01-28 14:46:16
 */
import { useCallback } from 'react'
import type { Dispatch } from 'react'
import type { GetKey, Action } from '@jdfed/utils'
// import useCusDispatch from './useCusDispatch'

/**
 * 查询表单数据的hook
 * @param {object} param {
 *  options 表单数据
 *  queryFunc 表单query函数
 *  requestCache 是否每次都调查询接口
 *  fieldKey 表单的key
 * }
 */

type Arg0 = {
  options: any[]
  queryFunc?: (...args: any[]) => any
  requestCache?: boolean
  fieldKey: string
  getKey: GetKey
}

const useQuery = (
  { options, queryFunc, requestCache = true, fieldKey, getKey }: Arg0,
  dispatch: Dispatch<Action>
): ((...args: any[]) => void) => {
  return useCallback(
    async (...args) => {
      //   当options为空||requestCache为false,调用接口查询
      if ((options.length === 0 || !requestCache) && queryFunc) {
        const data = await queryFunc(...args)
        dispatch({
          type: 'setUi',
          action: {
            set: {
              [`${getKey(fieldKey, 'uiSchema')}.options`]: data,
            },
          },
        })
      }
    },
    [dispatch, fieldKey, getKey, options.length, queryFunc, requestCache]
  )
}

export default useQuery
