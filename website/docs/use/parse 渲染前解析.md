---
id: parse
title: parse 渲染前解析
---

有时，我们会遇到这样的场景：表单数据由接口直接下发，但是下发的数据不能直接填入表单。
例如：级联选择器，后台下发的格式为 `1-1-1`，实际上表单渲染需要的是`[1, 1, 1]`。

通常来说，我们可以在数据拉取后，在 `.then()` 中对其进行一些处理，再将处理好的结果通过 `formData` 传入组件。
但如果我们的接口是一个通用接口，又或者我们无法把控数据处理的时机呢？

这种情况下，drip-form 为我们提供了 `parse` 入参，你可以将后台的数据直接通过 `formData` 传入，并通过 `parse` 传入处理函数。
接下来将由 drip-form 接管数据解析，并在表单的初始化阶段完成处理，最后，根据配置判断是否需要进行首轮渲染校验。

`parse` 的操作仅在表单初始化时触发，且只会触发一次。

:::caution 注意

`parse` 函数必须有一个对象类型的返回值，否则将会抛出一个错误。
:::

### 示例

```jsx title="Form.jsx" {5,6,7,8,12}
import React, { memo, useCallback } from 'react'
import DripForm from 'drip-form'

const Form = memo(() => {
    const onParse = useCallback((formData) => {
        // ...在这里做一些操作：
        // formData.multiSelect = formData.multiSelect.split('-')
        return formData
    }, [])

    return <DripForm
        ...
        parse={onParse}
     />
})
```

如果你需要将表单数据从 `[1, 1, 1]` 再转化为 `1-1-1` 后发送给后台，请参见下一节 **transform 使用前转化** 。