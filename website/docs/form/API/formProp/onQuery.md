---
id: onQuery
title: onQuery
description: 异步获取表单数据
---

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

:::caution v0.9之后不再推荐使用onQuery
v0.9.0之后使用 [queryConfig](../../use/control/other#queryconfig设置选项)代替

<details>
<summary>queryConfig好处</summary>

- 接口配置化
- 无需开发代码
- 可决定选项字段在ui中对应的属性
- 支持所有组件（包括用户新增的自定义组件）

</details>

:::

表单数据可以通过 drip-form `formData` prop 传递初始值，也可以通过配置`unitedSchema`的`default`关键字传递兜底值，但是当我们的表单数据需要从后端接口异步拉取时，我们如何配置呐？

目前 `drip-form` 的 `select` 、 `treeselect` 和 `cascader` 组件支持异步获取数据。如果其他表单控件需要支持异步获取数据，请升级 `drip form` 到 `v0.9.0`，并使用 [queryConfig](../../use/control/other#queryconfig设置选项) 代替。

## 代码沙盒
<details>
<summary>代码示例</summary>

<Tabs>
<TabItem value="App.tsx" label="App.tsx">


```tsx
import DripForm from '@jdfed/drip-form';
import antd from '@jdfed/drip-form-theme-antd';
import unitedSchema from './unitedSchema';
import '@jdfed/drip-form/dist/index.css';
import '@jdfed/drip-form-theme-antd/dist/index.css';
import 'antd/dist/antd.css';

// 异步数据查询
//highlight-start
const onQuery: any = {
  select: () => {
    console.log('select选择器异步查询数据');
    return [
      {
        label: '选项1',
        value: 'choice1',
      },
      {
        label: '选项2',
        value: 'choice2',
      },
      {
        label: '选项3',
        value: 'choice3',
      },
    ];
  },
  treeselect: async ({ isFirstLoad, pId }: any) => {
    console.log('treeselect异步查询数据');
    const random = Math.random();
    // 第一次加载获取第一层级数据
    if (isFirstLoad) {
      return [
        {
          id: random,
          title: 'Node1',
          isLeaf: false,
          value: random,
        },
      ];
    }
    // 点击箭头，异步获取级联数据并返回
    return [
      {
        id: random,
        pId,
        title: 'expand',
        isLeaf: false,
        value: random,
      },
    ];
  },
};
//highlight-end

function App() {
  return (
    <DripForm
      // 表单配置文件
      unitedSchema={unitedSchema}
      // 导入组件
      uiComponents={{ antd }}
			//highlight-next-line
      onQuery={onQuery}
    ></DripForm>
  );
}

export default App;

```


</TabItem>
<TabItem value="unitedSchema" label="unitedSchema.ts">

`unitedSchema.json` 并没有详细配置 selct 和 treeselect 的数据。selct 和 treeselect 的数据都是通过接口异步获取得到

:::tip 接口缓存
`requestCache`：当该字段为`true`时，代表获取到的数据会缓存下来。避免每次都调用接口。如果需要每次都实时调用接口，改为 false 就可以

:::
```ts
// 表单配置文件

export default {
  validateTime: 'submit',
  type: 'object',
  theme: 'antd',
  schema: [
    {
      title: '选择器',
      type: ['string', 'number', 'array'],
      errMsg: {
        _: '必填',
      },
      ui: {
        type: 'select',
        placeholder: '请选择',
        allowClear: true,
        multiple: true,
        style: {
          width: '100%',
        },
        //highlight-next-line
        requestCache: true,
      },
      requiredMsg: '必填',
      fieldKey: 'select',
    },
    {
      title: '树形选择(异步加载数据)',
      type: 'array',
      default: [],
      fieldKey: 'treeselect',
      errMsg: {
        _: '必填',
      },
      ui: {
        minItems: 1,
        maxItems: 2,
        type: 'treeSelect',
        placeholder: '请选择',
				//highlight-next-line
        requestCache: true,
        treeDataSimpleMode: true,
        multiple: true,
        showCheckedStrategy: 'parent',
        allowClear: true,
        treeCheckable: true,
        style: {
          width: '50%',
        },
      },
      requiredMsg: '必填',
    },
  ],
};

```

</TabItem>
</Tabs>
</details>

代码沙盒：[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/drip-form-8f2fec?file=src/App.tsx)

## 预览

<img src='https://storage.360buyimg.com/imgtools/27bb6cb8de-818864d0-4cf9-11ec-9620-6d9821f0161f.gif' alt="图片加载出错"/>

从上面 gif 可以看出

- 当点击选择器时，会调用接口。并缓存接口数据

- 当点击树形选择每个节点时都会调用接口获取数据。