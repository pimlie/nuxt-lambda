import baseConfig from './base'

export default {
  ...baseConfig,
  lambda: {
    buildDir: '.lambda-with-static',
    distDir: 'dist-with-static',
    static: true
  }
}
