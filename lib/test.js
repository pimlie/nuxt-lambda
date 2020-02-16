const path = require('path')
const fs = require('fs-extra')
const consola = require('consola')

const { getNuxtConfig, options: { common } } = require('./utils/nuxt')

module.exports = {
  name: 'test-lambda',
  description: 'Test a nuxt lambda',
  usage: 'lambda <rootDir-or-zipFile>',
  options: {
    ...common,
    persistent: {
      alias: 'p',
      type: 'boolean',
      description: 'Do not use a temporary dir, unpack in the lambda dist folder and use unpacked lambda if available'
    },
    debug: {
      type: 'boolean',
      description: 'Print debugging logs. Your lambda needs to have been built with debug: true in your nuxt.config'
    }
  },
  async run (cmd) {
    if (cmd.argv.debug) {
      process.env.LAMBDA_DEBUG = 1
    } else {
      delete process.env.LAMBDA_DEBUG
    }

    let [rootDir, pathname] = cmd.argv._

    if (!pathname) {
      pathname = rootDir
      rootDir = '.'
    }

    let workDir
    let lambdaZip
    let handlerPath
    let needsUnzipping = true

    if (rootDir.endsWith('.zip') && !cmd.argv.persistent) {
      workDir = await createTmpDir('nuxt-lambda')

      rootDir = path.resolve(rootDir)
      lambdaZip = rootDir
      handlerPath = `${rootDir.slice(0, -4)}.js`
    } else {
      const userConfig = await cmd.getNuxtConfig({ dev: false, server: false, _build: true })
      const config = getNuxtConfig(userConfig)

      if (!cmd.argv.persistent) {
        workDir = await createTmpDir('nuxt-lambda')
        handlerPath = path.resolve(workDir, `${config.lambda.name}.js`)
      } else {
        workDir = path.resolve(config.rootDir, config.lambda.distDir)
        handlerPath = path.resolve(config.rootDir, config.lambda.distDir, `${config.lambda.name}.js`)
      }

      lambdaZip = path.resolve(config.rootDir, config.lambda.distDir, `${config.lambda.name}.zip`)
      needsUnzipping = !await fs.exists(handlerPath)

      if (
        (!cmd.argv.persistent || needsUnzipping) &&
        !await fs.exists(lambdaZip)
      ) {
        consola.fatal('Lambda not found, is it build yet?')
        return
      }
    }

    // change to rootDir, otherwise __dirname
    // in the lambda config doesnt resolve correctly
    process.chdir(workDir)

    if (!cmd.argv.persistent || needsUnzipping) {
      consola.info(`---- EXTRACTING ZIP INTO ${workDir} ----`)
      await unzip(workDir, lambdaZip)
    }

    const stats = {
      boot: 0,
      execute: 0
    }

    for (const id in require.cache) {
      delete require.cache[id]
    }

    consola.info('---- LOADING HANDLER ----')
    const bootStart = process.hrtime.bigint()
    const { handler } = require(handlerPath)
    stats.boot = parseInt(process.hrtime.bigint() - bootStart)

    const event = {
      httpMethod: 'GET',
      queryStringParameters: '',
      headers: {
        Accept: 'text/html',
        'Accept-Encoding': 'gzip, deflate, br'
      },
      body: '',
      path: pathname || '/'
    }

    const context = {
      requestId: 1
    }

    consola.info('---- CALLING HANDLER ----')
    const execStart = process.hrtime.bigint()
    const res = await handler(event, context)
    stats.execute = parseInt(process.hrtime.bigint() - execStart)

    consola.info('---- HANDLER CALLED, RESPONSE: ----')
    consola.log({ ...res, body: !!res.body })
    for (const type in stats) {
      consola.log(`${type} took: ${Math.round(stats[type] / 1e5) / 10}ms`)
    }
    consola.log(`total took: ${Math.round(Object.values(stats).reduce((t, s) => (t += s), 0) / 1e5) / 10}ms`)
    consola.log(res.body)
  }
}

function createTmpDir (dir) {
  const util = require('util')
  const createTempDir = util.promisify(require('temp').track().mkdir)
  return createTempDir(dir)
}

async function unzip (outDir, zipFile) {
  const JSZip = require('jszip')
  const zip = new JSZip()

  const zipBinary = await fs.readFile(zipFile)
  const zipContents = await zip.loadAsync(zipBinary, { checkCRC32: true })

  for (const file of Object.values(zipContents.files)) {
    if (file.dir) {
      continue
    }

    const filePath = path.resolve(outDir, file.name)
    await fs.outputFile(filePath, await file.async('string'))
    consola.log(`Extracting ${file.name}`)
  }
}
