const config = require('@nuxt/config')
const cli = require('@nuxt/cli')
const utils = require('@nuxt/utils')

module.exports = {
  ...config,
  ...cli,
  ...utils
}

module.exports.getNuxtConfig = (options) => {
  options = config.getNuxtConfig(options)

  /* if (options.lambda && options.lambda.handler) {

  } */

  options.lambda = Object.assign({}, {
    name: 'nuxt',
    handler: 'connect',
    buildDir: '.lambda',
    distDir: 'dist',
    spa: false,
    static: false,
    webpack: false
  }, options.lambda)

  return options
}
