export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'satyawikananda',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/scss/index.scss'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '@/plugins/vue-lazyload', ssr: false }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // Font awesome config
    '@nuxtjs/fontawesome',
    // Env module
    '@nuxtjs/dotenv',
    // Firebase module
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: process.env.FIREBASE_APIKEY,
          authDomain: 'satyawikanandaportfolio.firebaseapp.com',
          databaseURL: 'https://satyawikanandaportfolio.firebaseio.com',
          projectId: process.env.FIREBASE_PROJECTID,
          storageBucket: 'satyawikanandaportfolio.appspot.com',
          messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
          appId: process.env.FIREBASE_APP_ID,
          measurementId: process.env.FIREBASE_MEASUREMENT_ID
        },
        services: {
          firestore: true,
          messaging: true,
          performance: true,
          analytics: true,
          remoteConfig: true
        }
      }
    ]
  ],

  /*
    Tailwind CSS configuration
  */
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.css'
  },

  /*
    Font awesome configuration
  */
  fontawesome: {
    icons: {
      solid: true,
      brands: true
    }
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa'
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
