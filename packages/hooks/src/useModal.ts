/* 设置modal的展示隐藏
 * @Author: jiangxiaowei
 * @Date: 2020-05-14 11:09:04
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: 2020-06-14 20:58:02
 */

import { useState, useCallback } from 'react'

const useModal = (
  defaultStatus: boolean
): [boolean, () => void, () => void] => {
  const [visible, setVisible] = useState(defaultStatus)
  const showModal = useCallback(() => {
    setVisible(true)
  }, [])
  const hideModal = useCallback(() => {
    setVisible(false)
  }, [])

  return [visible, showModal, hideModal]
}

export default useModal
