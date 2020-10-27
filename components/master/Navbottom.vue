<template>
  <div class="w-full">
    <section id="bottom-navigation" class="md:hidden block fixed inset-x-0 bottom-0 z-10 bg-gray-700">
      <div id="tabs" class="flex justify-between">
        <nuxt-link to="/" class="w-full justify-center inline-block text-center pt-2 pb-1">
          <font-awesome-icon :icon="['fas', 'home']" class="inline-block mb-1 text-white" />
          <span class="tab tab-home block text-xs text-white">Home</span>
        </nuxt-link>
        <nuxt-link to="/about" class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
          <font-awesome-icon :icon="['fas', 'address-card']" class="inline-block mb-1 text-white" />
          <span class="tab tab-home block text-xs text-white">About me</span>
        </nuxt-link>
        <nuxt-link to="/accomplishments" class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
          <font-awesome-icon :icon="['fas', 'project-diagram']" class="inline-block mb-1 text-white" />
          <span class="tab tab-home block text-xs text-white">Accomplishments</span>
        </nuxt-link>
        <nuxt-link to="/covid" class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
          <font-awesome-icon :icon="['fas', 'virus']" class="inline-block mb-1 text-white" />
          <span class="tab tab-home block text-xs text-white">Covid info</span>
        </nuxt-link>
      </div>
    </section>
  </div>
</template>
