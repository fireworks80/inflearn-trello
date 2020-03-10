import Vue from 'vue';
import App from './App.vue';
// 하위 index.js를 가져 온다
import router from './router';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
