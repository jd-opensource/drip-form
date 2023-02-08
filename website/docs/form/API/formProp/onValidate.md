---
id: onValidate
title: onValidate
description: 设置自定义校验或异步校验
---


drip-form `onValidate prop`用来支持表单的[异步校验](../../use/validate/asyncValidate)。

`onValidate`是一个对象。

- key 值对应表单各自的 fieldKey。

- value 是一个由`type`和`fn`组成的对象

  - **type: 'change'|'click'|'submit'**

    change 代表表单数据改变即触发异步校验

    click 代表点击确定触发异步校验

    submit 代表点击提交按钮时触发校验或调用 submit 方法时触发校验

  - **fn**
		
	 	是一个函数，接收当前表单的数据，可以在 fn 中做数据的异步校验操作

    **fn 返回一个字符串形式的错误信息**。当异步校验正确时，返回空字符串即可。


使用例子参考[异步校验](../../use/validate/asyncValidate)