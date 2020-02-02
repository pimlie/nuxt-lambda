import sls from 'serverless-http'
import nuxtHandler from 'nuxt-handler'
import binary from './binaryMimeTypes'

export const handler = sls(nuxtHandler, {
  requestId: /* requestID */ false,
  binary
})
