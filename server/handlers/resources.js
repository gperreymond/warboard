const path = require('path')
const glob = require('glob')
const eraro = require('eraro')({package: 'warboard'})
const Boom = require('boom')

module.exports = {
  auth: false,
  handler (request, reply) {
    glob(path.resolve(__dirname, '../../data/images/tiles/*.*'), {}, (error, files) => {
      if (error) {
        return reply(Boom.badRequest(eraro('400', 'BAD_REQUEST', error)))
      }
      let tiles = {}
      files.map(file => {
        let fname = path.basename(file, path.extname(file))
        tiles[fname] = request.server.info.uri + '/data/images/tiles/' + path.basename(file)
      })
      return reply({
        tiles,
        walls: {
          Walls000: 'http://localhost:3000/data/images/walls-000.png',
          Walls001: 'http://localhost:3000/data/images/walls-001.png',
          Walls002: 'http://localhost:3000/data/images/walls-002.png',
          Walls003: 'http://localhost:3000/data/images/walls-003.png'
        },
        textures: {
          RoomDoorHorizontal: 'http://localhost:3000/data/images/door-h.png',
          RoomDoorVertical: 'http://localhost:3000/data/images/door-v.png',
          RoomWallHorizontal: 'http://localhost:3000/data/images/wall-h.png',
          RoomWallVertical: 'http://localhost:3000/data/images/wall-v.png'
        }
      })
    })
  }
}
