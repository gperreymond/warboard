import Debug from 'debug'

const debug = Debug('warboard-game:actions:onUpdateWall')

const handler = (context, position, item) => {
  debug('handler', position, item.index)
  item.walls[position] = !item.walls[position]
  context.state.squares[item.index] = item
  context.setState({squares: context.state.squares})
}

export default handler
