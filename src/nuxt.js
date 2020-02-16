import { VueRenderer } from '@nuxt/vue-renderer'
import options from 'nuxt.config.js'

export {
  VueRenderer
}

export function initVueRenderer () {
  const nuxt = {
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
