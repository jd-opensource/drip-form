# `@jdfed/drip-form-plugin-formats`

> drip-form 官方formats插件，目前有date-time、color

date-time: `/^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)$/i`正则校验。例子：2020-09-17 12:00:00

color: 校验rgba、rgb、hex三种格式颜色 例子：rgba(0,0,0,1)、rgba(0,0,0)、\#000000

## Usage

```js
const addFormats = require('@jdfed/drip-form-plugin-default');
cont Ajv = require('ajv')
const ajv = new Ajv()

//添加所有formats
addFormats(ajv) 
//添加指定formats
addFormats(ajv,['color'])
```

