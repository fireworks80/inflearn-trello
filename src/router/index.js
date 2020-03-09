// index.js로 이름 지은이유는  sub router를 더 만들 수 있다는 의도도 있고
// import할때 따로 index.js라는 이름을 쓰지 않고 /router 이라고 넣어도
// 그 안의 index.js를 가져오기 때문
import Vue from 'vue';
import App from '../App.vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const Login = { template: '<div>Login page</div>' };
const Notfound = { template: '<div>404 not found</div>' };

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: App },
    { path: '/login', component: Login },
    { path: '*', component: Notfound }
  ]
});

export default router;
