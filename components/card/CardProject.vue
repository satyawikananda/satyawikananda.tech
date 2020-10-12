<template>
  <div class="h-full card-skills shadow-md rounded-lg overflow-hidden relative p-8 flex flex-wrap flex-col items-center justify-center">
    <img :src="image" :alt="title" class="lg:h-48 md:h-36 w-full object-cover rounded-md mb-4">
    <p class="text-lg md:text-lg text-center font-medium mb-2" :style="{ color: '#ff8906' }">
      {{ title }}
    </p>
    <p class="text-base text-center font-light mb-4">
      {{ description }}
    </p>
    <p class="text-base text-center font-light mb-4">
      {{ techStack }}
    </p>
    <div class="flex flex-wrap items-center">
      <social-media :icons="['fab', 'github']" :link="github" />
      <a :href="url" class="underline ml-3">Demo</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      required: true,
      type: String
    },
    title: {
      required: true,
      type: String
    },
    description: {
      required: true,
      type: String
    },
    techStack: {
      required: true,
      type: String
    },
    github: {
      required: true,
      type: String
    },
    url: {
      required: true,
      type: String
    }
  }
}
</script>
