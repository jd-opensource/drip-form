---
id: customFunc
title: customFunc
description: 函数占位符
---

**unitedSchema** 中为我们提供了 `vcontrol` 和 `onChange` 两个字段，分别用于控制表单内的显隐联动，以及修改表单需要的额外操作。我们可以通过直接书写函数体，并以 _string_ 类型配置在 **UISchema** 中，来实现我们想要的变化。

但当我们的配置项复杂到一定程度时，这些控制的函数体也会变得复杂，在里面书写函数体显然不是明智的选择，甚至会造成 JSON 解析能力的下降。

因此我们可以使用**函数占位符**来解决这一问题，用 `$$` 对该项进行特殊标识：

- **JSON 配置**

  ```json title="unitedSchema.json" {7,11}
  {
    "showError": "change",
    "type": "object",
    "theme": "drip-theme",
    "schema": [
      {
        "title": "开关",
        "type": "string",
        "ui": {
          "type": "switch",
          "onChange": "$$switchChange"
        },
        "fieldKey": "switchItem"
      },
      {
        "type": "string",
        "title": "自定义组件",
        "ui": {
          "type": "text",
          "vcontrol": "$$textVcontrol"
        },
        "fieldKey": "text1"
      }
    ]
  }
  ```

  可以看到针对 `switchItem` 和 `textItem` 表单项，我们分别为其配置了 **$$switchChange** 和 **$$textVcontrol** 两个占位符。

  接下来，我们可以通过生成器将书写在外部的函数进行导入。

- **使用 drip-form 的组件**

  ```javascript title="Form.jsx" {4,10}
  // 定义函数占位符中需要的函数
  const customFuncMap = useMemo(() => {
      return {
          '$$switchChange': (val, dispatch, fieldKey) => {
              dispatch({
                  type: 'setData',
                  action:{
                    set:{
                      [fieldKey]: val
                    }
                  }
              })
          },
          '$$textVcontrol': (formData, uiSchema, dataSchema) => {
              return !formData.switchItem
          }
      }
  })

  return <DripForm
      ...
      // 传入自定义函数
      customFunc={customFuncMap}
  >
  ```

  这样，我们就可以在外部更轻松地对表单的变更进行动态控制。