// index.js로 이름 지은이유는  sub router를 더 만들 수 있다는 의도도 있고
// import할때 따로 index.js라는 이름을 쓰지 않고 /router 이라고 넣어도
// 그 안의 index.js를 가져오기 때문
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home';
import Login from '../components/Login';
import NotFound from '../components/NotFound';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '*', component: NotFound }
  ]
});

export default router;
