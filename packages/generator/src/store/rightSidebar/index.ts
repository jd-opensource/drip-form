import { atom, selector } from 'recoil'
import { sidebarDataAtom } from '../leftSidebar'
import { curTypeAtom } from '../unclassified'
import { baseMap } from '@generator/fields'
import rootConfig from '@generator/fields/container/root.field'
import type { UnitedSchema } from '@jdfed/utils'

// 全局containerStyle样式
export const globalContainerStyleAtom = atom<null | { width: string | number }>(
  {
    key: 'rootContainerStyle',
    default: null,
  }
)

// 所有组件的属性配置
export const allPropertyConfigSchemaSelector = selector<
  Record<string, UnitedSchema['schema']>
>({
  key: 'propertyConfigSchema',
  get: ({ get }) => {
    const { category, order } = get(sidebarDataAtom)
    const allPropertyConfig: Record<string, UnitedSchema['schema']> = {
      root: rootConfig,
    }
    order.map((key) => {
      category[key].order.map((id) => {
        const field = category[key].fields[id]
        if (id != 'root') {
          const propertyConfig =
            field?.propertyConfig?.schema ||
            ([
              // 标题配置
              baseMap.title,
              // 提示配置
              baseMap.description,
              // 布局配置
              baseMap.layout,
              // 样式配置
              {
                type: 'object',
                fieldKey: 'ui',
                ui: {
                  type: 'object',
                  mode: 'collapse',
                },
                title: '样式',
                schema:
                  field?.propertyConfig?.styleSchema || field?.styleSchema,
              },
            ] as UnitedSchema['schema'])
          allPropertyConfig[id] = propertyConfig
        }
      })
    })
    return allPropertyConfig
  },
})

// 当前选中类型的属性配置
export const curTypePropertyConfigSelector = selector<UnitedSchema['schema']>({
  key: 'curTypePropertyConfig',
  get: ({ get }) => {
    const curType = get(curTypeAtom)
    return get(allPropertyConfigSchemaSelector)[curType]
  },
})
