<template>
  <div class="max-w-full m-auto">
    <section class="text-white body-font">
      <div class="container mx-auto flex py-8 items-center justify-center flex-col">
        <img class="lg:w-1/4 md:w-2/6 w-3/6 mb-10 object-cover object-center rounded-full" alt="hero" src="https://avatars1.githubusercontent.com/u/33148052?v=4">
        <div class="text-center lg:w-2/3 w-full">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-bold" :style="{ color: '#ff8906' }">
            Hi, Satya Wikananda here 👋
          </h1>
          <p class="mb-8 leading-relaxed">
            Hello there, my full name is <span class="font-bold" :style="{ color: '#ff8906' }">I Gusti Ngurah Satya Wikananda</span>, and people who's know me call me <span class="font-bold" :style="{ color: '#ff8906' }">Satya (19)</span>. For now, I live in Denpasar, Bali and I am working at software house based on Bali as a Web developer. Wanna know about me? click this button below 😊
          </p>
          <div class="flex justify-center">
            <nuxt-link to="/about">
              <button class="bg-transparent btn-about hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                About me
              </button>
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Homepage',
  head: {
    title: 'Satya Wikananda | Home'
  }
}
</script>
