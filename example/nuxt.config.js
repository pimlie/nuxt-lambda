export default {
  telemetry: false,
  lambda: {
    static: true,
    errorPage: '/handle-internal-server-error',
    excludeClientFiles: ['img/']
  },
  buildModules: [
    '@nuxtjs/axios'
  ],
  plugins: [
    '~/plugins/vue-uuid.js'
  ]
}
