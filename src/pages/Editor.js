/* eslint jsx-quotes: ["error", "prefer-double"] */

import React from 'react'
import Reflux from 'reflux'
import Debug from 'debug'

import Store from '../StoreEditor'
import Actions from '../Actions'

const debug = Debug('warboard-game:pages:editor')

class Editor extends Reflux.Component {
  constructor (props) {
    super(props)
    this.store = Store
    this.gameLoop = this.gameLoop.bind(this)
  }
  componentDidMount () {
    debug('componentDidMount %s', this.props.location.pathname)
    Actions.initializeEditor()
  }
  componentDidUpdate () {
    if (this.state.initialized === true && this.state.renderer) {
      debug('componentDidUpdate %s', 'editorCanvas.appendChild')
      this.refs.editorCanvas.appendChild(this.state.renderer.view)
      this.gameLoop()
    }
  }
  componentWillUnmount () {
    debug('componentWillUnmount %s', this.props.location.pathname)
    Reflux.Component.prototype.componentWillUnmount.call(this)
  }
  gameLoop () {
    this.state.renderer.render(this.state.stage)
    this.frame = requestAnimationFrame(this.gameLoop)
  }
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
      <div className="editor-canvas-container" ref="editorCanvas" />
    )
  }
}

export default Editor
