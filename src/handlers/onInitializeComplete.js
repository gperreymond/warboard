import Debug from 'debug'

const debug = Debug('warboard-game:actions:onInitializeComplete')

const handler = (context) => {
  debug('handler')
  context.setState({
    initialized: true,
    progress: {
      text: '...',
      value: 0
    }
  })
}

export default handler
