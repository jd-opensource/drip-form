---
id: transform
title: transform
description: 表单提交前修改数据
---

import useBaseUrl from '@docusaurus/useBaseUrl'


在[parse prop](./parse)章节中，我们遇到了后台下发的数据格式不满足表单渲染的场景，并通过 `parse` 在渲染前完成了解析。
相对应的，当我们的表单数据不满足后台的上传格式时，也需要对数据进行处理。

我们虽然可以通过 `ref.current.formData` 获取到表单数据，  
但是无法通过赋值操作 `formData.multiSelect = '1-1-1'` 对其进行修改，因为它会抛出一个错误：

```javascript  title="Uncaught TypeErrorr:"
Cannot assign to read only property 'multiSelect' of object '#<Object>'
```

这是由于在drip-form设计理念中，表单数据是内部维护的，并且使用了 [immer](https://immerjs.github.io/immer/) 对其进行管理。
导致表单数据实际上是一个不可变对象。

但是，drip-form提供了一个 `transform` 入参，并在用户通过 `ref.current.formData` 取值时触发这个函数。
它将产生一个 `formData` 的完全拷贝，然后将其传入 `transform` 函数进行处理。

由于这个拷贝是一个可变对象，所以我们可以使用JS的所有API，比如赋值、数组操作、对象删除等；同时，这些操作并不会对表单内部的数据造成任何影响。

:::info 提示

与 `parse` 不同的是，`transform` 函数并不需要返回值。
:::

### 示例

```jsx title="Form.jsx" {7,8,9,10,22}
import React, { memo, useCallback } from 'react'
import DripForm from '@jdfed/drip-form'

const Form = memo(() => {
    const formRef = useRef()

    const onTransform = useCallback((formData) => {
        // ...在这里做一些数据修改操作
        formData.multiSelect = formData.multiSelect.join('-')
    }, [])
    
    const onSubmit = useCallback(() => {
        // formData在处理前为 { multiSelect: [1,1,1] }，transform处理后{ multiSelect: '1-1-1' }
        console.log(ref.current.formData)
    }, [])

    return <>
        <DripForm
          ...
          ref={formRef}
          transform={onTransform}
        />
        <button onClick={onSubmit}>提交</button>
    </>
})