const path = require('path')
const glob = require('glob-promise')
const { camelCase } = require('lodash')

const handler = async (req) => {
  const files = await glob.sync(path.resolve(__dirname, '../../../data/images/tiles/*.png'))
  let tiles = {}
  files.map(file => {
    let fname = camelCase(path.basename(file, path.extname(file)))
    tiles[fname] = `${req.server.info.uri}/data/images/tiles/${path.basename(file)}`
  })
  return tiles
}

module.exports.route = {
  method: 'GET',
  path: '/api/tiles',
  handler
}
