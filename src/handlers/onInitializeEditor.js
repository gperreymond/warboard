import request from 'request'
import Debug from 'debug'

const debug = Debug('warboard-game:actions:onInitializeEditor')

const PIXI = require('pixi.js/dist/pixi.min.js')
const Container = window.PIXI.Container
const autoDetectRenderer = window.PIXI.autoDetectRenderer
const loader = window.PIXI.loader

const handler = (context) => {
  debug('handler')
  context.state.progress.text = 'Chargement des data...'
  context.setState({progress: context.state.progress})
  request({
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    json: true,
    uri: window.location.origin + '/api/data'
  }, (error, response, body) => {
    if (error) {
      debug('ERROR %o', error)
    }
    if (response.statusCode === 200) {
      debug('data loaded %o', body)
      context.state.data = body
      // prepare game data loader
      Object.keys(context.state.data.textures).map(key => {
        loader.add(key, context.state.data.textures[key])
        return key
      })
      Object.keys(context.state.data.tiles).map(key => {
        loader.add(key, context.state.data.tiles[key])
        return key
      })
      // execute game data loader
      loader.on('progress', (loader, resource) => {
        debug('load in progress %s', resource.name)
        context.state.progress.value = Math.round(loader.progress)
        context.setState({progress: context.state.progress})
      })
      loader.load((loader, resources) => {
        debug('load is complete')
        let renderer = autoDetectRenderer(540, 540, {antialias: true, transparent: false, resolution: 1})
        renderer.backgroundColor = 0xffcc00
        let stage = new Container()
        context.state.resources = resources
        context.state.renderer = renderer
        context.state.stage = stage
        debug('game size %s x %s', renderer.width, renderer.height)
        context.state.initialized = true
        context.setState(context.state)
      })
    }
  })
}

export default handler