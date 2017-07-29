const path = require('path')
const Hapi = require('hapi')
const Inert = require('inert')

const config = require('../config/default')
const Routes = require('./routes')

let server = new Hapi.Server({
  debug: false,
  connections: {
    routes: {
      cors: true
    }
  }
})
server.register(Inert, () => {})

server.connection({
  host: config.host,
  port: config.port
})

server.route(Routes.endpoints)

server.route({
  method: 'GET',
  path: '/data/images/{param*}',
  handler: {
    directory: {
      path: path.resolve(__dirname, '../data/images')
    }
  }
})

module.exports = server
