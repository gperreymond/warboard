exports.endpoints = [

  { method: 'GET', path: '/api/alive', config: require('./handlers/alive') },
  { method: 'GET', path: '/api/resources', config: require('./handlers/resources') },
  { method: 'GET', path: '/api/walls', config: require('./handlers/walls') }

]
