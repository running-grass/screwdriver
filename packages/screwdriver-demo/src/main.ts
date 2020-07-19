import Vue from 'vue'
import App from './App.vue'
import 'screwdriver-js/install';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
