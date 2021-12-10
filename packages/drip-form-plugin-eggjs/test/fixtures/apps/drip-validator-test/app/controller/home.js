'use strict'

const Controller = require('egg').Controller

class HomeController extends Controller {
  async index() {
    const rules = {
      type: 'object',
      properties: {
        name: {
          type: 'string',
        },
        age: {
          type: 'integer',
        },
      },
      required: ['name', 'age'],
    }
    this.ctx.validateBySchema(rules)
    this.ctx.body = 'ok!'
  }
}

module.exports = HomeController
