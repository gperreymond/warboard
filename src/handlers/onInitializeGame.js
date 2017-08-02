import Debug from 'debug'

import Actions from '../Actions'

const debug = Debug('warboard-game:actions:onInitializeGame')

const PIXI = require('pixi.js/dist/pixi.min.js')
const Container = window.PIXI.Container
const autoDetectRenderer = window.PIXI.autoDetectRenderer
const loader = window.PIXI.loader

const handler = (context) => {
  debug('handler')
  context.state.progress.text = 'Initialisation du plateau de jeu...'
  context.setState({progress: context.state.progress})
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
    // calculate game screen ration
    let ratio = Math.min(window.innerWidth / context.state.options.contentWidth, window.innerHeight / context.state.options.contentHeight)
    debug('screen radio %s', ratio)
    // setup PIXI Canvas in componentDidMount
    let renderer = autoDetectRenderer(context.state.options.contentWidth * ratio, context.state.options.contentHeight * ratio, {antialias: true, transparent: false, resolution: 1})
    // create the root of the scene graph
    let stage = new Container()
    stage.scale.x = ratio
    stage.scale.y = ratio
    debug('game size %s x %s', renderer.width, renderer.height)
    context.setState({renderer, stage, resources})
    Actions.initializeRandomBoard()
  })
}

export default handler
