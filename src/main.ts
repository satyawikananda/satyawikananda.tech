import { createApp } from "vue"
import { createI18n } from "vue-i18n"
import { createRouter, createWebHistory } from "vue-router"
import VueLazyLoad from "vue3-lazyload"
import { createHead } from "@vueuse/head"
import nProgress from "nprogress"
import App from "@/App.vue"
import routes from "~pages"
// css
import "virtual:windi.css"
import "@/assets/style.css"

// lang i18n

import id from "@/locales/id.json"
import en from "@/locales/en.json"

const i18n = createI18n({
  legacy: false,
  locale: "en",
  messages: {
    en,
    id,
  },
})

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach(() => {
  nProgress.start()
})

router.afterEach(() => {
  nProgress.done()
})

const app = createApp(App)

app.use(router)
app.use(VueLazyLoad, {})
app.use(createHead())
app.use(i18n)

app.mount("#app")
