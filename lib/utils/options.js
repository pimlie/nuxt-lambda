const consola = require('consola')

const defaultHandler = 'connect'

module.exports.defaultHandler = defaultHandler

module.exports.isSupportedHandler = function isSupportedHandler (handler) {
  if (handler === undefined || handler === '') {
    return true
  }

  const supportedHandlers = [
    'full',
    'connect',
    'minimal'
  ]

  const isSupported = supportedHandlers.includes(handler)

  if (!isSupported) {
    consola.error(`Unsupported handler '${handler}', falling back to '${defaultHandler}'`)
  }

  return isSupported
}
