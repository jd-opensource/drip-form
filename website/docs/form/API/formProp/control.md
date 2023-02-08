---
id: control
title: control
description: 监听内部数据变化
---

```ts
type ControlFuc = ({
  formData,
  uiSchema,
  dataSchema,
  dispatch,
  changeKey,
  checking,
  get,
  set,
  deleteField,
  errors,
}: {
  //表单ui配置
  uiSchema: Map
  // 表单校验配置
  dataSchema: Map
  // 表单数据
  formData: Map
  // dipatch Api
  dispatch: Dispatch
  // 当前变化的表单数据
  changeKey: string
  // 表单是否校验完毕
  checking: boolean
  // get Api
  get: Get
  // set Api
  set: Set
  // merge Api
  merge: Merge
  // 删除某个表单字段（一般用不到）
  deleteField: DeleteField
  // 所有表单错误信息
  errors: Map
}) => void
```
control主要用来监听全局数据[^1]变化，有以下几种用法
## 设置联动

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
      //highlight-start
      control={({ changeKey, get, set }) => {
        // 只有变化的表单是数字输入框1或数字输入框2
        if (['number_3y3QMi', 'number_UIKkH2'].includes(changeKey)) {
          //获取数字输入框1的值
          const value1 = (get('number_3y3QMi').data as unknown as number) || 0;
          // 获取数字输入框2的值
          const value2 = (get('number_UIKkH2').data as unknown as number) || 0;
          // 设置表单总额的值为 数字输入框1的值+数字输入框2的值
          set('text_GLFn0c', 'data', value1 + value2);
        }
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
  theme: 'antd',
  schema: [
    {
      type: 'number',
      title: '数字输入框1',
      default: 0,
      ui: {
        type: 'number',
        theme: 'antd',
      },
      fieldKey: 'number_3y3QMi',
    },
    {
      type: 'number',
      title: '数字输入框2',
      default: 0,
      ui: {
        type: 'number',
        theme: 'antd',
      },
      fieldKey: 'number_UIKkH2',
    },
    {
      type: 'string',
      title: '总额',
      default: 0,
      ui: {
        type: 'text',
        disabled: true,
        style: {
          width: '100%',
        },
        theme: 'antd',
      },
      fieldKey: 'text_GLFn0c',
    },
  ],
};
```

</TabsItem>

</Tabs>

</details>

代码沙盒：[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/drip-form-dfeldc?file=src/App.tsx)


## 获取实时表单信息

除了通过ref prop获取表单信息外，也可以通过control获取实时表单信息。

```tsx title="App.tsx"
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
      //highlight-start
      control={({ changeKey, get,formData,errors }) => {
				//获取所有表单的错误
				console.log(errors)
				//获取所有表单的数据
				console.log(formData)
				// 获取发生数据变化的表单数据
				console.log(get(changKey).data)
				// 当前变化表单的ui配置
				console.log(get(changKey).uiSchema)
				// 当前变化表单的校验配置
				console.log(get(changKey).dataSchema)
      }}
      //highlight-end
    ></DripForm>
  );
}

export default App;

```

[^1]: 表单数据、表单ui配置、表单校验配置等