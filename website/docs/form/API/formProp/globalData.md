---
id: globalData
title: globalData
description: 全局数据
---

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

`globalData` 接收一个对象，在所有表单组件中都可以获取这个全局对象。

**用于在组件内部获取表单外部的全局数据。**

```tsx title=App.tsx
import DripForm from '@jdfed/drip-form';
import antd from '@jdfed/drip-form-theme-antd';
import unitedSchema from './unitedSchema';
//引入自定义主题对象
import customTheme from './customTheme';
import '@jdfed/drip-form/dist/index.css';
import '@jdfed/drip-form-theme-antd/dist/index.css';
import 'antd/dist/antd.css';

function App() {
  return (
    <DripForm
      // 表单配置文件
      unitedSchema={unitedSchema}
      // 导入antd主题和自定义主题 customTheme
      uiComponents={{ antd, customTheme }}
      //传递所有表单组件都可以获取的全局数据
      //highlight-next-line
      globalData={{ a: 1, b: 2 }}
    ></DripForm>
  );
}

export default App;

```

代码沙盒：[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/drip-form-mmcr9i?file=src/App.tsx)