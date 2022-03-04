import React, { MutableRefObject } from 'react'
import { atom, atomFamily } from 'recoil'
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
 * 导出模块的可视化状态
 */
export const exportVisibleAtom = atom<boolean>({
  key: 'exportVisible',
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

/**
 * 当前选中的表单类型
 */
export const curTypeAtom = atom<string>({
  key: 'curType',
  default: 'root',
})

/**
 * 当前编辑器fieldKey
 */
export const curEditFieldKeyAtom = atomFamily<string, string | null>({
  key: 'curEditFieldKey',
  default: (param) => {
    return param?.split('.').pop() || ''
  },
})
