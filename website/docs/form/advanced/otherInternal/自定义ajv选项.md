---
id: customAjv
title: 自定义ajv配置
description: 自定义ajv配置
---


Drip Form使用Ajv进行校验，ajv支持配置options进一步定制校验逻辑。

## Drip Form默认ajv配置

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

## ajv配置

所有ajv配置，查看[ajv optiosn](https://ajv.js.org/options.html)


## 自定义ajv配置

某些场景需要自定义ajv配置。比如：[issue 137](https://github.com/JDFED/drip-form/issues/137)中的场景：

<details>
<summary>issue 137</summary>

**问题：**

当前 `dripForm` 配置了两个表单字段 `name` 和 `erp`。
在初始化时formData的值为 {jdName:"xxx", jdErp:"xxx"}，点击保存时我获取到的formData为{jdName:"xxx", jdErp:"xxx", name: "xxx", erp: "xxx"}。
当前表单没有 `jdName` 和 `jdErp` 的输入框，所以在获取时也不应该返回这两个值。
期望返回formData的值为: {name: "xxx", erp: "xxx"}

**解决：**
```react
<DripForm
	unitedSchema={unitedSchema}
	uiComponents={{ 'drip-theme': dripTheme }}
	ajvOptions={{removeAdditional:'all'}}
/>
```
</details>



`Drip Form` 提供 `ajvOptions prop` 更改默认的 `Ajv` 配置。

详细配置查看[ajvOptions prop](../../API/formProp/ajvOptions)章节

