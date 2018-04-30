import onInitialize from './handlers/onInitialize'
import onInitializeGame from './handlers/onInitializeGame'
import onInitializeRandomBoard from './handlers/onInitializeRandomBoard'
import onInitializeComplete from './handlers/onInitializeComplete'
import onUpdateWall from './handlers/onUpdateWall'
import onAddSquare from './handlers/onAddSquare'
import onSaveWalls from './handlers/onSaveWalls'

class Handlers {
}

Handlers.prototype.onInitialize = onInitialize
Handlers.prototype.onInitializeGame = onInitializeGame
Handlers.prototype.onInitializeRandomBoard = onInitializeRandomBoard
Handlers.prototype.onInitializeComplete = onInitializeComplete
Handlers.prototype.onUpdateWall = onUpdateWall
Handlers.prototype.onAddSquare = onAddSquare
Handlers.prototype.onSaveWalls = onSaveWalls

export default Handlers
