import { parseUnitedSchema, UnitedSchema } from '../src/index'
import {
  unitedSchema as test1,
  parsedSchema as verify1,
} from '../__testsdata__/multinest.schema'
import {
  unitedSchema as test2,
  parsedSchema as verify2,
} from '../__testsdata__/nest.schema'
import {
  unitedSchema as test3,
  parsedSchema as verify3,
} from '../__testsdata__/nestObject.schema'
import {
  unitedSchema as test4,
  parsedSchema as verify4,
} from '../__testsdata__/errMsg.schema'
import {
  unitedSchema as test5,
  parsedSchema as verify5,
} from '../__testsdata__/errMsg2.schema'
import {
  unitedSchema as test6,
  parsedSchema as verify6,
} from '../__testsdata__/errMsg3.schema'
import {
  unitedSchema as test7,
  parsedSchema as verify7,
} from '../__testsdata__/datePicker.schema'
import {
  unitedSchema as test8,
  parsedSchema as verify8,
} from '../__testsdata__/array.schema'
import {
  unitedSchema as test9,
  parsedSchema as verify9,
} from '../__testsdata__/errMsg4.schema'
import {
  unitedSchema as test10,
  parsedSchema as verify10,
} from '../__testsdata__/root.schema'
import {
  unitedSchema as test11,
  parsedSchema as verify11,
} from '../__testsdata__/test.schema'
import {
  unitedSchema as test12,
  parsedSchema as verify12,
} from '../__testsdata__/repeatField.schema'

describe('parseUnitedSchema', () => {
  test('test datePicker.schema.js', () => {
    const data = parseUnitedSchema(test7 as UnitedSchema)
    expect(data).toStrictEqual(verify7)
  })

  test('test multinest.schema.js', () => {
    const data = parseUnitedSchema(test1 as UnitedSchema)
    expect(data).toStrictEqual(verify1)
  })

  test('test nest.schema.js', () => {
    const data = parseUnitedSchema(test2 as UnitedSchema)
    expect(data).toStrictEqual(verify2)
  })

  test('test nestObject.schema.js', () => {
    const data = parseUnitedSchema(test3 as UnitedSchema)
    expect(data).toStrictEqual(verify3)
  })

  test('test errMsg.schema.js', () => {
    const data = parseUnitedSchema(test4 as UnitedSchema)
    expect(data).toStrictEqual(verify4)
  })

  test('test errMsg.schema2.js', () => {
    const data = parseUnitedSchema(test5 as UnitedSchema)
    expect(data).toStrictEqual(verify5)
  })

  test('test errMsg.schema3.js', () => {
    const data = parseUnitedSchema(test6 as UnitedSchema)
    expect(data).toStrictEqual(verify6)
  })

  test('test errMsg4.schema.js', () => {
    const data = parseUnitedSchema(test9 as UnitedSchema)
    expect(data).toStrictEqual(verify9)
  })

  test('test array.schema.js', () => {
    const data = parseUnitedSchema(test8 as UnitedSchema)
    expect(data).toStrictEqual(verify8)
  })
  test('test root.schema.js', () => {
    const data = parseUnitedSchema(test10 as UnitedSchema)
    expect(data).toStrictEqual(verify10)
  })

  test('test test.schema.js', () => {
    const data = parseUnitedSchema(test11 as UnitedSchema)
    expect(data).toStrictEqual(verify11)
  })
  test('test repeatField.schema.js', () => {
    const data = parseUnitedSchema(test12 as UnitedSchema)
    expect(data).toStrictEqual(verify12)
  })
})
