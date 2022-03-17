---
id: schema
title: schema公共配置
---

import useBaseUrl from '@docusaurus/useBaseUrl'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## title 标题样式

### 是否展示

目前支持两种模式控制表单 title 显隐：

- `title` 字段：为空字符或不设置该字段时，不展示 title，dom 结构保留
- `ui.showTitle` 字段：为**false**时不展示 title，dom 不会渲染

```json title="unitedSchema.json"
{
	"validateTime": "submit",
	"type": "object",
	"theme": "drip-theme",
	"schema": [
		{
			"fieldKey": "selectText",
			"type": "object",
			"title": "单选输入",
			"ui": {
				"type": "selectText",
				"placeholder": "请选择",
				"allowClear": true,
				"multiple": true,
				"requestCache": true,
				"options": [
					{ "label": "北京", "value": "0" },
					{ "label": "上海", "value": "1" },
					{ "label": "成都", "value": "2" },
					{ "label": "武汉", "value": "3" }
				]
			}
		},
		{
			"fieldKey": "babelRadio",
			"type": "string",
			"title": "", //方式一
			"ui": {
				"type": "radio",
				"showTitle": false, //方式二
				"options": [
					{
						"label": "北京",
						"value": "0",
						"description": {
							"title": "<p>内容</p>这是babel-ui的tooltip内容，hover展开",
							"trigger": "hover"
						}
					},
					{
						"label": "上海",
						"value": "1",
						"description": {
							"title": "<p>内容</p>这是babel-ui的tooltip内容，点击展开",
							"trigger": "click"
						}
					},
					{ "label": "成都", "value": "2" },
					{ "label": "武汉", "value": "3" }
				]
			}
		}
	]
}
```

<div class='pic-container'>
  <img class='picture-2' src='https://storage.360buyimg.com/imgtools/ef5cd81f4c-88a38bf0-4cf9-11ec-89c8-f9e7ed0c7791.png' alt="titleFalse"/>
  <img class='picture-2' src='https://storage.360buyimg.com/imgtools/c62c1a5ba5-88e21b90-4cf9-11ec-a98c-659ccf3eecae.png' alt="titleNull"/>
</div>

### 自定义 Title 样式

schema 中`ui`对象中有一个可选的 `title` 属性用来控制表单标题的样式

| title 属性(均非必填) | 说明               | 类型                                 |    默认    | 示例   |
| :------------------- | :----------------- | :----------------------------------- | :--------: | :----- |
| width                | 标题宽度           | number                               |    82px    | -      |
| textAlign            | 标题水平对齐方式   | `left` \| `right`\| `center`         |   `left`   | -      |
| verticalAlign        | 标题垂直对齐方式   | `top` \| `center`\| `bottom`         |  `center`  | -      |
| placement            | 标题的位置布局     | `top` \| `right`\|`bottom` \| `left` |   `left`   | -      |
| requiredIcon         | 必填项是否展示\*号 | boolean                              |   false    | -      |
| margin               | 外边距             | string                               | 自动生成\* | 0 30px |
| marginTop            | 顶部外边距         | number                               | 自动生成\* | -      |
| marginRight          | 右侧外边距         | number                               | 自动生成\* | -      |
| marginBottom         | 底部外边距         | number                               | 自动生成\* | -      |
| marginLeft           | 左侧外边距         | number                               | 自动生成\* | -      |

> **什么是自动生成？**
>
> 标题的 margin 样式会根据 `placement` 自动生成，生成满足以下规则：
>
> 1. 默认会生成与 `placement` 反向的外边距。例如 `placement` 为 **left** 时，会默认生成：{ margin: 0 10px 0 0 } 的样式附加在标题的 dom 上。
>
> 2. 为保证视觉效果，横向的 margin 默认为**10px**，纵向的为**5px**。
>
> 3. marginTop 等独立属性的优先级比 margin 更高，即有设置为：**{ margin: "0 30px", marginRight: "20px" }** 时，最终会生成 **{ margin: 0 20px 0 30px }** 的样式附加在标题的 dom 上。

- 当`title`属性书写在表单项外部，即与 `theme` 同级时，控制为**全局标题样式**

- 当其书写在 `schema` 中的表单各项时，控制为**该表单的标题样式**，其优先级高于全局标题样式

:::caution 注意

只有展示标题，同时该项为必填项时才会展示\*号

:::

## fieldKey 表单项标识

`schema`中的每一个元素都应该拥有一个**存在且唯一**的`fieldKey`，这个关键字是该表单项的唯一标识，在`formData`中也是根据此关键字绑定的。

## type 表单项类型

`schema`中的每一个元素都具有一个`type`类型，它的值可以是`string`、`number`、`boolean`、`object`、`array`中的一个或者以数组形式的几个，例如：

```json title='type'
{
  "type": "string",
}
或
{
  "type": [ "string", "number"],
}
```

## dispatch 表单联动函数

`dispatch` 是 drip-form 允许开发者在外部修改表单的核心函数。它可用于控制表单的 UI、校验、数据。

目前 `dispatch` 函数可以**仅能在以下函数或行为中使用**：

- [onChange 联动控制](../use/control)
- [多表单联动](../expert/multiForm)

`dispatch` 接收一个对象参数，该参数包含以下字段：

| 参数       | 类型                                  | 说明                           |
| :--------- | :------------------------------------ | :----------------------------- |
| type       | `setValidate` \| `setUi` \| `setData` | 可触发的动作                   |
| [fieldKey] | any                                   | `fieldKey`按照传入值值进行更换 |

假设有一个 drip-form 表单的配置如下：

```json title="dataSchema.json"’
{
	"validateTime": "change",
	"type": "object",
	"theme": "drip-theme",
	"schema": [
		{
			"fieldKey": "switch",
			"type": "boolean",
			"title": "开关",
			"default": true,
			"ui": {
				"type": "switch"
			}
		}
	]
}
```

此时根据配置生成的 `formData` 为：

```js title="formData"
{
  switch: true
}
```

我们可以通过 `dispatch` 动态对其进行修改：

### setValidate

`setValidate` 多用来控制表单校验和表单默认值

```js
dispatch({
	type: 'setValidate',
	action: {
		set: {
			[fieldkey]: newVal,
		},
	},
})
```

实际上，它会执行操作：`dataSchema[fieldKey] = newVal`，举一些例子：

- 用 `setValidate` 设置表单不实时校验

  ```js
  dispatch({
  	type: 'setValidate',
  	action: {
  		set: {
  			validateTime: 'submit',
  		},
  	},
  })
  ```

  经过上述 `dispatch` 函数设置之后，`dataSchema` 的 `validateTime` 发生了变化：

```json title="unitedSchema变化后" {4}
{
	"validateTime": "submit", // change -> submit
	"type": "object",
	"theme": "drip-theme",
	"schema": [
		{
			"fieldKey": "switch",
			"type": "boolean",
			"title": "开关",
			"default": true,
			"ui": {
				"type": "switch"
			}
		}
	]
}
```

- 用 `setValidate` 设置 `switch` 的标题

  ```js
  dispatch({
  	type: 'setValidate',
  	action: {
  		set: {
  			'properties.switch.title': '修改标题',
  		},
  	},
  })
  ```

  经过上述 `dispatch` 函数设置之后，`unitedSchema` 如下：

```json title="unitedSchema变化后" {7}
{
	"validateTime": "submit", // change -> submit
	"type": "object",
	"theme": "drip-theme",
	"schema": [
		{
			"fieldKey": "switch",
			"type": "boolean",
			"title": "修改标题",
			"default": true,
			"ui": {
				"type": "switch"
			}
		}
	]
}
```

:::info 提示
fieldkey 支持以 `.` 分隔

例如

```jsx title="删除unitedSchema的switch的default字段"
dispatch({
	type: 'setValidate',
	action: {
		deleteKeys: 'properties.switch.default',
	},
})
```

:::

### setUi

`setUi` 多用来控制表单的 ui 层，即`unitedSchema`中`schema`中的`ui`属性。

```js
dispatch({
	type: 'setUi',
	action: {
		set: {
			[fieldkey]: newVal,
		},
	},
})
```

- 设置 `switch` 为 `disabled`

  ```js
  dispatch({
  	type: 'setUi',
  	action: {
  		set: {
  			'properties.switch.disabled': true,
  		},
  	},
  })
  ```

### setData

`setData`用来控制表单的数据。

```js
dispatch({
	type: 'setData',
	action: {
		set: {
			[fieldkey]: newVal,
		},
	},
})
```

- 设置开关为关闭状态

  ```jsx
  dispatch({
  	type: 'setData',
  	action: {
  		set: {
  			switch: false,
  		},
  	},
  })
  ```

### 一次设置多个表单值

目前上述三种 type 均支持一次性设置多个表单的值：

```js
dispatch({
	type:'xxx',
	action:{
		set:{
			[fieldKey]:'val',
			[fieldKey1]:'val1',
			...
		}
	}
})
```
