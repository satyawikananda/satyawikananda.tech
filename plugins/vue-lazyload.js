import Vue from 'vue'
import VueLazyLoad from 'vue-lazyload'

import spinner from '../assets/svg/loading.svg'

Vue.use(VueLazyLoad, {
  preload: 1,
  loading: spinner,
  attempt: 1
})
