---
id: dispatch
title: dispatch
description: dispatch修改表单内部数据
---

`dispatch` 是 `drip form` 内部更改表单状态的api。

可以用来设置表单数据、表单ui展示、表单校验配置、自定义错误信息等。

前几章节的[get](./get)、[set](./set)、[merge](./merge)

## 设置自定义错误

```ts
// 设置自定义错误信息
type SetErrAction = {
  type: 'setErr'
  action: {
		// 需要删除错误的表单的fieldKey
    deleteKeys?: Array<string> | string
		// 设置所有表单的错误信息
    errors?: Record<string, string>
		// 设置具体某个表单的错误信息
    set?: Record<string, string>
  }
}
```

详细查看[自定义校验](../../use/validate/customValidate#自定义组件中-dispatch-设置自定义错误)章节

## 设置表单数据
:::tip 如果可以使用set，则优先使用[set](./set)语法糖。
:::

```ts
type SetDataAction = {
  type: 'setData'
  action: {
    deleteKeys?: string | Array<string>
    formData?: Map
    set?: Map
  }
}
```

代码沙盒：[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/drip-form-jzngxc?file=src/App.tsx)


## 更改表单ui
:::tip 如果可以使用set，则优先使用[set](./set)语法糖。
:::

```ts
type SetUiAction = {
  type: 'setUi'
  action: {
    deleteKeys?: Array<string> | string
    uiSchema?: UiSchema
    set?: Map
  }
}
```

:::caution getKey的使用
不同于[set](./set)可以直接设置表单ui，使用`dispatch`需要知道表单在uiSchema中的具体位置。

通过[getKey](./getKey)可以获取表单相对uiSchema、dataSchema的位置。
:::

代码沙盒：[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/drip-form-yyvjuf?file=src/App.tsx)

## 更改表单校验
:::tip 如果可以使用set，则优先使用[set](./set)语法糖。
:::

```ts
type SetValidate = {
  type: 'setValidate'
  action: {
    deleteKeys?: Array<string> | string
    dataSchema?: DataSchema
    set?: Map
  }
}
```

代码沙盒：[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/drip-form-jgk8yv?file=src/App.tsx)

