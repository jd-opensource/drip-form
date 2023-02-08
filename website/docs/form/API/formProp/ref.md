---
id: ref
title: ref
description: 获取表单数据、api、配置联动
---

import useBaseUrl from '@docusaurus/useBaseUrl'


drip-form 通过`ref.current`获取表单的数据、错误、校验状态、Api。

```tsx
//highlight-start
import { useRef } from React
import DripForm,{ DripFormRefType } from '@jdfed/drip-form'
//highlight-end
import antd from '@jdfed/drip-form-theme-antd'
import unitedSchema from './unitedSchema'
import '@jdfed/drip-form/dist/index.css'
import '@jdfed/drip-form-theme-antd/dist/index.css'
import 'antd/dist/antd.css'

function App() {
	const ref = useRef<DripFormRefType>()
	return (
		<DripForm
			//highlight-next-line
			ref={ref}
			// 表单配置文件
			unitedSchema={unitedSchema}
			// 导入组件
			uiComponents={{ antd }}
			// 设置表单值
		></DripForm>
	)
}

export default App
```

`ref.current`获取到的数据格式如下

```ts
type DripFormRefType = {
	//重置表单到初始状态
  reset: () => void
	//表单提交函数
  submit: () => Promise<SubmitReturn>
  // get Api
  get: Get
  // set Api
  set: Set
  // merge Api
  merge: Merge
  // 获取fieldKey相对uiSchema、dataSchema、typeMap路径
  getKey: GetKey
  // 错误信息
  errors: Map
  // 是否在校验态
  checking: boolean
  // dispatch Api
  dispatch: Dispatch
  // 表单数据
  formData: Map
  // 仅适用于生成器的对象
  __generator__: {
    // 删除表单项并清除对应的schema
    deleteField: DeleteField
    // 添加表单项
    addField: AddField
  }
}
```

