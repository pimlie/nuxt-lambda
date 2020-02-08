<template>
  <div class="container">
    <h1>About from {{ name }}</h1>
    <ul>
      <li v-for="(post, index) in posts" :key="index">
        {{ post.title }}
      </li>
    </ul>
    <p>
      <nuxt-link to="/">
        Back to home page
      </nuxt-link>
    </p>
  </div>
</template>

<script>
export default {
  async asyncData ({ app }) {
    // We can return a Promise instead of calling the callback
    const data = await app.$axios.$get('https://jsonplaceholder.typicode.com/posts')

    return {
      name: process.static ? 'static' : (process.server ? 'server' : 'client'),
      posts: data.slice(0, 5)
    }
  }
}
</script>
