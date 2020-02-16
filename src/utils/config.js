
export function fixConfig (options) {
  const bundleRenderer = options.render.bundleRenderer

  /* eslint-disable no-eval */
  eval(`bundleRenderer.shouldPreload = ${bundleRenderer.shouldPreload}`)
  eval(`bundleRenderer.shouldPrefetch = ${bundleRenderer.shouldPrefetch}`)
  /* eslint-enable no-eval */
}
