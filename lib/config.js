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

  normalizedConfig.lambda = Object.assign({}, {
    name: 'nuxt',
    optimize: false,
    buildDir: '.lambda',
    distDir: 'dist',
    spa: false,
    webpack: false
  }, normalizedConfig.lambda)

  // resolve dirs
  normalizedConfig.lambda.buildDir = path.resolve(rootDir, normalizedConfig.lambda.buildDir)
  normalizedConfig.lambda.distDir = path.resolve(rootDir, normalizedConfig.lambda.distDir)

  render.ssrLog = false // invokes consola.addReporter which isnt supported by console

  const optimizedOptions = {
    buildDir: userConfig.buildDir || path.relative(rootDir, buildDir),
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
    rootDir: '__dirname',
    router
  }

  await fs.remove(normalizedConfig.lambda.buildDir)
  await fs.remove(normalizedConfig.lambda.distDir)

  const configFile = path.resolve(normalizedConfig.lambda.buildDir, '.nuxt-lambda.config.js')
  const configSerialized = JSON.stringify(optimizedOptions, null, 2).replace('"__dirname"', '__dirname')
  await fs.outputFile(configFile, `export default ${configSerialized}`)

  consola.info(`Optimized lambda config saved at: ${configFile}`)

  if (normalizedConfig.modern === true || normalizedConfig.modern === 'server') {
    consola.warn('modern: true is not supported by the lambda, falling back to \'client\' instead')
    normalizedConfig.modern = 'client'
  }

  return [configFile, normalizedConfig, optimizedOptions]
}

exports.run = run
