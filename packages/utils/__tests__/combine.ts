import { combine } from '../src/index'
import {
  parsedSchema as test1,
  unitedSchema as verify1,
} from '../__testsdata__/multinest.schema'
import {
  parsedSchema as test2,
  unitedSchema as verify2,
} from '../__testsdata__/nest.schema'
import {
  parsedSchema as test3,
  unitedSchema as verify3,
} from '../__testsdata__/nestObject.schema'
import {
  unitedSchema as verify4,
  parsedSchema as test4,
} from '../__testsdata__/errMsg.schema'
import {
  unitedSchema as verify5,
  parsedSchema as test5,
} from '../__testsdata__/errMsg2.schema'
import {
  unitedSchema as verify6,
  parsedSchema as test6,
} from '../__testsdata__/errMsg3.schema'
import {
  unitedSchema as verify7,
  parsedSchema as test7,
} from '../__testsdata__/datePicker.schema'
import {
  unitedSchema as verify8,
  parsedSchema as test8,
} from '../__testsdata__/array.schema'

describe('combine', () => {
  test('test dataPicker.schema', () => {
    const data = combine(test7.dataSchema, test7.uiSchema)
    // fs.writeFileSync('./data.json', JSON.stringify(data))
    expect(data).toStrictEqual(verify7)
  })

  test('test multinest.schema', () => {
    const data = combine(test1.dataSchema, test1.uiSchema)
    // fs.writeFileSync('./data.json', JSON.stringify(data))
    expect(data).toStrictEqual(verify1)
  })

  test('test nest.schema', () => {
    const data = combine(test2.dataSchema, test2.uiSchema)
    // fs.writeFileSync('./data.json', JSON.stringify(data))
    expect(data).toStrictEqual(verify2)
  })

  test('test nestObject.schema', () => {
    const data = combine(test3.dataSchema, test3.uiSchema)
    // fs.writeFileSync('./data.json', JSON.stringify(data))
    expect(data).toStrictEqual(verify3)
  })

  test('test errMsg.schema.js', () => {
    const data = combine(test4.dataSchema, test4.uiSchema)
    expect(data).toStrictEqual(verify4)
  })

  test('test errMsg2.schema.js', () => {
    const data = combine(test5.dataSchema, test5.uiSchema)
    expect(data).toStrictEqual(verify5)
  })

  test('test errMsg3.schema.js', () => {
    const data = combine(test6.dataSchema, test6.uiSchema)
    expect(data).toStrictEqual(verify6)
  })
  test('test array.schema.js', () => {
    const data = combine(test8.dataSchema, test8.uiSchema)
    expect(data).toStrictEqual(verify8)
  })
})
