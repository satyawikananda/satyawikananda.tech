<template>
  <Nuxt />
</template>

<script>
export default {
  head: {
    meta: [
      { hid: 'description', name: 'description', content: "Satya Wikananda's linktree" },
      { hid: 'og:title', name: 'og:title', content: 'Satya Wikananda' },
      { hid: 'og:description', name: 'og:description', content: "Satya Wikananda's linktree" },
      { hid: 'og:url', name: 'og:url', content: 'https://satyawikananda.tech' },
      { hid: 'og:image', name: 'og:image', content: 'https://avatars1.githubusercontent.com/u/33148052?v=4' },
      { hid: 'og:type', name: 'og:type', content: 'portfolio' },
      { hide: 'twitter:card', name: 'twitter:card', content: 'https://avatars1.githubusercontent.com/u/33148052?v=4' },
      { hide: 'twitter:site', name: 'twitter:site', content: 'satya_wikananda' }
    ]
  }
}
</script>
