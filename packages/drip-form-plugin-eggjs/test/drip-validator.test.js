'use strict'

const mock = require('egg-mock')
const assert = require('assert')

describe('test/drip-validator.test.js', () => {
  let app
  before(() => {
    app = mock.app({
      baseDir: 'apps/drip-validator-test',
    })
    return app.ready()
  })

  after(() => app.close())
  afterEach(mock.restore)

  it('should pass', () => {
    return app
      .httpRequest()
      .post('/')
      .send({
        name: 'kapeter',
        age: 100,
      })
      .expect(200)
  })

  it('should return invalid_json_param', () => {
    return app
      .httpRequest()
      .post('/')
      .expect(422)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect((res) => {
        assert(res.body.code === 'invalid_json_param')
        assert(res.body.message === 'Validation Failed')
      })
  })
})
