---
id: unitedSchema
title: unitedSchema
description: 表单协议
---


import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

Drip form 通过 `unitedSchema` 配置的表单协议渲染表单。

## 如何配置unitedSchema

- [unitedSchema配置表单](../../quickStart/quickStart#unitedschema-配置表单)

- [unitedSchema协议](../../unitedSchema/)

## 代码沙盒

<details>
<summary>代码示例</summary>
<Tabs>

<TabsItem value="App" label="App.tsx">

```tsx
import DripForm from '@jdfed/drip-form';
import antd from '@jdfed/drip-form-theme-antd';
import unitedSchema from './unitedSchema';
import '@jdfed/drip-form/dist/index.css';
import '@jdfed/drip-form-theme-antd/dist/index.css';
import 'antd/dist/antd.css';

function App() {
  return (
    <DripForm
      // 表单配置文件
      unitedSchema={unitedSchema}
      // 导入组件
      uiComponents={{ antd }}
      // 设置表单值
      formData={{
        checkbox: '1',
        colorPicker: '#000000',
        text: '1111',
        number: 1,
      }}
    ></DripForm>
  );
}

export default App;

```

</TabsItem>

<TabsItem value="unitedSchema" label="unitedSchema.ts">

```tsx
// 表单配置文件

export default {
  type: 'object',
  validateTime: 'change',
  ui: {},
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
};
```

</TabsItem>

</Tabs>

</details>

代码沙盒：[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/drip-form?file=src/unitedSchema.ts)