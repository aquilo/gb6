import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import store from './store/store'

import App from './App.vue'
import Vuex from 'vuex';
Vue.use(Vuex);

// import GbZh from './assets/GbZh.js';
// Vue.use(GbZh);


Vue.config.productionTip = false;



new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
