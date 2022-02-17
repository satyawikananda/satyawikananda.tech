import { defineConfig } from "vite-plugin-windicss"

export default defineConfig({
  extract: {
    include: ["index.html", "src/**/*.{vue, ts}"],
  },
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // https://github.com/elucidator-project/elucidator-blog-starter/blob/main/windi.config.ts
        elucidator: {
          "50": "#f6f7f9",
          "100": "#edeff2",
          "200": "#e1e4ea",
          "300": "#c3c9d5",
          "400": "#a5adc0",
          "500": "#828da6",
          "600": "#63708c",
          "700": "#4e586e",
          "800": "#3f475a",
          "900": "#313745",
        },
        "dark-repulser": {
          "50": "#f1f9f8",
          "100": "#f1f9f8",
          "200": "#cceae7",
          "300": "#9ad6cf",
          "400": "#63bfb5",
          "500": "#419f94",
          "600": "#347f76",
          "700": "#28625b",
          "800": "#21504a",
          "900": "#1f4c47",
        },
      },
    },
  },
})
