module.exports = {
  auth: false,
  handler (request, reply) {
    return reply({
      walls: [
        ['1-11|--1-|----|--1-|11--', '----|----|----|-1--|----', '-1--|----|----|----|---1', '-1--|----|----|----|---1', '----|1---|1---|1---|-11-'],
        ['----|1---|-1--|--11|1---', '-1--|---1|---1|-1--|-1--', '---1|---1|--11|----|-1--', '----|----|----|----|----', '----|1-1-|1---|1---|---1'],
        ['-11-|1---|----|----|--11', '----|----|-1-1|----|----', '----|1-1-|----|1-1-|----', '----|----|-1-1|----|----', '11--|----|----|----|1--1']
      ],
      tiles: {
        RoomTileAir: 'http://localhost:3000/data/images/5x5-air.png',
        RoomTileEarth: 'http://localhost:3000/data/images/5x5-earth.png',
        RoomTileFire: 'http://localhost:3000/data/images/5x5-fire.png',
        RoomTileNature: 'http://localhost:3000/data/images/5x5-nature.png',
        RoomTileMagic: 'http://localhost:3000/data/images/5x5-magic.png',
        RoomTileUndead: 'http://localhost:3000/data/images/5x5-undead.png',
        RoomTileTech: 'http://localhost:3000/data/images/5x5-tech.png'
      },
      textures: {
        RoomWallHorizontal: 'http://localhost:3000/data/images/wall-h.png',
        RoomWallVertical: 'http://localhost:3000/data/images/wall-v.png'
      }
    })
  }
}
