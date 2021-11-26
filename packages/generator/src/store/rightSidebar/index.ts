import { atom } from 'recoil'

// 全局containerStyle样式
export const globalContainerStyleAtom = atom<null | { width: string | number }>(
  {
    key: 'rootContainerStyle',
    default: null,
  }
)
