---
id: unitedSchema
title: unitedSchema协议
---

import DocCardList from '@theme/DocCardList';

了解表单的组成部分可以加快了解`unitedSchema`协议。

## 表单的组成部分

一个表单实现主要分为两个部分：**ui 展示部分**、**数据部分**

**ui 展示**分为：表单展示、联动逻辑（展示/隐藏逻辑、一对 N 联动等）

**数据**分为：数据类型、数据校验。

:::tip
**ui 展示**配置在 `Drip Form` 内部叫作：**uiSchema**；

**数据**配置在 `Drip Form` 内部叫做：**dataSchema**;
:::
:::important
为了方便用户同时配置**ui展示**和**数据**部分，`Drip Form` 内部将 `unitedSchema` 解析为 `uiSchema` 和 `dataSchema`。

因此用户只需要配置 **unitedSchema** 即可
:::

## 例子

:::info

我们将通过一个实际例子让你快速了解`unitedSchema`的配置。

:::

现在我们需要搭建一个个人信息的表单，在提交时表单数据（formData）如下：

```js
{
  name: '张三',
  age: 23,
  married: true,
  hobby: ['钓鱼', '游泳'],
  address: {province: 'xx省', city: 'xx市'},
  mate: ['王四', 23],
  schools: [{name:'xxx小学',year:'2000-2006'},{name:'xxx中学',year:'2007-2010'}]
}
```

按照表单组成部分，我们将分为三个部分来了解 unitedSchema

<DocCardList />

:::tip

本章不介绍联动的配置，联动详情查看：[联动配置](../use/control)

:::
