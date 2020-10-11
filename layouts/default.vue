<template>
  <div>
    <Navbar />
    <Nuxt />
    <Footer />
  </div>
</template>
<script>
import Navbar from '@/components/master/Navbar.vue'
import Footer from '@/components/master/Footer.vue'

export default {
  components: {
    Navbar,
    Footer
  }
}
</script>
