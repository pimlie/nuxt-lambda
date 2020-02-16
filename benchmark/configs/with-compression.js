import baseConfig from './base'

export default {
  ...baseConfig,
  lambda: {
    buildDir: '.lambda-with-compression',
    distDir: 'dist-with-compression'
  },
  render: {
    compressor: {},
    etag: false
  }
}
