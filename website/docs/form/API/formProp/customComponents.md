---
id: customComponents
title: customComponents
description: 导入自定义组件
---

`customComponents` 用来**导入**用户开发的**不需要复用的表单组件**

:::caution 推荐使用自定义主题
不推荐使用 `customComponents`,推荐使用[自定义主题](../../advanced/customTheme)代替。

- customComponents导入的自定义组件无法复用，自定义主题导入的组件可复用
- customComponents导入的自定义组件不支持数组容器，自定义主题导入的组件支持数组容器

:::
## 用法

```tsx title="App.tsx"
import DripForm from '@jdfed/drip-form';
import antd from '@jdfed/drip-form-theme-antd';
import unitedSchema from './unitedSchema';
import { numberField } from './numberField';
import '@jdfed/drip-form/dist/index.css';
import '@jdfed/drip-form-theme-antd/dist/index.css';
import 'antd/dist/antd.css';

// 需要和fieldKey一致
const customComponents = {
  number_lAjBzU: numberField,
  number_QmKL9J: numberField,
};

function App() {
  return (
    <DripForm
      // 表单配置文件
      unitedSchema={unitedSchema}
      // 导入antd主题
      uiComponents={{ antd }}
      //导入自定义组件
      customComponents={customComponents}
    ></DripForm>
  );
}

export default App;

```

代码示例和在线示例查看：[自定义组件](../../use/customComponent#使用-customcomponets)章节