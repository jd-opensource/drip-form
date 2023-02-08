---
id: fetchApi
title: fetchApi
---

`fetchApi` 用来实现 `Drip form` 内部接口请求。

:::tip 
`Drip form`内部使用 [原生 fetch Api](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) 实现简易的接口请求。如果对浏览器兼容、请求库、数据拦截、错误统一提示有要求，可以通过 `fetchApi` prop 进行定制。
:::


```ts
type FetchApi = (args: {
  params: Array<{ key: string; value: string }>
  url: string
  method: 'GET' | 'POST'
}) => Promise<unknown>
```

## 用法

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
      uiComponents={{ antd }}
      // 自定义get请求
      fetchApi={({url,params,method})=>{
        // 拦截get请求
        if(method==='GET'){
          //使用请求库发起get请求并返回请求结果
        }
        // 拦截post请求
        if(method==='POST'){
          //使用请求库发起post请求并返回请求结果
        }
      }}
    ></DripForm>
  );
}

export default App;

```

## 例子

内部fetchApi实现例子参考：[fetchApi 内部实现](https://github.com/JDFED/drip-form/blob/dev/packages/utils/src/fetch/index.ts)