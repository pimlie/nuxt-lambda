import { initVueRenderer } from '../nuxt'
import nuxtMiddleware from '../middleware/nuxt' // => packages/server/src/middleware/nuxt
import errorMiddleware from '../middleware/error' // => packages/server/src/middleware/error

import { createRequest, createResponse, compressionMiddleware } from '../utils'

const renderer = initVueRenderer()

const minimalHandler = async (event, context) => {
  const req = createRequest(event, context)
  const res = createResponse(event, context)

  const next = err => errorMiddleware(renderer.serverContext)(err || {}, req, res)

  await renderer.ready()

  const body = await Promise.race([
    nuxtMiddleware(renderer.serverContext)(req, res, next),
    res.ready()
  ])

  if (process.env.LAMBDA_USE_COMPRESSION && body) {
    const compressedBody = await compressionMiddleware(renderer.serverContext)(req, res, body)
    if (compressedBody) {
      return res.format(compressedBody, true)
    }
  }

  return res.format(body)
}

export default minimalHandler
