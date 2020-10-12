<template>
  <div class="container">
    <section class="text-white body-font">
      <div class="container mx-auto flex py-2 py-12 items-center justify-center flex-col">
        <div class="flex flex-wrap justify-center">
          <div class="p-4 lg:w-full">
            <div class="h-full card-about shadow-md px-8 pt-16 pb-20 rounded-lg overflow-hidden relative">
              <img class="lg:w-1/4 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded-full mx-auto" alt="hero" src="https://avatars1.githubusercontent.com/u/33148052?v=4">
              <h1 class="title-font sm:text-4xl text-3xl mb-4 font-bold text-center" :style="{ color: '#ff8906' }">
                Hi, Satya Wikananda here 👋
              </h1>
              <p class="mb-8 leading-relaxed text-center">
                Hello there, my full name is <span class="font-bold" :style="{ color: '#ff8906' }">I Gusti Ngurah Satya Wikananda</span>, and people who's know me call me <span class="font-bold" :style="{ color: '#ff8906' }">Satya (19)</span>. For now, I live in Denpasar, Bali and I am working at software house based on Bali as a Web developer. I am a vocational high school graduates in <a class="hover:underline" :style="{ color: '#ff8906' }" href="https://www.smkn1denpasar.sch.id/" target="_blank">SMK Negeri 1 Denpasar</a> with a major in software engineering. I Love make something that useful for the others like make an application website and i am prefer in Frontend website development using Vue Js or Nuxt Js, and until now, i am still learning, because everyday the technologies is continues to develop.
              </p>
              <p class="leading-relaxed text-center mb-2">
                My social media account, lets connect with me :
              </p>
              <div class="flex flex-row container justify-center">
                <social-media :icons="['fab', 'github']" link="https://github.com/satyawikananda" />
                <social-media :icons="['fab', 'instagram']" link="https://instagram.com/satyawikananda" />
                <social-media :icons="['fab', 'facebook']" link="https://facebook.com/satyawikananda23" />
                <social-media :icons="['fab', 'telegram']" link="https://t.me/satyawikananda" />
                <social-media :icons="['fab', 'twitter']" link="https://twitter.com/satya_wikananda" />
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-wrap justify-center">
          <div class="p-4 lg:w-full">
            <div class="h-full card-about shadow-md px-8 pt-16 pb-24 rounded-lg overflow-hidden relative">
              <h2 class="text-left title-skills title-font text-3xl font-bold py-2 mb-8">
                My Skills and knowledge based
              </h2>
              <h5 class="mb-4 ml-4 title-font text-lg font-medium">
                Languages
              </h5>
              <!-- Languages list -->
              <div class="flex flex-wrap">
                <div v-for="data in skills.languages" :key="data.id" class="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <card-skill :svg="data.svg" :name="data.name" />
                </div>
              </div>
              <!-- End languages -->
              <!-- Frontend list -->
              <h5 class="mb-4 ml-4 title-font text-lg font-medium">
                Frontend
              </h5>
              <div class="flex flex-wrap">
                <div v-for="data in skills.frontend" :key="data.id" class="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <card-skill :svg="data.svg" :name="data.name" />
                </div>
              </div>
              <!-- End frontend -->
              <!-- Backend list -->
              <h5 class="mb-4 ml-4 title-font text-lg font-medium">
                Backend
              </h5>
              <div class="flex flex-wrap">
                <div v-for="data in skills.backend" :key="data.id" class="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <card-skill :svg="data.svg" :name="data.name" />
                </div>
              </div>
              <!-- End backend -->
              <!-- Tools list -->
              <h5 class="mb-4 ml-4 title-font text-lg font-medium">
                Tools
              </h5>
              <div class="flex flex-wrap">
                <div v-for="data in skills.tools" :key="data.id" class="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <card-skill :svg="data.svg" :name="data.name" />
                </div>
              </div>
              <!-- End tools -->
              <!-- Tools list -->
              <h5 class="mb-4 ml-4 title-font text-lg font-medium">
                Infrastructures
              </h5>
              <div class="flex flex-wrap">
                <div v-for="data in skills.infrastructures" :key="data.id" class="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <card-skill :svg="data.svg" :name="data.name" />
                </div>
              </div>
              <!-- End tools -->
              <!-- rarely list -->
              <h5 class="mb-4 ml-4 title-font text-lg font-medium">
                Tried but rarely
              </h5>
              <div class="flex flex-wrap">
                <div v-for="data in skills.rarely" :key="data.id" class="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <card-skill :svg="data.svg" :name="data.name" />
                </div>
              </div>
              <!-- End rarely -->
              <!-- current list -->
              <h5 class="mb-4 ml-4 title-font text-lg font-medium">
                Currently learning
              </h5>
              <div class="flex flex-wrap">
                <div v-for="data in skills.current" :key="data.id" class="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <card-skill :svg="data.svg" :name="data.name" />
                </div>
              </div>
              <!-- End current -->
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import CardSkill from '@/components/card/CardSkill.vue'

const getSkills = () => import('~/static/skills.json').then(m => m.default)

export default {
  name: 'Aboutme',
  components: {
    'card-skill': CardSkill
  },
  async asyncData ({ req }) {
    const skills = await getSkills()
    return { skills }
  },
  head: {
    title: 'Satya Wikananda | About me'
  }
}
</script>

<style lang="scss">
  .title-skills {
    color: #ff8906;
     &::after {
      content: '';
      display: block;
      width: 0;
      height: 3px;
      background-color: #ff8906;
      width: 30%;
    }
  }
</style>
