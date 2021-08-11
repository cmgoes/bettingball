import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './quasar'

import '@/assets/style.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  beforeCreate() {
    this.$q.dark.set(true);
  },
  render: h => h(App)
}).$mount('#app')
