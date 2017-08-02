import Reflux from 'reflux'
import Debug from 'debug'

import Actions from './Actions'
import Handlers from './Handlers'

const debug = Debug('warboard-game:store')

class Store extends Reflux.Store {
  constructor () {
    super()
    this.state = {
      initialized: false,
      progress: {
        text: '...',
        value: 0
      },
      options: {
        contentWidth: 2160,
        contentHeight: 1080
      },
      data: null,
      renderer: null,
      stage: null,
      ressources: null
    }
    debug('constructor')
    this.listenables = [Actions]
    this.handlers = new Handlers()
  }
  onInitialize () { this.handlers.onInitialize(this) }
  onInitializeGame () { this.handlers.onInitializeGame(this) }
  onInitializeRandomBoard () { this.handlers.onInitializeRandomBoard(this) }
  onInitializeComplete () { this.handlers.onInitializeComplete(this) }
}

export default Store
