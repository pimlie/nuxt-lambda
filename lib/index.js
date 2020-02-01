const { options: { common } } = require('@nuxt/cli')

module.exports = {
  name: 'lambda',
  description: 'Build an optimized nuxt lambda',
  usage: 'lambda ',
  options: {
    ...common
  },
  async run (cmd) {
    // create the optimized nuxt.config that will be included in the lambda
    const [configFile, options] = await require('./config').run(cmd)

    // build nuxt with standalone: true
    await require('./build-nuxt').run(cmd, options)

    // build the lambda
    const stats = await require('./build-lambda').run(cmd, { configFile, options })
    const [[, { existsAt: lambdaPath }]] = Object.entries(stats.compilation.assets)

    // create the zip file for the lambda & add the Nuxt.js dist files to it
    await require('./zip').run(cmd, { options, lambdaPath })

    // DONE!
  }
}
