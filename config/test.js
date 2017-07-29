const nconf = require('nconf')

nconf.argv().env().file({ file: 'nconf.json' })

module.exports = {
  env: nconf.get('APPLICATION_ENV') || 'development',
  host: nconf.get('APPLICATION_HOST') || 'localhost',
  port: nconf.get('APPLICATION_PORT') || 4000
}
