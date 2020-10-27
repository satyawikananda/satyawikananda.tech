<template>
  <div class="max-w-full m-auto">
    <section class="text-white body-font">
      <div class="container mx-auto flex py-2 py-12 items-center justify-center flex-col">
        <div class="flex flex-wrap justify-center">
          <div class="p-4 lg:w-full">
            <div class="h-full card-about shadow-md px-8 pt-16 pb-24 rounded-lg overflow-hidden relative">
              <h2 class="text-left title-covid title-font text-3xl font-bold py-2 mb-4">
                Indonesia Covid Information
              </h2>
              <p class="leading-relaxed text-center mt-5">
                Last Updated: {{ new Date(data.lastUpdate) }}
              </p>
              <div class="flex flex-wrap justify-center">
                <div class="lg:w-2/4 md:w-1/2 p-1 mt-4 w-full">
                  <div class="h-full card-skills shadow-md rounded-lg overflow-hidden relative p-8 flex flex-wrap flex-col items-center justify-center">
                    <p class="text-lg md:text-lg text-center font-bold orange">
                      {{ data.confirmed.value.toLocaleString('id-ID') }}
                    </p>
                    <p class="text-lg md:text-lg text-center font-bold orange">
                      Confirmed
                    </p>
                  </div>
                </div>
                <div class="lg:w-2/4 md:w-1/2 p-1 mt-4 w-full">
                  <div class="h-full card-skills shadow-md rounded-lg overflow-hidden relative p-8 flex flex-wrap flex-col items-center justify-center">
                    <p class="text-lg md:text-lg text-center font-bold orange">
                      {{ data.recovered.value.toLocaleString('id-ID') }}
                    </p>
                    <p class="text-lg md:text-lg text-center font-bold orange">
                      Recovered
                    </p>
                  </div>
                </div>
                <div class="lg:w-2/4 md:w-1/2 p-1 mt-4 w-full">
                  <div class="h-full card-skills shadow-md rounded-lg overflow-hidden relative p-8 flex flex-wrap flex-col items-center justify-center">
                    <p class="text-lg md:text-lg text-center font-bold orange">
                      {{ data.deaths.value.toLocaleString('id-ID') }}
                    </p>
                    <p class="text-lg md:text-lg text-center font-bold orange">
                      Deaths
                    </p>
                  </div>
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
  async asyncData () {
    const data = await fetch('https://covid19.mathdro.id/api/countries/indonesia')
    const response = await data.json()
    return {
      data: response
    }
  },
  head: {
    title: 'Satya Wikananda | Covid info',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Data covid information in Indonesia'
      }
    ]
  }
}
</script>

<style lang="scss">
  .orange {
    color: #ff8906;
  }
  .title-covid {
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
