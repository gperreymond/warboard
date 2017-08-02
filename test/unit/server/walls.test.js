const chai = require('chai')
const expect = chai.expect
const rp = require('request-promise')

const hapi = require('../../../server/hapi')

describe('[server] route /api/walls', () => {
  before((done) => {
    hapi.start((error) => {
      if (error) {
        return done(error)
      }
      done()
    })
  })
  it('should respond 200', (done) => {
    rp({uri: 'http://localhost:4000/api/walls', json: true}).then((result) => {
      expect(result.tiles).to.be.an('object')
      expect(result.walls).to.be.an('array')
      expect(result.textures).to.be.an('object')
      done()
    }).catch(done)
  })
})
