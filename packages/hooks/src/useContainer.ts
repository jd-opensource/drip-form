/*
 * container容器通用逻辑
 * @Author: jiangxiaowei
 * @Date: 2021-08-05 11:18:43
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: 2021-11-04 18:10:51
 */

import { useEffect } from 'react'
import type { Dispatch } from 'react'
import type { Action } from '@jdfed/utils'

const useContainer = ({
  fieldKey,
  dispatch,
}: {
  fieldKey: string
  dispatch: Dispatch<Action>
}): void => {
  //container容器加载的时候将当前表单fieldKey加入到visibleFieldKey中
  useEffect(() => {
    dispatch({
      type: 'setVisibleFieldKey',
      key: fieldKey,
    })
    return () => {
      dispatch({
        type: 'deleteVisibleFieldKey',
        key: fieldKey,
      })
    }
  }, [dispatch, fieldKey])
}

export default useContainer
