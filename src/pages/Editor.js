/* eslint jsx-quotes: ["error", "prefer-double"] */

import React from 'react'
import Reflux from 'reflux'
import Debug from 'debug'

import Store from '../StoreEditor'

const debug = Debug('warboard-game:pages:editor')

class Editor extends Reflux.Component {
  constructor (props) {
    super(props)
    this.store = Store
  }
  componentDidMount () {
    debug('componentDidMount %s', this.props.location.pathname)
    let squares = []
    for (let row = 0; row < 5; row++) {
      for (let col = 0; col < 5; col++) {
        let index = (row + col * 5)
        squares.push({
          row, col, index
        })
      }
    }
    this.setState({squares})
  }
  componentWillUnmount () {
    debug('componentWillUnmount %s', this.props.location.pathname)
    Reflux.Component.prototype.componentWillUnmount.call(this)
  }
  render () {
    if (this.state.squares) {
      return (
        <div>
          {this.state.squares.map(function (val, i) {
            return (
              <div key={i} style={{
                position: 'absolute',
                width: '108px',
                height: '108px',
                left: val.row * 108,
                top: val.col * 108
              }}>
                {val.index}
              </div>
            )
          })}
        </div>
      )
    }
    return (<h2>...</h2>)
  }
}

export default Editor
