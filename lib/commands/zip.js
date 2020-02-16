const path = require('path')
const fs = require('fs-extra')
const consola = require('consola')
const JSZip = require('jszip')
const klaw = require('klaw')
const { zipFunction } = require('@netlify/zip-it-and-ship-it')

async function run (cmd, { lambdaPath, options }) {
  if (!cmd.argv.zip) {
    return
  }

  const distDir = options.lambda.distDir
  const nuxtDir = path.resolve(options.buildDir, 'dist')

  await fs.remove(distDir)
  await fs.ensureDir(distDir)

  consola.info('Creating zip file with dependencies')

  const { path: lambdaZip } = await zipFunction(lambdaPath, distDir)
  consola.info('Zip file created, adding Nuxt.js files')

  const zip = new JSZip()

  const zipBinary = await fs.readFile(lambdaZip)
  const zipContents = await zip.loadAsync(zipBinary, { checkCRC32: true })

  const nuxtFiles = await new Promise((resolve) => {
    const items = []
    klaw(nuxtDir)
      .on('data', (item) => {
        if (item.stats.isFile()) {
          items.push(item.path)
        }
      })
      .on('end', () => resolve(items))
  })

  for (const file of nuxtFiles) {
    const entry = path.relative(options.rootDir, file)
    zipContents.file(entry, await fs.readFile(file))
  }

  await new Promise((resolve) => {
    zip
      .generateNodeStream({
        type: 'nodebuffer',
        streamFiles: true
      })
      .pipe(fs.createWriteStream(lambdaZip))
      .on('finish', resolve)
  })

  consola.info('Lambda is fully zipped:', lambdaZip)
}

exports.run = run
