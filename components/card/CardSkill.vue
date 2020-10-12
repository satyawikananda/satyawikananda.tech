<template>
  <div class="h-full card-skills shadow-md rounded-lg overflow-hidden relative p-8 flex flex-wrap flex-col items-center justify-center">
    <img :src="svg" :alt="name" class="lg:w-20 h-auto md:w-5/12 mb-5 object-cover object-center mx-auto">
    <p class="text-lg md:text-lg text-center font-medium">
      {{ name }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    svg: {
      required: true,
      type: String
    },
    name: {
      required: true,
      type: String
    }
  }
}
</script>
