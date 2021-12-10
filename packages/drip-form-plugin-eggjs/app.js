'use strict'

const dripAjv = require('@jdfed/ajv')

module.exports = (app) => {
  app.dripValidator = dripAjv.registerAjv()
}
