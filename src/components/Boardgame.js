/* eslint jsx-quotes: ["error", "prefer-double"] */

import PropTypes from 'prop-types'
import React, { Component } from 'react'
import angles from 'angles'
import Debug from 'debug'

const PIXI = require('pixi.js/dist/pixi.min.js')
// aliases
const Container = PIXI.Container
const autoDetectRenderer = PIXI.autoDetectRenderer
const loader = PIXI.loader
const resources = PIXI.loader.resources
const Sprite = PIXI.Sprite

const debug = Debug('warboard-game:pixi')
angles.SCALE = 2 * Math.PI

class Boardgame extends Component {
  constructor (props) {
    super(props)
    this.game = {
      characters: {}
    }
    // bind functions
    this.gameLoop = this.gameLoop.bind(this)
    this.loadProgressHandler = this.loadProgressHandler.bind(this)
  }
  /**
  * in this case, componentDidMount is used to grab the canvas container ref, and
  * and hook up the PixiJS renderer
  **/
  componentDidMount () {
    debug('componentDidMount')
    loader.on('progress', this.loadProgressHandler)
    loader
      .add('DwarfCleric', 'http://localhost:3000/data/images/character_dwarf_cleric.png')
      .add('HumanWarrior', 'http://localhost:3000/data/images/Character_human_warrior.png')
      .load(() => {
        // setup PIXI Canvas in componentDidMount
        this.renderer = autoDetectRenderer(this.props.contentWidth, this.props.contentHeight, {antialias: true, transparent: false, resolution: 1})
        this.renderer.backgroundColor = 0xffcc00
        this.renderer.view.style.position = 'absolute'
        this.renderer.view.style.display = 'block'
        // place the view in the DOM
        this.refs.gameCanvas.appendChild(this.renderer.view)
        // create the root of the scene graph
        this.stage = new Container()
        this.stage.width = this.props.contentWidth
        this.stage.height = this.props.contentHeight
        // dwarfCleric
        this.game.characters.dwarfCleric = new Sprite(resources.DwarfCleric.texture)
        this.game.characters.dwarfCleric.x = 200
        this.game.characters.dwarfCleric.y = 200
        this.game.characters.dwarfCleric.scale.set(0.5, 0.5)
        this.game.characters.dwarfCleric.anchor.set(0.5, 0.5)
        this.game.characters.dwarfCleric.rotation = 0
        this.stage.addChild(this.game.characters.dwarfCleric)
        // start the game loop
        this.gameLoop()
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
    /*
    this.game.characters.dwarfCleric.rotation += 0.05
    this.game.characters.dwarfCleric.rotation = angles.normalize(this.game.characters.dwarfCleric.rotation)
    */
    // render the stage container
    this.renderer.render(this.stage)
    this.frame = requestAnimationFrame(this.gameLoop)
  }
  /**
  * render our container that will store our PixiJS game canvas. Store the ref
  **/
  render () {
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
