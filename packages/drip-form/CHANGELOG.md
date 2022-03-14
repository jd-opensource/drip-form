# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.7.0](https://github.com/jdfed/drip-form/compare/v0.6.0...v0.7.0) (2022-03-14)


### Features

* add ajvOptions prop to customize ajv configurationn ([#148](https://github.com/jdfed/drip-form/issues/148)) ([cfe27e9](https://github.com/jdfed/drip-form/commit/cfe27e9f9a1be5a183e4810200020caba77f7c3a))
* containerStyle configuration add padding prop ([27cefed](https://github.com/jdfed/drip-form/commit/27cefeda6cf880cc1d113a70624eea6789683937))
* onValidate prop support submit type ([#143](https://github.com/jdfed/drip-form/issues/143)) ([ceae921](https://github.com/jdfed/drip-form/commit/ceae921b42ea239b1b8833d4ff2e51aef627d42a))
* unitedSchema JSON add requiredMode configuration ([#150](https://github.com/jdfed/drip-form/issues/150)) ([7e717ef](https://github.com/jdfed/drip-form/commit/7e717ef9431228809fd5f2d3908a274f181225ec))


### Bug Fixes

* 修复存在parse prop时重置失效问题 ([#134](https://github.com/jdfed/drip-form/issues/134)) ([239f7e0](https://github.com/jdfed/drip-form/commit/239f7e022b59bd6171515edde0401f316431bf72))


### style

* **generator:** update objectContainer default style ([#154](https://github.com/jdfed/drip-form/issues/154)) ([d1590df](https://github.com/jdfed/drip-form/commit/d1590df17c8fbd003f29af800b6cfde091bf081a))



## [0.6.0](https://github.com/jdfed/drip-form/compare/v0.5.0...v0.6.0) (2022-01-24)


### Features

* containerHoc支持获取子组件ui配置 ([714ac6d](https://github.com/jdfed/drip-form/commit/714ac6d451f613b721e1bf2b6ae2189688cee4fa))
* 数组容器删除子项支持二次确认配置 ([33eeff8](https://github.com/jdfed/drip-form/commit/33eeff86cef300af209889e82cd10fa663c300d4))
* 表单布局支持配置外边距 ([2016881](https://github.com/jdfed/drip-form/commit/201688140cebb2403899acca0ca58000dba7aaa3))


### Bug Fixes

* reset导致visbleFieldKey清空，错误信息无法展示 ([c4d839c](https://github.com/jdfed/drip-form/commit/c4d839c6cf9199459c7c90244f75d29c687b326b))
* 数组容器点击删除未删除错误内容 ([ce11e27](https://github.com/jdfed/drip-form/commit/ce11e273ab35ad8538990db90bb77000a059fc1b))
* 数组容器组件key兜底使用数组下标导致删除错乱 ([#131](https://github.com/jdfed/drip-form/issues/131)) ([cc73d8d](https://github.com/jdfed/drip-form/commit/cc73d8d558114eb5ed339a9a6e98cc37fe435332))


### style

* 数组容器、对象容器标题位置默认居中对齐 ([4564f2f](https://github.com/jdfed/drip-form/commit/4564f2fd457b39e7f09773dd591a81d3cd844618))



## [0.5.0](https://github.com/jdfed/drip-form/compare/v0.4.0...v0.5.0) (2022-01-13)


### Features

* setError支持配置action.ignore ([#125](https://github.com/jdfed/drip-form/issues/125)) ([b84aa5e](https://github.com/jdfed/drip-form/commit/b84aa5eead2b3f384d70bb45ce2961fcb1afbd1d))



## 0.4.0 (2022-01-11)


### Features

* array container support showNo config ([16f92a5](https://github.com/jdfed/drip-form/commit/16f92a5ae8b094768ff08ba3e8422170f40d8409))
* ref外抛submit、reset函数 ([#85](https://github.com/jdfed/drip-form/issues/85)) ([a00704e](https://github.com/jdfed/drip-form/commit/a00704e7b5f769059fa891a693382bcd67bd91e5))
* unitedSchema支持配置change ([#115](https://github.com/jdfed/drip-form/issues/115)) ([6175b29](https://github.com/jdfed/drip-form/commit/6175b29753d7fd146c9183944b0ac41df81585bb))
* 数组容器add模式，支持最大行数限制 ([#121](https://github.com/jdfed/drip-form/issues/121)) ([a13988f](https://github.com/jdfed/drip-form/commit/a13988ffd21e2462355f0e7976882e974aa7a5dd))
* 数组容器样式优化 & 支持序号文案自定义 ([#109](https://github.com/jdfed/drip-form/issues/109)) ([2ca6f67](https://github.com/jdfed/drip-form/commit/2ca6f67a2b894fc0152230f3bee69f279bce640c))


### Bug Fixes

* provide a default key for dynamic children ([#53](https://github.com/jdfed/drip-form/issues/53)) ([3abe606](https://github.com/jdfed/drip-form/commit/3abe6068e20d2d567426eb7ee637e2b6a0c93af5))
* ref外抛submit函数 ([#93](https://github.com/jdfed/drip-form/issues/93)) ([6ceffa7](https://github.com/jdfed/drip-form/commit/6ceffa77ef6286332703f63c8b3b393fdfe4184e))
* the delete button of the first component of the visible area is hidden ([#94](https://github.com/jdfed/drip-form/issues/94)) ([e388b6b](https://github.com/jdfed/drip-form/commit/e388b6b662617215a2ca119070e90f4be0bb5704))
* 修复元祖无数据不展示问题 ([#112](https://github.com/jdfed/drip-form/issues/112)) ([a67ae0e](https://github.com/jdfed/drip-form/commit/a67ae0e441d06d26812d257e34f82a245c9a84ea))
* 修改组件初始默认值设置 ([6ba869f](https://github.com/jdfed/drip-form/commit/6ba869fb6409cba746b4093dbc361ed5e2c8d532))
* 对象容器样式调整 & 数组｜对象容器schema支持style参数 ([#116](https://github.com/jdfed/drip-form/issues/116)) ([45f0f39](https://github.com/jdfed/drip-form/commit/45f0f39d7ba189f8859b3a9bfa2ad636e00c38ba))
* 数组容器无默认值报错 ([#75](https://github.com/jdfed/drip-form/issues/75)) ([010adcf](https://github.com/jdfed/drip-form/commit/010adcfcfef9a64725f29127e4e8417e29ae8d4b))



## 0.3.0 (2022-01-11)


### Features

* array container support showNo config ([16f92a5](https://github.com/jdfed/drip-form/commit/16f92a5ae8b094768ff08ba3e8422170f40d8409))
* ref外抛submit、reset函数 ([#85](https://github.com/jdfed/drip-form/issues/85)) ([a00704e](https://github.com/jdfed/drip-form/commit/a00704e7b5f769059fa891a693382bcd67bd91e5))
* unitedSchema支持配置change ([#115](https://github.com/jdfed/drip-form/issues/115)) ([6175b29](https://github.com/jdfed/drip-form/commit/6175b29753d7fd146c9183944b0ac41df81585bb))
* 数组容器样式优化 & 支持序号文案自定义 ([#109](https://github.com/jdfed/drip-form/issues/109)) ([2ca6f67](https://github.com/jdfed/drip-form/commit/2ca6f67a2b894fc0152230f3bee69f279bce640c))


### Bug Fixes

* provide a default key for dynamic children ([#53](https://github.com/jdfed/drip-form/issues/53)) ([3abe606](https://github.com/jdfed/drip-form/commit/3abe6068e20d2d567426eb7ee637e2b6a0c93af5))
* ref外抛submit函数 ([#93](https://github.com/jdfed/drip-form/issues/93)) ([6ceffa7](https://github.com/jdfed/drip-form/commit/6ceffa77ef6286332703f63c8b3b393fdfe4184e))
* the delete button of the first component of the visible area is hidden ([#94](https://github.com/jdfed/drip-form/issues/94)) ([e388b6b](https://github.com/jdfed/drip-form/commit/e388b6b662617215a2ca119070e90f4be0bb5704))
* 修复元祖无数据不展示问题 ([#112](https://github.com/jdfed/drip-form/issues/112)) ([a67ae0e](https://github.com/jdfed/drip-form/commit/a67ae0e441d06d26812d257e34f82a245c9a84ea))
* 修改组件初始默认值设置 ([6ba869f](https://github.com/jdfed/drip-form/commit/6ba869fb6409cba746b4093dbc361ed5e2c8d532))
* 对象容器样式调整 & 数组｜对象容器schema支持style参数 ([#116](https://github.com/jdfed/drip-form/issues/116)) ([45f0f39](https://github.com/jdfed/drip-form/commit/45f0f39d7ba189f8859b3a9bfa2ad636e00c38ba))
* 数组容器无默认值报错 ([#75](https://github.com/jdfed/drip-form/issues/75)) ([010adcf](https://github.com/jdfed/drip-form/commit/010adcfcfef9a64725f29127e4e8417e29ae8d4b))



## 0.2.0 (2022-01-07)


### Features

* array container support showNo config ([16f92a5](https://github.com/jdfed/drip-form/commit/16f92a5ae8b094768ff08ba3e8422170f40d8409))
* ref外抛submit、reset函数 ([#85](https://github.com/jdfed/drip-form/issues/85)) ([a00704e](https://github.com/jdfed/drip-form/commit/a00704e7b5f769059fa891a693382bcd67bd91e5))


### Bug Fixes

* 数组容器无默认值报错 ([#75](https://github.com/jdfed/drip-form/issues/75)) ([010adcf](https://github.com/jdfed/drip-form/commit/010adcfcfef9a64725f29127e4e8417e29ae8d4b))
* 修改组件初始默认值设置 ([6ba869f](https://github.com/jdfed/drip-form/commit/6ba869fb6409cba746b4093dbc361ed5e2c8d532))
* provide a default key for dynamic children ([#53](https://github.com/jdfed/drip-form/issues/53)) ([3abe606](https://github.com/jdfed/drip-form/commit/3abe6068e20d2d567426eb7ee637e2b6a0c93af5))
* ref外抛submit函数 ([#93](https://github.com/jdfed/drip-form/issues/93)) ([6ceffa7](https://github.com/jdfed/drip-form/commit/6ceffa77ef6286332703f63c8b3b393fdfe4184e))
* the delete button of the first component of the visible area is hidden ([#94](https://github.com/jdfed/drip-form/issues/94)) ([e388b6b](https://github.com/jdfed/drip-form/commit/e388b6b662617215a2ca119070e90f4be0bb5704))





**Note:** Version bump only for package @jdfed/drip-form





## 0.1.0 (2021-11-24)


### Features

* 表单自定义宽度支持 & 自定义标题位置支持 ([a22925f](https://github.com/jdfed/drip-form/commit/a22925f7a7a23b9da6e0cb0712fa8e2ee017e402))
* 表单自定义宽度支持 & 自定义标题位置支持 ([7157018](https://github.com/jdfed/drip-form/commit/71570189003cd8279c2734c07a054bfe75f4df3d))
* 单选选项卡后跟悬浮提示 ([df2d2e4](https://github.com/jdfed/drip-form/commit/df2d2e48b6a74da1e2d8048add0d3598317636ad))
* 更新默认主题包为drip-design ([fcddfd0](https://github.com/jdfed/drip-form/commit/fcddfd0a91a767118892cac56d8bfaf13a7952ba))
* 更新为ajv2019注册 ([3b45b5f](https://github.com/jdfed/drip-form/commit/3b45b5f6a2c7f09071f947ea6fdff7a3cc967dd2))
* 关键字插件化处理 ([591d492](https://github.com/jdfed/drip-form/commit/591d492018cc6dcb092dec533d9d078ed8810b83))
* 关键字插件化处理 ([b560f22](https://github.com/jdfed/drip-form/commit/b560f220bd7bda8614a8f94a60cf5a2a3417e584))
* 核心拖拽能力直接操作uischema和dataschema，不使用recoil维护 ([ec08bb2](https://github.com/jdfed/drip-form/commit/ec08bb22da89084b19d1e621c7a241c169abdb04))
* 联合态的必填字段还要判断非空 ([e982345](https://github.com/jdfed/drip-form/commit/e982345035b34483713f60ef54b966f5ee86bf71))
* 迁移babel-form至drip-form ([7687505](https://github.com/jdfed/drip-form/commit/768750518a8fdd9de93234fb8fbd5fc1cbd555b6))
* 迁移babel-form至drip-form ([53ebec6](https://github.com/jdfed/drip-form/commit/53ebec613182382ceff1fa2779478280c8eae28c))
* 嵌套表单 ([b939eed](https://github.com/jdfed/drip-form/commit/b939eed9bf23db5efa9a6c8177a24b397f4e8ba8))
* 嵌套对象必填支持&useQuery支持getkey ([d33a002](https://github.com/jdfed/drip-form/commit/d33a002567c7061ee28f5063738cba71c53872bf))
* 删除无用代码 ([99fbc16](https://github.com/jdfed/drip-form/commit/99fbc16db80998b407e2937412693c9b0a1f3ff1))
* 删除Spin loading ([1a6d7df](https://github.com/jdfed/drip-form/commit/1a6d7df9e638d49bb3b938c2bbc46fb274bb6ea3))
* 升级ajv ([1708e2c](https://github.com/jdfed/drip-form/commit/1708e2c8ad8581a78be9923f194c494e2f970a4c))
* 添加对parse返回值的类型校验 & 完善文档 ([93fac16](https://github.com/jdfed/drip-form/commit/93fac16f0b35064deec532bf1473af9492dc6b18))
* 添加右侧栏基础属性 ([a61fe23](https://github.com/jdfed/drip-form/commit/a61fe23a3b3a2b02ce5f46d6448a374cbabab723))
* 添加combine & 修复addField类型引用错误的问题 ([cd5fb7d](https://github.com/jdfed/drip-form/commit/cd5fb7d73704739073f734dcd1ca384299ba2f67))
* 添加deleteUiSchema方法 ([344aa96](https://github.com/jdfed/drip-form/commit/344aa9629f44ae35287bbccd0856b220efd014e7))
* 添加typePath入参reducer ([22d9af6](https://github.com/jdfed/drip-form/commit/22d9af63b4a218ccb20971a6ac0ebda3916647e1))
* 添加vcontrolDefault ([6939c58](https://github.com/jdfed/drip-form/commit/6939c5841e07f2f53265ffdfd924335c17669241))
* 拖拽优化 ([90e2251](https://github.com/jdfed/drip-form/commit/90e22517082fe2a432bb443fc1961451da7b2ba0))
* 外抛get、set、merge、getKey ([afcd711](https://github.com/jdfed/drip-form/commit/afcd7111ff5474f60729b26e5a31e283d1b9238e))
* 完成"提示"配置面板的联动 ([efc3767](https://github.com/jdfed/drip-form/commit/efc376780325985265ac7311bb5f821358adc565))
* 完成嵌套解析 ([f98dca4](https://github.com/jdfed/drip-form/commit/f98dca4a27999a3839bb9721a3e83b114799fb05))
* 完成右侧配置面板修改后实时渲染至可视区 ([12b1e45](https://github.com/jdfed/drip-form/commit/12b1e4518783e72fa3c20e0e194a07b3836c9a89))
* 完成中间区域拖拽 & 右侧schema联动获取 ([d3eadac](https://github.com/jdfed/drip-form/commit/d3eadacf93530d05aae1285dd99dfcc6a898dddf))
* 新增@drip/ajv，支持node端调用，保持校验格式一致 ([f5919b4](https://github.com/jdfed/drip-form/commit/f5919b47dfa55d39b4b31176b7cf788f9e63c523))
* 新增@drip/ajv，支持node端调用，保持校验格式一致 ([425b33f](https://github.com/jdfed/drip-form/commit/425b33f517460728919806e3da60fd0f5045ae14))
* 修改uiComponents类型定义UiMergeType为UiComponents ([7cba4a7](https://github.com/jdfed/drip-form/commit/7cba4a760600b5682fdfc49fb8d7f9fe53bbcbe5))
* 异步校验loading态 ([6efb51a](https://github.com/jdfed/drip-form/commit/6efb51ad5f75a4a14b41a7b460eb51438d6807f2))
* 支持标题位置自定义 ([1604678](https://github.com/jdfed/drip-form/commit/160467815b755e528385705412bfa7b3cee5e3e8))
* 支持标题位置自定义 ([1328ea9](https://github.com/jdfed/drip-form/commit/1328ea9cc3a9d0502bbb8a083e28359cf38f6670))
* 支持跨表单获取数据 ([ff9eecb](https://github.com/jdfed/drip-form/commit/ff9eecbfcbf7b87527e060cb6637e7b8a009137c))
* 支持配置底部按钮 ([765b9f8](https://github.com/jdfed/drip-form/commit/765b9f861ff624532f38cbf280ba7a8dbcf43541))
* 支持切换组件类型 ([3ca1737](https://github.com/jdfed/drip-form/commit/3ca17376ab59b5926ff051a91701b754187a39aa))
* 支持拖拽 ([45bba5c](https://github.com/jdfed/drip-form/commit/45bba5c4f75a268b06310105b6865bb42f3eca39))
* 支持校验文案配置 ([58adade](https://github.com/jdfed/drip-form/commit/58adadebdb12233bd961ef5a0937240893b9eb5f))
* 支持业务组件 ([eb9dc7d](https://github.com/jdfed/drip-form/commit/eb9dc7dafdd78ebb2fbbc375d73b0530b066b6e3))
* 支持自定义组件库 ([c951013](https://github.com/jdfed/drip-form/commit/c951013b5948666e7cc626b9358ff742ff20ec91))
* 支持drip-design ([10e20ff](https://github.com/jdfed/drip-form/commit/10e20ff424592dc8716ded47e64d2f53b9cd577e))
* 支持parse入参 ([72532ac](https://github.com/jdfed/drip-form/commit/72532ac7a40d1f9d36cb627739c707fb48f61c63))
* 支持set、get、merge ([dc267b6](https://github.com/jdfed/drip-form/commit/dc267b6a23d7d9a8b5bf3edff303adfed7a98056))
* bug修复+容器组件title配置 ([7fc0a05](https://github.com/jdfed/drip-form/commit/7fc0a054e1e3edc824d7153d6bb4b7a1540585f0))
* generator可视化拖拽区域进度80% ([b999cfd](https://github.com/jdfed/drip-form/commit/b999cfde748d98ee6cac457636893a7a7f74ee02))
* jsonSchemaAtom和schemaAtom融合 ([1913ba2](https://github.com/jdfed/drip-form/commit/1913ba276408cb0fc226cc4baf05f7c5b1530935))
* objectContainer支持折叠 ([cae8d71](https://github.com/jdfed/drip-form/commit/cae8d715dfa6899b96484764310c0bce06880442))
* **generator:** 支持校验 ([93367c5](https://github.com/jdfed/drip-form/commit/93367c5d965007638b51653459f1faeff9d637c5))
* **generator:** 支持校验联动 ([ed519f5](https://github.com/jdfed/drip-form/commit/ed519f559ea5ceb0524787f6a8e343fbe845024b))
* 支持transform入参 ([cc1e51f](https://github.com/jdfed/drip-form/commit/cc1e51f6a78620ec50f4f1df066e09f36f67900b))
* 支持UiSchema和dataSchema的联合态 #C2020120736206 ([7dd5f3f](https://github.com/jdfed/drip-form/commit/7dd5f3f2d45ed81c0bd35d06958772b9a7d3d620)), closes [#C2020120736206](https://github.com/jdfed/drip-form/issues/C2020120736206)
* container外部封装高阶拖拽组件 ([45f8427](https://github.com/jdfed/drip-form/commit/45f842764601aaa44b267a39f3530827be11c0a3))
* generator可视化拖拽区域进度80% ([fa10a9d](https://github.com/jdfed/drip-form/commit/fa10a9dfc050b56b2e30b4169e3715912c7df0fa))
* merge ([23fbeac](https://github.com/jdfed/drip-form/commit/23fbeac69b108f2ad94297abebb3992615a87ef7))
* null组件支持传参 ([a25d1fb](https://github.com/jdfed/drip-form/commit/a25d1fb28d5e04704c542e378dae9ca2fa1d40d1))
* uiSchema title字段添加verticalAlign控制标题垂直对齐方式 ([c46bc11](https://github.com/jdfed/drip-form/commit/c46bc11320af84b3d17c0c924e026169c7a13281))


### Bug Fixes

* 1.输入框，组件撑满容器宽度；2.多选文案校验修改 ([0b1017e](https://github.com/jdfed/drip-form/commit/0b1017e9e7d61a4e3a74e5f980b84932701706f3))
* 必填校验失效 ([393e65a](https://github.com/jdfed/drip-form/commit/393e65a964594430a5f856e6cbba605cbe414693))
* 当ref.current. checking校验完毕后，没有再次推送事件 #C2021011882807 ([3935c1b](https://github.com/jdfed/drip-form/commit/3935c1bd0fc20e17e0ff2fec3b1c706311b75f72)), closes [#C2021011882807](https://github.com/jdfed/drip-form/issues/C2021011882807)
* 更新版本 ([7de7c83](https://github.com/jdfed/drip-form/commit/7de7c83b4d4225bb3d8010e81c4877625c719422))
* 拖拽fieldKey会变化 ([ef24adb](https://github.com/jdfed/drip-form/commit/ef24adb1f8eadf0ae0e66242e2da01241a911c2f))
* 拖拽fieldKey会变化 ([55d84af](https://github.com/jdfed/drip-form/commit/55d84af09dad8ffa574a1e18d7db4a364e716e56))
* 修复标题设置无法联动的问题 ([ea9a179](https://github.com/jdfed/drip-form/commit/ea9a179afedd8cd03631d4f4ecd9dff3bd0d7a6e))
* 修复导出包无法被vite或snowpack使用的问题 ([37f6636](https://github.com/jdfed/drip-form/commit/37f6636124ecd3223eac7152fb19a4accf2c5ca8))
* 修复合并冲突 ([2fcc913](https://github.com/jdfed/drip-form/commit/2fcc9132017b121ad849a5d7f6186ba7cd628673))
* 修复合并错误 ([8052406](https://github.com/jdfed/drip-form/commit/8052406d3b3fd32b23c8574bd8e055b119f8ad51))
* 修复计算padding中有项为0时，无法使用calc的错误 ([124bd40](https://github.com/jdfed/drip-form/commit/124bd409d387f4763eb829d47570ba4bdee9cf31))
* 修复每个DripForm无法使用独立Ajv校验的问题 ([7e14352](https://github.com/jdfed/drip-form/commit/7e14352d1270cc71b18dbb6c5418a7bba2504336))
* 修复每个DripForm无法使用独立Ajv校验的问题 ([d4c4988](https://github.com/jdfed/drip-form/commit/d4c4988c0eb530c285a82072272af9ba77446cfd))
* 修复默认导出声明 ([f32e7a2](https://github.com/jdfed/drip-form/commit/f32e7a2eb3f597b19bb5b5c24716ecdb5e5ecb17))
* 修复一系列问题 ([52d3e42](https://github.com/jdfed/drip-form/commit/52d3e4258f962958189f1c8ced9b8c20dcf24653))
* 修复因require无法被vite引用的问题 & 添加更多嵌套格式样例 ([5c41f9e](https://github.com/jdfed/drip-form/commit/5c41f9eb2dd61b57d747b0f6cbb3753a2c243861))
* 修复containerStyle透传到子表单问题 ([f8e46c1](https://github.com/jdfed/drip-form/commit/f8e46c1712c44ddd3adcf905f1acf8f4ae9f8678))
* 修复exports被删除后无法打包的问题 ([9d54151](https://github.com/jdfed/drip-form/commit/9d54151a8445fd0b7849b1ce2f806f4db8ef07a1))
* 修复formData变化，表单数据未刷新问题 ([c9541ef](https://github.com/jdfed/drip-form/commit/c9541ef2011e42bbba4a16cba99abfdec359d24e))
* 修复formData不传或传null情况报错 ([79eaf89](https://github.com/jdfed/drip-form/commit/79eaf897cd18ded1b1a2a716f9a1db3ed75d4e8d))
* 修复formData不传无限reload问题 ([9e2e89b](https://github.com/jdfed/drip-form/commit/9e2e89b2e3a4ba5c1e5f0125af39152e38fd4490))
* 修复tips偏移计算错误的问题 ([87584ad](https://github.com/jdfed/drip-form/commit/87584adb5a8e29ba74ec855cf301853f56d6529f))
* 修复title对齐 #C2021030121743 ([3d6a342](https://github.com/jdfed/drip-form/commit/3d6a342a7718ced576663586c0e0cf161dffe82e)), closes [#C2021030121743](https://github.com/jdfed/drip-form/issues/C2021030121743)
* 修复typePath没有动态更新，而是一直采用初始化状态的问题 ([c68beec](https://github.com/jdfed/drip-form/commit/c68beecdd5b1c7df3096a4dae01e2bcac560925d))
* 修复typePath没有动态生成的问题 ([f338118](https://github.com/jdfed/drip-form/commit/f338118011f394e74975a73d09f7168ef4e7692a))
* 修复uiSchema title透传问题 ([064e901](https://github.com/jdfed/drip-form/commit/064e9013a151cee8a72f60d98614b41213af3183))
* 修复uploader上传文件名字太长超出容器宽度&高度展示 ([f98b4ea](https://github.com/jdfed/drip-form/commit/f98b4ea86559de55f3f06ab4b95683b797781a0b))
* 一系列问题 ([52f612a](https://github.com/jdfed/drip-form/commit/52f612a37c20c55ae5957365aa249e9ffff96db3))
* 自定义组件没有获取到containerStyle #C2021042653463 ([7992885](https://github.com/jdfed/drip-form/commit/7992885feed4a6eb22e97d561fa7a4712d5ab071)), closes [#C2021042653463](https://github.com/jdfed/drip-form/issues/C2021042653463)
* 组件渲染和formData生成的顺序问题以及checkbox全不选时的默认值问题 #C2020092276661 ([b2fbe15](https://github.com/jdfed/drip-form/commit/b2fbe15e5719a8c3a3de5ba7264ce5efe847a7c1)), closes [#C2020092276661](https://github.com/jdfed/drip-form/issues/C2020092276661)
* babel配置&eslit报错 ([d121deb](https://github.com/jdfed/drip-form/commit/d121deb192f221c68dc7fb315943d98e7df9b992))
* json导出&viewport模式 ([6dff709](https://github.com/jdfed/drip-form/commit/6dff7099721e2a06d518a038aff668e1e8ea8562))
* loading ([a724a19](https://github.com/jdfed/drip-form/commit/a724a19b1f085d3cf5d14de2ed3d145ddada4f5c))
* loading只支持全局 ([f0a8e9d](https://github.com/jdfed/drip-form/commit/f0a8e9d4f4afabd26bc1c7eb8a60789c7f11f20c))
* onSubmit formData参数未使用transform ([1fcb8d3](https://github.com/jdfed/drip-form/commit/1fcb8d364e596ab04a0c704dcbcc54e3cfe87ec2))
* parse未执行 ([3533593](https://github.com/jdfed/drip-form/commit/3533593c0408a79276043df99ef0ca50ad87365e))
* selintignore ([f57e415](https://github.com/jdfed/drip-form/commit/f57e4153bc418dde1d204580752de4c28ba0c626))
* transform ts返回值类型 ([a1b0998](https://github.com/jdfed/drip-form/commit/a1b0998bfd338025c0304a830efed68343b91e14))
* uploader图片名字过长超出&标题缩放 #C2021011882799 ([e9d0f14](https://github.com/jdfed/drip-form/commit/e9d0f1487632789d1ea2a9f83bc56d313b23d3aa)), closes [#C2021011882799](https://github.com/jdfed/drip-form/issues/C2021011882799)
* vcontrol默认false的时候会先展示再隐藏 #C2021042652510 ([542a0a5](https://github.com/jdfed/drip-form/commit/542a0a52eeeeb47b9216bc430481345002f85102)), closes [#C2021042652510](https://github.com/jdfed/drip-form/issues/C2021042652510)
* **unitedschema:** 添加全局title ([fc7e4d2](https://github.com/jdfed/drip-form/commit/fc7e4d2fe206458bc6b301258f45248d171106bd))
* **unitedschema:** validatetime默认为submit ([3720dd9](https://github.com/jdfed/drip-form/commit/3720dd9d3b9904c28e18e90f0b347baa6131020a))


### Performance Improvements

* 优化性能 ([87dd337](https://github.com/jdfed/drip-form/commit/87dd3378b82122f0f24eba6b544f263d848af8f8))
* 优化container prop传参 ([e7f9964](https://github.com/jdfed/drip-form/commit/e7f99644865a9f4f6f9042d8390ab1c7a77a136b))


### style

* 去除console.log ([e62327c](https://github.com/jdfed/drip-form/commit/e62327ccdc2b9dfe597f84836f1bf3bfca5f9030))
* 修复generator对全局样式污染的问题 ([7b37ca1](https://github.com/jdfed/drip-form/commit/7b37ca17c98323b04b018966b2db34424edc4824))
