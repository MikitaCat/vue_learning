import Vue from 'vue'
import App from './App.vue'
import '../src/index.css'
// import router from './router'
// import store from './store'

Vue.config.productionTip = false

const app = new Vue({
  // router,
  // store,
  render: h => h(App)
}).$mount('#app')

