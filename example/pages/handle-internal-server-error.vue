<template>
  <div>Oops, something went wrong</div>
</template>

<script>
/**
 * This is a placeholder page component that should only be used when an Unhandled error
 * is thrown while rendering a page. Eg because of an error in asyncData
 * This page should never be rendered in itself but also return/redirect the error page
 * from the layouts folder
 */
export default {
  asyncData({ ssrContext, error }) {
    let message
    if (ssrContext.renderError) {
      message = ssrContext.renderError.message
    } else {
      message = 'Oops, something went wrong'
    }

    return error({
      statusCode: 500,
      message,
    })
  }
}
</script>
