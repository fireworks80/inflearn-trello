import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

const Login = { template: '<div>Login</div>' };

//  routing map
const routes = {
  '/': App,
  '/login': Login
};

new Vue({
  computed: {
    VueComponent() {
      // 경로에 따라 화면을 다르게 그린다.
      return (
        routes[location.pathname] || {
          template: '<div>404 not found</div>'
        }
      );
    }
  },
  render(h) {
    // 화면을 그린다.
    return h(this.VueComponent);
  }
}).$mount('#app');
