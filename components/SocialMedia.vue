<template>
  <a :href="link" target="_blank">
    <button class="inline-flex items-center border-0 py-1 px-3 focus:outline-none rounded text-3xl mt-4 md:mt-0">
      <font-awesome-icon :icon="icons" />
    </button>
  </a>
</template>
<script>
export default {
  props: {
    icons: {
      type: Array,
      default: () => []
    },
    link: {
      type: String,
      required: true
    }
  }
}
</script>
