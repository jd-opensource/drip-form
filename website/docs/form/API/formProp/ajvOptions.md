---
id: ajvOptions
title: ajvOptions
description: 自定义ajv option
---

通过配置 `ajvOptions` 可以自定义[ajv option](https://ajv.js.org/options.html)配置
## Drip form默认配置

:::tip `Drip form` 内部有一些默认配置
:::

```js
{
    // 不允许type:['string','number']等联合模式 推荐使用anyOf代替
    allowUnionTypes: false,
    //支持default关键字输出到formData
    useDefaults: true,
    // 展示所有错误信息。为false时，检测到错误立马返回，后续错误不会返回
    allErrors: true,
    // 错误信息包含schema、parentSchema
    verbose: true,
    // 支持$data引用，参考：https://ajv.js.org/guide/combining-schemas.html#data-reference
    $data: true,
    // 支持鉴别关键字 参考：https://ajv.js.org/json-schema.html#discriminator
    discriminator: true,
    // 是否删除数据中Schema未定义的字段
    removeAdditional: false,
}
```
## 优先级

用户可通过 `ajvOptions` 覆盖 `Drip Form `的默认配置。

## 代码沙盒

代码沙盒：[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/drip-form-4xfdru?file=src/App.tsx)



