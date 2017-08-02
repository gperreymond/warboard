import Reflux from 'reflux'

const Actions = Reflux.createActions([
  // game
  'initialize',
  'initializeGame',
  'initializeRandomBoard',
  'initializeComplete',
  // editor
  'initializeEditor'
])

export default Actions
