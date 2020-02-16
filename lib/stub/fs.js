const fs = require('fs')
const util = require('util')

module.exports.exists = function exists (path) {
  return new Promise((resolve) => {
    fs.access(path, fs.constants.R_OK, (err) => {
      resolve(!err)
    })
  })
}

module.exports.readFile = util.promisify(fs.readFile)

module.exports.existsSync = fs.existsSync
