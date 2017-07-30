/* eslint jsx-quotes: ["error", "prefer-double"] */

import PropTypes from 'prop-types'
import React, { Component } from 'react'
import angles from 'angles'
import shuffle from 'lodash.shuffle'
import Debug from 'debug'

import Room from './Room'

const PIXI = require('pixi.js/dist/pixi.min.js')
const Container = PIXI.Container
const autoDetectRenderer = PIXI.autoDetectRenderer
const loader = PIXI.loader
const resources = PIXI.loader.resources
const Graphics = PIXI.Graphics

const debug = Debug('warboard-game:pixi')
angles.SCALE = 2 * Math.PI

class Boardgame extends Component {
  constructor (props) {
    super(props)
    this.state = {
      initialized: false
    }
    // random tiles
    let randomTiles = shuffle(['RoomTileAir', 'RoomTileEarth', 'RoomTileFire', 'RoomTileNature', 'RoomTileMagic', 'RoomTileUndead', 'RoomTileTech'])
    let tiles = []
    for (var i = 0; i < 4; i++) {
      tiles.push(randomTiles[i])
      tiles.push(randomTiles[i])
    }
    tiles = shuffle(tiles)
    this.game = {
      rooms: [
        {tile: tiles.shift(),
          top: 0,
          left: 0,
          walls: [
            '1011|0010'
          ]
        },
        {tile: tiles.shift(), top: 0, left: 1},
        {tile: tiles.shift(), top: 0, left: 2},
        {tile: tiles.shift(), top: 0, left: 3},
        {tile: tiles.shift(), top: 1, left: 0},
        {tile: tiles.shift(), top: 1, left: 1},
        {tile: tiles.shift(), top: 1, left: 2},
        {tile: tiles.shift(), top: 1, left: 3}
      ]
    }
    // bind functions
    this.gameLoop = this.gameLoop.bind(this)
    this.loadProgressHandler = this.loadProgressHandler.bind(this)
  }
  componentDidUpdate () {
    if (this.state.initialized === true) {
      // start the game
      this.refs.gameCanvas.appendChild(this.renderer.view) // this is the canvas
      this.gameLoop()
    }
  }
  /**
  * in this case, componentDidMount is used to grab the canvas container ref, and
  * and hook up the PixiJS renderer
  **/
  componentDidMount () {
    debug('componentDidMount')
    let ratio = Math.min(window.innerWidth / this.props.contentWidth, window.innerHeight / this.props.contentHeight)
    debug('radio %s', ratio)
    loader.on('progress', this.loadProgressHandler)
    loader
      .add('RoomWallHorizontal', 'http://localhost:3000/data/images/wall-h.png')
      .add('RoomWallVertical', 'http://localhost:3000/data/images/wall-v.png')
      .add('RoomTileDecorations', 'http://localhost:3000/data/images/5x5-decorations.png')
      .add('RoomTileAir', 'http://localhost:3000/data/images/5x5-air.png')
      .add('RoomTileEarth', 'http://localhost:3000/data/images/5x5-earth.png')
      .add('RoomTileFire', 'http://localhost:3000/data/images/5x5-fire.png')
      .add('RoomTileNature', 'http://localhost:3000/data/images/5x5-nature.png')
      .add('RoomTileMagic', 'http://localhost:3000/data/images/5x5-magic.png')
      .add('RoomTileUndead', 'http://localhost:3000/data/images/5x5-undead.png')
      .add('RoomTileTech', 'http://localhost:3000/data/images/5x5-tech.png')
      .load(() => {
        // setup PIXI Canvas in componentDidMount
        this.renderer = autoDetectRenderer(this.props.contentWidth * ratio, this.props.contentHeight * ratio, {antialias: true, transparent: false, resolution: 1})
        // create the root of the scene graph
        this.stage = new Container()
        // this.stage.width = this.props.contentWidth * ratio
        // this.stage.height = this.props.contentHeight * ratio
        this.stage.scale.x = ratio
        this.stage.scale.y = ratio
        debug('render: %s x %s', this.renderer.width, this.renderer.height)
        let border = new Graphics()
        let borderPadding = 6
        // game border
        border.lineStyle(borderPadding * 2, 0x1b1917, 1)
        border.moveTo(borderPadding, borderPadding)
        border.lineTo(this.props.contentWidth - borderPadding, borderPadding)
        border.lineTo(this.props.contentWidth - borderPadding, this.props.contentHeight - borderPadding)
        border.lineTo(borderPadding, this.props.contentHeight - borderPadding)
        border.lineTo(borderPadding, borderPadding)
        border.endFill()
        this.stage.addChild(border)
        // rooms
        this.game.rooms.map((data) => {
          let room = new Room()
          room.setType(data.tile)
          room.setPositions({x: data.left, y: data.top})
          room.setBackground(resources[data.tile].texture)
          room.setDecorations(resources['RoomTileDecorations'].texture, resources['RoomWallHorizontal'].texture, resources['RoomWallVertical'].texture)
          room.setWalls(data.walls)
          return this.stage.addChild(room.getContainer())
        })
        this.setState({initialized: true})
      })
  }
  /**
  * loading progress of the assets
  */
  loadProgressHandler (loader, resource) {
    debug('loadProgressHandler %s%', loader.progress)
  }
  /**
  * game loop for updating Pixi Canvas
  **/
  gameLoop () {
    // render the stage container
    this.renderer.render(this.stage)
    this.frame = requestAnimationFrame(this.gameLoop)
  }
  /**
  * render our container that will store our PixiJS game canvas. Store the ref
  **/
  render () {
    if (this.state.initialized === false) {
      return (
        <h2>Load in progress</h2>
      )
    }
    return (
      <div className="game-canvas-container" ref="gameCanvas" />
    )
  }
}

Boardgame.propTypes = {
  contentWidth: PropTypes.number.isRequired,
  contentHeight: PropTypes.number.isRequired
}

export default Boardgame
