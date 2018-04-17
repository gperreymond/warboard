require('pixi.js/dist/pixi.min.js')
window.PIXI.utils.skipHello()

const Sprite = window.PIXI.Sprite
const Container = window.PIXI.Container
const Graphics = window.PIXI.Graphics

const setDecorations = (context) => {
  let sprite = new Sprite(context._state.resources['RoomDecorations'].texture)
  sprite.anchor.set(0.5, 0.5)
  context._container.addChild(sprite)
}

const setMask = (context) => {
  let mask = new Graphics()
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

const loadWalls = (walls, context) => {
  let row = -2
  walls.map(value => {
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

class RoomEditor {
  constructor (state) {
    this._state = state
    this._tile = this._state.data.tile
    this._container = new Container()
    this._container.width = 540
    this._container.height = 540
    this._container.x = 270
    this._container.y = 270
    setDecorations(this)
    setMask(this)
  }
  load (walls) {
    loadWalls(walls, this)
  }
  getContainer () {
    return this._container
  }
}

export default RoomEditor
