const path = require('path')

module.exports.route = {
  method: 'GET',
  path: '/data/images/{param*}',
  config: {
    cors: true
  },
  handler: {
    directory: {
      path: path.resolve(__dirname, '../../../data/images')
    }
  }
}
