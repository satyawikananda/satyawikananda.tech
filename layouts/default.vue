<template>
  <div>
    <Navbar />
    <Nuxt />
    <Navbottom />
    <Footer />
  </div>
</template>
<script>
import Navbar from '@/components/master/Navbar.vue'
import Navbottom from '@/components/master/Navbottom.vue'
import Footer from '@/components/master/Footer.vue'

export default {
  components: {
    Navbar,
    Navbottom,
    Footer
  },
  head: {
    meta: [
      { hid: 'description', name: 'description', content: "Satya Wikananda's portfolio, if you want to know me more, you can check it here" },
      { hid: 'og:title', name: 'og:title', content: 'Satya Wikananda' },
      { hid: 'og:description', name: 'og:description', content: "Satya Wikananda's portfolio, if you want to know me more, you can check it here" },
      { hid: 'og:url', name: 'og:url', content: 'https://satyawikananda.tech' },
      { hid: 'og:image', name: 'og:image', content: 'https://avatars1.githubusercontent.com/u/33148052?v=4' },
      { hid: 'og:type', name: 'og:type', content: 'portfolio' },
      { hide: 'twitter:card', name: 'twitter:card', content: 'https://avatars1.githubusercontent.com/u/33148052?v=4' },
      { hide: 'twitter:site', name: 'twitter:site', content: 'satya_wikananda' }
    ]
  }
}
</script>
