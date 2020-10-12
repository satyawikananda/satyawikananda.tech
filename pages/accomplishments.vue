<template>
  <div class="container">
    <section class="text-white body-font">
      <div class="container mx-auto flex py-2 py-12 items-center justify-center flex-col">
        <div class="flex flex-wrap justify-center">
          <div class="p-4 lg:w-full">
            <div class="h-full card-about shadow-md px-8 pt-16 pb-24 rounded-lg overflow-hidden relative">
              <h2 class="text-left title-project title-font text-3xl font-bold py-2 mb-4">
                My Projects
              </h2>
              <p class="leading-relaxed">
                There is some projects i ever created and projects open source are included
              </p>
              <div class="flex flex-wrap">
                <!-- <div v-for="(item, i) in datas" :key="i" class="lg:w-2/4 md:w-1/2 p-4 w-full">
                  <card-skill
                    :title="item.name"
                    :image="item.image"
                    :description="item.description"
                    :tech-stack="item.techStack"
                    :github="item.github"
                    :url="item.url"
                  />
                </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// import CardSkill from '@/components/card/CardSkill.vue'

export default {
  name: 'Accomplishments',
  // components: {
  //   'card-skill': CardSkill
  // },
  async asyncData ({ app, params, error }) {
    const docRef = app.$fireStore.collection('projects')
    try {
      await docRef.onSnapshot((res) => {
        res.forEach((doc) => {
          const data = doc.data()
          const techStack = data.tech_stack.join(', ')
          return { data, techStack }
        })
      })
    } catch (e) {
      throw new Error(e)
    }
  },
  head: {
    title: 'Satya Wikananda | Accomplishments'
  }
}
</script>

<style lang="scss">
  .title-project {
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
