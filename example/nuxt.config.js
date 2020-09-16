export default {
  lambda: {
    static: true,
    excludeClientFiles: ['img/']
  },
  buildModules: [
    '@nuxtjs/axios'
  ],
  plugins: [
    '~/plugins/vue-uuid.js'
  ]
}
