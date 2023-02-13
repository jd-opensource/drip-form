---
id: formData
title: formData
description: 设置表单初始化数据
---

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

`Drip Form` 通过 `formData prop` 传递表单初始化数据。

## formData 含义

- 表单的初始数据
- 后端接口下发的表单数据

## formData 结构

`formData` 结构取决于 `unitedSchema` 的结构，整体是个对象结构，key 值为每个表单项的 fieldKey，当遇到对象容器或者数组容器时，需要调整为相应的结构。

<details>
<summary>代码示例</summary>
<Tabs>

<TabsItem value="App" label="App.tsx">

```tsx
import DripForm from '@jdfed/drip-form'
import antd from '@jdfed/drip-form-theme-antd'
import unitedSchema from './unitedSchema'
import '@jdfed/drip-form/dist/index.css'
import '@jdfed/drip-form-theme-antd/dist/index.css'
import 'antd/dist/antd.css'

function App() {
	return (
		<DripForm
			// 表单配置文件
			unitedSchema={unitedSchema}
			// 导入组件
			uiComponents={{ antd }}
			// 设置表单值
			//highlight-start
			formData={{
				text_mJJFo: '输入框内容',
				colorPicker_oHFL5K: '#08ce96',
				array_4LrpU6: [
					{
						switch_mDJ7Lz: true,
						'0': 1,
					},
				],
				object_lcALiU: {
					null_VsLlWt: '这是一个文本',
				},
			}}
			//highlight-end
		></DripForm>
	)
}

export default App
```

</TabsItem>

<TabsItem value="unitedSchema" label="unitedSchema.ts">

```tsx
// 表单配置文件

export default {
	showError: 'change',
	type: 'object',
	ui: {},
	theme: 'antd',
	schema: [
		{
			type: 'string',
			title: '输入框',
			ui: {
				type: 'text',
			},
			fieldKey: 'text_mJJFo',
		},
		{
			type: 'string',
			title: '颜色选择框',
			ui: {
				type: 'colorPicker',
			},
			fieldKey: 'colorPicker_oHFL5K',
		},
		{
			type: 'array',
			title: '数组容器',
			ui: {
				mode: 'add',
				type: 'array',
			},
			items: {
				type: 'object',
				title: '',
				ui: {
					type: 'object',
				},
				schema: [
					{
						type: 'boolean',
						title: '开关',
						ui: {
							type: 'switch',
						},
						fieldKey: 'switch_mDJ7Lz',
					},
					{
						type: 'string',
						title: '单选',
						ui: {
							type: 'radio',
							options: [
								{
									label: '是',
									value: 1,
								},
								{
									label: '否',
									value: 0,
								},
							],
						},
						fieldKey: '0',
					},
				],
			},
			fieldKey: 'array_4LrpU6',
		},
		{
			type: 'object',
			title: '对象容器',
			ui: {
				type: 'object',
			},
			schema: [
				{
					type: 'string',
					title: '文本',
					ui: {
						type: 'null',
						text: '这是一个不会绑定数据的空表单。只用作特殊场景下展示文字使用',
					},
					fieldKey: 'null_VsLlWt',
				},
			],
			fieldKey: 'object_lcALiU',
		},
	],
}
```

</TabsItem>

</Tabs>

</details>

代码沙盒：[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/drip-form-ehptvk?file=src/App.tsx)

## 自动删除表单中不存在的冗余字段

:::caution
`Drip form` 默认不会删除 formData 传递的多余字段[^1]。可以配置[ajvOptions](./ajvOptions) `removeAdditional` 属性来让 `Drip form` 自动删除多余字段
:::

<details>
<summary>代码示例</summary>
<Tabs>

<TabsItem value="App" label="App.tsx">

```tsx
/**
 * 点击保存后，会自动删除冗余字段 aa
 */

import { useState } from 'react'
import DripForm from '@jdfed/drip-form'
import antd from '@jdfed/drip-form-theme-antd'
import unitedSchema from './unitedSchema'
import { Map } from '@jdfed/utils'
import '@jdfed/drip-form/dist/index.css'
import '@jdfed/drip-form-theme-antd/dist/index.css'
import 'antd/dist/antd.css'

const initFormData: Map = {
	checkbox: '1',
	colorPicker: '#000000',
	text: '1111',
	number: 1,
	//冗余字段，未在unnitedSchema中配置
	//highlight-next-line
	aa: 1,
}

function App() {
	const [data, setData] = useState<Map>()
	return (
		<>
			<DripForm
				// 表单配置文件
				unitedSchema={unitedSchema}
				// 导入组件
				uiComponents={{ antd }}
				// 设置表单值
				formData={initFormData}
				// 自定义ajv options配置
				//highlight-start
				ajvOptions={{
					//删除所有冗余字段
					removeAdditional: 'all',
				}}
				//highlight-end
				onSubmit={({ formData }) => {
					setData(formData)
				}}
			></DripForm>
			初始数据：
			<p>{JSON.stringify(initFormData)}</p>
			点击保存后删除冗余字段的数据：
			<p>{JSON.stringify(data)}</p>
		</>
	)
}

export default App
```

</TabsItem>

<TabsItem value="unitedSchema" label="unitedSchema.ts">

```tsx
// 表单配置文件

export default {
	type: 'object',
	showError: 'change',
	ui: {
		footer: {
			justifyContent: 'right',
			margin: 10,
			onOk: {
				text: '保存',
				type: 'primary',
				size: 'middle',
				shape: 'squash',
			},
			onCancel: {
				text: '重置',
				type: 'default',
				size: 'middle',
				shape: 'squash',
			},
		},
	},
	theme: 'antd',
	schema: [
		{
			type: 'array',
			title: '多选框',
			ui: {
				type: 'checkbox',
				theme: 'antd',
				options: [
					{
						label: '选项1',
						value: '1',
					},
					{
						value: '2',
						label: '选项2',
					},
				],
			},
			fieldKey: 'checkbox',
		},
		{
			type: 'string',
			title: '颜色选择框',
			format: 'color',
			default: '#310bec',
			ui: {
				type: 'colorPicker',
				theme: 'antd',
				defaultValue: '#310bec',
			},
			fieldKey: 'colorPicker',
		},
		{
			type: 'string',
			title: '日期选择框',
			ui: {
				type: 'datePicker',
				showTime: true,
				theme: 'antd',
			},
			fieldKey: 'datePicker',
		},
		{
			type: 'string',
			title: '输入框',
			ui: {
				type: 'text',
				style: {
					width: '100%',
				},
				theme: 'antd',
			},
			fieldKey: 'text',
		},
		{
			type: 'number',
			title: '数字输入框',
			ui: {
				type: 'number',
				theme: 'antd',
			},
			fieldKey: 'number',
		},
	],
}
```

</TabsItem>

</Tabs>

</details>

代码沙盒：[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/drip-form-4xfdru?file=package.json)

更多 `ajvOptions` 配置查看[ajvOptions prop](./ajvOptions)章节。

## 处理初始化数据

存在某些场景，需要对后端接口数据进行改造再传入表单的情况。

比如：表单数据由接口直接下发，但是下发的数据不能直接填入表单。 例如：级联选择器，后台下发的格式为 1-1-1，实际上表单渲染需要的是[1, 1, 1]。

可以通过 [parse prop](./parse)处理初始数据

[^1]: 多余字段是指没有在 [unitedSchema](../../unitedSchema/)中定义，不属于表单本身的冗余字段。
