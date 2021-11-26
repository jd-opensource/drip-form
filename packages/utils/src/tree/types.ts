// 叶子节点类型
export type TreeItem = {
  fieldKey: string
  schema: TreeItem[]
  collapsed?: boolean
}

// 树形结构
export type TreeItems = TreeItem[]

// 扁平化结构类型
export interface FlattenedItem extends TreeItem {
  parentFieldKey: null | string
  depth: number
  index: number
}
