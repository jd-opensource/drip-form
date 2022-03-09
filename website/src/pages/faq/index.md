---
id: faq
title: '常见问题'
---

import useBaseUrl from '@docusaurus/useBaseUrl'

# 常见问题

## drip-form 相关

### 对象容器折叠之后是否渲染

Drip-Form 的对象容器提供了类似手风琴的折叠功能，但是折叠之后的内部 DOM 结构是否会被渲染呢？

请参考<a target="\_self" href={useBaseUrl("docs/QA/objectfold")}>对象容器的折叠功能</a>

## form-generator 相关

### 必填校验模式

`unitedSchema` 顶层支持配置`requiredMode` 来配置必填校验模式。
Drip-form 遵循 JSONSchema 规范，使用`ajv` 校验。

requiredMode 可选两个类型

`default`：**遵循 JSONSchema 规范**。只有对象中不存在该属性时，才报错。空字符、null、空数组均不会报错

`empty`：**使用 isEmpty 方法判断该字段是否为空**。当为空字符，null，空数组均会报错。数字 0 不会报错

:::note 使用提示
reuqiredMode 为 default 时，表单数据为`''`、`[]`、`null`、`undefined`会自动删除字段。

当希望表单中存在`''`、`[]`、`null`、`undefined`数据时，使用 empty 模式，并且配置最小长度、最少项来完成必填校验效果。
:::
