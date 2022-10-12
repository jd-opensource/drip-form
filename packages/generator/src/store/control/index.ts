/*
 * 联动配置相关状态
 * @Author: jiangxiaowei
 * @Date: 2022-07-11 15:20:24
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: 2022-08-12 13:34:05
 */
import { atom, selector, selectorFamily, atomFamily } from 'recoil'
import { generateReg } from '@jdfed/utils'
import type { Flow, TypePathItem } from '@jdfed/utils'
import { schemaAtom, typePathAtom } from '../unclassified'
import { operatorMap, OperatorType } from '@generator/utils/flow'
// 联动配置抽屉是否展示
export const controlVisibleAtom = atom<boolean>({
  key: 'controlVisibleAtom',
  default: false,
})

export const flowSchemaAtom = atom<Flow | null>({
  key: 'flowSchemaAtom',
  default: null,
})

// 联动配置schema
export const flowSchemaSelector = selector<Flow>({
  key: 'flowSchemaSelector',
  get: ({ get }) => {
    return get(flowSchemaAtom) || get(schemaAtom)?.ui?.flow || {}
  },
  set: ({ set }, newValue) => {
    set(flowSchemaAtom, newValue)
  },
})

type ComponentTreeData = Array<
  TypePathItem & { value: string; disabled: boolean }
>

// 所有表单的treeselect数据
export const componentsTreeSelectDataSelector = selector<ComponentTreeData>({
  key: 'componentsTreeSelectDataSelector',
  get: ({ get }) => {
    const typePath = get(typePathAtom)
    // TODO 未按照组件顺序排列，优化parseUnitedSchema，使用Map代替，Map遍历按照插入顺序
    const newTreeData: ComponentTreeData = []
    Object.entries(typePath).map(([key, value]) => {
      newTreeData.push({
        value: key,
        ...value,
        // 防止部分表单不设置标题（展示fieldkey兜底），所有表单都展示当前数据类型
        title: `${value.title || key} (${value.type})`,
        disabled: Array.isArray(value.type),
      })
    })
    return newTreeData
  },
})

// 根据输入单词过滤可选的表单treeselect数据
export const componentsFilterData = atomFamily<ComponentTreeData, string>({
  key: 'componentsFilterData',
  default: selectorFamily({
    key: 'componentsFilterData/default',
    get:
      (filterValue) =>
      ({ get }) => {
        const data = get(componentsTreeSelectDataSelector)
        return data.filter((item) => {
          return (
            (item.title || '').startsWith(filterValue) ||
            generateReg(filterValue.split('.')).test(item.value || '')
          )
        })
      },
  }),
})

// 比较操作符 根据比较值1动态更改比较操作符
export const operatorOptionsAF = atomFamily<
  Array<{ label: string; value: string }>,
  OperatorType
>({
  key: 'operatorOptions',
  default: (dataType) => {
    // TODO dataType可能为混合形式，比如图片组件为['string','array']
    return operatorMap[dataType || 'string']
  },
})
