const consola = require('consola')

async function run (cmd, config) {
  consola.info('Start building Nuxt.js')

  const nuxt = await cmd.getNuxt(config)

  const builder = await cmd.getBuilder(nuxt)
  await builder.build()

  consola.info('Build complete')
}

exports.run = run
