---
id: useField
title: useField
description: 自定义组件数据更改hook
---

`useField` 用作表单 `onChange` 函数生成。

`Drip form` 在全局管理数据、校验、错误信息等状态。`useField` hook函数集成了修改全局表单数据、校验处理等功能。

简单来说，可以认为 `useField` 最终返回一个onChange函数。通过返回的onChange函数可以修改表单数据

## 用法

```ts
type UseField = (param:{
		//表单fieldKey
		fieldKey: string
		// getKey Api
    getKey: GetKey
		// onChange回调函数
    onChange?: OnChange
		// 表单数据配置
    options?: Options
		//onValidate函数
    asyncValidate?: {
      type: 'change' | 'click'
      fn: (arg0: any) => any
    }
		//上一次数据
    prevFieldData?: any
		//当前数据
    fieldData?: any
	},dispatch:Dispatch<Action>)=>(...args: any[]) => void
```

## 代码沙盒

代码沙盒：[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/drip-form-2hneqv?file=src/customTheme/numberField.tsx)

