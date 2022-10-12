import type { Operator } from '@jdfed/utils'
// flow操作符
export const operatorMap = {
  string: [
    { label: '等于', value: '===' },
    { label: '不等于', value: '!==' },
    { label: '包含', value: 'includes' },
    { label: '不包含', value: '-includes' },
  ],
  number: [
    { label: '大于等于', value: '>=' },
    { label: '小于等于', value: '<=' },
    { label: '小于', value: '<' },
    { label: '大于', value: '>' },
    { label: '等于', value: '===' },
    { label: '不等于', value: '!==' },
  ],
  boolean: [
    { label: '真', value: 'true' },
    { label: '假', value: 'false' },
  ],
  object: [
    { label: '包含', value: 'includes' },
    { label: '不包含', value: '-includes' },
  ],
  array: [
    { label: '包含', value: 'includes' },
    { label: '不包含', value: '-includes' },
  ],
}

export type OperatorType = keyof typeof operatorMap

// 获取相应数据类型的操作符号数组
export const getOperatorOptionValue = (type: OperatorType): Array<Operator> => {
  const operatorOptionValue = {} as Record<OperatorType, Array<Operator>>
  Object.entries(operatorMap).map(([key, value]) => {
    const typeOption: Operator[] = []
    value.map((item) => {
      typeOption.push(item.value as Operator)
    })
    operatorOptionValue[key as OperatorType] = typeOption
  })
  return operatorOptionValue[type]
}
