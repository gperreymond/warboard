/* eslint jsx-quotes: ["error", "prefer-double"] */

import React from 'react'
import Reflux from 'reflux'

import angles from 'angles'
import Debug from 'debug'

import Store from './../Store'
import Actions from './../Actions'

const debug = Debug('warboard-game:boardgame')
angles.SCALE = 2 * Math.PI

class Boardgame extends Reflux.Component {
  constructor (props) {
    super(props)
    this.store = Store
    this.gameLoop = this.gameLoop.bind(this)
  }
  componentDidUpdate () {
    if (this.state.initialized === true && this.state.renderer) {
      debug('componentDidUpdate %s', 'gameCanvas.appendChild')
      this.refs.gameCanvas.appendChild(this.state.renderer.view)
      this.gameLoop()
    }
  }
  componentDidMount () {
    debug('componentDidMount')
    Actions.initialize()
  }
  /**
  * game loop for updating Pixi Canvas
  **/
  gameLoop () {
    // render the stage container
    this.state.renderer.render(this.state.stage)
    this.frame = requestAnimationFrame(this.gameLoop)
  }
  /**
  * render our container that will store our PixiJS game canvas. Store the ref
  **/
  render () {
    if (this.state.initialized === false) {
      return (
        <div>
          <h2>{this.state.progress.text}</h2>
          <h3>Current is {this.state.progress.value}%</h3>
        </div>
      )
    }
    return (
      <div className="game-canvas-container" ref="gameCanvas" />
    )
  }
}

export default Boardgame
