---
id: uiComponents
title: uiComponents
description: 导入主题、自定义主题
---


> 每个表单控件是一个自定义组件，多个自定义组件的集合即**主题**。

`uiComponents` 即多个主题的集合。

:::tip 自定义主题

用户也可开发业务相关的主题或不同ui库的主题，详细参考[自定义主题](../advanced/customTheme)

:::

`Drip From`默认提供antd ui（v4版本）库的主题适配，即`@jdfed/drip-form-theme-antd`。


```tsx title=通过配置uiComponents来配置主题
import DripForm from '@jdfed/drip-form'
import antd from '@jdfed/drip-form-theme-antd'
import unitedSchema from './unitedSchema'
//自定义主题
//highlight-next-line
import customTheme from './customTheme'
import '@jdfed/drip-form/dist/index.css'
import '@jdfed/drip-form-theme-antd/dist/index.css'
import 'antd/dist/antd.css'

function App() {
    return (
        <DripForm
            // 表单配置文件
            unitedSchema={unitedSchema}
            // 导入antd主题和自定义主题 customTheme
						//highlight-next-line
            uiComponents={{ antd, customTheme }}
        ></DripForm>
    )
}

export default App
```