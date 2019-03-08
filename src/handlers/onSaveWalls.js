import Debug from 'debug'

const debug = Debug('warboard-game:actions:onSaveWalls')

const handler = (context, item) => {
  debug('handler')
  let seq = ''
  context.state.squares.map(item => {
    item.walls.bottom === false ? seq += '0' : seq += '1'
    item.walls.left === false ? seq += '0' : seq += '1'
    item.walls.top === false ? seq += '0' : seq += '1'
    item.walls.right === false ? seq += '0;' : seq += '1;'
  })
  debug(seq)
}

export default handler
