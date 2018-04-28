const path = require('path')
const glob = require('glob-promise')
const { camelCase } = require('lodash')

const handler = async (req) => {
  const files = await glob.sync(path.resolve(__dirname, '../../../data/images/walls/*.png'))
  let walls = {}
  files.map(file => {
    let fname = camelCase(path.basename(file, path.extname(file)))
    walls[fname] = `${req.server.info.uri}/data/images/walls/${path.basename(file)}`
  })
  return walls
}

module.exports.route = {
  method: 'GET',
  path: '/api/walls',
  handler
}
