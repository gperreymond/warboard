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
    this._container.x = 270 + this._positions.x * 540
    this._container.y = 270 + this._positions.y * 540
  }
  setType (value) {
    this._type = value
  }
  setWalls (values = []) {
    let row = -2
    values.map(value => {
      let col = -2
      let squares = value.split('|')
      squares.map(square => {
        let sprite
        let orientations = square.split('')
        if (orientations[0] === '1') {
          sprite = new Sprite(this._textures.wallh)
          sprite.x = 108 * col
          sprite.y = 108 * row - 108 * 0.5
          sprite.anchor.set(0.5, 0.5)
          this._container.addChild(sprite)
        }
        if (orientations[1] === '1') {
          sprite = new Sprite(this._textures.wallv)
          sprite.x = 108 * col + 108 * 0.5
          sprite.y = 108 * row
          sprite.anchor.set(0.5, 0.5)
          this._container.addChild(sprite)
        }
        if (orientations[2] === '1') {
          sprite = new Sprite(this._textures.wallh)
          sprite.x = 108 * col
          sprite.y = 108 * row + 108 * 0.5
          sprite.anchor.set(0.5, 0.5)
          this._container.addChild(sprite)
        }
        if (orientations[3] === '1') {
          sprite = new Sprite(this._textures.wallv)
          sprite.x = 108 * col - 108 * 0.5
          sprite.y = 108 * row
          sprite.anchor.set(0.5, 0.5)
          this._container.addChild(sprite)
        }
        col += 1
        return square
      })
      row += 1
      return squares
    })
  }
  setBackground (value) {
    this._background = new Sprite(value)
    this._background.anchor.set(0.5, 0.5)
    this._container.addChild(this._background)
  }
  setDecorations (wallh, wallv) {
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
