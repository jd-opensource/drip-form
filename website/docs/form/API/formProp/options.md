---
id: options
title: options
description: dripform自定义配置
---

`options` prop 用来自定义 `Drip form` 内部一些渲染、校验行为

```ts
type Options = Partial<{
  // （一般情况无需设置）true： formData、unitedSchema变化会触发reducer的reload false：formData和unitedSchema变化不会触发重新渲染
  reload: boolean
  // 使用未定义的组件（主题中查找不到该组件） tip：提示无法找到主题xxx中的xx组件，请确认是否倒入 hidden:直接隐藏该组件，控制台提示
  undefinedComponent:
    | {
        type: 'tips'
        value: string | UndefinedComponentFn
      }
    | {
        type: 'console'
        consoleType: 'log' | 'warn' | 'error'
        value: string | UndefinedComponentFn
      }
  // ajv校验防抖延迟时间 单位：ms（避免数据频繁变化多次调用ajv校验函数） 默认不延迟 注意：大部分情况无需设置延迟
  ajvValidateDelay: number
}>
```
