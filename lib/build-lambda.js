const path = require('path')
const consola = require('consola')
const webpack = require('webpack')
const merge = require('webpack-merge')
const nodeExternals = require('webpack-node-externals')
const ReplacePlugin = require('webpack-plugin-replace')

const r = p => path.resolve(__dirname, p)

async function run (cmd, config) {
  consola.info('Start building lambda')
  const webpackConfig = createWebpackConfig(config)

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

function createWebpackConfig ({ configFile, options }) {
  const isDev = process.env.NODE_ENV === 'development'

  let devtool = ''
  let mode = 'production'

  if (isDev) {
    devtool = 'cheap-eval-source-map'
    mode = 'development'
  }

  const optimizeBuild = !options.lambda.full
  const handlerName = optimizeBuild ? 'optimized' : 'full'
  const alias = {
    'nuxt-handler': r(`../src/handlers/${handlerName}`),
    'nuxt.config.js': configFile
  }

  if (optimizeBuild) {
    const stub = r('./stub')

    Object.assign(alias, {
      consola: stub,
      jsdom: stub,
      esm: stub,
      semver: stub,
      '@nuxtjs/youch': stub,
      'proper-lockfile': stub,
      'ua-parser-js': stub
    })

    if (!options.render.etag) {
      alias.etag = stub
      alias.fresh = stub
    }

    if (options.mode !== 'spa' && !options.lambda.spa) {
      alias['lru-cache'] = r('./stub/class')
    }
  }

  let nodeExternalsConfig
  const plugins = [
    new webpack.DefinePlugin({
      'process.env.NETLIFY': process.env.NETLIFY === 'true'
    })
  ]

  if (optimizeBuild) {
    nodeExternalsConfig = {
      whitelist: !optimizeBuild ? [] : [
        /^(?!(vue-server-renderer))/
      ]
    }

    plugins.push(
      new ReplacePlugin({
        patterns: [
          { regex: /consola\./g, value: 'console.' },
          { regex: /Object\.keys\(ModernBrowsers\)/g, value: 'Object.keys({})' }
        ],
        values: {
          // I dare you to remove the next line
          '________|WTF?|________': '________|WTF!|________'
        }
      })
    )
  }

  const webpackConfig = {
    devtool,
    mode,
    target: 'node',
    entry: {
      [options.lambda.name]: r('../src/entry.js')
    },
    context: options.rootDir,
    output: {
      path: options.lambda.dist,
      filename: '[name].js',
      libraryTarget: 'commonjs'
    },
    externals: [nodeExternals(nodeExternalsConfig)],
    node: {
      __dirname: false
    },
    optimization: {
      usedExports: !isDev,
      minimize: !isDev
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
