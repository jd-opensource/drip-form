<a href='http://drip.jd.com/drip-form/index.html'>

<h1 style="display: flex; align-items: center; justify-content: center">
  <img src='https://storage.360buyimg.com/imgtools/7e0e546a96-d962c880-f9a2-11eb-bf08-d585041b7c80.svg'/>
  <span style="margin-left: 10px">Drip-Form</span>
</h1>
</a>

简体中文 | [English](./README.EN.md) | [官方文档](https://jdfed.github.io/drip-form/) | [讨论组](https://github.com/JDFED/drip-form/discussions)

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[contributors]: https://img.shields.io/badge/all_contributors-12-orange.svg?style=flat-square 'Number of contributors on All-Contributors'
<!-- ALL-CONTRIBUTORS-BADGE:END -->

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000)
![node](https://img.shields.io/badge/node-%3E%3D13.14.0-blue.svg)
![yarn](https://img.shields.io/badge/yarn-%3E%3D1.0.0-blue.svg)
![document](https://img.shields.io/badge/documentation-yes-brightgreen.svg)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
[![All Contributors][contributors]](./CONTRIBUTORS.md)
[![website](https://github.com/JDFED/drip-form/actions/workflows/website.yml/badge.svg?branch=dev)](https://github.com/JDFED/drip-form/actions/workflows/website.yml)

## 📖 介绍

基于 React 和 JSONSchema 的动态表单解决方案

Drip-Form 使用 **JSON 配置文件**生成具备**数据联动、复杂校验、异步请求及嵌套**的表单，可以减少复杂冗余的表单开发工作。

配套**可视化表单生成器、Node 校验工具**使用，可进一步提升表单开发的效率。

Drip-Form 具有以下五大✨亮点✨：

* **自动化**：可根据表单数据自动生成初始化表单。
* **语义化**：简洁高效的 JSON 协议有助于开发者理解。
* **校验一体化**：依托于 `ajv` 的标准化校验能力，可实现前后端校验一体化。
* **可视化**：可视化搭建表单及修改表单 `Schema`。
* **可扩展**：支持二次开发，可扩展自定义组件集、校验集。

## 🔨如何使用
### 环境依赖

- node >=13.14.0
- yarn >=1.0.0

### 安装依赖包

```sh
npm install @jdfed/drip-form @jdfed/drip-form-theme
```

### 简单使用

```jsx
import React, { memo } from 'react'
// 引入核心包和主题
import DripForm from '@jdfed/drip-form'
import dripTheme from '@jdfed/drip-form-theme'
import '@jdfed/drip-form-theme/dist/index.css'
// 引入配置项
import unitedSchema from './unitedSchema.json'

const Form = memo(() => {
  return 
    <DripForm
      unitedSchema={unitedSchema}
      uiComponents={{'drip': dripTheme}}
    />
})
```

## 🤔 贡献
此存储库的主要目的是继续不断发展和完善 Drip-Form，使得它的性能更强，功能更稳定，更利于使用。如果您对于 Drip-Form 有建议或者错误修正等需求，欢迎提 `issue` 和 `merge`，我们极力感谢社区促进错误修正和改进。

### ✨ 贡献者

[Thanks goes to these wonderful people](./CONTRIBUTORS.md)

## 🌟 感谢支持

如果 Drip-Form 解决了您的开发痛点，对您有帮助的话，请不要吝惜您的 `star` 🌟哦！

## 📄 许可
MIT License

Copyright (c) 2020 <a href='https://www.jd.com/'>JD.com</a>, Inc.



