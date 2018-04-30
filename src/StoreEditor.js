import Reflux from 'reflux'
import Debug from 'debug'

import Actions from './Actions'
import Handlers from './Handlers'

const debug = Debug('warboard-game:store')

class StoreEditor extends Reflux.Store {
  constructor () {
    super()
    this.state = {
    }
    debug('constructor')
    this.listenables = [Actions]
    this.handlers = new Handlers()
  }
}

export default StoreEditor
