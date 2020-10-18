<template>
  <!-- component -->
  <div class="w-full">
    <!-- <section id="bottom-navigation" class="md:hidden block fixed inset-x-0 bottom-0 z-10 bg-white shadow"> // if shown only tablet/mobile-->
    <section id="bottom-navigation" class="md:hidden block fixed inset-x-0 bottom-0 z-10 bg-white shadow">
      <div id="tabs" class="flex justify-between">
        <nuxt-link to="/" class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
          <font-awesome-icon :icon="['fas', 'home']" class="inline-block mb-1" />
          <span class="tab tab-home block text-xs">Home</span>
        </nuxt-link>
        <nuxt-link to="/about" class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
          <font-awesome-icon :icon="['fas', 'address-card']" class="inline-block mb-1" />
          <span class="tab tab-home block text-xs">About me</span>
        </nuxt-link>
        <nuxt-link to="/accomplishments" class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
          <font-awesome-icon :icon="['fas', 'project-diagram']" class="inline-block mb-1" />
          <span class="tab tab-home block text-xs">Accomplishments</span>
        </nuxt-link>
      </div>
    </section>
  </div>
</template>
