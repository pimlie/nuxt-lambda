import { Nuxt } from '@nuxt/core'
import config from 'nuxt.config.js'

const nuxt = new Nuxt(config)

const fullHandler = async (req, res) => {
  if (process.env.NETLIFY) {
    if (req.url.startsWith('/.netlify/functions/nuxt')) {
      req.url = req.url.slice(24)
    }

    req.url = req.url || '/'
  }

  await nuxt.ready()

  return nuxt.server.app(req, res)
}

export default fullHandler
