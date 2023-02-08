---
id: merge
title: merge
description: 设置合并表单数据、ui、校验
---

:::tip merge和set的不同
`merge` 用法同 `set`。都可以用来设置表单数据、ui配置、校验配置。
不同在于：
-  `merge` 用于合并数据或深度合并数据
- `set` 用于设置或覆盖数据。


```js
//假设全局表单数据为
const formData = {
	a:1,
	b:{
		c:2
	}
}

set('','data',{a:1}) //formData 为 {a:1}
merge('','data',{b:{c:3}}) //formData 为 {a:1,b:{c:3}}
```


:::
## merge(fieldKey, type, value)

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
type Merge = (
  fieldKey: string,
  type: SetType,
  value: StaticValue
) => void
```

合并设置表单的数据、ui、校验信息。

### 参数

1. **fieldKey** （string）

	需要设置表单的key。如果是空字符，则设置所有全局

2. **type** （'data'|'uiSchema'|'dataSchema'）

	需要设置的类型

	- `data`: 设置表单数据
	- `uiSchema`: 设置表单ui配置
	- `dataSchema`: 设置表单校验配置

3. **value** （值）

	直接将需要设置的表单使用值进行深度合

		


	


### 返回

无返回



## 例子

```js
//将 {a:1} 合并到全局表单数据
merge('','data',{a:1})
//将 {a:true} 合并到表单a的校验配置
merge('a','dataSchema',{a:true})
//将 {disabled:true} 合并到 表单 a.b.c 的ui配置
merge('a.b.c','uiSchema',{disabled:true})
```

### 设置表单数据

```
merge(xxx,'data',xxx)
```

### 设置表单ui配置

```
merge(xxx,'uiSchema',xxx)
```

### 设置表单校验配置

```
merge(xxx,'dataSchema',xxx)
```
## 代码沙盒

代码沙盒：[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/drip-form-1wvnzk?file=src/App.tsx)
