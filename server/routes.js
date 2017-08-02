exports.endpoints = [

  { method: 'GET', path: '/api/alive', config: require('./handlers/alive') },
  { method: 'GET', path: '/api/data', config: require('./handlers/data') }

]
