const path = require('path')
const glob = require('glob')
const eraro = require('eraro')({package: 'warboard'})
const Boom = require('boom')
const Promise = require('bluebird')
const camelCase = require('lodash.camelcase')

const getResource = (pattern, uri) => {
  return new Promise((resolve, reject) => {
    glob(path.resolve(__dirname, pattern, '*.*'), {}, (error, files) => {
      if (error) {
        reject(Boom.badRequest(eraro('400', 'BAD_REQUEST', error)))
      } else {
        let resources = {}
        files.map(file => {
          let fname = camelCase(path.basename(file, path.extname(file)))
          resources[fname] = uri + '/' + path.basename(file)
        })
        resolve(resources)
      }
    })
  })
}

module.exports = {
  auth: false,
  handler (request, reply) {
    Promise.props({
      tiles: getResource('../../data/images/tiles', request.server.info.uri + '/data/images/tiles'),
      walls: getResource('../../data/images/walls', request.server.info.uri + '/data/images/walls')
    }).then(result => {
      return reply({
        tiles: result.tiles,
        walls: result.walls
      })
    }).catch(error => {
      return reply(error)
    })
  }
}
