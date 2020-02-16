const { options: { common } } = require('./utils/nuxt')
const options = require('./utils/build-options')

module.exports = {
  name: 'lambda',
  description: 'Build an optimized nuxt lambda',
  usage: 'lambda <rootDir>',
  options: {
    ...common,
    ...options
  },
  async run (cmd) {
    // TODO: fix configFile, options when false
    // TODO: fix lambdaPath when false

    // create the optimized nuxt.config that will be included in the lambda
    const [configFile, options] = await require('./commands/config').run(cmd)

    // build nuxt with standalone: true
    await require('./commands/build-nuxt').run(cmd, options)

    // build the lambda
    const stats = await require('./commands/build-lambda').run(cmd, { configFile, options })
    const [[, { existsAt: lambdaPath }]] = Object.entries(stats.compilation.assets)

    // create the zip file for the lambda & add the Nuxt.js dist files to it
    await require('./commands/zip').run(cmd, { options, lambdaPath })

    // DONE!
  }
}
