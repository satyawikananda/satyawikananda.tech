<template>
  <div class="max-w-full m-auto">
    <section class="text-white body-font">
      <div class="container mx-auto flex py-12 items-center justify-center flex-col">
        <div class="flex flex-wrap justify-center">
          <div class="p-4 lg:w-full">
            <div class="h-full card-about shadow-md px-8 pt-16 pb-24 rounded-lg overflow-hidden relative">
              <h2 class="text-left title-project title-font text-3xl font-bold py-2 mb-4">
                My Projects
              </h2>
              <p class="leading-relaxed sm:text-center md:text-left">
                There is some projects i ever created and projects open source are included
              </p>
              <div class="flex flex-wrap justify-center">
                <div v-for="(item, i) in data" :key="i" class="lg:w-2/4 md:w-1/2 p-1 mt-4 w-full">
                  <card-project
                    :title="item.name"
                    :image="item.image"
                    :description="item.description"
                    :tech-stack="item.tech_stack.join(', ')"
                    :github="item.github"
                    :url="item.url"
                  />
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
import CardProject from '@/components/card/CardProject.vue'

export default {
  name: 'Accomplishments',
  components: {
    'card-project': CardProject
  },
  data () {
    return {
      data: []
    }
  },
  async mounted () {
    const docRef = this.$fireStore.collection('projects')
    try {
      await docRef.onSnapshot((res) => {
        res.forEach((doc) => {
          const data = doc.data()
          this.data.push(data)
        })
      })
    } catch (e) {
      throw new Error(e)
    }
  },
  head: {
    title: 'Satya Wikananda | Accomplishments',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'This is my accomplishments stuff, you can see my projects and anything else here'
      }
    ]
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
