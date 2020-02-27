#!/usr/bin/env node

const path = require('path')
const crypto = require('crypto')
const fs = require('fs-extra')
const consola = require('consola')
const execa = require('execa')
const minimist = require('minimist')
const prettyBytes = require('pretty-bytes')
const { NuxtCommand } = require('../lib/utils/nuxt')
const LambdaBuild = require('../lib/build')
// const LambdaTest = require('../lib/test')

const testCmd = path.resolve(__dirname, '../bin/test-lambda.js')
const rootDir = path.resolve(__dirname, '../example')

let takeAverageOfRuns = 3

const configs = [
  'base',
  'with-compression',
  'with-etag',
  'with-static'
]

const handlers = [
  'full',
  'connect',
  'minimal'
]

const paths = [
  '/',
  '/about',
  '/redirect',
  '/nuxt-icon.png'
]

function setBuildArgv ({ config, handler, buildNuxt }) {
  process.argv = [
    'yarn',
    'nuxt-lambda',
    '-c',
    path.resolve(__dirname, `configs/${config}.js`),
    '--handler',
    handler,
    buildNuxt ? '' : '--no-nuxt'
  ]
}

function getTestArgs ({ config, pathname }) {
  return [
    '-c',
    path.resolve(__dirname, `configs/${config}.js`),
    '--benchmark',
    rootDir,
    pathname
  ]
}

async function main () {
  const argv = minimist(process.argv.slice(2))

  let results
  if (argv.results) {
    results = require(path.resolve(argv.results))
  } else {
    if (argv.runs) {
      takeAverageOfRuns = parseInt(argv.runs) || takeAverageOfRuns
    }

    results = await runBenchmarks()
    await fs.outputFile(path.resolve(__dirname, 'results.json'), JSON.stringify(results, null, 2), { encoding: 'utf8' })
  }

  const md = createMarkdown(results)
  await fs.outputFile(path.resolve(__dirname, '../BENCHMARKS.md'), md, { encoding: 'utf8' })

  consola.info('Benchmarks created')
}

async function runBenchmarks () {
  const results = {}

  for (const config of configs) {
    let buildNuxt = true

    for (const handler of handlers) {
      setBuildArgv({ config, handler, buildNuxt })
      buildNuxt = false

      await NuxtCommand.run(LambdaBuild)

      for (const pathname of paths) {
        results[pathname] = results[pathname] || {}
        results[pathname][config] = results[pathname][config] || {}

        const takeAverages = []
        for (let i = 0; i < takeAverageOfRuns; i++) {
          const { stdout } = await execa(testCmd, getTestArgs({ config, pathname }))

          consola.log(pathname, stdout)

          try {
            const benchmark = JSON.parse(stdout)

            if (!results[pathname][config][handler]) {
              results[pathname][config][handler] = benchmark
            }

            takeAverages.push(benchmark)
          } catch (err) {
            consola.error('Error parsing stdout', stdout)
          }
        }

        if (takeAverageOfRuns > 1) {
          for (const key in results[pathname][config][handler].stats) {
            results[pathname][config][handler].stats[key] = Math.round(takeAverages.reduce(
              (t, benchmark) => (t += 1 * benchmark.stats[key]),
              0
            ) / takeAverageOfRuns)
          }

          for (const key in results[pathname][config][handler].mem) {
            results[pathname][config][handler].mem[key] = Math.round(takeAverages.reduce(
              (t, benchmark) => (t += 1 * benchmark.mem[key]),
              0
            ) / takeAverageOfRuns)
          }
        }
      }
    }
  }

  return results
}

function createMarkdown (results) {
  let markdown = `
# Benchmarks

> :warning: The total times are measured without downloading & unzipping what normally occures on the AWS platform. Therefore these benchmarks only list _load/parse times_ and not _coldboot times_

- Times are in \`ms\`
- Times/memory usage are the averages of ${takeAverageOfRuns} runs

Check the benchmark folder for details how these benchmarks are created

`

  for (const pathname in results) {
    markdown += `## Route \`${pathname}\`\n`

    for (const config in results[pathname]) {
      markdown += `### Config _${config}_\n`

      markdown += '|handler|load time|exec time|total time|memory usage|chksum|\n'
      markdown += '|---|---|---|---|---|---|\n'

      const responses = {}
      for (const handler in results[pathname][config]) {
        const result = results[pathname][config][handler]

        const bootTime = prettyHrtime(result.stats.boot)
        const execTime = prettyHrtime(result.stats.execute)
        const totalTime = prettyHrtime(result.stats.boot + result.stats.execute)
        const memUsage = prettyBytes(result.mem.rss)

        const response = JSON.stringify(result.res, null, 2)
        responses[handler] = response

        const md5sum = crypto.createHash('md5')
        md5sum.update(response)

        markdown += `|_${handler}_|${bootTime}|${execTime}|${totalTime}|${memUsage}|${md5sum.digest('base64')}|\n`
      }

      for (const handler in responses) {
        markdown += `<details><summary>Response for <i>${handler}</i></summary>

\`\`\`js
${responses[handler].length > 4000 ? 'blob_with_size_' + responses[handler].length : responses[handler]}
\`\`\`
</details>

`
      }
    }
  }

  return markdown
}

function prettyHrtime (time) {
  return Math.round(time / 1e5) / 10
}

main()
