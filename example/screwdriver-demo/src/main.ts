import Vue from 'vue'
import App from './App.vue'
import * as S from 'screwdriver-js';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
