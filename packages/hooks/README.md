# `@jdfed/hooks`

> babelform 通用 hooks

## useClickOne

- 控制按钮只能点击一次

#### Usage

```
import React, { useState } form 'react
import { useClickOne } from '@jdfed/hooks'
import { Button } from 'antd'

const Demo = () => {

  const _setCount = useClickOne(() => {
    /*
    * 做些操作
    */
  }, [])

  return (
    <>
      <Button onCLick={_setCount}></Button>
    </>
  )
}

```

## useEventCallback

- 重写 useCallback（保证函数即使 dependencies 依赖改变。也不会重新生成） 解决因为 useCallback 的依赖频繁变化导致 useCallback 缓存效果很差甚至影响性能的问题 fn 函数 dependencies 依赖数组

#### Usage

```
import React, { useState } form 'react
import { useEventCallback, useField } from '@jdfed/hooks'
import { Button } from 'antd'

const Demo = (fieldData) => {
  const [initValue, setValue] = useState(fieldData)
  const _onChange = useField(
    { fieldKey, onChange, options: { isUploader: true } },
    dispatch
  )
  change = useEventCallback(() => {
    (value) => {
      setValue(value)
    }
  }, [_onChange])
  return (
    <>
      <Input onChange={change} />
    </>
  )
}

```

## useField

- 将表单数据保存为不可变数据

#### Usage

```
useField({ fieldKey , onChange , options })
```

## useModal

- 设置 modal 的展示隐藏

#### Usage

```
import React, { useState } form 'react
import { useModal } from '@jdfed/hooks'
import { Modal } from 'antd'

const Demo = () => {
  const [defaultStatus] = useState(false)
  const [visible] = useModal(defaultStatus)
  return (
    <>
      <Modal visible=(visible)/>
    </>
  )
}

```

## usePrevious

- 返回上一次的 value 值

#### Usage

```
import React, { useState } form 'react
import { usePrevious } from '@jdfed/hooks'

const Demo = () => {
  const [defaultStatus] = useState(false)
  //上一次value的值
  const preValue = usePrevious(defaultValue)
  return (
    <div>{value}</div>
  )
}

```

## useQuery

- 查询表单数据

#### Usage

```
cosnt queryOptionsFuc = useQuery({}, dispatch)
```

## useRefProp

- 当 callback 依赖过多时，使用 useRefProp 防止 onCLick 事件多次生成

#### Usage

```
import {useRefProp} from 'hooks/index'
      const MyComponent = ()=> {
        const ref = useRefProp()
        const onClick = useRefProp(()=>{ const {a,b,c,d}=ref.current click事件 },[])
        return <div onClick={onClick}>
      }
```

## useValidate

- 实时校验表单数据

#### Usage

```
const validate = () => {
  ......
  ......
  return {
    pass,
    errors,
    errorsMap,
    formData: newFormData,
  }
}

const validateDebounce = useValidate(validate)
```
