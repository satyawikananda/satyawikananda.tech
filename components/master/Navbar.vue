<template>
  <header class="text-white body-font">
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <span class="text-xl ml-3 font-bold" :style="{ color: '#ff8906' }">Satya Wikananda</span>
      <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-gray-400 flex flex-wrap items-center text-base justify-center sm:hidden md:hidden lg:block">
        <nuxt-link to="/" class="mr-5 cursor-pointer text-white-semi hover:underline">
          Home
        </nuxt-link>
        <nuxt-link to="/about" class="mr-5 cursor-pointer text-white-semi hover:underline">
          About me
        </nuxt-link>
        <nuxt-link to="/accomplishments" class="mr-5 cursor-pointer text-white-semi hover:underline">
          Accomplishments
        </nuxt-link>
      </nav>
      <social-media :icons="['fab', 'github']" link="https://github.com/satyawikananda" />
      <social-media :icons="['fab', 'telegram']" link="https://t.me/satyawikananda" />
      <social-media :icons="['fab', 'twitter']" link="https://twitter.com/satya_wikananda" />
    </div>
  </header>
</template>

<script>
import SocialMedia from '@/components/SocialMedia.vue'
export default {
  name: 'Navbar',
  components: {
    'social-media': SocialMedia
  }
}
</script>

<style>
  .text-orange-custom {
    color: '#ff8906'
  }
</style>
