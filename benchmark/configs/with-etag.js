import baseConfig from './base'

export default {
  ...baseConfig,
  lambda: {
    buildDir: '.lambda-with-etag',
    distDir: 'dist-with-etag'
  },
  render: {
    etag: true
  }
}
