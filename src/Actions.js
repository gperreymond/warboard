import Reflux from 'reflux'

const Actions = Reflux.createActions([
  'initialize',
  'initializeGame',
  'initializeRandomBoard',
  'initializeComplete',
  'updateWall',
  'addSquare',
  'saveWalls'
])

export default Actions
