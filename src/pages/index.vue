<script setup lang="ts">
import { Head } from "@vueuse/head"
import { useI18n } from "vue-i18n"
import { useAge } from "@/composables/useAge"

const { t } = useI18n()
</script>

<template>
  <Head>
    <title>Satya Wikananda | {{ t("navbar.home") }}</title>
    <meta name="description" :content="t('home.meta')" />
  </Head>
  <main class="m-auto">
    <div class="mx-auto flex mt-10 mb-10 py-8 items-center justify-center flex-col">
      <img
        class="lg:w-1/4 md:w-2/6 w-3/6 mb-10 w-full h-full object-cover object-center rounded-full"
        alt="hero"
        src="https://avatars1.githubusercontent.com/u/33148052?v=4"
      />
      <div class="text-center w-full w-3/4 lg:w-3/5">
        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-bold text-dark-repulser-500">
          {{ t("home.title") }}
        </h1>
        <p class="mb-8 leading-relaxed text-elucidator-900 dark:text-[#ddd]">
          {{ t("home.description.first") }}
          <span class="font-bold text-dark-repulser-500">I Gusti Ngurah Satya Wikananda</span>,
          {{ t("home.description.second") }}
          <span class="font-bold text-dark-repulser-500">Satya ({{ useAge("2001/04/23") }})</span>.
          {{ t("home.description.third") }}
        </p>
        <div class="flex justify-center">
          <router-link to="/about">
            <button
              class="bg-transparent border-dark-repulser-500 transition-all hover:bg-dark-repulser-500 hover:text-elucidator-100 text-elucidator-900 dark:text-white py-2 px-4 border rounded"
            >
              {{ t("home.button") }}
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </main>
</template>
