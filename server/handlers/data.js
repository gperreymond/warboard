module.exports = {
  auth: false,
  handler (request, reply) {
    return reply({
      walls: [
        ['1-11|--1-|----|--1-|11--', '----|----|----|-1--|----', '-1--|----|----|----|---1', '-1--|----|----|----|---D', '----|1---|1---|1---|-11-'],
        ['-D--|1---|-1D-|--11|1---', '-1--|---1|---1|-1--|-1--', '---1|---1|--11|----|-1--', '----|----|----|----|----', '----|1-1-|1---|1---|---1'],
        ['-11-|1---|----|----|--11', '----|----|-1-1|----|----', '-D--|1-1-|----|1-1-|---D', '----|----|-1-1|----|----', '11--|----|----|----|1--1'],
        ['---1|1---|111-|----|11--', '-1-1|--1-|1-1-|-1--|-1--', '-11-|--1-|----|-1--|----', '---1|--1-|-1--|-1--|-1--']
      ],
      tiles: {
        RoomDecorations: 'http://localhost:3000/data/images/5x5-decorations.png',
        RoomTileAir: 'http://localhost:3000/data/images/5x5-air.png',
        RoomTileEarth: 'http://localhost:3000/data/images/5x5-earth.png',
        RoomTileFire: 'http://localhost:3000/data/images/5x5-fire.png',
        RoomTileNature: 'http://localhost:3000/data/images/5x5-nature.png',
        RoomTileMagic: 'http://localhost:3000/data/images/5x5-magic.png',
        RoomTileUndead: 'http://localhost:3000/data/images/5x5-undead.png',
        RoomTileTech: 'http://localhost:3000/data/images/5x5-tech.png',
        Walls001: 'http://localhost:3000/data/images/walls-001.png'
      },
      textures: {
        RoomDoorHorizontal: 'http://localhost:3000/data/images/door-h.png',
        RoomDoorVertical: 'http://localhost:3000/data/images/door-v.png',
        RoomWallHorizontal: 'http://localhost:3000/data/images/wall-h.png',
        RoomWallVertical: 'http://localhost:3000/data/images/wall-v.png'
      }
    })
  }
}
