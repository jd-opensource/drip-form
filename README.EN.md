<a href='http://drip.jd.com/drip-form/index.html'>

<h1 style="display: flex; align-items: center; justify-content: center">
  <img src='https://storage.360buyimg.com/imgtools/7e0e546a96-d962c880-f9a2-11eb-bf08-d585041b7c80.svg'/>
  <span style="margin-left: 10px">Drip-Form</span>
</h1>
</a>

[简体中文](./README.md) | English | [Documentation](https://jdfed.github.io/drip-form/) | [Discussions](https://github.com/JDFED/drip-form/discussions)

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[contributors]: https://img.shields.io/badge/all_contributors-13-orange.svg?style=flat-square 'Number of contributors on All-Contributors'
<!-- ALL-CONTRIBUTORS-BADGE:END -->

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000)
![node](https://img.shields.io/badge/node-%3E%3D13.14.0-blue.svg)
![yarn](https://img.shields.io/badge/yarn-%3E%3D1.0.0-blue.svg)
![document](https://img.shields.io/badge/documentation-yes-brightgreen.svg)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
[![All Contributors][contributors]](./CONTRIBUTORS.md)
[![website](https://github.com/JDFED/drip-form/actions/workflows/website.yml/badge.svg?branch=dev)](https://github.com/JDFED/drip-form/actions/workflows/website.yml)

## 📖 Introduction

Dynamic form solution based on React and JSONSchema.

Drip-Form uses **JSON configuration files** to generate forms with **data linkage, complex verification, asynchronous requests, and nesting**, which can reduce complex and redundant form development work.

The use of supporting **visual form generator and Node verification** tool can further improve the efficiency of form development.

Drip-Form has the following five ✨highlights✨:

- **Automation**：According to the form data, the initialization form can be automatically generated.
- **Semantic**：Concise and efficient JSON protocol helps developers understand.
- **Integrated verification**：Relying on `ajv`'s standardized verification capabilities, it can achieve integrated front-end and back-end verification.
- **Visualization**：Visually build and modify the form `Schema`.
- **Extensible**：Support secondary development, expandable custom component set and verification set.

## 🔨How to use

### Environmental dependence

- node >=13.14.0
- yarn >=1.0.0

### Install dependencies

```sh
npm install @jdfed/drip-form @jdfed/drip-form-theme
```

### Simple to use

```jsx
import React, { memo } from 'react'
// Import core packages and themes
import DripForm from '@jdfed/drip-form'
import dripTheme from '@jdfed/drip-form-theme'
import '@jdfed/drip-form-theme/dist/index.css'
// Import configuration items
import unitedSchema from './unitedSchema.json'

const Form = memo(() => (
	<DripForm unitedSchema={unitedSchema} uiComponents={{ drip: dripTheme }} />
))
```

## 🤔 Contribution

The main purpose of this repository is to continue to develop and improve **Drip-Form**, making it more powerful, more stable, and more convenient to use.If you have suggestions or bug fixes for **Drip-Form**, please submit `issue` and `merge`. We are very grateful to the community for promoting bug fixes and improvements.

Please make sure to read the [Contributing Guide](./CONTRIBUTING.md) before making a pull request.

### ✨ Contributors

[Thanks goes to these wonderful people](./CONTRIBUTORS.md)

## RoadMap

:sparkle: View the [DripForm roadmap](https://github.com/orgs/JDFED/projects/2/views/7)

Our product roadmap is where you can learn about what features we're working on, what stage they're in, and when we expect to bring them to you. Have any questions or comments about items on the roadmap? Share your feedback via [GitHub discussions](https://github.com/JDFED/drip-form/discussions).

## 🌟 Thank you for your support

If Drip-Form solves your development pain points and is helpful to you, please don't begrudge your `star`🌟!

## 📄 License

MIT License

Copyright (c) 2020 <a href='https://www.jd.com/'>JD.com</a>, Inc.
