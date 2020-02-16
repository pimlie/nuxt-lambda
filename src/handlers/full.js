import config from 'nuxt.config.js'
import { Nuxt } from '@nuxt/core'
import { prepareUrl } from '../utils'

const nuxt = new Nuxt(config)

const fullHandler = async (req, res) => {
  req.url = prepareUrl(req.url)

  await nuxt.ready()

  return nuxt.server.app(req, res)
}

export default fullHandler
