---
id: useQuery
title: useQuery
description: 调用onQuery设置选项数据
---

:::caution 不推荐使用
`useQuery` 和 `onQuery` 的配合只能设置 options 选项，建议使用[queryConfig](../../use/control/other#queryconfig-设置选项)代替 `useQuery`

:::

`useQuery` hook 用来在自定义组件中调用 [onQuery](../formProp/onQuery) prop 中配置的函数，返回指定数据并设置到 `ui.options` 中

## 用法

```tsx
type UseQuery = (param:{
	//选项配置 只有选项配置为空数组时，才会调用queryFunc
  options: any[]
	// onQuery中配置的函数
  queryFunc: (...args: any[]) => any
	//表单key
  fieldKey: string
	// getKey Api
  getKey: GetKey
	//是否缓存接口数据
  requestCache?: boolean
},dispatch:Disptach)=> (...args: any[]) => void
```

## 代码沙盒

代码沙盒：[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/drip-form-hkksuv?file=src/customTheme/selectField.tsx)
