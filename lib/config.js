const path = require('path')
const fs = require('fs-extra')
const consola = require('consola')
const { getNuxtConfig } = require('@nuxt/config')
const { loadNuxtConfig } = require('@nuxt/cli')
const { determineGlobals } = require('@nuxt/utils')

async function run (cmd) {
  const userConfig = await loadNuxtConfig(cmd.argv)
  const normalizedConfig = getNuxtConfig(userConfig)

  const {
    rootDir,
    buildDir,
    env,
    head,
    globalName,
    globals,
    messages,
    mode,
    modern,
    modules,
    // TODO: shouldPrefetch/Preload are functions. Do we need them?
    render,
    router
  } = normalizedConfig

  normalizedConfig.lambda = Object.assign({}, normalizedConfig.lambda, {
    name: 'nuxt',
    dist: path.resolve(rootDir, 'lambda'),
    spa: false,
    webpack: false
  })

  render.ssrLog = false // invokes consola.addReporter which isnt supported by console

  const optimizedOptions = {
    buildDir,
    dev: false,
    env,
    head,
    globalName,
    globals: determineGlobals(globalName, globals),
    messages,
    mode,
    modern,
    modules,
    render,
    rootDir,
    router
  }

  await fs.remove(normalizedConfig.lambda.dist)

  const configFile = path.resolve(normalizedConfig.lambda.dist, '.nuxt-lambda.config.js')
  await fs.outputFile(configFile, `export default ${JSON.stringify(optimizedOptions, null, 2)}`)

  consola.info(`Optimized lambda config saved at: ${configFile}`)

  if (normalizedConfig.modern === true || normalizedConfig.modern === 'server') {
    consola.warn('modern: true is not supported by the lambda, falling back to \'client\' instead')
    normalizedConfig.modern = 'client'
  }

  return [configFile, normalizedConfig, optimizedOptions]
}

exports.run = run
