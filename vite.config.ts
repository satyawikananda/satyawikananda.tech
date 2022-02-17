import { fileURLToPath, URL } from "url"
import { defineConfig } from "vite"
import { resolve } from "path"
import vue from "@vitejs/plugin-vue"
import Components from "unplugin-vue-components/vite"
import Icons from "unplugin-icons/vite"
import IconsResolver from "unplugin-icons/resolver"
import WindiCss from "vite-plugin-windicss"
import Pages from "vite-plugin-pages"
import vueI18n from "@intlify/vite-plugin-vue-i18n"

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  optimizeDeps: {
    include: ["vue", "@vueuse/core"],
  },
  plugins: [
    vue({
      include: [/\.vue$/],
    }),
    Pages({
      dirs: [{ dir: "src/pages", baseRoute: "" }],
      extendRoute(route) {
        route.meta = { transition: 'slide-left' }
      }
    }),
    Components({
      extensions: ["vue"],
      resolvers: [
        IconsResolver({
          prefix: "",
        }),
      ],
      dts: true,
    }),
    Icons({
      compiler: "vue3",
    }),
    WindiCss(),
    vueI18n({
      compositionOnly: true,
      runtimeOnly: true,
      include: [resolve(process.cwd(), "src/locales/**")],
    }),
  ],
})
