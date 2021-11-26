---
id: 'unitedSchema'
title: 'unitedSchema JSON配置'
------------------------

`unitedSchema.json`是配置Drip-form的JSON配置文件，主要包括数据和UI两个维度的配置，下面将详细介绍这个核心文件的配置项。

## 参数
unitedSchema是一个json对象，它的基础结构应该包括以下几个部分。
```json title='unitedSchema.json'
{
  "validateTime" : "submit",
  "type": "object",
	"theme": "drip-theme",
	"schema": [	Schema, ... ]
}
```

| 属性         | 说明                                    | 类型   | 必填 | 默认值 |
| ------------ | --------------------------------------- | ------ | ---- | ---- |
| validateTime | 校验时机。 `submit`、`change`| String | yes | `submit` | 
| type         | 验证关键字。 `null`、`boolean`、`object`、`array`、`number`、`null`| String、Array | yes | `object` | 
| theme        | 使用的默认主题类型。  | string | yes    | `ant-design` | 
| schema       | ui和校验配置联合配置。 `Schema`  | Array  | yes   | |

### Schema的结构

schema是一个数组，最后表单会按照数组的顺序进行排序，里面的每个元素都是对象形式，其结构如下所示：

```json title="schema"
[
	{
		"fieldKey": "selectText",
		"type": "object",
		"title": "测试联合schema",
		"ui": {
			"type": "selectText",
			"placeholder": "请选择",
			"allowClear": true,
			"multiple": true,
			"requestCache": true,
			"options": [
				{ "label": "北京", "value": "0" },
				{ "label": "上海", "value": "1" },
				{ "label": "成都", "value": "2" },
				{ "label": "武汉", "value": "3" }
			]
		}
	},
  {
    "title": "名字",
    "type": "string",
    "fieldKey": "name",
    "ui": {
      "type": "text",
      "placeholder": "请输入name，当name1有值时，该表单隐藏",
      "description": {
        "type": "icon",
        "title": "hover触发提示",
        "trigger": "hover"
      }
    }
  }
]
```

#### Schema的参数

| 属性        | 说明                                                         | 类型   | 必填 |
| ----------- | ------------------------------------------------------------ | ------ | ---- |
| fieldKey    | 表单数据存放字段（必须唯一）                                 | string | yes    |
| type        | 表单数据类型                                                 | string | yes   |
| title       | 表单标题                                                     | string | no    |
| requiredMsg | 表单必填的错误信息（存在这个字段则并且不为空字符表示当前表单必填）         | string | no   |
| errMsg      | 表单校验错误信息                                             | string | no    |
| ui          | 表单ui控件的props                                            | Object | no    |
| $:xxx       | 用户自定义数据，drip-form不做任何处理                        | any    | no  |
| 其它字段    | 自定义校验关键字、ajv-keywords关键字、jsonSchema校验关键字等 | any    | no    |

