import compression from 'compression'

export default ({ options, nuxt }) => function compressionMiddleware (req, res, next) {
  const { compressor } = options.render

  // Compression middleware for production
  if (options.dev || !compressor) {
    return
  }

  if (typeof compressor === 'object') {
    // If only setting for `compression` are provided, require the module and insert
    compression(compressor)(req, res, next)
  } else if (compressor) {
    // Else, require own compression middleware if compressor is actually truthy
    compressor(req, res, next)
  }
}
