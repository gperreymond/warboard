import {
  render
} from 'react-dom'

import Application from './Application'

window.localStorage.debug = 'warboard-game:*'

render(Application(), document.getElementById('root'))
