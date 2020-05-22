import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';

Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);
import App from './App.vue'
import 'leaflet/dist/leaflet.css';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
