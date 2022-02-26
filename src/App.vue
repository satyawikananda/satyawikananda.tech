<script setup lang="ts">
import { onMounted } from "vue"
import { RouterView } from "vue-router"

onMounted(() => {
  if (window.localStorage) {
    const locale = localStorage.getItem("locale")
    if (locale == "en-US") {
      localStorage.setItem("locale", "en")
    }
  }
})
</script>

<template>
  <div class="min-h-100vh overflow-hidden block relative pb-30 mx-auto flex flex-col">
    <Navbar />
    <main class="mx-auto mt-4 min-h-prose w-full lg:max-w-screen-lg">
      <router-view :key="$route.path" />
    </main>
    <Footer />
  </div>
</template>
