<template>
  <div class="max-w-full m-auto">
    <section class="text-white body-font">
      <div class="container mx-auto flex py-12 items-center justify-center flex-col">
        <div class="flex flex-wrap justify-center">
          <div class="p-4 lg:w-full">
            <div class="h-full card-about shadow-md px-8 pt-16 pb-24 rounded-lg overflow-hidden relative">
              <img class="lg:w-32 md:w-32 w-32 mb-10 object-cover object-center rounded-full mx-auto" alt="hero" src="https://avatars1.githubusercontent.com/u/33148052?v=4">
              <h2 class="text-left title-project title-font text-3xl font-bold py-2 mb-4">
                Satya Wikananda's Linktree
              </h2>
              <p class="leading-relaxed sm:text-center md:text-left">
                Maybe some people wanna know me on social media, who knows?
              </p>
              <div class="flex flex-wrap justify-center">
                <div v-for="(item,i) in data" :key="i" class="lg:w-11/12 md:w-1/2 p-1 mt-4 w-full">
                  <a :href="item.link" class="h-full shadow-md rounded-lg overflow-hidden relative p-4 flex flex-wrap flex-col hover:underline" :style="{backgroundColor: [item.hexColor]}">
                    {{ item.name }}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      data: [
        {
          id: 1,
          name: 'Telegram',
          link: 'https://t.me/satyawikananda',
          hexColor: '#0088CC'
        },
        {
          id: 3,
          name: 'Instagram',
          link: 'https://instagram.com/satyawikananda',
          hexColor: '#C13584'
        },
        {
          id: 4,
          name: 'Facebook',
          link: 'https://fb.me/satyawikananda23',
          hexColor: '#4267B2'
        },
        {
          id: 5,
          name: 'Twitter',
          link: 'https://twitter.com/satya_wikananda',
          hexColor: '#00acee'
        },
        {
          id: 6,
          name: 'Linkedin',
          link: 'https://www.linkedin.com/in/i-gusti-ngurah-satya-wikananda-8a1655150/',
          hexColor: '#2867B2'
        },
        {
          id: 7,
          name: 'Github',
          link: 'https://github.com/satyawikananda',
          hexColor: '#333'
        }
      ]
    }
  },
  layout: 'linktree'
}
</script>
