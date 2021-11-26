# `@drip/utils`

> drip-form 通用方法

- 持续更新

| 函数名      | 函数说明                                                                              | 参数类型                                                                          | 返回值类型 |
| :---------- | :------------------------------------------------------------------------------------ | :-------------------------------------------------------------------------------- | :--------- |
| typeCheck   | 基本数据类型检测                                                                      | `any`                                                                             | `string`   |
| isEmpty     | 判断变量是否为空                                                                      | `any`                                                                             | `boolean`  |
| setDeepProp | 设置 data.a.b.c = value，若 data 没有 a.b 则依次赋值空对象，最后再将 a.b.c 设为 value | `{keys: string[], data: {[ key:string ]: any}, value: string | number | boolean}` | `any`      |
