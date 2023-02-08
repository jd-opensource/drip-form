---
id: getKey
title: getKey
description: 获取表单相对uiSchema、dataShema、unitedSchema的路径
---

获取fieldKey相对uiSchema、dataSchema路径。

使用场景：配合[dispatch](./dispatch) 设置表单ui配置、校验配置。

```ts
type GetKey = (
  fieldKey: string,
  type: 'uiSchema' | 'dataSchema' | 'data' | 'unitedSchema'
) => string
```

## 获取表单相对uiSchema的配置

```js
getKey(xxx,'uiSchema')
```

## 获取表单相对dataSchema的配置

```js
getKey(xxx,'dataSchema')
```

## 获取表单相对unitedSchema的配置

```js
getKey(xxx,'unitedSchema')
```