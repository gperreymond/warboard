module.exports = {
  auth: false,
  handler (request, reply) {
    return reply({
      tiles: {
        RoomDecorations: 'http://localhost:3000/data/images/5x5-decorations.png'
      },
      textures: {
        RoomDoorHorizontal: 'http://localhost:3000/data/images/door-h.png',
        RoomDoorVertical: 'http://localhost:3000/data/images/door-v.png',
        RoomWallHorizontal: 'http://localhost:3000/data/images/wall-h.png',
        RoomWallVertical: 'http://localhost:3000/data/images/wall-v.png'
      },
      walls: [
        ['1-11|--1-|----|--1-|11--', '----|----|----|-1--|----', '-1--|----|----|----|---1', '-1--|----|----|----|---D', '----|1---|1---|1---|-11-'],
        ['-D--|1---|-1D-|--11|1---', '-1--|---1|---1|-1--|-1--', '---1|---1|--11|----|-1--', '----|----|----|----|----', '----|1-1-|1---|1---|---1'],
        ['-11-|1---|----|----|--11', '----|----|-1-1|----|----', '-D--|1-1-|----|1-1-|---D', '----|----|-1-1|----|----', '11--|----|----|----|1--1'],
        ['---1|1-D-|111-|----|11--', '-1-1|--1-|1-1-|-1--|-1--', '-11-|--1-|----|-1--|----', '---1|--1-|-1--|-1--|-1--', '-11-|1---|-11-|--1-|-1--']
      ]
    })
  }
}
