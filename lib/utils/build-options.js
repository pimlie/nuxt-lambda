const { defaultHandler, isSupportedHandler } = require('./options')

module.exports = {
  handler: {
    type: 'string',
    description: 'Which handler to use, either full, connect or minimal. Default connect',
    default: '',
    prepare (cmd, options, argv) {
      if (!isSupportedHandler(argv.handler)) {
        argv.handler = defaultHandler
      }
    }
  },
  static: {
    type: 'boolean',
    description: 'If true add static middleware for connect/minimal handlers'
  },
  optimize: {
    alias: 'o',
    type: 'boolean',
    description: 'Do not create optimized config',
    default: true
  },
  nuxt: {
    alias: 'n',
    type: 'boolean',
    description: 'Do not build Nuxt.js project',
    default: true
  },
  lambda: {
    alias: 'l',
    type: 'boolean',
    description: 'Do not build Lambda',
    default: true
  },
  zip: {
    alias: 'z',
    type: 'boolean',
    description: 'Do not create a zip for the lambda and all its dependencies',
    default: true
  }
}
