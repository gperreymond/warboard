import {
  render
} from 'react-dom'

import Application from './Application'

require('pixi.js/dist/pixi.min.js')
window.localStorage.debug = 'warboard-game:*'

render(Application(), document.getElementById('root'))
