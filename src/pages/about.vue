<script setup lang="ts">
import { useHead } from "@vueuse/head"
import { useAge } from "@/composables/useAge"
import { skills, sideSkills } from "@/data/skill"
import { useI18n } from "vue-i18n"

const { t } = useI18n()

useHead({
  title: `Satya Wikananda | ${t("about.about")}`,
})
</script>

<template>
  <div
    class="w-11/12 md:w-11/12 lg:w-full h-full mx-auto items-center mb-5 mt-10 shadow bg-light-50 dark:bg-elucidator-800 py-12 rounded-lg"
  >
    <div class="flex flex-col items-center justify-center">
      <img
        class="lg:w-1/4 md:w-2/6 w-3/6 mb-10 w-full h-full object-cover object-center rounded-full"
        alt="hero"
        src="https://avatars1.githubusercontent.com/u/33148052?v=4"
      />
      <div class="text-center lg:w-2/3 w-full">
        <h1 class="font-bold text-dark-repulser-400 sm:text-4xl text-3xl mb-4 text-center">
          {{ t("about.title") }}
        </h1>
        <p class="p-2 mb-8 leading-relaxed text-center text-elucidator-900 dark:text-[#ddd]">
          {{ t("about.description.first") }}
          <span class="font-bold text-dark-repulser-400">I Gusti Ngurah Satya Wikananda</span>,
          {{ t("about.description.second") }}
          <span class="font-bold text-dark-repulser-400">Satya ({{ useAge("2001/04/23") }})</span>.
          {{ t("about.description.third") }}
          <a
            class="hover:underline text-dark-repulser-500"
            href="https://www.smkn1denpasar.sch.id/"
            target="_blank"
            >SMK Negeri 1 Denpasar</a
          >
          {{ t("about.description.forth") }}
          <a
            class="hover:underline text-dark-repulser-500"
            href="https://stiki-indonesia.ac.id/"
            target="_blank"
            >Institut Bisnis dan Teknologi Indonesia (INSTIKI) college</a
          >. {{ t("about.description.fifth") }}
        </p>
        <p class="p-2 leading-relaxed text-center mb-2 text-elucidator-900 dark:text-[#ddd]">
          {{ t("about.socialMedia") }}
        </p>
        <div class="flex flex-row justify-center">
          <a
            href="https://github.com/satyawikananda/"
            target="_blank"
            rel="noreferrer"
            title="satyawikananda's github"
          >
            <uil-github
              class="flex cursor-pointer text-3xl text-elucidator-700 dark:text-dark-repulser-400 mr-3"
            />
          </a>
          <a
            href="https://twitter.com/satya_wikananda/"
            target="_blank"
            rel="noreferrer"
            title="satyawikananda's twitter"
          >
            <uil-twitter
              class="flex cursor-pointer text-3xl text-elucidator-700 dark:text-dark-repulser-400 mr-3"
            />
          </a>
          <a
            href="https://instagram.com/satyawikananda/"
            target="_blank"
            rel="noreferrer"
            title="satyawikananda's instagram"
          >
            <uil-instagram
              class="flex cursor-pointer text-3xl text-elucidator-700 dark:text-dark-repulser-400 mr-3"
            />
          </a>
          <a
            href="https://t.me/aytas23/"
            target="_blank"
            rel="noreferrer"
            title="satyawikananda's telegram"
          >
            <uil-telegram
              class="flex cursor-pointer text-3xl text-elucidator-700 dark:text-dark-repulser-400 mr-3"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
  <div
    class="w-11/12 md:w-11/12 lg:w-full h-full mx-auto mb-10 shadow bg-light-50 dark:bg-elucidator-800 py-12 p-8 rounded-lg"
  >
    <h1 class="text-dark-repulser-500 font-bold text-xl sm:text-3xl">{{ t("about.skill.title") }}</h1>
    <span class="text-lg text-dark-repulser-500 mt-5 font-semibold">{{
      t("about.skill.main")
    }}</span>
    <div class="inline-grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-5 mb-5 gap-10">
      <div
        v-for="(skill, i) in skills"
        :key="i"
        class="shadow bg-light-300 dark:bg-elucidator-700 rounded p-5 flex flex-col items-center main-skills"
      >
        <div v-html="skill.svg" />
        <p class="text-center text-dark-repulser-700 dark:text-[#ddd] font-medium mt-2">
          {{ skill.name }}
        </p>
      </div>
    </div>
    <span class="text-lg text-dark-repulser-500 mt-5 font-semibold">{{
      t("about.skill.tools")
    }}</span>
    <div class="inline-grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-5 gap-10">
      <div
        v-for="(sideSkill, i) in sideSkills"
        :key="i"
        class="shadow bg-light-300 dark:bg-elucidator-700 rounded p-5 flex flex-col items-center side-skills"
      >
        <div v-html="sideSkill.svg" />
        <p class="text-center text-dark-repulser-700 dark:text-[#ddd] font-medium mt-2">
          {{ sideSkill.name }}
        </p>
      </div>
    </div>
  </div>
</template>
