import { atom, selector } from 'recoil'
import { containerConfig, antdConfig } from '@generator/fields'
import type {
  FieldItemMap,
  Field,
  UnitedSchemaAtom,
} from '@generator/fields/types'

export type ComponentsData = {
  // 左侧分类顺序（只有order中的分类才展示）
  order: Array<string>
  // 每个分类中表单配置
  category: Record<
    string,
    {
      // 分类标题
      title: string
      // 分类中组件的顺序
      order: Array<string>
      // 组件配置
      fields: Record<string, Field>
    }
  >
}

export const sidebarDataAtom = atom<ComponentsData>({
  key: 'sidebardata',
  default: {
    order: ['container', 'antd', 'business'],
    category: {
      antd: antdConfig,
      container: containerConfig,
      business: {
        title: '业务组件',
        order: [],
        fields: {},
      },
    },
  },
})

// TODO @jiangxiaowei2 主题绑定 左侧所有表单
export const allFieldAtom = selector<FieldItemMap>({
  key: 'allfield',
  get: ({ get }) => {
    const { category } = get(sidebarDataAtom)
    let allField = {}
    for (const i in category) {
      allField = { ...allField, ...category[i].fields }
    }
    return allField
  },
})

export type SelectOption = Record<'value' | 'label', string> & {
  schema: UnitedSchemaAtom
}

/**
 * 组件类型，用于切换表单的ui类型
 */
export const uiTypeOptionsAtom = selector({
  key: 'uiTypeOptions',
  get: ({ get }) => {
    // 生成组件类型options
    const options: SelectOption[] = []
    const allField = get(allFieldAtom)
    Object.entries(allField).forEach(([key, value]) => {
      options.push({
        value: key,
        label: value.unitedSchema.title,
        schema: value.unitedSchema,
      })
    })
    return options
  },
})
