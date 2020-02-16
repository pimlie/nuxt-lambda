import connect from 'connect'
import { initVueRenderer } from '../nuxt'
import { prepareUrl } from '../utils'
import nuxtMiddleware from '../middleware/nuxt' // => packages/server/src/middleware/nuxt
import errorMiddleware from '../middleware/error' // => packages/server/src/middleware/error
import compressionMiddleware from '../middleware/compression'

const renderer = initVueRenderer()

const app = connect()
if (process.env.LAMBDA_USE_COMPRESSION) {
  app.use(compressionMiddleware(renderer.serverContext))
}
app.use(nuxtMiddleware(renderer.serverContext))
app.use(errorMiddleware(renderer.serverContext))

const optimizedHandler = async (req, res) => {
  req.url = prepareUrl(req.url)

  await renderer.ready()

  return app(req, res)
}

export default optimizedHandler
