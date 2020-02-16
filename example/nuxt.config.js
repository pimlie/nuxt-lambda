export default {
  debug: true,
  lambda: {
    full: false
  },
  buildModules: [
    '@nuxtjs/axios'
  ],
  plugins: [
    '~/plugins/vue-uuid.js'
  ]
}
