---
id: getset
title: get、set、merge的联动
---

drip-form ref对象提供get、set、merge三个方法来替代dispatch。

## get、set、merge和dispatch的不同

`dispatch` 是 drip-form 允许开发者在外部修改表单的核心函数。它可用于控制表单的 UI、校验、数据。

drip-form需要输入unitedSchema来描述表单的ui和校验。在drip-form内部，unitdSchema分为uiSchema和dataSchema。

uiSchema控制表单ui样式

dataSchema控制表单校验

在使用dispatch修改表单ui、校验、数据的时候，需要明确知道当前表单在uiSchema和dataSchema的路径。而用户并不了解内部uiSchema和dataSchema，只对formData（表单数据关心），由此使用get、set、merget可替代dispatch快速设置。

get、set、merge是dispatch的语法糖。



