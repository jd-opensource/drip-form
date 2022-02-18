import addFormats from '../src'
import Ajv2019 from 'ajv/dist/2019'
import type Ajv from 'ajv/dist/2019'
describe('addFormats', () => {
  let ajv: Ajv

  beforeEach(() => {
    ajv = new Ajv2019({
      // 允许type:['string','number']等联合模式
      allowUnionTypes: true,
      //支持default关键字输出到
      useDefaults: true,
      // 展示所有错误信息。为false时，检测到错误立马返回，后续错误不会返回
      allErrors: true,
      // 错误信息包含schema、parerntSchema
      verbose: true,
      // 支持$data引用，参考：https://ajv.js.org/guide/combining-schemas.html#data-reference
      $data: true,
      // 支持鉴别关键字 参考：https://ajv.js.org/json-schema.html#discriminator
      discriminator: true,
      // 是否删除数据中Schema未定义的字段
      removeAdditional: false,
    })
  })

  test('jsonObject', () => {
    addFormats(ajv)
    const validate = ajv.compile({ type: 'string', format: 'jsonObject' })
    expect(validate(0)).toEqual(false)
    expect(validate(1234)).toEqual(false)
    expect(validate(false)).toEqual(false)
    expect(validate(true)).toEqual(false)
    expect(validate(null)).toEqual(false)
    expect(validate({})).toEqual(false)
    expect(validate('[{"a":"b"}]')).toEqual(true)
    expect(validate([{ a: 'b' }])).toEqual(false)
    expect(validate({ a: 'b' })).toEqual(false)
  })

  test('https', () => {
    addFormats(ajv)
    const validate = ajv.compile({ type: 'string', format: 'https' })
    expect(
      validate('https://www.example.com/foo/?bar=baz&inga=42&quux')
    ).toEqual(true)
    expect(validate('https://www.example.com')).toEqual(true)
    expect(validate('http://www.example.com')).toEqual(false)
    expect(validate('//www.example.com')).toEqual(false)
  })

  test('color', () => {
    addFormats(ajv)
    const validate = ajv.compile({ type: 'string', format: 'color' })
    expect(validate('rgba(0,0,0,1)')).toEqual(true)
    expect(validate('rgba(0,0,0)')).toEqual(false)
    expect(validate('rgb(0,0,0)')).toEqual(true)
    expect(validate('rgb(0,0,0,1)')).toEqual(false)
    expect(validate('#000000')).toEqual(true)
    expect(validate('#0000001')).toEqual(false)
  })

  test('date-time', () => {
    addFormats(ajv)
    const validateDate = ajv.compile({ type: 'string', format: 'date-time' })
    expect(validateDate('2020-09-17 12:00:00')).toEqual(true)
    expect(validateDate('2018-11-13T20:20:39+00:00')).toEqual(false)
    expect(validateDate('2018-11-13')).toEqual(false)
    expect(validateDate('12:00:00')).toEqual(false)
  })

  test('optional keyword', () => {
    addFormats(ajv, ['color'])
    expect(() => ajv.compile({ type: 'string', format: 'date-time' })).toThrow()
    expect(() => ajv.compile({ type: 'string', format: 'abc' })).toThrow()
    expect(() => ajv.compile({ type: 'string', format: 'color' })).not.toThrow()
    expect(ajv.compile({ type: 'string', format: 'color' })('#000000')).toEqual(
      true
    )
    expect(
      ajv.compile({ type: 'string', format: 'color' })('#0000001')
    ).toEqual(false)
  })
})
