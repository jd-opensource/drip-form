import addKeywords from '../src'
import Ajv2019 from 'ajv/dist/2019'
import type Ajv from 'ajv/dist/2019'
describe('addKeywords', () => {
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

  test('rangeDelimiter', () => {
    addKeywords(ajv)
    const validate = ajv.compile({
      type: 'string',
      rangeDelimiter: {
        delimiter: ',',
        min: 1,
        max: 2,
      },
    })
    expect(validate('1')).toEqual(true)
    expect(validate('1,2')).toEqual(true)
    expect(validate('')).toEqual(false)
    expect(validate('1,2,3')).toEqual(false)
    expect(validate('1;2;3')).toEqual(true)
    expect(validate('1,,2')).toEqual(true)
  })

  test('optional keyword', () => {
    addKeywords(ajv, [])
    expect(() =>
      ajv.compile({
        type: 'string',
        rangeDelimiter: {
          delimiter: ',',
          min: 1,
          max: 2,
        },
      })
    ).toThrow()
    addKeywords(ajv, ['rangeDelimiter'])
    expect(() => {
      ajv.compile({
        type: 'string',
        rangeDelimiter: {
          delimiter: ',',
          min: 1,
          max: 2,
        },
      })
    }).not.toThrow()
  })
})
