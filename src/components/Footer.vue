<script setup lang="ts">
import { useI18n } from "vue-i18n"

const { t } = useI18n()
</script>

<template>
  <footer
    class="absolute bottom-0 bg-elucidator-50 text-elucidator-700 dark:text-dark-repulser-400 w-full p-7 dark:bg-gray-700"
  >
    <p class="text-center">&copy; 2020-{{ new Date().getFullYear() }} Satya Wikananda</p>
    <p class="text-center">{{ t("footer.description-first") }}</p>
    <p class="text-center">{{ t("footer.description-second") }}</p>
  </footer>
</template>
