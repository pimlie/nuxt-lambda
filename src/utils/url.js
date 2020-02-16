
export function prepareUrl (url) {
  if (process.env.NETLIFY) {
    if (url.startsWith('/.netlify/functions/nuxt')) {
      url = url.slice(24)
    }

    if (!url) {
      return '/'
    }
  }

  return url
}
