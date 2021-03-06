import { shuffle } from 'lodash'
import Debug from 'debug'

import Actions from '../Actions'
import Room from '../components/Room'

const debug = Debug('warboard-game:actions:onInitializeRandomBoard')

const handler = (context) => {
  debug('handler')
  // 1 ... random walls
  let randomWalls = Object.keys(context.state.data.walls)
  let walls = []
  for (let i = 0; i < 8; i++) {
    let randomWall = shuffle(randomWalls)[0]
    walls.push(randomWall)
  }
  // 2... random tiles
  let randomTiles = shuffle(Object.keys(context.state.data.tiles))
  let tiles = []
  for (let i = 0; i < 4; i++) {
    tiles.push(randomTiles[i])
    tiles.push(randomTiles[i])
  }
  tiles = shuffle(tiles)
  // 3 ... random rooms
  let rooms = [
    {tile: tiles.shift(), top: 0, left: 0, walls: walls.shift()},
    {tile: tiles.shift(), top: 0, left: 1, walls: walls.shift()},
    {tile: tiles.shift(), top: 0, left: 2, walls: walls.shift()},
    {tile: tiles.shift(), top: 0, left: 3, walls: walls.shift()},
    {tile: tiles.shift(), top: 1, left: 0, walls: walls.shift()},
    {tile: tiles.shift(), top: 1, left: 1, walls: walls.shift()},
    {tile: tiles.shift(), top: 1, left: 2, walls: walls.shift()},
    {tile: tiles.shift(), top: 1, left: 3, walls: walls.shift()}
  ]
  rooms.map((data) => {
    let room = new Room(context.state, data)
    return context.state.stage.addChild(room.getContainer())
  })
  Actions.initializeComplete()
}

export default handler
