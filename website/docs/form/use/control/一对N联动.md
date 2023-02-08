---
id: onChange
title: 一对N联动
description: 一个表单数据变化触发N个表单联动效果
---

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

一个表单数据变化，触发多个表单联动

## control 或者 ui.change（推荐使用）

也可以通过[control prop](../../API/formProp/control)或[ui.change](globalChange#uichange)配合 `changeKey` 判断当前变化的表单。

由于 control prop 和 ui.change 类似，所以这里以 control prop 为例

```tsx title="App.tsx"
import DripForm from '@jdfed/drip-form'
import antd from '@jdfed/drip-form-theme-antd'
import unitedSchema from './unitedSchema'
import '@jdfed/drip-form/dist/index.css'
import '@jdfed/drip-form-theme-antd/dist/index.css'
import 'antd/dist/antd.css'

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
        if (changeKey === 'xxx') {
          //联动逻辑
        }
      }}
			//highlight-end
    ></DripForm>
  )
}

export default App
```

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
      control={({ changeKey, get, set, merge }) => {
        // 只有变化的表单是开关时
        if (changeKey === 'switch_X2Y7KI') {
          //开关是否开启
          const val = get(changeKey).data;
          //使用set Api设置输入框是否禁用
          set('text_T4KrN2', 'uiSchema', (textUiSchema: any) => {
            textUiSchema.disabled = val;
          });
          //使用merge Api设置多选框是否禁用
          merge('checkbox_kXIPcF', 'uiSchema', {
            disabled: val,
          });
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
  ui: {},
  theme: 'antd',
  schema: [
    {
      type: 'boolean',
      title: '开关',
      ui: {
        type: 'switch',
        theme: 'antd',
      },
      fieldKey: 'switch_X2Y7KI',
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
      fieldKey: 'text_T4KrN2',
    },
    {
      type: 'array',
      title: '多选框',
      default: ['1'],
      ui: {
        type: 'checkbox',
        theme: 'antd',
        options: [
          {
            label: '1',
            value: '1',
          },
          {
            label: '2',
            value: '2',
          },
        ],
      },
      fieldKey: 'checkbox_kXIPcF',
    },
  ],
};

```

</TabsItem>

</Tabs>

</details>

代码沙盒：[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/drip-form-prbwn1?file=src/unitedSchema.ts)

## unitedSchema 中的 ui.onChange（不推荐使用）

:::caution 不推荐使用此方式
使用 ui.onChange 设置 ui 配置时，需要使用[dispatch](../../API/utils/dispatch)配合[getKey](../../API/utils/getKey) Api。
:::

**每个表单都可以配置一个`onChange`，用来监听当前表单数据变化。**

```js title="unitedSchema"
// 表单配置文件

export default {
  type: 'object',
  validateTime: 'change',
  ui: {},
  theme: 'antd',
  schema: [
    {
      type: 'boolean',
      title: '开关',
      ui: {
        type: 'switch',
        theme: 'antd',
        //highlight-start
        onChange:({})=>{
          //开关变化，触发的联动逻辑
        }
        //highlight-end
      },
      fieldKey: 'switch_X2Y7KI',
    },
    ...
  ],
};

```

`onChange`接收一个函数或函数体（类似[vcontrol](./vcontrol)的实现方式）
:::tip
`unitedSchema` 非 `json` 格式，推荐使用**函数**形式，方便编写和调试；

`unitedSchema` 是 `json` 格式，推荐使用**函数体**形式；
:::

两种形式，都可以获得以下参数，**函数直接获取；函数体通过 `props.xxx`获取**

```js title=onChange参数
{
  //当前表单的值
  val,
  //dispatch Api
  dispatch,
  //当前表单的fieldKey
  fieldKey,
  //getKey Api
  getKey,
}
```

:::caution 注意
为了性能，onChange 没有下发[get](../../API/utils/get)、[set](../../API/utils/set)、[merge](../../API/utils/merge) Api。只下发了[dispatch](../../API/utils/dispatch)
:::

<details>
<summary>代码示例</summary>
<Tabs>

<TabsItem value="App" label="App.tsx">

```tsx
import DripForm from '@jdfed/drip-form'
import antd from '@jdfed/drip-form-theme-antd'
import unitedSchema from './unitedSchema'
import '@jdfed/drip-form/dist/index.css'
import '@jdfed/drip-form-theme-antd/dist/index.css'
import 'antd/dist/antd.css'

function App() {
  return (
    <DripForm
      // 表单配置文件
      unitedSchema={unitedSchema}
      // 导入组件
      uiComponents={{ antd }}
    ></DripForm>
  )
}

export default App
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
      type: 'boolean',
      title: '开关',
      ui: {
        type: 'switch',
        theme: 'antd',
        //highlight-start
        onChange: ({ val, dispatch, getKey }: any) => {
          // 如果开关关闭，执行以下逻辑
          if (!val) {
            // 设置多选框的ui配置disabled为true
            dispatch({
              type: 'setUi',
              action: {
                set: {
                  [`${getKey('text_T4KrN2', 'uiSchema')}.disabled`]: true,
                  [`${getKey('checkbox_kXIPcF', 'uiSchema')}.disabled`]: true,
                },
              },
            })
          } else {
            //开关开启执行以下逻辑

            // 设置多选框ui配置disabled为false
            dispatch({
              type: 'setUi',
              action: {
                set: {
                  [`${getKey('text_T4KrN2', 'uiSchema')}.disabled`]: false,
                  [`${getKey('checkbox_kXIPcF', 'uiSchema')}.disabled`]: false,
                },
              },
            })
          }
        },
      },
      //highlight-end
      default: true,
      fieldKey: 'switch_X2Y7KI',
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
      fieldKey: 'text_T4KrN2',
    },
    {
      type: 'array',
      title: '多选框',
      default: ['1'],
      ui: {
        type: 'checkbox',
        theme: 'antd',
        options: [
          {
            label: '1',
            value: '1',
          },
          {
            label: '2',
            value: '2',
          },
        ],
      },
      fieldKey: 'checkbox_kXIPcF',
    },
  ],
}
```

</TabsItem>

</Tabs>

</details>

代码沙盒：[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/drip-form-prbwn1?file=src/unitedSchema.ts)
