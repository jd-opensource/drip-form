---
id: set
title: set
description: 设置表单数据、ui、校验
---

## set(fieldKey, type, value)

```ts
type SetType = 'data' | 'uiSchema' | 'dataSchema'
type SetFn = (value: unknown) => void
type StaticValue =
  | undefined
  | null
  | string
  | number
  | boolean
  | Record<string, unknown>
  | Array<unknown>
type Set = (
  fieldKey: string,
  type: SetType,
  value: SetFn | StaticValue
) => void
```

设置表单的数据、ui、校验信息。

### 参数

1. **fieldKey** （string）

	需要设置表单的key。如果是空字符，则设置所有全局

2. **type** （'data'|'uiSchema'|'dataSchema'）

	需要设置的类型

	- `data`: 设置表单数据
	- `uiSchema`: 设置表单ui配置
	- `dataSchema`: 设置表单校验配置

3. **value** （值或函数）

	:::tip 什么时候使用值？什么时候使用函数
	如果如果需要对设置的值进行处理，则使用函数；否则使用值
	:::

	- value为值
		
		直接将需要设置的表单的相应类型设置为value
	- value为函数
		
		type SetFn = (value: unknown) => void

		接收一个原先的值，并在函数中设置更改函数
		


	


### 返回

无返回



## 例子

```js
//设置全局表单数据
set('','data',{})
//设置表单a的校验配置
set('a','dataSchema',(oldDataSchema)=>{oldDataSchema.a=true})
//设置表单 a.b.c 的ui配置
set('a.b.c','uiSchema',(oldUiSchema)=>{oldUiSchema.disabled=true})
```

### 设置表单数据

```
set(xxx,'data',xxx)
```

### 设置表单ui配置

```
set(xxx,'uiSchema',xxx)
```

### 设置表单校验配置

```
set(xxx,'dataSchema',xxx)
```
## 代码沙盒

代码沙盒：[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/drip-form-pdsgmq?file=src/App.tsx)