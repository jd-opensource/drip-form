import { selector } from 'recoil'
import { getThemeAndType } from '@jdfed/utils'
import { sidebarDataAtom, uiTypeOptionsAtom } from '../leftSidebar'
import { curThemeAndTypeAtom } from '../unclassified'
import { baseMap } from '@generator/fields'
import rootConfig from '@generator/fields/container/root.field'
import type { UnitedSchema } from '@jdfed/utils'

// 所有组件的属性配置
export const allPropertyConfigSchemaSelector = selector<
  Record<string, UnitedSchema['schema']>
>({
  key: 'propertyConfigSchema',
  get: ({ get }) => {
    const { category } = get(sidebarDataAtom)
    const uiTypeOptions = get(uiTypeOptionsAtom)
    const allPropertyConfig: Record<string, UnitedSchema['schema']> = {
      root: rootConfig,
    }
    Object.values(category).map(({ fields }) => {
      Object.values(fields).map((field) => {
        const { unitedSchema } = field
        const { ui } = unitedSchema
        if (ui) {
          allPropertyConfig[getThemeAndType(ui)] =
            field?.propertyConfig?.schema ||
            ([
              {
                type: 'string',
                title: '组件类型',
                fieldKey: 'type',
                ui: {
                  type: 'uiTypeChange',
                  theme: 'generatorTheme',
                  options: uiTypeOptions,
                  style: {
                    width: '100%',
                  },
                  title: {
                    width: '66px',
                  },
                  containerStyle: {
                    padding: '0 0 0 16px',
                  },
                },
              },
              {
                type: 'string',
                title: 'fieldKey',
                fieldKey: '$fieldKey',
                ui: {
                  type: 'inputCopy',
                  theme: 'generatorTheme',
                  placeholder: '不可包含字符 .',
                  disabled_input: ['\\.'],
                  containerStyle: {
                    padding: '0 0 0 16px',
                  },
                  title: {
                    width: '66px',
                  },
                },
              },
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
                  '$:dripStyle': true,
                  ghost: true,
                  containerStyle: {
                    padding: 0,
                    marginBottom: 5,
                  },
                },
                title: '样式',
                schema:
                  field?.propertyConfig?.styleSchema || field?.styleSchema,
              },
            ] as UnitedSchema['schema'])
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
    const curThemeAndType = get(curThemeAndTypeAtom)
    return get(allPropertyConfigSchemaSelector)[curThemeAndType]
  },
})
