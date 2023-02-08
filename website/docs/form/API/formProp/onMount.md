---
id: onMount
title: onMount
description: 组件didMount函数
---

onMount 是在`DripForm` componentDidMount 的时候执行的回调函数

```ts
onMount?: (ref: MutableRefObject<DripFormRefType>) => void
```

```jsx
<DripForm
	unitedSchema={unitedSchema}
	uiComponents={uiComponents}
	onMount={(ref) => {
		console.log(ref)
	}}
/>
```
