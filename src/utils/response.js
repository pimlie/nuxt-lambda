import { createDebugProxy } from './debug'

export function createResponse (event, context) {
  let statusCode = 200
  const headers = {}

  let resolveReady

  const res = {
    // used by compression middleware
    _implicitHeader: _ => _,
    setHeader: (name, value) => {
      headers[name.toLowerCase()] = value
    },
    getHeader: (name) => {
      return headers[name.toLowerCase()]
    },
    removeHeader: (name) => {
      delete headers[name.toLowerCase()]
    },
    writeHead: (_statusCode, reason, obj) => {
      statusCode = _statusCode

      const _headers = typeof reason === 'string'
        ? obj
        : reason

      for (const name in _headers) {
        res.setHeader(name, _headers[name])
      }
    },
    ready: () => {
      return new Promise((resolve) => {
        resolveReady = resolve
      })
    },
    end: (html, encoding) => {
      if (resolveReady) {
        resolveReady(html || '')
      }
    },
    format: (body, isBase64Encoded = false) => ({
      statusCode,
      headers,
      isBase64Encoded,
      body
    })
  }

  if (process.env.LAMBDA_DEBUG) {
    return createDebugProxy(res, 'res')
  }

  return res
}
