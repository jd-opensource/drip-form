import {
  generateReg,
  typeCheck,
  isEmpty,
  setDeepProp,
  deleteDeepProp,
  judgeAndRegister,
  parseHrefParam,
} from '../src/index'

describe('generateReg', () => {
  test('generateReg(["a"])===/^a$/ig', () => {
    expect(generateReg(['a'])).toStrictEqual(/^a$/gi)
  })
  test('generateReg(["0"])===/^(0|\\$container)$/ig', () => {
    expect(generateReg(['0'])).toStrictEqual(/^(0|\$container)$/gi)
  })
  test('generateReg(["a","0"])===/^a\\.(\\d+|\\$container)$/ig', () => {
    expect(generateReg(['a', '0'])).toStrictEqual(/^a\.(0|\$container)$/gi)
  })
  test('generateReg(["a","0","b"])===/^a\\.(\\d+|\\$container)\\.b$/ig', () => {
    expect(generateReg(['a', '0', 'b'])).toStrictEqual(
      /^a\.(0|\$container)\.b$/gi
    )
  })
  test('generateReg(["common","$required"])===/^common\\.\\$requiredb$/ig', () => {
    expect(generateReg(['common', '$required'])).toStrictEqual(
      /^common\.\$required$/gi
    )
  })
})

describe('typeCheck', () => {
  test('typeCheck(1) === "Number"', () => {
    expect(typeCheck(1)).toBe('Number')
  })
  test('typeCheck("1") === "String"', () => {
    expect(typeCheck('1')).toBe('String')
  })
  test('typeCheck(null) === "Null"', () => {
    expect(typeCheck(null)).toBe('Null')
  })
  test('typeCheck(undefined) === "Undefined"', () => {
    expect(typeCheck(undefined)).toBe('Undefined')
  })
  test('typeCheck(false) or typeCheck(true) === "Boolean"', () => {
    expect(typeCheck(false)).toBe('Boolean')
    expect(typeCheck(true)).toBe('Boolean')
  })
  test('typeCheck({}) === "Object"', () => {
    expect(typeCheck({})).toBe('Object')
  })
  test('typeCheck([]) === "Array"', () => {
    expect(typeCheck([])).toBe('Array')
  })
})

describe('isEmpty', () => {
  test('arg is a number、array.length>0、string.length>0、boolean,isEmpty return false', () => {
    expect(isEmpty(0)).toBeFalsy()
    expect(isEmpty([1])).toBeFalsy()
    expect(isEmpty('1')).toBeFalsy()
    expect(isEmpty(false)).toBeFalsy()
  })
  test('arg is null、undefined、[]、""、,isEmpty return true', () => {
    expect(isEmpty(null)).toBeTruthy()
    expect(isEmpty(undefined)).toBeTruthy()
    expect(isEmpty([])).toBeTruthy()
    expect(isEmpty('')).toBeTruthy()
  })
  test('arg is a object,isEmpty return !Object.keys(object).length>0', () => {
    expect(isEmpty({})).toBeTruthy()
    expect(isEmpty({ a: 1 })).toBeFalsy()
  })
})
// TODO 针对typeMap做优化
describe('setDeepProp', () => {
  test('setDeepProp([a],{},1) can set args[1] === {a:1}', () => {
    const data = {}
    setDeepProp(['a'], data, 1)
    expect(data).toStrictEqual({ a: 1 })
  })
  test('setDeepProp([a,b,c],{},1) can set args[1] === {a:{b:{c:1}}}', () => {
    const data = {}
    setDeepProp(['a', 'b', 'c'], data, 1)
    expect(data).toStrictEqual({ a: { b: { c: 1 } } })
  })
  test('setDeepProp([a,b,c],{a:{b:{}}},1) can set args[1] === {a:{b:{c:1}}}', () => {
    const data = { a: { b: {} } }
    setDeepProp(['a', 'b', 'c'], data, 1)
    expect(data).toStrictEqual({
      a: { b: { c: 1 } },
    })
  })
  test('setDeepProp([],{},1)', () => {
    const data = {}
    setDeepProp([], data, 1)
    expect(data).toStrictEqual({})
  })
})
// 针对数组做优化
describe('deleteDeepProp', () => {
  test('deleteDeepProp([],{a:1}) === {a:1}', () => {
    const data = { a: 1 }
    deleteDeepProp([], data)
    expect(data).toStrictEqual({ a: 1 })
  })
  test('deleteDeepProp([a,b],{c:1}) === {c:1}', () => {
    const data = { c: 1 }
    deleteDeepProp(['a', 'b'], data)
    expect(data).toStrictEqual({ c: 1 })
  })
  test('deleteDeepProp([a,b],{a:1}) === {a:1}', () => {
    const data = { a: 1 }
    deleteDeepProp(['a', 'b'], data)
    expect(data).toStrictEqual({ a: 1 })
  })
  test('deleteDeepProp([a,b],{a:{b:1}}) === {a:{}}', () => {
    const data = { a: { b: 1 } }
    deleteDeepProp(['a', 'b'], data)
    expect(data).toStrictEqual({ a: {} })
  })
})

describe('judgeAndRegister', () => {
  test("judgeAndRegister({}, 'object', 'properties', 'item') === {}", () => {
    const data = judgeAndRegister({}, 'object', 'properties', 'item')
    expect(data).toStrictEqual({})
  })

  test("judgeAndRegister({}, 'array', 'order') ===  []", () => {
    const data = judgeAndRegister({}, 'array', 'order')
    expect(data).toStrictEqual([])
  })
})

describe('parseHrefParam', () => {
  test("parseHrefParam('babel.m.jd.com/manage/index?manage_type=myprojects&projectId=2740440')", () => {
    const data = parseHrefParam(
      'www.iconfont.cn/manage/index?manage_type=myprojects&projectId=2740440'
    )
    expect(data).toStrictEqual({
      manage_type: 'myprojects',
      projectId: '2740440',
    })
  })

  test("parseHrefParam('babel.m.jd.com/manage/index?manage_type=myprojects&projectId')", () => {
    const data = parseHrefParam(
      'www.iconfont.cn/manage/index?manage_type=myprojects&projectId'
    )
    expect(data).toStrictEqual({ manage_type: 'myprojects', projectId: true })
  })
})
