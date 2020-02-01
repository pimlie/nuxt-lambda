import sls from 'serverless-http'
import binary from './binaryMimeTypes'
import nuxtHandler from './nuxt'

export const handler = sls(nuxtHandler, {
  requestId: /* requestID */ false,
  binary
})
