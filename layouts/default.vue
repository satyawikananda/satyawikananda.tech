<template>
  <div>
    <Navbar />
    <Nuxt />
    <!-- <Navbottom /> -->
    <Footer />
  </div>
</template>
<script>
import Navbar from '@/components/master/Navbar.vue'
// import Navbottom from '@/components/master/Navbottom.vue'
import Footer from '@/components/master/Footer.vue'

export default {
  components: {
    Navbar,
    // Navbottom,
    Footer
  }
}
</script>
