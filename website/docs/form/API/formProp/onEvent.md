---
id: onEvent
title: onEvent
description: 事件回调
---

有时，我们的组件可能有弹出弹窗、二次确认、发出请求等诉求。

以弹窗为例，我们当然可以在组件内写一个`Modal`来实现这个功能。但是这样一来，表单内存在多个该组件时，`Modal`将被渲染多次。

`drip-form` 提供了公共事件回调机制，我们可以在组件内通过 `props.fireEvent` 来抛出一个事件，在 `onEvent` 中对抛出的事件进行处理。

```ts
type DripFormEventType = {
	type: string
	payload: any
}
type DripFormEventFuncType = (event: DripFormEventType) => any
```

```jsx title="ButtonField.jsx" {3-8}
const ButtonField = ({ fireEvent, ...restProps }) => {
	const onClick = () => {
		fireEvent({
			type: 'customBtnClicked',
			// 任何想要在事件中抛出的信息
			payload: null,
		})
	}
	return <Button onClick={onClick}>点击弹窗</Button>
}
```

```jsx title="Form.jsx" {3-7,13}
const Form = () => {
	const [visible, setVisible] = useState(false)
	const onEvent = useCallback((event) => {
		if (event.type === 'customBtnClicked') {
			setVisible(true)
		}
	}, [])

	return (
		<>
			<DripForm
				...
				onEvent={onEvent}
			/>
			<Modal visible={visible} />
		</>
	)
}
```
