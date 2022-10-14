import type { ContainerType } from '../../render/type'

export type ArrayProps = {
  fieldData: Array<unknown>
  uiProp: {
    // 点击增加按钮文案
    addTitle?: string
    //
    /**
     * 数组容器模式
     * add: 数组加减模式  可以点击新增一行数据，根据fiedlData渲染
     * normal、tuple：元祖模式 不展示索引、不展示新增删除按钮 展示数组中所有表单（normal即将废弃，使用tuple）
     * fixed：数组非加减模式 不可以点击新增，根据fieldData渲染
     */
    mode?: 'add' | 'normal' | 'tuple' | 'fixed'
    serialText?: {
      afterText: string
      beforeText: string
      serialLang: 'number' | 'CN'
    }
    hasConfirm?: boolean
    confirm?: {
      confirmTitle: string
      okText: string
      cancelText: string
    }
    maxAddCount: number
    // 删除按钮如何展示 hover：鼠标hover之后展示删除按钮 always：一直展示
    showDeleteIcon?: 'hover' | 'always'
    [propName: string]: unknown
  }
  containerMap: ContainerType
}
