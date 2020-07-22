import { VueRenderer } from '@nuxt/vue-renderer'
import options from 'nuxt.config.js'
import { fixConfig } from './utils'

export function initVueRenderer () {
  fixConfig(options)

  const nuxt = {
    options,
    hook: () => {},
    callHook: () => {}
  }

  const resources = {}

  const serverContext = {
    nuxt,
    globals: options.globals,
    options,
    resources,
    renderRoute: undefined
  }

  const renderer = new VueRenderer(serverContext)
  serverContext.renderRoute = (...args) => renderer.renderRoute(...args)

  return renderer
}
