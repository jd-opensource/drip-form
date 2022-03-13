---
id: components
title: components（自定义组件区）
---

# 自定义组件

`components` prop 可以配置整个组件区展示的组件。

通过配置 components 可以支持以下功能

- 组件区配置
  - 组件分类
  - 组件排序
- 编辑区配置
  - 属性配置
  - 校验配置

---

```typescript
type ComponentsData = {
	// 左侧分类顺序（只有order中的分类才展示）
	order: Array<string>
	// 每个分类中表单配置
	category: Record<
		string,
		{
			// 分类标题
			title: string
			// 分类中组件的顺序
			order: Array<string>
			// 组件配置
			fields: Record<string, Field>
		}
	>
}
```

```typescript
type Field = {
	// 组件区组件的宽高等样式设置
	customBarStyle?: CSSProperties
	// 左侧列表对应的icon
	icon: string
	// 表单对应的title（不填，默认使用unitedSchema.title）
	title?: string
	// 渲染所需的基础属性，用于拖拽到中间区域的渲染
	unitedSchema: UnitedSchemaAtom
	propertyConfig?: PropertyConfig
	checkConfig?: CheckConfig
}
type UnitedSchemaAtom = {
	type: string | string[]
	title: string
	ui: {
		type: string
	} & Map
} & Map

// 属性配置
type PropertyConfig = {
	// 样式配置自定义(若定义了schema，当前设置无效)
	styleSchema?: UnitedSchema['schema']
	// 整个属性配置面板自定义
	schema?: UnitedSchema['schema']
}

// 校验配置
type CheckConfig = {
	// 通用校验关键字
	common?: Array<string>
	// 业务校验关键字
	business?: Array<string>
}
type Map = {
	[key: string]: any
}
```

---

## 自定义组建区

```typescript
import React, { memo } from 'react'
import DripFormGenerator, { containerConfig } from '@jdfed/form-generator'
import { config as antdConfig } from '@jdfed/drip-form-theme-antd'
import '@jdfed/form-generator/dist/index.css'

const App = memo(() => {
	return (
		<DripFormGenerator
			components={{
				order: ['container', 'antd'],
				category: {
					container: containerConfig,
					antd: antdConfig,
				},
			}}
		/>
	)
})

App.displayName = 'GeneratorApp'

export default App
```

`containerConfig` 为内部容器组件的配置。
`antdConfig` 为 antd 主题的配置
