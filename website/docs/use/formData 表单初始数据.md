---
id: formData
title: formData 表单初始数据
---

表单数据可以通过 drip-form `formData` prop 传递初始值，其结构取决于`unitedSchema`的结构，整体是个对象结构，key值为每个表单项的`fieldKey`，当遇到对象容器或者数组容器时，需要调整为相应的结构。举个例子：

```json title="unitedSchema.json"
{
  "validateTime": "change",
  "type": "object",
  "ui": {},
  "theme": "drip-theme",
  "schema": [
    {
      "validateTime": "submit",
      "type": "string",
      "title": "输入框",
      "ui": {
        "type": "text"
      },
      "fieldKey": "text_-mJJFo"
    },
    {
      "validateTime": "submit",
      "type": "string",
      "title": "颜色选择框",
      "ui": {
        "type": "colorPicker"
      },
      "fieldKey": "colorPicker_oHFL5K"
    },
    {
      "validateTime": "submit",
      "type": "array",
      "title": "数组容器",
      "ui": {
        "mode": "add",
        "type": "array"
      },
      "items": {
        "type": "object",
        "title": "",
        "ui": {
          "type": "object"
        },
        "schema": [
          {
            "validateTime": "submit",
            "type": "boolean",
            "title": "开关",
            "ui": {
              "type": "switch"
            },
            "fieldKey": "switch_mDJ7Lz"
          },
          {
            "validateTime": "submit",
            "type": "string",
            "title": "单选",
            "ui": {
              "type": "radio",
              "options": [
                {
                  "label": "是",
                  "value": 1
                },
                {
                  "label": "否",
                  "value": 0
                }
              ]
            },
            "fieldKey": "0"
          }
        ]
      },
      "fieldKey": "array_4LrpU6"
    },
    {
      "validateTime": "submit",
      "type": "object",
      "title": "对象容器",
      "ui": {
        "type": "object"
      },
      "schema": [
        {
          "validateTime": "submit",
          "type": "string",
          "title": "文本",
          "ui": {
            "type": "null",
            "text": "这是一个不会绑定数据的空表单。只用作特殊场景下展示文字使用"
          },
          "fieldKey": "null_VsLlWt"
        }
      ],
      "fieldKey": "object_lcALiU"
    }
  ]
}
```

则上述`unitedSchema`的`formData`结构应该如下所示：
```js title="formData"
{
  "text_-mJJFo": "输入框内容",
  "colorPicker_oHFL5K": "#08ce96",
  "array_4LrpU6": [
    {
      "switch_mDJ7Lz": true,
      "0": 1,
    }
  ],
  "object_lcALiU": {
    "null_VsLlWt": "这是一个文本"
  }
}
```