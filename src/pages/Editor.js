/* eslint jsx-quotes: ["error", "prefer-double"] */

import React from 'react'
import Reflux from 'reflux'
import Debug from 'debug'

import Actions from './../Actions'
import Store from '../StoreEditor'

const debug = Debug('warboard-game:pages:editor')

class Editor extends Reflux.Component {
  constructor (props) {
    super(props)
    this.store = Store
  }
  componentDidMount () {
    debug('componentDidMount %s', this.props.location.pathname)
    for (let row = 0; row < 5; row++) {
      for (let col = 0; col < 5; col++) {
        let index = (row + col * 5)
        const square = {
          row,
          col,
          index,
          walls: {
            bottom: false,
            left: false,
            top: false,
            right: false
          }
        }
        Actions.addSquare(square)
      }
    }
  }
  componentWillUnmount () {
    debug('componentWillUnmount %s', this.props.location.pathname)
    Reflux.Component.prototype.componentWillUnmount.call(this)
  }
  render () {
    if (this.state.squares) {
      return (
        <div>
          <button onClick={(e) => { Actions.saveWalls() }} type="button" style={{
            position: 'absolute',
            top: 'calc(5*108px + 20px)',
            cursor: 'pointer'
          }}>save</button>
          <div>
            {this.state.squares.map(function (item, i) {
              return (
                <div key={i} style={{
                  position: 'absolute',
                  width: '108px',
                  height: '108px',
                  left: item.row * 108,
                  top: item.col * 108
                }}>
                  <div onClick={(e) => { Actions.updateWall('bottom', item) }} style={{
                    position: 'absolute',
                    left: '10px',
                    top: 'calc(100% - 10px)',
                    width: 'calc(100% - 20px)',
                    height: '10px',
                    cursor: 'pointer',
                    backgroundColor: (item.walls.bottom === false ? '#890000' : '#008900')
                  }} />
                  <div onClick={(e) => { Actions.updateWall('left', item) }} style={{
                    position: 'absolute',
                    left: 0,
                    top: '10px',
                    width: '10px',
                    height: 'calc(100% - 20px)',
                    cursor: 'pointer',
                    backgroundColor: (item.walls.left === false ? '#890000' : '#008900')
                  }} />
                  <div onClick={(e) => { Actions.updateWall('top', item) }} style={{
                    position: 'absolute',
                    left: '10px',
                    top: 0,
                    width: 'calc(100% - 20px)',
                    height: '10px',
                    cursor: 'pointer',
                    backgroundColor: (item.walls.top === false ? '#890000' : '#008900')
                  }} />
                  <div onClick={(e) => { Actions.updateWall('right', item) }} style={{
                    position: 'absolute',
                    left: 'calc(100% - 10px)',
                    top: '10px',
                    width: '10px',
                    height: 'calc(100% - 20px)',
                    cursor: 'pointer',
                    backgroundColor: (item.walls.right === false ? '#890000' : '#008900')
                  }} />
                </div>
              )
            })}
          </div>
        </div>
      )
    }
    return (<h2>...</h2>)
  }
}

export default Editor
