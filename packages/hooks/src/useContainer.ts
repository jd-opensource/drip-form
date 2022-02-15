/*
 * container容器通用逻辑
 * @Author: jiangxiaowei
 * @Date: 2021-08-05 11:18:43
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: 2022-01-26 17:58:40
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
      type: 'setVisibleKey',
      action: {
        fieldKey,
      },
    })
    return () => {
      dispatch({
        type: 'setVisibleKey',
        action: {
          deleteKeys: fieldKey,
        },
      })
    }
  }, [dispatch, fieldKey])
}

export default useContainer
