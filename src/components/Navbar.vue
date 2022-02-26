<script setup lang="ts">
import { ref, watchEffect } from "vue"
import { useI18n } from "vue-i18n"
import { 
  useToggle, 
  onKeyStroke, 
  onClickOutside, 
  useStorage 
} from "@vueuse/core"
import { RouterLink, useRouter } from "vue-router"
import { isDark, toggleDark } from "@/composables/dark"
interface NavbarMenu {
  name: string
  to: string
}

// https://github.com/elucidator-project/elucidator-blog-starter/blob/main/src/components/Navigation/Navbar.vue
const [open, setOpen] = useToggle()
const navBottom = ref(null)

onKeyStroke("Escape", () => {
  open.value = false
})

onClickOutside(navBottom, (e) => {
  open.value = false
})

// Hide navbottom after page has been changed
const router = useRouter()
router.afterEach(() => {
  open.value = false
})

// https://github.com/antfu/vitesse/blob/main/src/components/Footer.vue#L6
const { t, availableLocales, locale } = useI18n()

const toggleLocales = () => {
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}
const state = useStorage("locale", locale.value)

watchEffect(() => {
  state.value = locale.value
})

const dataNavbar: NavbarMenu[] = [
  {
    name: "home",
    to: "/",
  },
  {
    name: "about",
    to: "/about",
  },
  {
    name: "project",
    to: "/projects",
  },
]
</script>

<template>
  <header class="shadow">
    <nav
      class="z-10 text-dark-repulser-500 dark:text-dark-repulser-400 relative h-20 px-4"
      role="navigation"
      aria-label="navbar"
    >
      <div class="max-w-screen-lg mx-auto h-full flex flex-row items-center space-x-4">
        <div class="logo flex-1">
          <router-link to="/" class="font-bold lg:tracking-wide text-2xl"
            >Satya Wikananda</router-link
          >
        </div>
        <div class="flex flex-wrap items-center">
          <router-link
            v-for="(data, i) in dataNavbar"
            :key="i"
            class="mr-5 py-1.5 px-3 rounded-md text-elucidator-700 dark:text-dark-repulser-400 dark:hover:text-elucidator-300 hover:text-gray-900 hidden md:block lg:block"
            :to="data.to"
            active-class="bg-gray-200 dark:bg-gray-500 dark:text-dark-repulser-200"
            >{{ t("navbar." + data.name) }}</router-link
          >
          <carbon-sun
            v-if="isDark"
            class="mr-5 cursor-pointer text-elucidator-700 dark:text-dark-repulser-400 toggle-theme"
            tabindex="0"
            @click="toggleDark"
            title="Toggle light mode"
          />
          <carbon-moon
            v-else
            class="mr-5 cursor-pointer text-elucidator-700 dark:text-dark-repulser-400 toggle-theme"
            tabindex="0"
            @click="toggleDark"
            title="Toggle dark mode"
          />
          <carbon-language
            class="mr-5 cursor-pointer text-elucidator-700 dark:text-dark-repulser-400"
            tabindex="0"
            @click="toggleLocales"
            :title="locale == 'id' ? 'Indonesia' : 'English'"
          />
          <a
            href="https://github.com/satyawikananda/"
            target="_blank"
            rel="noreferrer"
            title="repository github"
          >
            <uil-github
              class="flex cursor-pointer text-elucidator-700 dark:text-dark-repulser-400"
            />
          </a>
          <carbon-menu
            class="cursor-pointer text-elucidator-700 dark:text-dark-repulser-400 ml-5 sm:block lg:hidden"
            tabindex="0"
            @click="setOpen"
          />
        </div>
      </div>
    </nav>
  </header>

  <nav
    v-if="open"
    ref="navBottom"
    class="py-4 px-8 bg-elucidator-100 dark:bg-elucidator-600 fixed bottom-0 z-99 inset-x-0 rounded-t-lg shadow-lg overflow-x-hidden overflow-y-hidden lg:hidden"
    :class="open ? 'block translate-y-0' : 'hidden translate-y-full'"
  >
    <ul class="flex flex-col">
      <router-link
        v-for="(data, i) in dataNavbar"
        :to="data.to"
        class="bg-elucidator-50 dark:bg-elucidator-500 p-2 mb-2 rounded-md"
      >
        <li class="flex flex-row flex-wrap items-center dark:text-elucidator-100">
          {{ t("navbar." + data.name) }}
        </li>
      </router-link>
    </ul>
  </nav>

  <div
    v-if="open"
    class="fixed inset-0 z-40 opacity-60 bg-dark-200"
    :class="open ? 'lg:hidden' : ''"
  />
</template>
