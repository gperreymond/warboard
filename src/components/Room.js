require('pixi.js/dist/pixi.min.js')
window.PIXI.utils.skipHello()

const Sprite = window.PIXI.Sprite
const Container = window.PIXI.Container

const setPositions = (data, context) => {
  context._positions = {x: data.left, y: data.top}
  context._container.x = 270 + context._positions.x * 540
  context._container.y = 270 + context._positions.y * 540
}

const setBackground = (context) => {
  let sprite = new Sprite(context._state.resources[context._tile].texture)
  sprite.width = 540
  sprite.height = 540
  sprite.anchor.set(0.5, 0.5)
  context._container.addChild(sprite)
}

const setWalls = (context) => {
  let sprite = new Sprite(context._state.resources[context._walls].texture)
  sprite.width = 540
  sprite.height = 540
  sprite.anchor.set(0.5, 0.5)
  context._container.addChild(sprite)
}

const setMask = (context) => {
  let mask = new window.PIXI.Graphics()
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

class Room {
  constructor (state, data) {
    this._state = state
    this._tile = data.tile
    this._walls = data.walls
    this._positions = {x: 0, y: 0}
    this._container = new Container()
    this._container.width = 1080
    this._container.height = 1080
    setBackground(this)
    setWalls(this)
    setPositions(data, this)
    setMask(this)
  }
  getContainer () {
    return this._container
  }
  rotate (angle) {
    this._container.rotation = window.PIXI.DEG_TO_RAD * angle
  }
}

export default Room
