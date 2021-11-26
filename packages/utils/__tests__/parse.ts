import { parseUnitedSchema } from '../src/index'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {
  unitedSchema as test1,
  parsedSchema as verify1,
} from '../__testsdata__/multinest.schema'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {
  unitedSchema as test2,
  parsedSchema as verify2,
} from '../__testsdata__/nest.schema'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {
  unitedSchema as test3,
  parsedSchema as verify3,
} from '../__testsdata__/nestObject.schema'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {
  unitedSchema as test4,
  parsedSchema as verify4,
} from '../__testsdata__/errMsg.schema'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {
  unitedSchema as test5,
  parsedSchema as verify5,
} from '../__testsdata__/errMsg2.schema'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {
  unitedSchema as test6,
  parsedSchema as verify6,
} from '../__testsdata__/errMsg3.schema'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {
  unitedSchema as test7,
  parsedSchema as verify7,
} from '../__testsdata__/datePicker.schema'

describe('parseUnitedSchema', () => {
  test('test datePicker.schema.js', () => {
    const data = parseUnitedSchema(test7)
    expect(data).toStrictEqual(verify7)
  })

  test('test multinest.schema.js', () => {
    const data = parseUnitedSchema(test1)
    expect(data).toStrictEqual(verify1)
  })

  test('test nest.schema.js', () => {
    const data = parseUnitedSchema(test2)
    expect(data).toStrictEqual(verify2)
  })

  test('test nestObject.schema.js', () => {
    const data = parseUnitedSchema(test3)
    expect(data).toStrictEqual(verify3)
  })

  test('test errMsg.schema.js', () => {
    const data = parseUnitedSchema(test4)
    expect(data).toStrictEqual(verify4)
  })

  test('test errMsg.schema2.js', () => {
    const data = parseUnitedSchema(test5)
    expect(data).toStrictEqual(verify5)
  })

  test('test errMsg.schema3.js', () => {
    const data = parseUnitedSchema(test6)
    expect(data).toStrictEqual(verify6)
  })
})
