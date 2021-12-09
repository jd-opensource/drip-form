---
id: customComponents
title: customComponents
---

`customComponents`配置组件区业务组件

```tsx 
export type FieldConfigType = {
  // 左侧列表对应的icon 
  icon: string
  // 渲染所需的基础属性，用于拖拽到中间区域的渲染
  unitedSchema: UnitedSchemaAtom
  // 右侧配置面板中，该field可配置的的非通用属性
  styleSchema: UnitedSchema['schema']
}
```

## 例子

```tsx
import React, { memo } from 'react'
import DripFormGenerator from '@jdfed/form-generator'
import '@jdfed/form-generator/dist/index.css'

const customComponent = () => {
  return <div>自定义组件</div>
}

const App = memo(() => {
  return (
    <DripFormGenerator
      customComponents={[
        {
          icon: 'iconfont icon-cascader',
          styleSchema: [],
          unitedSchema: {
            type: 'string',
            title: '自定义组件',
            ui: {
              type: 'custom',
              theme: 'custom',
            },
          },
        },
      ]}
      theme={{
        custom: {
          theme: 'custom',
          custom: customComponent,
        },
      }}
    />
  )
})

App.displayName = 'GeneratorApp'

export default App

```

