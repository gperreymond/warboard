/* eslint jsx-quotes: ["error", "prefer-double"] */

import React from 'react'
import Reflux from 'reflux'
import Debug from 'debug'

const debug = Debug('warboard-game:pages')

class Homepage extends Reflux.Component {
  constructor (props) {
    super(props)
    this.state = {
      game: false
    }
  }
  componentDidMount () {
    debug('componentDidMount %s', this.props.location.pathname)
  }
  componentWillUnmount () {
    debug('componentWillUnmount %s', this.props.location.pathname)
    Reflux.Component.prototype.componentWillUnmount.call(this)
  }
  render () {
    debug('render %s', this.props.location.pathname)
    return (
      <div id="game" />
    )
  }
}

export default Homepage
