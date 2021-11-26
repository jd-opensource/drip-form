import { atom, selector } from 'recoil'
import { containerMap, formItemMap, supportUnitsMap } from '@generator/fields'
import type {
  FieldItemMap,
  FieldConfigType,
  UnitedSchemaAtom,
} from '@generator/fields/types'

interface ComponentsData {
  subTitle: string
  config: Record<string, FieldConfigType>
}

export const sidebarDataAtom = atom<Array<ComponentsData>>({
  key: 'sidebardata',
  default: [
    { subTitle: '表单组件', config: formItemMap },
    { subTitle: '辅助组件', config: supportUnitsMap },
    { subTitle: '容器组件', config: containerMap },
    { subTitle: '业务组件', config: {} },
  ],
})

// TODO @jiangxiaowei2 主题绑定 左侧所有表单
export const allFieldAtom = selector<FieldItemMap>({
  key: 'allfield',
  get: ({ get }) => {
    return get(sidebarDataAtom).reduce((prev, cur) => {
      return { ...prev, ...cur.config }
    }, {})
  },
})

/**
 * 组件类型，用于切换表单的ui类型
 */
export const uiTypeOptionsAtom = selector({
  key: 'uiTypeOptions',
  get: ({ get }) => {
    // 生成组件类型options
    const options: (Record<'value' | 'label', string> & {
      schema: UnitedSchemaAtom
    })[] = []
    const MapList = get(sidebarDataAtom).map((item) => {
      return item.config
    })
    for (const itemMap of MapList) {
      Object.keys(itemMap).forEach((key) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const item = itemMap[key]

        options.push({
          value: key,
          label: item.unitedSchema.title,
          schema: item.unitedSchema,
        })
      })
    }
    return options
  },
})
