import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

Vue.config.productionTip = false;

const Login = { template: '<div>Login page</div>' };
const NotFound = { template: '<div>Not found</div>' };

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: App },
    { path: '/login', component: Login },
    { path: '*', component: NotFound }
  ]
});

new Vue({
  router,
  render: h => h({ template: '<router-view></router-view>' })
}).$mount('#app');
