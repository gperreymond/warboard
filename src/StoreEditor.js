import Reflux from 'reflux'
import Debug from 'debug'

import Actions from './Actions'
import Handlers from './Handlers'

const debug = Debug('warboard-game:store')

class StoreEditor extends Reflux.Store {
  constructor () {
    super()
    this.state = {
      initialized: false,
      progress: {
        text: '...',
        value: 0
      },
      options: {
        contentWidth: 540,
        contentHeight: 540
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
  onInitializeEditor (id) { this.handlers.onInitializeEditor(id, this) }
}

export default StoreEditor
