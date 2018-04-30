import Reflux from 'reflux'
import Debug from 'debug'

import Actions from './Actions'
import Handlers from './Handlers'

const debug = Debug('warboard-game:store')

class StoreEditor extends Reflux.Store {
  constructor () {
    super()
    this.state = {
      squares: []
    }
    debug('constructor')
    this.listenables = [Actions]
    this.handlers = new Handlers()
  }
  onAddSquare (item) { this.handlers.onAddSquare(this, item) }
  onUpdateWall (position, item) { this.handlers.onUpdateWall(this, position, item) }
  onSaveWalls () { this.handlers.onSaveWalls(this) }
}

export default StoreEditor
