import onInitialize from './handlers/onInitialize'
import onInitializeGame from './handlers/onInitializeGame'
import onInitializeRandomBoard from './handlers/onInitializeRandomBoard'
import onInitializeComplete from './handlers/onInitializeComplete'

class Handlers {
}

Handlers.prototype.onInitialize = onInitialize
Handlers.prototype.onInitializeGame = onInitializeGame
Handlers.prototype.onInitializeRandomBoard = onInitializeRandomBoard
Handlers.prototype.onInitializeComplete = onInitializeComplete

export default Handlers
