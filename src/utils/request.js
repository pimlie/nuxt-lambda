import url from 'url'
import { createDebugProxy } from './debug'
import { prepareUrl } from './url'

export function createRequest (event, context) {
  const remoteAddress = event.requestContext ? event.requestContext.identity.sourceIp : null
  const method = event.httpMethod
  const headers = requestHeaders(event)
  const body = requestBody(event)

  const req = {
    method,
    remoteAddress,
    url: url.format({
      pathname: prepareUrl(event.path),
      query: event.multiValueQueryStringParameters || event.queryStringParameters
    }),
    headers,
    body,
    getHeader: (name) => {
      return headers[name.toLowerCase()]
    }
  }

  if (process.env.LAMBDA_DEBUG) {
    return createDebugProxy(req, 'req')
  }

  return req
}

export function requestHeaders (event) {
  const headers = {}

  for (const name in event.headers) {
    headers[name.toLowerCase()] = event.headers[name]
  }

  return headers
}

export function requestBody (event) {
  const type = typeof event.body

  if (Buffer.isBuffer(event.body)) {
    return event.body
  } else if (type === 'string') {
    return Buffer.from(event.body, event.isBase64Encoded ? 'base64' : 'utf8')
  } else if (type === 'object') {
    return Buffer.from(JSON.stringify(event.body))
  }

  throw new Error(`Unexpected event.body type: ${typeof event.body}`)
}
