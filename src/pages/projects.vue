<script setup lang="ts">
import { useI18n } from "vue-i18n"
import { Head } from "@vueuse/head"
import { ref } from "vue"
import { useSupabase } from "@/composables/useSupabase"

const projects = ref()
const { t, locale } = useI18n()

useSupabase("projects").then(({ data, error }) => {
  if (!error) {
    projects.value = data
  } else {
    console.error(error)
  }
})
</script>

<template>
  <Head>
    <title>Satya Wikananda | {{ t("project.title") }}</title>
    <meta name="description" content="Proyek-proyek dari Satya Wikananda" />
  </Head>
  <div
    class="inline-grid w-full h-full mb-10 mt-10 shadow bg-light-50 dark:bg-elucidator-800 py-12 p-8 rounded-lg"
  >
    <h1 class="text-dark-repulser-500 font-bold text-3xl">{{ t("project.title") }}</h1>
    <div class="inline-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-5 gap-5">
      <div
        v-for="(project, i) in projects"
        :key="i"
        class="shadow bg-light-300 dark:bg-elucidator-700 rounded p-5 flex flex-col items-center projects"
      >
        <div class="flex flex-col justify-center items-center">
          <img
            v-lazy="{
              src: project?.image,
              loading: '/src/assets/loading.svg',
            }"
            :alt="'image-' + project?.name"
            class="w-full rounded p-2"
          />
        </div>
        <span class="text-dark-repulser-400 font-medium mt-2 mb-2 text-lg">{{
          project?.name
        }}</span>
        <span
          v-if="locale == 'id'"
          class="mt-2 mb-2 text-elucidator-900 dark:text-light-100 text-center text-sm"
          >{{ project["description-id"] }}</span
        >
        <span
          v-if="locale == 'en'"
          class="mt-2 mb-2 text-elucidator-900 dark:text-light-100 text-center text-sm"
          >{{ project["description"] }}</span
        >
        <span class="mt-2 mb-2 text-dark-repulser-400 text-center">{{
          project?.tech_stack.join(", ")
        }}</span>
        <div class="flex flex-row justify-center items-center">
          <a
            :href="project?.github"
            target="_blank"
            rel="noreferrer"
            :title="'github of ' + project?.name"
            class="mr-3"
          >
            <uil-github
              class="text-2xl flex cursor-pointer text-elucidator-700 dark:text-dark-repulser-400"
            />
          </a>
          <a
            v-if="project?.url"
            :href="project?.url"
            class="text-white hover:underline"
            target="_blank"
            >Demo</a
          >
        </div>
      </div>
    </div>
  </div>
</template>
