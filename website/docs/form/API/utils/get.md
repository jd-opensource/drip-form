---
id: get
title: get
description: 获取表单数据、ui、校验
---

## get(fieldKey)

```ts
type Get = (fieldKey?: string) => {
  data: unknown
  dataSchema: DataSchema
  uiSchema: UiSchema
}
```

获取表单的数据、ui、校验信息。

### 参数

1. fieldKey （string）

	需要获取表单的key。如果是空字符，则获取所有表单数据

### 返回

返回一个包含表单数据、ui配置、校验配置的对象。



## 例子

```js
//获取全局表单数据
get('').data
//获取表单a的校验配置
get('a').dataSchema
//获取表单 a.b.c 的ui配置
get('a.b.c').uiSchema
```

### 获取表单数据

```js
get(xxx).data
```

### 获取表单ui配置

```js
get(xxx).uiSchema
```

### 获取表单校验配置

```js
get(xxx).dataSchema
```

## 代码沙盒

代码沙盒：[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/drip-form-fggmg1?file=src/App.tsx)