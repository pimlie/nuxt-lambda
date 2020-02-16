import config from 'nuxt.config.js'
import { Nuxt } from '@nuxt/core'
import { prepareUrl, fixConfig } from '../utils'

const nuxt = new Nuxt(config)

const fullHandler = async (req, res) => {
  fixConfig(config)

  req.url = prepareUrl(req.url)

  await nuxt.ready()

  return nuxt.server.app(req, res)
}

export default fullHandler
