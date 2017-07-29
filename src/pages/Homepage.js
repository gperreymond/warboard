/* eslint jsx-quotes: ["error", "prefer-double"] */

import React from 'react'
import Reflux from 'reflux'
import Debug from 'debug'

import Boardgame from '../components/Boardgame'

const debug = Debug('warboard-game:pages')

class Homepage extends Reflux.Component {
  constructor (props) {
    super(props)
    this.state = {
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
      <Boardgame contentWidth={800} contentHeight={600} />
    )
  }
}

export default Homepage
