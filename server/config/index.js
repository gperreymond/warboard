const nconf = require('nconf')

nconf.argv().env().file({ file: 'nconf.json' })

module.exports = {
  host: nconf.get('APP_HOST') || '0.0.0.0',
  port: nconf.get('APP_PORT') || 4000
}
