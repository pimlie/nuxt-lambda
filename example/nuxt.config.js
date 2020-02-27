export default {
  lambda: {
    handler: 'full'
  },
  buildModules: [
    '@nuxtjs/axios'
  ],
  plugins: [
    '~/plugins/vue-uuid.js'
  ]
}
