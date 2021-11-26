# @drip/ajv

Drip生态下的统一AJV校验包，支持node和浏览器环境。

## 可用方法

### registerAjv
注册ajv

### loadAjvPlugins
导入ajv自定义插件
> 目前官方已内置了两个通用包 @jdfed/drip-form-plugin-formats 和 @jdfed/drip-form-plugin-keywords

## 如何使用

### node 
```
const dripAjv = require('@drip/ajv')
const ajv = dripAjv.registerAjv()

//加载外部ajv插件，第二个参数支持传入自定义的ajv插件包
loadAjvPlugins(ajv, [])
```


### 浏览器
```
import dripAjv from '@drip/ajv'
const { registerAjv, loadAjvPlugins } = dripAjv

const ajv = dripAjv.registerAjv()

//加载外部ajv插件，第二个参数支持传入自定义的ajv插件包
loadAjvPlugins(ajv, [])
```