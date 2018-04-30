import Debug from 'debug'

const debug = Debug('warboard-game:actions:onAddSquare')

const handler = (context, item) => {
  debug('handler', item.index)
  context.state.squares[item.index] = item
  context.setState({squares: context.state.squares})
}

export default handler
