const path = require('path')
const fs = require('fs-extra')
const consola = require('consola')
const { getNuxtConfig, determineGlobals } = require('../utils/nuxt')

async function run (cmd) {
  if (!cmd.argv.optimize) {
    return
  }

  const userConfig = await cmd.getNuxtConfig({
    dev: false,
    server: false,
    _build: true
  })
  const routerBaseSpecified =
    userConfig.router && typeof userConfig.router.base === 'string'
  const normalizedConfig = getNuxtConfig(userConfig)

  normalizedConfig.build.standalone = true
  normalizedConfig.render.ssrLog = false // invokes consola.addReporter which isnt supported by console

  const {
    buildDir,
    build: { publicPath, crossorigin },
    app: { cdnURL, assetsPath },
    lambda: { errorPage },
    env,
    head,
    globalName,
    globals,
    messages,
    mode,
    modern,
    modules,
    render,
    rootDir,
    router
  } = normalizedConfig

  const optimizedOptions = {
    buildDir: userConfig.buildDir || path.relative(rootDir, buildDir),
    build: {
      crossorigin
    },
    app: {
      cdnURL,
      assetsPath
    },
    lambda: {
      errorPage
    },
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

  const isStaticLambda = cmd.argv.static || normalizedConfig.lambda.static
  if (isStaticLambda) {
    normalizedConfig.lambda.static = true
    optimizedOptions.clientDir = path.join(
      optimizedOptions.buildDir,
      'dist',
      'client'
    )
  }

  if (isStaticLambda || modern) {
    optimizedOptions.build.publicPath = publicPath
  }

  optimizedOptions.render.bundleRenderer.shouldPreload =
    render.bundleRenderer.shouldPreload.toString()
  optimizedOptions.render.bundleRenderer.shouldPrefetch =
    render.bundleRenderer.shouldPrefetch.toString()

  if (routerBaseSpecified) {
    optimizedOptions._routerBaseSpecified = true
  } else {
    delete optimizedOptions.router.base
  }

  // resolve & prepare dirs
  normalizedConfig.lambda.buildDir = path.resolve(
    rootDir,
    normalizedConfig.lambda.buildDir
  )
  normalizedConfig.lambda.distDir = path.resolve(
    rootDir,
    normalizedConfig.lambda.distDir
  )

  await fs.remove(normalizedConfig.lambda.buildDir)
  await fs.remove(normalizedConfig.lambda.distDir)

  // write config file for lambda
  const configFile = path.resolve(
    normalizedConfig.lambda.buildDir,
    'nuxt-lambda.config.js'
  )
  const configSerialized = JSON.stringify(optimizedOptions, null, 2).replace(
    '"__dirname"',
    '__dirname'
  )
  await fs.outputFile(configFile, `export default ${configSerialized}`)

  consola.info(`Optimized lambda config saved at: ${configFile}`)

  /* if (normalizedConfig.modern === true || normalizedConfig.modern === 'server') {
    consola.warn('modern: true is not supported by the lambda, falling back to \'client\' instead')
    normalizedConfig.modern = 'client'
  } */

  return [configFile, normalizedConfig, optimizedOptions]
}

exports.run = run
