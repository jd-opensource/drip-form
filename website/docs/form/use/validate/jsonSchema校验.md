---
id: jsonSchemaValidate
title: JSON Schema校验
description: 如何使用 JSON Schema 校验?
---

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

`Drip Form` 协议底层使用 `JSON Schema`[^1]规范 配合 `Ajv`[^2] 校验。

<details>
<summary>使用 JSON Schema 的好处</summary>

- 确保表单数据的格式统一（避免冗余、格式错误数据的提交）
- 方便前后端统一校验函数
- 无需开发常见校验场景（JSON Schema 和 Ajv 已经提供）
- 描述数据的格式

</details>
<details>
<summary>使用 Ajv 的好处</summary>

> - 少写代码
>
>   - 无需编写数据校验逻辑
>
>   - 使用简洁、易于阅读和跨平台的 JSON Schema 协议立即校验数据
>
> - 超级快速和安全
>
>   - Ajv 生成代码以将 JSON 模式转换为对 v8 优化有效的超快速验证函数。
>
>   - 目前 Ajv 是最快和最符合标准的验证器
>
> - 支持多个 JSON Schema 草案
>
>   包括最新的 2020-12 草案

</details>

:::note 回顾
在《[unitedSchema 协议 表单校验](../../unitedSchema/schemaKeyword)》文档中，我们学习以下内容

- 使用`requiredMsg`、`minItems`、`minmum`、`maximum`校验关键字
- 使用`errMsg`配置关键字错误文案

我们大致了解了如何使用 `unitedSchema` 配置校验。
:::

接下来，我们将介绍 JSON Schema[^1]和 ajv[^2]插件提供的关键字。

:::tip

- 关键字介绍顺序会按照数据格式（number、string、array、object）进行区分
- boolean 和 null 无校验关键字；
- 关键字所属区分
  - JSON Schema 提供的关键字后面会添加 `JSON Schema` 标志
  - Ajv 提供的关键字会添加 `Ajv` 标志
  - Drip Form 自定义校验关键字[^3]会添加 `Drip Form`标志
- 本文档部分例子使用 JSON Schema[^1] 和 Ajv[^2] 文档中例子

:::

## number

### 倍数

<details>
<summary><b>multipleOf</b> <code>JSON Schema</code></summary>
<Tabs>
<TabItem label="例子1" value="1">

```json
{
	"type": "number",
	"multipleOf": 10
}
```

- 校验通过：`10`、`20`
- 校验失败：`11`

</TabItem>
<TabItem label="例子2" value="2">

```json
{
	"type": "number",
	"multipleOf": 2.5
}
```

- 校验通过：`2.5`、`5`、`7.5`
- 校验失败：`11`

</TabItem>
</Tabs>
</details>

### 范围

<details>
<summary><b>maximum/minimum</b> <code>JSON Schema</code></summary>
<Tabs>
<TabItem label="maximum例子" value="1">

```json
{
	"type": "number",
	"maximum": 10
}
```

- 校验通过：`1`、`9`、`10`
- 校验失败：`11`

</TabItem>
<TabItem label="minimum例子" value="2">

```json
{
	"type": "number",
	"minimum": 10
}
```

- 校验通过：`10`、`11`
- 校验失败：`9`

</TabItem>
</Tabs>
</details>
<details>
<summary><b>exclusiveMaximum/exclusiveMinmum</b> <code>JSON Schema</code></summary>
<Tabs>
<TabItem label="exclusiveMaximum例子" value="1">

```json
{
	"type": "number",
	"exclusiveMaximum": 10
}
```

- 校验通过：`1`、`9`
- 校验失败：`10`、`11`

</TabItem>
<TabItem label="exclusiveMinmum例子" value="2">

```json
{
	"type": "number",
	"exclusiveMinmum": 10
}
```

- 校验通过：`11`、`12`
- 校验失败：`10`、`9`

</TabItem>
</Tabs>
</details>

<details>
<summary><b>multipleOf</b> <code>JSON Schema</code></summary>
<Tabs>
<TabItem label="例子1" value="1">

```json
{
	"type": "number",
	"multipleOf": 10
}
```

- 校验通过：`10`、`20`
- 校验失败：`11`

</TabItem>
<TabItem label="例子2" value="2">

```json
{
	"type": "number",
	"multipleOf": 2.5
}
```

- 校验通过：`2.5`、`5`、`7.5`
- 校验失败：`11`

</TabItem>
</Tabs>
</details>

<details>
<summary><b>range</b> <code>Ajv</code></summary>

```json
{
	"type": "number",
	"range": [2, 4]
}
```

- 校验通过：`2`、`3`、`4`、`2.3`
- 校验失败：`1`、`5`

</details>

<details>
<summary><b>exclusiveRange</b> <code>Ajv</code></summary>

```json
{
	"type": "number",
	"exclusiveRange": [2, 4]
}
```

- 校验通过：`2.11`、`3`、`3.99`
- 校验失败：`1`、`2`、`4`、`5`

</details>

## string

### 长度

<details>
<summary><b>minLength/maxLength</b> <code>JSON Schema</code></summary>
注意：这里不区分中英文长度，中英文长度均为1

```json
{
	"type": "string",
	"minLength": 2,
	"maxLength": 3
}
```

- 校验通过：`a我1`、`a我`
- 校验失败：`我`、`我爱13`

</details>
<details>
<summary><b>gbkLength</b> <code>Drip Form</code></summary>
区分中英文长度

```json
{
	"type": "string",
	"gbkLength": {
		"min": 2,
		"max": 3
	}
}
```

- 校验通过：`爱`、`爱1`
- 校验失败：`1`、`我爱`

</details>
<details>
<summary><b>rangeDelimiter</b> <code>Drip Form</code></summary>
使用分割符分割之后的最长最短输入校验。

```json
{
	"type": "string",
	"rangeDelimiter": {
		// 使用英文逗号分割字符串
		"delimiter": ",",
		// 分割之后的最多4位
		"max": 4,
		// 分割之后最少2位
		"min": 2
	}
}
```

- 校验通过：`"1,2,3,4"`、`"1,2,3"`、`"1,2"`
- 校验失败：`"1"`、`"1,2,3,4,5"`

</details>

### 正则

<details>
<summary><b>pattern</b> <code>JSON Schema</code></summary>

pattern 的值是一个字符串，用于 new RegExp(value,"u")创建将用于测试数据的正则表达式

```json
{
	"type": "string",
	"pattern": "[abc]+"
}
```

- 校验通过："a"、"abcd"、"cde"
- 校验失败："def"、""

</details>
<details>
<summary><b>regexp</b> <code>Ajv</code></summary>
此关键字允许在正则中使用带有标志的正则表达式，并且也可以不使用"u"标志（pattern默认存在"u"标志）

```json
{
	"type": "string",
	"regexp": "/foo/i"
}
```

- 校验通过：`Food`、`foo`
- 校验失败：`fog`

</details>

### 转换

<details>
<summary><b>transform</b> <code>Ajv</code></summary>
此关键字允许在验证期间修改字符串。

支持的转换：

- trim: 删除开头和结尾的空格
- trimStart/ trimLeft: 从开始删除空格
- trimEnd/ trimRight：从末尾删除空格
- toLowerCase: 转换为小写
- toUpperCase: 转换为大写

<Tabs>
<TabItem label="单个转换" value="1">

```json
{
	"type": "string",
	"transform": ["trim"]
}
```

- 校验前：`" MixCase "`
- 校验后：`"MixCase"`

</TabItem>
<TabItem label="多重转换" value="2">
转换按照列出的顺序应用。

```json
{
	"type": "string",
	"transform": ["trim", "toLowerCase"]
}
```

- 校验前：`" MixCase "`
- 校验后：`"mixcase"`

</TabItem>
</Tabs>

</details>

### 格式

<details>
<summary><b>format</b> <code>JSON Schema</code></summary>
此关键字提供了一些常见语义的校验。比如：日期、url、ip地址等

format 支持以下格式

- 日期和时间
  - date-time `JSON Schema`、`Drip Form`
  - time `JSON Schema`
  - date `JSON Schema`
  - duration `JSON Schema`
  - iso-time `Ajv`
  - iso-date-time `Ajv`
- 电子邮件地址
  - email `JSON Schema`
  - idn-email `JSON Schema`
- 主机名
  - hostname `JSON Schema`
  - idn-hostname `JSON Schema`
- ip 地址
  - ipv4 `JSON Schema`
  - ipv6 `JSON Schema`
- 资源标识符
  - uuid `JSON Schema`
  - uri `JSON Schema`
  - uri-reference `JSON Schema`
  - iri `JSON Schema`
  - iri-reference `JSON Schema`
  - uri-template `Ajv`
  - url `Ajv`
  - https `Drip Form` 是否是规范的 https url
- 其他
  - regex `Ajv`
  - json-pointer `Ajv`
  - relative-json-pointer `Ajv`
  - byte `Ajv`
  - int32 `Ajv`
  - int64 `Ajv`
  - float `Ajv`
  - double `Ajv`
  - password `Ajv`
  - binary `Ajv`
  - color `Drip Form` 是否是颜色字符串（支持 rgba、rgb、hex 三种颜色）
  - jsonObject `Drip Form` 是否是 json 对象字符串

[格式实现规范详细了解](https://ajv.js.org/packages/ajv-formats.html#formats)

</details>

## array

### 长度

<details>
<summary><b>minItems/maxItems</b> <code>JSON Schema</code></summary>

```json
{
	"type": "array",
	"minItems": 2,
	"maxItems": 3
}
```

- 校验通过：`[1,2]`、`[1,2,3]`
- 校验失败：`[1]`、`[1,2,3,4]`

</details>

### 唯一性

<details>
<summary><b>uniqueItems</b> <code>JSON Schema</code></summary>

```json
{
	"type": "array",
	"uniqueItems": true
}
```

- 校验通过：`[1,2]`、`[1,2,3]`
- 校验失败：`[1,2,1]`、`[{a: 1,b: 2},{b: 2,a: 1}]`

</details>
<details>
<summary><b>uniqueItemProperties</b> <code>Ajv</code></summary>

```json
{
	"type": "array",
	"uniqueItemProperties": ["id", "name"]
}
```

- 校验通过：`[{id: 1},{id: 2},{id: 3}]`
- 校验失败：

  <Tabs>
  <TabItem label="失败例子1" value="1">

  ```
  [
    {id: 1},
    {id: 1}, // duplicate "id"
    {id: 3},
  ]
  ```

  </TabItem>
  <TabItem label="失败例子2" value="2">

  ```
  [
    {id: 1, name: "taco"},
    {id: 2, name: "taco"}, // duplicate "name"
    {id: 3, name: "salsa"},
  ]
  ```

  </TabItem>
  </Tabs>

</details>

### 子项

<details>
<summary><b>items</b> <code>JSON Schema</code></summary>
<Tabs>
<TabItem label="普通数组" value="1">

普通数组是指数组中每一项数据格式一致的数组。比如：[1,2,3]、['1','2','3']、[{a:1},{a:2}]

```json
{
	"type": "array",
	"items": {
		"type": "string"
	}
}
```

- 校验通过：`[]`、`['1','2']`
- 校验失败： `[1]`

</TabItem>
<TabItem label="元祖" value="2">

元祖是指数组有固定顺序和长度限制，且格式不一致。比如：[1,'2']

```json
{
	"type": "array",
	"minItems": 2,
	"additionalItems": false,
	"items": [
		{
			"type": "string"
		},
		{
			"type": "number"
		}
	]
}
```

- 校验通过：`['1',2]`、`['3',4]`
- 校验失败： `[1,2]`

</TabItem>
</Tabs>
</details>

### 额外项

<details>
<summary><b>additionalItems</b> <code>JSON Schema</code></summary>
<Tabs>
<TabItem label="不允许存在多余子项" value="1">

```js
{
  type: "array",
  items: [{type: "number"}, {type: "string"}],
  minItems: 2
  additionalItems: false
}
```

- 校验通过：`[1,'2']`
- 校验失败： `[]`、`[1]`、`[1,'2',3]`、`[1,2]`

</TabItem>
<TabItem label="允许存在多余子项，不限制子项类型" value="2">

```js
{
  type: "array",
  items: [{type: "number"}, {type: "number"}],
  additionalItems: true
}
```

- 校验通过：`[]`、 `[1, 2]`、`[1, 2, 3]`、`[1, 2, "abc"]`
- 校验失败： `["abc"]`、`[1, "abc", 3]`

</TabItem>
<TabItem label="允许存在多余子项，限制子项类型" value="3">

```js
{
  type: "array",
  items: [{type: "number"}, {type: "number"}],
  additionalItems: {type: "string"}
}
```

- 校验通过： `[]`、`[1, 2]`、`[1, 2, "abc"]`
- 校验失败： `["abc"]`、`[1, 2, 3]`

</TabItem>
</Tabs>
</details>

### 包含

<details>
<summary><b>contains</b> <code>JSON Schema</code></summary>

```json
{
	"type": "array",
	"contains": {
		"type": "number"
	}
}
```

- 校验通过：`[1]`、 `[1, "foo"]` （任何至少有一个整数的数组）
- 校验失败：`[]`、`["foo", "bar"]` （没有任何整数的数组）

</details>
<details>
<summary><b>maxContaines/minContains</b> <code>JSON Schema</code></summary>

```js
{
  type: "array",
  contains: {type: "number"},
  minContains: 2,
  maxContains: 3
}
```

- 校验通过：`[1, 2]`、`[1, 2, 3, "foo"]` （任何有 2 或 3 个整数的数组）
- 校验失败：`[]`、`[1, "foo"]`、`[1, 2, 3, 4]` （任何少于 2 个或多于 3 个整数的数组）

</details>

## object

### 属性

<details>
<summary><b>properties</b> <code>JSON Schema</code></summary>

```js
{
  type: "object",
  properties: {
    foo: {type: "string"},
    bar: {
      type: "number",
      minimum: 2
    }
  }
}
```

- 校验通过：`{}`、`{foo: "a"}`、`{foo: "a", bar: 2}`、`{foo:'a',bar:2,c:3}`（省略、多余属性均不影响）
- 校验失败：`{foo: 1}`、`{foo: "a", bar: 1}`

</details>

### 正则属性

<details>
<summary><b>patternProperties</b> <code>JSON Schema</code></summary>

```js
{
  type: "object",
  patternProperties: {
    "^fo.*$": {type: "string"},
    "^ba.*$": {type: "number"}
  }
}
```

- 校验通过：`{}`、 `{foo: "a"}`、`{foo: "a", bar: 1}`
- 校验失败：`{foo: 1}`、`{foo: "a", bar: "b"}`

</details>

### 额外属性

<details>
<summary><b>additionalProperties</b> <code>JSON Schema</code></summary>
<Tabs>
<TabItem label="不允许存在多余子属性" value="1">

```js
{
  type: "object",
  properties: {
    foo: {type: "number"}
  },
  additionalProperties: false
}
```

- 校验通过：`{}`、`{foo:1}`
- 校验失败： `{a:3}`、`{foo:1,a:3}`

</TabItem>
<TabItem label="允许存在多余子属性，不限制子属性类型" value="2">
默认additionalItems为true，即不限制额外的属性

```js
{
  type: "object",
  properties: {
    foo: {type: "string"},
    bar: {
      type: "number",
      minimum: 2
    }
  },
  //可省略additionalItems
  additionalItems:true
}
```

- 校验通过：`{}`、`{foo: "a"}`、`{foo: "a", bar: 2}`、`{foo:'a',bar:2,c:3}`（省略、多余属性均不影响）
- 校验失败：`{foo: 1}`、`{foo: "a", bar: 1}`

</TabItem>
<TabItem label="允许存在多余子属性，限制子属性类型" value="3">

{
type: "object",
properties: {
foo: {type: "number"}
},
additionalProperties: {type: "string"}
}

- 校验通过：`{}`、`{a: "b"}`、`{foo: 1}`、`{foo: 1, bar: 2}`、`{foo: 1, bar: 2, a: "b"}`
- 校验失败：`{a: 3}`、`{foo: 1, baz: 3}`

</TabItem>
</Tabs>
</details>

<details>
<summary><b>prohibited</b> <code>Ajv</code></summary>
禁止列表中的任何属性出现在对象中。

```js
{
  type: "object",
  prohibited: ["foo", "bar"],
}
```

- 校验通过：`{baz: 1}`、`{}`
- 校验失败：`{foo: 1}`、`{bar: 2}`、`{foo: 1, bar: 2}`

</details>

### 必须属性

<details>
<summary><b>requriedMsg</b> <code>Drip Form</code></summary>
设置对象中某个属性必填，参考[表单校验 必填](../../unitedSchema/schemaKeyword#必填)
</details>

<details>
<summary><b>allRequired</b> <code>Ajv</code></summary>
所有属性均要出现在对象中。

```js
{
  type: "object",
  properties: {
    foo: {type: "number"},
    bar: {type: "number"},
  },
  allRequired: true,
}
```

- 校验通过：`{foo: 1, bar: 2}`、`{foo: 1, bar: 2, baz: 3}`
- 校验失败：`{foo: 1}`、`{bar: 2}`、`{}`

</details>

<details>
<summary><b>anyRequired</b> <code>Ajv</code></summary>
至少一个属性要出现在对象中。

```js
{
  type: "object",
  anyRequired: ["foo", "bar"],
}
```

- 校验通过：`{foo: 1}`、`{foo: 1, bar: 2}`
- 校验失败：`{}`、`{baz: 3}`

</details>
<details>
<summary><b>oneRequired</b> <code>Ajv</code></summary>
只有一个属性出现在对象中。

```js
{
  type: "object",
  oneRequired: ["foo", "bar"],
}
```

- 校验通过：`{foo: 1}`、`{bar: 2, baz: 3}`
- 校验失败：`{}`、`{baz: 3}`、`{foo: 1, bar: 2}`

</details>
<details>
<summary><b>patternRequired</b> <code>Ajv</code></summary>
每个正则表达式都应至少匹配数据对象中的一个属性名称

```js
{
  type: "object",
  patternRequired: ["f.*o", "b.*r"],
}
```

- 校验通过：`{foo: 1, bar: 2}`、`{foobar: 3}`
- 校验失败：`{}`、`{foo: 1}`、`{ bar: 2}`

</details>

### 属性名称

<details>
<summary><b>propertyNames</b> <code>JSON Schema</code></summary>
对象中的每个属性名称都应根据此模式有效

```js
{
  type: "object",
  propertyNames: {
    format: "email"
  }
}
```

- 校验通过：`{"foo@bar.com": "any", "bar@bar.com": "any"}`
- 校验失败：`{foo: "any value"}`

</details>

### 大小

<details>
<summary><b>minProperties/maxProperties</b> <code>JSON Schema</code></summary>
对象中的每个属性名称都应根据此模式有效

```js
{
  type: "object",
   minProperties: 2,
   maxProperties: 3,
}
```

- 校验通过：`{a:1,b:2}`、`{a:1,b:2,c:3}`
- 校验失败：`{foo: "any value"}`、`{a:1,b:2,c:3,d:4}`

</details>

[^1]: [JSON Schema](https://json-schema.org/)是一种声明性语言，允许您注释和验证 JSON
[^2]: [Ajv](https://ajv.js.org/) 是安全可靠且快速的 JSON Schema 验证器
[^3]: Drip Form 依赖 Ajv 插件机制开发的自定义关键字。用于补齐 JSON Schema、Ajv 并不具备，但业务场景常见的关键字。更多细节了解[自定义校验关键字](../../advanced/customKeyword)
