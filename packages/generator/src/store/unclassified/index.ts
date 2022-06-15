import React, { MutableRefObject } from 'react'
import { atom, selector, DefaultValue } from 'recoil'
import { UnitedSchema } from '@jdfed/utils'
import antd from '@jdfed/drip-form-theme-antd'
import type { DripFormRefType, UiComponents } from '@jdfed/drip-form'

export type GeneratorContextType = MutableRefObject<DripFormRefType | undefined>

export const GeneratorContext = React.createContext<GeneratorContextType>({
  current: undefined,
})

/**
 * 联合Schema
 */
export const schemaAtom = atom<UnitedSchema>({
  key: 'unitedSchema',
  default: {
    theme: 'antd',
    validateTime: 'change',
    type: 'object',
    schema: [],
  },
})

export const editJsonAtom = atom({
  key: 'editJson',
  default: schemaAtom,
})

/**
 * 当前鼠标hover所在的元素的FieldKey
 */
export const overFieldKeyAtom = atom<string | null>({
  key: 'overFieldKey',
  default: null,
})

/**
 * 组件区的折叠状态
 */
export const componentsFoldAtom = atom<boolean>({
  key: 'componentsFold',
  default: false,
})

/*
 * 当前选中的表单项，用于右侧面板联动
 */
export const selectedAtom = atom<string | null>({
  key: 'selected',
  default: null,
})

/**
 * 预览模块的可视化状态
 */
export const previewVisibleAtom = atom<boolean>({
  key: 'previewVisible',
  default: false,
})

/**
 * dripform主题
 */
export const DripFormUiComponetsAtom = atom<UiComponents>({
  key: 'dripformUiComponents',
  default: {
    antd,
  },
})

/**
 * 代码编辑json是否保存
 */
export const IsSavedAtom = atom<boolean>({
  key: 'jsonIsSaved',
  default: true,
})

/**
 * viewport区域dripform key值
 */
export const versionAtom = atom<number>({
  key: 'viewportDripFromVersion',
  default: 0,
})

// 全局主题
export const globalThemeAtom = selector<string | undefined>({
  key: 'globalTheme',
  get: ({ get }) => {
    return get(schemaAtom).theme
  },
})

/**
 * 当前的主题和组件类型
 * root：未选中任何一个表单
 * object：选中的是对象容器
 * array：选中的是数组容器
 * theme::type  选中的theme主题下的type组件
 * 注意：由于v0未区分容器和组件概念，所以使用curThemeAndTypeAtom处理容器
 */
const themeAndTypeAtom = atom<string>({
  key: 'themeAndType',
  default: 'root',
})

/**
 * 当前选中的表单主题::控件类型
 * 未选中任何表单 为 root
 * 选中表单 为 theme::type
 */
export const curThemeAndTypeAtom = selector<string>({
  key: 'curThemeAndType',
  get: ({ get }) => {
    return get(themeAndTypeAtom)
  },
  set: ({ set }, newValue) => {
    if (newValue instanceof DefaultValue) {
      set(themeAndTypeAtom, newValue)
    } else {
      // 如果用户输入的theme::type中type是root、object、array。则默认设置为root、object、array。v0不建议用户使用object、array、root的类型。文档体现
      const [, type] = newValue.split('::')
      if (type && ['root', 'array', 'object'].includes(type)) {
        set(themeAndTypeAtom, type)
      } else {
        set(themeAndTypeAtom, newValue)
      }
    }
  },
})

//当前选中的表单控件类型
export const curTypeAtom = selector<string>({
  key: 'curType',
  get: ({ get }) => {
    const themeAndType = get(curThemeAndTypeAtom)
    const [theme, type] = themeAndType.split('::')
    return type || theme
  },
})

/**
 * 由于fieldKey修改的是dataSchmea中的$fiedlKey，所以viewport区域的title部分的filedKey获取的是之前的值，添加version用于更新
 */
export const viewportTitleHeaderVersion = atom<number>({
  key: 'viewportTitleHeaderVersion',
  default: 0,
})
