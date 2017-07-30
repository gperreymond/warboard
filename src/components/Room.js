const PIXI = require('pixi.js/dist/pixi.min.js')

const Sprite = PIXI.Sprite
const Container = PIXI.Container

class Room {
  constructor () {
    this._type = null
    this._background = null
    this._positions = {
      x: 0,
      y: 0
    }
    this._textures = {
      walls: null,
      wallh: null,
      wallv: null
    }
    this._container = new Container()
  }
  setPositions (value) {
    this._positions = value
    this._container.x = 108 + 270 + this._positions.x * 540
    this._container.y = 270 + this._positions.y * 540
  }
  setType (value) {
    this._type = value
  }
  setWalls (values = []) {
    console.log(values)
    values.map(value => {
      let squares = value.split('|')
      squares.map(square => {
        // North
        let sprite
        let orientations = square.split('')
        console.log(orientations)
        if (orientations[0] === '1') {
          console.log('... north')
          sprite = new Sprite(this._textures.wallh)
          sprite.anchor.set(0.5, 0.5)
          this._container.addChild(sprite)
        }
        if (orientations[3] === '1') {
          console.log('... west')
          sprite = new Sprite(this._textures.wallv)
          sprite.anchor.set(0.5, 0.5)
          this._container.addChild(sprite)
        }
        return square
      })
      return squares
    })
    let sprite = new Sprite(this._textures.walls)
    sprite.anchor.set(0.5, 0.5)
    this._container.addChild(sprite)
  }
  setBackground (value) {
    this._background = new Sprite(value)
    this._background.anchor.set(0.5, 0.5)
    this._container.addChild(this._background)
  }
  setDecorations (walls, wallh, wallv) {
    this._textures.walls = walls
    this._textures.wallh = wallh
    this._textures.wallv = wallv
  }
  getType () {
    return this._type
  }
  getContainer () {
    return this._container
  }
}

export default Room
