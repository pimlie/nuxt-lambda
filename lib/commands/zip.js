const path = require('path')
const fs = require('fs-extra')
const consola = require('consola')
const JSZip = require('jszip')
const klaw = require('klaw')
const { zipFunction } = require('@netlify/zip-it-and-ship-it')

async function addFolderToZip (zip, dir, options, createEntry) {
  const files = await new Promise((resolve) => {
    const items = []
    klaw(dir)
      .on('data', (item) => {
        if (item.stats.isFile()) {
          items.push(item.path)
        }
      })
      .on('end', () => resolve(items))
  })

  let { excludeClientFiles } = options.lambda
  if (Array.isArray(excludeClientFiles)) {
    excludeClientFiles = entry => !options.lambda.excludeClientFiles.some(path => entry.startsWith(path))
  } else if (excludeClientFiles && typeof excludeClientFiles !== 'function') {
    consola.warn('excludeClientFiles should be a function or array')
    return
  }

  for (const file of files) {
    let entry
    if (typeof createEntry === 'function') {
      entry = createEntry(file)
    } else {
      entry = path.relative(options.rootDir, file)
    }

    let addToZip = true
    if (excludeClientFiles) {
      const buildEntry = path.relative(options.buildDir, file)
      if (buildEntry.startsWith('dist/client/')) {
        addToZip = excludeClientFiles(buildEntry.slice(12), file)
      }
    }

    if (addToZip) {
      zip.file(entry, await fs.readFile(file))
    }
  }
}

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

  await addFolderToZip(zipContents, nuxtDir, options)

  if (options.lambda.static) {
    const staticDir = path.resolve(options.srcDir, options.dir.static)
    await addFolderToZip(zipContents, staticDir, options, (entry) => {
      return path.join('static', path.relative(staticDir, entry))
    })
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
