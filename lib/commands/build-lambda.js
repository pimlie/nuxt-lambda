const path = require('path')
const consola = require('consola')
const webpack = require('webpack')
// const deepmerge = require('deepmerge')
const merge = require('webpack-merge')
const nodeExternals = require('webpack-node-externals')
const ReplacePlugin = require('webpack-plugin-replace')
const { defaultHandler, isSupportedHandler } = require('../utils/options')

const r = p => path.resolve(__dirname, '../..', p)

async function run (cmd, config) {
  if (!cmd.argv.lambda) {
    return
  }

  consola.info('Start building lambda')
  const webpackConfig = createWebpackConfig(config, cmd)

  try {
    return await new Promise(function (resolve, reject) {
      webpack(webpackConfig, (err, stats) => {
        if (err) {
          return reject(err)
        }

        const info = stats.toJson('minimal')
        if (stats.hasErrors()) {
          return reject(info.errors)
        }

        if (stats.hasWarnings()) {
          info.warnings.forEach(e => consola.warn(e))
        }

        consola.info('Lambda build succesfully')
        resolve(stats)
      })
    })
  } catch (err) {
    consola.error('Webpack build for lambda failed', err)
  }
}

function createWebpackConfig ({ configFile, options }, cmd) {
  const isDev = process.env.NODE_ENV === 'development'

  let devtool = ''
  let mode = 'production'

  if (isDev) {
    devtool = 'cheap-eval-source-map'
    mode = 'development'
  }

  let handler = cmd.argv.handler || options.lambda.handler
  if (!isSupportedHandler(handler)) {
    handler = defaultHandler
  }

  const optimizeBuild = handler !== 'full'

  const alias = {
    'nuxt-handler': r(`src/handlers/${handler}`),
    'nuxt.config.js': configFile
  }

  let nodeExternalsOpts
  const replaceOpts = null

  const defineOpts = {
    'process.env.NETLIFY': process.env.NETLIFY === 'true',
    'process.env.LAMBDA_USE_COMPRESSION': !!options.render.compressor,
    'process.env.LAMBDA_USE_SERVESTATIC': !!options.lambda.static
  }

  if (!options.debug) {
    defineOpts['process.env.LAMBDA_DEBUG'] = false
  }

  const plugins = [
    new webpack.DefinePlugin(defineOpts)
  ]

  if (optimizeBuild) {
    const stub = r('lib/stub')

    Object.assign(alias, {
      'fs-extra': r('lib/stub/fs'),
      consola: r('lib/stub/consola'),
      jsdom: stub,
      esm: stub,
      '@nuxtjs/youch': stub,
      'proper-lockfile': stub
    })

    if (!options.modern) {
      alias.semver = stub
      alias['ua-parser-js'] = stub
    }

    if (!options.render.etag) {
      // dont stub etag when serving static files, serve-static depends on it
      if (!options.lambda.static) {
        alias.etag = stub
      }
      alias.fresh = stub
    }

    if (options.mode !== 'spa' && !options.lambda.spa && !options.modern) {
      alias['lru-cache'] = r('lib/stub/class')
    }

    nodeExternalsOpts = {
      allowlist: !optimizeBuild
        ? []
        : [
            /^(?!(vue-server-renderer))/
          ]
    }
    /*
    replaceOpts = deepmerge({
      patterns: [
        { regex: /consola\./gi, value: 'console.' },
        { regex: /consola\[/gi, value: 'console[' }
      ]
    }, replaceOpts || {})
    */
  }

  if (replaceOpts) {
    if (!replaceOpts.values) {
      // I dare you to remove this
      replaceOpts.values = {
        '________|WTF?|________': '________|WTF!|________'
      }
    }

    plugins.push(new ReplacePlugin(replaceOpts))
  }

  const entry = cmd.argv.handler === 'minimal' ? 'event' : 'http'

  const webpackConfig = {
    devtool,
    mode,
    target: 'node',
    entry: {
      [options.lambda.name]: r(`src/entries/${entry}.js`)
    },
    context: options.rootDir,
    output: {
      path: options.lambda.buildDir,
      filename: '[name].js',
      libraryTarget: 'commonjs'
    },
    externals: [nodeExternals(nodeExternalsOpts)],
    node: {
      __dirname: false
    },
    optimization: {
      usedExports: !isDev,
      minimize: !isDev && !options.debug
    },
    resolve: {
      mainFields: ['module', 'main'],
      alias
    },
    plugins
  }

  if (options.lambda.webpack) {
    return merge.smart(webpackConfig, options.lambda.webpack)
  }

  return webpackConfig
}

exports.run = run
