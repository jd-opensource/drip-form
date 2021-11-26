/*
 * leftSidebar、viewport区域是否可以编辑
 * json编辑已经保存是可以编辑，未保存需提示保存之后再编辑
 * @Author: jiangxiaowei
 * @Date: 2021-11-22 11:20:11
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: 2021-11-22 13:45:21
 */
import { IsSavedAtom } from '@generator/store'
import { useRecoilValue } from 'recoil'

const useCanEditJson: () => boolean = () => {
  const isSaved = useRecoilValue(IsSavedAtom)
  return isSaved
}

export default useCanEditJson
