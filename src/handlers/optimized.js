import { VueRenderer } from '@nuxt/vue-renderer'
import options from 'nuxt.config.js'
import nuxtMiddleware from '../middleware/nuxt' // => packages/server/src/middleware/nuxt
import errorMiddleware from '../middleware/error' // => packages/server/src/middleware/error

const nuxt = {
  hook: () => {},
  callHook: () => {}
}

const resources = {}

const serverContext = {
  nuxt,
  globals: options.globals,
  options,
  resources
}

const renderer = new VueRenderer(serverContext)

const optimizedHandler = async (req, res) => {
  if (process.env.NETLIFY) {
    if (req.url.startsWith('/.netlify/functions/nuxt')) {
      req.url = req.url.slice(24)
    }

    req.url = req.url || '/'
  }

  await renderer.ready()

  const renderRoute = (...args) => renderer.renderRoute(...args)
  const next = error => errorMiddleware(serverContext)(error, req, res)

  return nuxtMiddleware({ options, nuxt, resources, renderRoute })(req, res, next)
}

export default optimizedHandler
