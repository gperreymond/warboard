const PIXI = require('pixi.js/dist/pixi.min.js')

const Sprite = window.PIXI.Sprite
const Container = window.PIXI.Container

const setPositions = (data, context) => {
  context._positions = {x: data.left, y: data.top}
  context._container.x = 270 + context._positions.x * 540
  context._container.y = 270 + context._positions.y * 540
}

const setBackground = (context) => {
  let background = new Sprite(context._state.resources[context._tile].texture)
  background.anchor.set(0.5, 0.5)
  context._container.addChild(background)
  let decorations = new Sprite(context._state.resources['RoomDecorations'].texture)
  decorations.anchor.set(0.5, 0.5)
  context._container.addChild(decorations)
}

const setMask = (context) => {
  let mask = new PIXI.Graphics()
  mask.beginFill()
  mask.moveTo(-270, -270)
  mask.lineTo(270, -270)
  mask.lineTo(270, 270)
  mask.lineTo(-270, 270)
  mask.lineTo(-270, -270)
  mask.endFill()
  context._container.mask = mask
  context._container.addChild(mask)
}

const setWalls = (data, context) => {
  let row = -2
  data.walls.map(value => {
    let col = -2
    let squares = value.split('|')
    squares.map(square => {
      let sprite
      let orientations = square.split('')
      // doors
      if (orientations[0] === 'D') {
        sprite = new Sprite(context._state.resources['RoomDoorHorizontal'].texture)
        sprite.x = 108 * col
        sprite.y = 108 * row - 108 * 0.5
        sprite.anchor.set(0.5, 0.5)
        context._container.addChild(sprite)
      }
      if (orientations[1] === 'D') {
        sprite = new Sprite(context._state.resources['RoomDoorVertical'].texture)
        sprite.x = 108 * col + 108 * 0.5
        sprite.y = 108 * row
        sprite.anchor.set(0.5, 0.5)
        context._container.addChild(sprite)
      }
      if (orientations[2] === 'D') {
        sprite = new Sprite(context._state.resources['RoomDoorHorizontal'].texture)
        sprite.x = 108 * col
        sprite.y = 108 * row + 108 * 0.5
        sprite.anchor.set(0.5, 0.5)
        context._container.addChild(sprite)
      }
      if (orientations[3] === 'D') {
        sprite = new Sprite(context._state.resources['RoomDoorVertical'].texture)
        sprite.x = 108 * col - 108 * 0.5
        sprite.y = 108 * row
        sprite.anchor.set(0.5, 0.5)
        context._container.addChild(sprite)
      }
      // walls
      if (orientations[0] === '1') {
        sprite = new Sprite(context._state.resources['RoomWallHorizontal'].texture)
        sprite.x = 108 * col
        sprite.y = 108 * row - 108 * 0.5
        sprite.anchor.set(0.5, 0.5)
        context._container.addChild(sprite)
      }
      if (orientations[1] === '1') {
        sprite = new Sprite(context._state.resources['RoomWallVertical'].texture)
        sprite.x = 108 * col + 108 * 0.5
        sprite.y = 108 * row
        sprite.anchor.set(0.5, 0.5)
        context._container.addChild(sprite)
      }
      if (orientations[2] === '1') {
        sprite = new Sprite(context._state.resources['RoomWallHorizontal'].texture)
        sprite.x = 108 * col
        sprite.y = 108 * row + 108 * 0.5
        sprite.anchor.set(0.5, 0.5)
        context._container.addChild(sprite)
      }
      if (orientations[3] === '1') {
        sprite = new Sprite(context._state.resources['RoomWallVertical'].texture)
        sprite.x = 108 * col - 108 * 0.5
        sprite.y = 108 * row
        sprite.anchor.set(0.5, 0.5)
        context._container.addChild(sprite)
      }
      col += 1
      return square
    })
    row += 1
    return squares
  })
}

class Room {
  constructor (state, data) {
    this._state = state
    this._tile = data.tile
    this._positions = {x: 0, y: 0}
    this._container = new Container()
    this._container.width = 1080
    this._container.height = 1080
    setBackground(this)
    setPositions(data, this)
    setMask(this)
    setWalls(data, this)
  }
  getContainer () {
    return this._container
  }
  rotate (angle) {
    this._container.rotation = window.PIXI.DEG_TO_RAD * angle
  }
}

export default Room
