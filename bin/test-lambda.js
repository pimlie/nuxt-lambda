#!/usr/bin/env node

const path = require('path')
const util = require('util')
const fs = require('fs-extra')
const consola = require('consola')
const createTmpDir = util.promisify(require('temp').track().mkdir)
const JSZip = require('jszip')

async function main () {
  let [,, rootDir, pathname] = process.argv

  if (!pathname) {
    pathname = rootDir
    rootDir = '.'
  }

  const tmpDir = await createTmpDir('nuxt-lambda')
  consola.info(`---- EXTRACTING ZIP INTO ${tmpDir} ----`)

  const lambdaZip = path.resolve(rootDir, 'dist/nuxt.zip')

  const zip = new JSZip()

  const zipBinary = await fs.readFile(lambdaZip)
  const zipContents = await zip.loadAsync(zipBinary, { checkCRC32: true })

  for (const file of Object.values(zipContents.files)) {
    if (file.dir) {
      continue
    }

    const filePath = path.resolve(tmpDir, file.name)
    await fs.outputFile(filePath, await file.async('string'))
    consola.log(`Extracting ${file.name}`)
  }

  consola.info('---- LOADING HANDLER ----')
  const handler = require(path.resolve(tmpDir, 'nuxt.js')).handler

  const event = {
    httpMethod: 'GET',
    queryStringParameters: '',
    headers: {},
    body: '',
    path: pathname || '/'
  }

  const context = {
    requestId: 1
  }

  consola.info('---- CALLING HANDLER ----')
  const res = await handler(event, context)
  consola.info('---- HANDLER CALLED, RESPONSE: ----')
  consola.log(Buffer.from(res.body, 'base64').toString())
}

main()
