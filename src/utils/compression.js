import zlib from 'zlib'
import { debug } from './debug'

// This method is based on https://github.com/expressjs/compression/blob/master/index.js
// but without streaming stuff

const cacheControlNoTransformRegExp = /(?:^|,)\s*?no-transform\s*?(?:,|$)/

export default () => async function compressionMiddleware (req, res, body) {
  const cacheControl = req.getHeader('Cache-Control')
  if (cacheControl && cacheControlNoTransformRegExp.test(cacheControl)) {
    debug('Not compressing, cache-control', cacheControl)
    return
  }

  res.setHeader('Vary', 'Accept-Encoding')

  if (req.method === 'HEAD') {
    debug('Not compressing, method', req.method)
    return
  }

  const currentEncoding = req.getHeader('Content-Encoding') || 'identity'
  if (currentEncoding !== 'identity') {
    debug('Not compressing, encoding', currentEncoding)
    return
  }

  let encodings = req.getHeader('Accept-Encoding')
  if (encodings) {
    encodings = encodings.split(',').map(s => s.trim()).filter(Boolean)
  } else {
    encodings = []
  }

  let method = ''
  if (encodings.includes('gzip')) {
    method = 'gzip'
  } else if (encodings.includes('deflate')) {
    method = 'deflate'
  }

  if (method) {
    try {
      const compressedBody = await new Promise((resolve, reject) => {
        zlib[method](body, (err, result) => {
          if (err) {
            reject(err)
          }

          resolve(result)
        })
      })

      res.setHeader('Content-Encoding', method)
      res.removeHeader('Content-Length')

      return Buffer.from(compressedBody).toString('base64')
    } catch (err) {
      debug('Not compressing, error', err)
      // TODO: log
    }
  } else {
    debug('Not compressing, no encoding')
  }
}
