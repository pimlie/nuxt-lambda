<template>
  <div>
    <h1>Hi from {{ name }}!</h1>

    <figure>
      <img src="/_static/logo.png" />

      <figcaption>
        <nuxt-link to="/about">About</nuxt-link>
      </figcaption>
    </figure>

    <p>
      <small>id: {{ uuid }}</small>
    </p>
  </div>
</template>

<script>
export default {
  asyncData () {
    return {
      name: process.static ? 'static' : (process.server ? 'server' : 'client')
    }
  },
  data () {
    return {
      uuid: this.$uuid.v1()
    }
  }
}
</script>

