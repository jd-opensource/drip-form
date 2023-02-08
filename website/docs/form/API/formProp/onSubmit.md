---
id: onSubmit
title: onSubmit
description: 表单提交按钮回调
---

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

`Drip form` 支持全局配置表单提交按钮，并使用 `onSubmit` prop 配置提交按钮回调函数。

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
      //表单提交回调
      //highlight-start
      onSubmit={({ formData, errors, checking }) => {
        //表单数据
        console.log(formData);
        //表单错误信息
        console.log(errors);
        //表单是否校验完毕
        console.log(checking);
      }}
      //highlight-end
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
  ui: {
    //highlight-start
    footer: {
      //按钮对齐方式
      justifyContent: 'right',
      margin: 10,
      onOk: {
        text: '保存',
        type: 'primary',
        size: 'middle',
        shape: 'squash',
      },
    },
    //highlight-end
  },
  theme: 'antd',
  schema: [
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
      fieldKey: 'text_e1LxLj',
    },
    {
      type: 'string',
      title: '单选',
      default: '1',
      ui: {
        type: 'radio',
        theme: 'antd',
        options: [
          {
            label: '是',
            value: '1',
          },
          {
            label: '否',
            value: '0',
          },
        ],
      },
      fieldKey: 'radio_p7HLbu',
    },
  ],
};

```

</TabsItem>

</Tabs>

</details>

代码沙盒：[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/drip-form-9dy7jb?file=src/App.tsx)