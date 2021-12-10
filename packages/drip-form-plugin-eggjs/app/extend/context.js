'use strict'

module.exports = {
  /**
   * 通过JSON Schema校验数据
   *
   * @param  {Object} jsonSchema  - JSON Schema
   * @param  {Object} [data] - 可选, 校验对象，默认是`this.request.body`
   */
  validateBySchema(jsonSchema, data) {
    // 校验JSON Schema合法性
    const schemaValid = this.app.dripValidator.validateSchema(jsonSchema)
    if (!schemaValid) {
      this.throw(500, 'Invalid JSON Schema', {
        code: 'invalid_json_schema',
        errors: this.app.dripValidator.errors,
      })
    }
    // 校验数据合法性
    data = data || this.request.body
    const dataValid = this.app.dripValidator.validate(jsonSchema, data)
    if (!dataValid) {
      this.throw(422, 'Validation Failed', {
        code: 'invalid_json_param',
        errors: this.app.dripValidator.errors,
      })
    }
  },
}
