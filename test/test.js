const assert = require('assert')
const sampleResponses = require('./sample-response.json')
const { parseResponse, responseTypes } = require('../dist/index')

describe('Common Tests', function () {
  describe('Success Codes', function () {
    it('should return a success for a basic response', function () {
      const response = parseResponse(sampleResponses.responses.success)
      assert.equal(response.code, 200)
      assert.equal(response.type, responseTypes.SUCCESS)
      assert.equal(response.error, false)
    })
  })
})
