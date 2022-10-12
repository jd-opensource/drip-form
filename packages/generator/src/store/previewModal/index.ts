import { atom, selector } from 'recoil'
import { schemaAtom } from '../unclassified'
import { flowSchemaAtom } from '../control'
import type { UnitedSchema } from '@jdfed/utils'

/**
 * 预览模块的可视化状态
 */
export const previewAtom = atom<{
  // 表单预览模块是否展示
  visible: boolean
  // 预览模块类型 preview：表单预览 flow：联动预览
  type: 'preview' | 'flow'
}>({
  key: 'previewVisible',
  default: {
    visible: false,
    type: 'preview',
  },
})

// 预览表单、联动表单的schema
export const previewSchemaAtom = atom<UnitedSchema>({
  key: 'previewSchemaAtomFamily',
  default: selector({
    key: 'previewSchemaAtomFamily/default',
    get: ({ get }) => {
      const type = get(previewAtom).type
      const unitedSchema = get(schemaAtom)
      switch (type) {
        case 'flow':
          return {
            ...unitedSchema,
            ui: {
              ...unitedSchema?.ui,
              flow: get(flowSchemaAtom),
            },
          }
        default:
          return get(schemaAtom)
      }
    },
  }),
})
