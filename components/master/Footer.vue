<template>
  <footer class="footer text-white body-font">
    <div class="container px-5 py-8 mx-auto flex items-center flex-col">
      <p class="title-font text-md font-medium text-center text-white">
        Made Using Nuxt.js, Tailwind CSS and hosted on Vercel
      </p>
      <p class="text-md sm:py-2 sm:mt-0 mt-4">
        <a href="https://twitter.com/satya_wikananda" class="text-center" rel="noopener noreferrer" target="_blank" :style="{ color: '#ff8906' }">&copy; {{ new Date().getFullYear() }} Satya Wikananda</a>
      </p>
      <div class="flex flex-row container justify-center">
        <social-media :icons="['fab', 'github']" link="https://github.com/satyawikananda" />
        <social-media :icons="['fab', 'instagram']" link="https://instagram.com/satyawikananda" />
        <social-media :icons="['fab', 'facebook']" link="https://facebook.com/satyawikananda23" />
        <social-media :icons="['fab', 'telegram']" link="https://t.me/satyawikananda" />
        <social-media :icons="['fab', 'twitter']" link="https://twitter.com/satya_wikananda" />
      </div>
    </div>
  </footer>
</template>
<script>
import SocialMedia from '@/components/SocialMedia.vue'

export default {
  name: 'Footer',
  components: {
    'social-media': SocialMedia
  }
}
</script>
