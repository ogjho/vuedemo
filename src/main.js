// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Global from './components/common/global'

Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.URL = location.protocol + '//www.tianqi.com'
Vue.prototype.$baseURL = location.protocol + '//api.tianqi.com'
Vue.prototype.GLOBAL = Global

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
