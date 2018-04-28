const handler = async (req) => {
  return {
    tiles: req.pre.tiles,
    walls: req.pre.walls
  }
}

const preWalls = async (req) => {
  const res = await req.server.inject('/api/walls')
  return res.result
}

const preTiles = async (req) => {
  const res = await req.server.inject('/api/tiles')
  return res.result
}

module.exports.route = {
  method: 'GET',
  path: '/api/resources',
  config: {
    pre: [[
      { method: preWalls, assign: 'walls' },
      { method: preTiles, assign: 'tiles' }
    ]]
  },
  handler
}
