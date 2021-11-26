/**
 * 本文件用于Dnd树形结构的解析
 */
import type { TreeItems, TreeItem, FlattenedItem } from './types'

/**
 * 树形结构扁平化
 * @param items
 * @param parentFieldKey
 * @param depth
 */
export function flatten(
  items: TreeItems = [],
  parentFieldKey: string | null = null,
  depth = 0
): FlattenedItem[] {
  return items.reduce<FlattenedItem[]>((acc, item, index) => {
    return [
      ...acc,
      { ...item, parentFieldKey, depth, index },
      ...flatten(item.schema, item.fieldKey, depth + 1),
    ]
  }, [])
}

export function flattenTree(items: TreeItems): FlattenedItem[] {
  return flatten(items)
}

/**
 * 排除在ids列表中的容器及其子表单项，获取已扁平化的待渲染列表
 * @param items
 * @param ids
 */
export function removeChildrenOf(
  items: FlattenedItem[],
  ids: string[]
): FlattenedItem[] {
  const excludeParentIds = [...ids]

  return items.filter((item) => {
    if (item.parentFieldKey && excludeParentIds.includes(item.parentFieldKey)) {
      if (item.schema.length) {
        excludeParentIds.push(item.fieldKey)
      }
      return false
    }

    return true
  })
}

/**
 * todo: 未知
 * @param items
 * @param itemId
 */
export function findItemDeep(
  items: TreeItems,
  itemId: string
): TreeItem | undefined {
  for (const item of items) {
    const { fieldKey, schema } = item

    if (fieldKey === itemId) {
      return item
    }

    if (schema.length) {
      const child = findItemDeep(schema, itemId)

      if (child) {
        return child
      }
    }
  }

  return undefined
}

/**
 * todo: 未知
 * @param items
 * @param count
 */
function countChildren(items: TreeItem[], count = 0): number {
  return items.reduce((acc, { schema }) => {
    if (schema.length) {
      return countChildren(schema, acc + 1)
    }

    return acc + 1
  }, count)
}

/**
 * todo: 未知
 * @param items
 * @param id
 */
export function getChildCount(items: TreeItems, id: string): number {
  if (!id) {
    return 0
  }

  const item = findItemDeep(items, id)

  return item ? countChildren(item.schema) : 0
}

/**
 *
 * @param items
 * @param itemId
 */
export function findItem(
  items: TreeItem[],
  itemId: string
): TreeItem | undefined {
  return items.find(({ fieldKey }) => fieldKey === itemId)
}

/**
 *
 * @param flattenedItems
 */
export function buildTree(flattenedItems: FlattenedItem[]): TreeItems {
  const root: TreeItem = { fieldKey: 'root', schema: [] }
  const nodes: Record<string, TreeItem> = { [root.fieldKey]: root }
  const items = flattenedItems.map((item) => ({ ...item, children: [] }))

  for (const item of items) {
    const { fieldKey, schema } = item
    const parentId = item.parentFieldKey ?? root.fieldKey
    const parent = nodes[parentId] ?? findItem(items, parentId)

    nodes[fieldKey] = { fieldKey, schema }
    parent.schema.push(item)
  }

  return root.schema
}
