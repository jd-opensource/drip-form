---
id: plugins
title: plugins
description: 加载自定义校验插件
---

:::note 回顾
在[自定义校验插件](../../advanced/customValidatePlugin)章节，我们了解到如何开发自定义校验插件

:::

如果用户开发了自定义校验插件，则需要通过 `plugins` prop 加载插件。

```ts
type Plugins =  Array<Plugin<Options>> | Plugin<Options>

```

## 例子
```tsx title="App.tsx"
import DripForm from '@jdfed/drip-form';
import antd from '@jdfed/drip-form-theme-antd';
import unitedSchema from './unitedSchema';
//highlight-start
import addFormats from '@jdfed/drip-form-plugin-formats'
import addKeywords from '@jdfed/drip-form-plugin-keywords'
//highlight-end
import '@jdfed/drip-form/dist/index.css';
import '@jdfed/drip-form-theme-antd/dist/index.css';
import 'antd/dist/antd.css';

function App() {
  return (
    <DripForm
      // 表单配置文件
      unitedSchema={unitedSchema}
      uiComponents={{ antd }}
      // 添加drip form插件 注意：drip-form内部默认添加了这两个插件，这里只是示例
      //highlight-next-line
      plugins={[addFormats,addKeywords]}
    ></DripForm>
  );
}

export default App;

```